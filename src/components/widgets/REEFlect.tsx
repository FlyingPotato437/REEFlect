import React, { useState, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import * as tf from '@tensorflow/tfjs';

interface DataPoint {
  [key: string]: number | string;
}

interface Trends {
  [key: string]: string;
}

interface Model {
  tfModel: tf.LayersModel;
  min: { x: tf.Tensor, y: tf.Tensor };
  max: { x: tf.Tensor, y: tf.Tensor };
}

export const REEFlect: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [trends, setTrends] = useState<Trends>({});
  const [predictions, setPredictions] = useState<DataPoint[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedXAxis, setSelectedXAxis] = useState<string>('');
  const [selectedTarget, setSelectedTarget] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('dense');
  const [model, setModel] = useState<Model | null>(null);
  const [modelAccuracy, setModelAccuracy] = useState<number | null>(null);
  const [isTraining, setIsTraining] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userInputs, setUserInputs] = useState<{ [key: string]: number }>({});

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const text = e.target?.result as string;
        const parsedData = parseCSV(text);
        setData(parsedData);
        analyzeTrends(parsedData);
        setSelectedXAxis(Object.keys(parsedData[0])[0]);
      };
      reader.readAsText(file);
    }
  }, []);

  const parseCSV = (text: string): DataPoint[] => {
    const lines = text.split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
      const values = line.split(',');
      const entry: DataPoint = {};
      headers.forEach((header, index) => {
        entry[header.trim()] = isNaN(Number(values[index])) ? values[index] : parseFloat(values[index]);
      });
      return entry;
    });
  };

  const analyzeTrends = (data: DataPoint[]): void => {
    const numericalParameters = Object.keys(data[0]).filter(key => typeof data[0][key] === 'number');
    const trends: Trends = {};
    numericalParameters.forEach(param => {
      const values = data.map(entry => entry[param] as number);
      const trend = values[values.length - 1] - values[0];
      trends[param] = trend > 0 ? 'Increasing' : trend < 0 ? 'Decreasing' : 'Stable';
    });
    setTrends(trends);
  };

  const preprocessData = (data: DataPoint[], features: string[], target: string) => {
    const xValues = data.map(entry => features.filter(f => f !== target).map(feature => entry[feature] as number));
    const yValues = data.map(entry => entry[target] as number);
    const xTensor = tf.tensor2d(xValues);
    const yTensor = tf.tensor1d(yValues);
    const xMin = xTensor.min(0);
    const xMax = xTensor.max(0);
    const yMin = yTensor.min();
    const yMax = yTensor.max();
    const normalizedX = xTensor.sub(xMin).div(xMax.sub(xMin));
    const normalizedY = yTensor.sub(yMin).div(yMax.sub(yMin));
    return { normalizedX, normalizedY, xMin, xMax, yMin, yMax };
  };

  const createModel = (inputShape: number): tf.LayersModel => {
    const model = tf.sequential();
    
    switch (selectedModel) {
      case 'dense':
        model.add(tf.layers.dense({ units: 10, inputShape: [inputShape], activation: 'relu' }));
        model.add(tf.layers.dense({ units: 1 }));
        break;
      case 'lstm':
        model.add(tf.layers.lstm({ units: 50, inputShape: [1, inputShape], returnSequences: false }));
        model.add(tf.layers.dense({ units: 1 }));
        break;
      case 'cnn':
        model.add(tf.layers.conv1d({ filters: 32, kernelSize: 3, activation: 'relu', inputShape: [inputShape, 1] }));
        model.add(tf.layers.flatten());
        model.add(tf.layers.dense({ units: 1 }));
        break;
      default:
        throw new Error('Invalid model type');
    }

    model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });
    return model;
  };

  const trainModel = async (): Promise<void> => {
    if (selectedFeatures.length === 0 || !selectedTarget) {
      setError("Please select features and a target for training.");
      return;
    }

    setIsTraining(true);
    setError(null);

    try {
      const { normalizedX, normalizedY, xMin, xMax, yMin, yMax } = preprocessData(data, selectedFeatures, selectedTarget);
      
      const model = createModel(selectedFeatures.length - 1); // Subtract 1 because target is not an input

      let xs: tf.Tensor, ys: tf.Tensor;

      if (selectedModel === 'lstm') {
        xs = normalizedX.expandDims(1);
      } else if (selectedModel === 'cnn') {
        xs = normalizedX.expandDims(-1);
      } else {
        xs = normalizedX;
      }
      ys = normalizedY;

      const history = await model.fit(xs, ys, {
        epochs: 70,
        validationSplit: 0.25,
        callbacks: {
          onEpochEnd: (epoch, logs) => {
            console.log(`Epoch ${epoch}: loss = ${logs?.loss}, val_loss = ${logs?.val_loss}`);
          }
        }
      });

      const accuracy = 1 - (history.history.val_loss[history.history.val_loss.length - 1] as number);
      setModelAccuracy(accuracy);

      setModel({ 
        tfModel: model, 
        min: { x: xMin, y: yMin }, 
        max: { x: xMax, y: yMax } 
      });
    } catch (err) {
      setError(`Error during training: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsTraining(false);
    }
  };

  const handleUserInputChange = (feature: string, value: string) => {
    setUserInputs(prev => ({
      ...prev,
      [feature]: parseFloat(value) || 0
    }));
  };

  const predictFuture = async (): Promise<void> => {
    if (!model || selectedFeatures.length === 0 || !selectedTarget) {
      setError("Please train the model first and provide input for all features.");
      return;
    }

    try {
      const features = selectedFeatures.filter(f => f !== selectedTarget);
      const normalizedInputs = features.map((feature, index) => {
        const value = userInputs[feature] || 0;
        const minValue = (model.min.x.arraySync() as number[])[index];
        const maxValue = (model.max.x.arraySync() as number[])[index];
        return (value - minValue) / (maxValue - minValue);
      });

      const inputTensor = tf.tensor2d([normalizedInputs]);

      let modelInput: tf.Tensor;
      if (selectedModel === 'lstm') {
        modelInput = inputTensor.expandDims(1);
      } else if (selectedModel === 'cnn') {
        modelInput = inputTensor.expandDims(2);
      } else {
        modelInput = inputTensor;
      }

      const prediction = model.tfModel.predict(modelInput) as tf.Tensor;
      const yMin = model.min.y.arraySync() as number;
      const yMax = model.max.y.arraySync() as number;
      const denormalizedPrediction = prediction.mul(yMax - yMin).add(yMin);

      const predictedValue = (await denormalizedPrediction.data())[0];
      
      const newPrediction: DataPoint = {
        ...userInputs,
        [selectedTarget]: predictedValue
      };

      // Add an index for the X-axis
      newPrediction[selectedXAxis] = data.length + predictions.length;

      setPredictions(prev => [...prev, newPrediction]);

    } catch (err) {
      setError(`Error during prediction: ${err instanceof Error ? err.message : String(err)}`);
      console.error(err);
    }
  };

  const exportData = (): void => {
    const exportData = {
      originalData: data,
      predictions: predictions,
      modelAccuracy: modelAccuracy,
      selectedFeatures: selectedFeatures,
      selectedTarget: selectedTarget,
      selectedModel: selectedModel
    };

    const jsonString = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const href = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = href;
    link.download = 'reeflect_export.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleFeature = (feature: string): void => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">REEFlect: Eco-Monitoring AI</h1>
  
      {/* File Upload */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Upload Data</h2>
        <input 
          type="file" 
          onChange={handleFileUpload} 
          accept=".csv"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>
  
      {data.length > 0 && (
        <>
          {/* Trend Analysis */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Trend Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(trends).map(([param, trend]) => (
                <div key={param} className="rounded-lg p-4">
                  <p className="text-lg font-semibold mb-2">{param}</p>
                  <p className={`text-sm ${
                    trend === 'Increasing' ? 'text-green-500' :
                    trend === 'Decreasing' ? 'text-red-500' : 'text-yellow-500'
                  }`}>
                    {trend}
                  </p>
                </div>
              ))}
            </div>
          </div>
  
          {/* CSV Preview */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">CSV Preview</h2>
            <div className="overflow-x-auto rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {Object.keys(data[0]).map(header => (
                      <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.slice(0, 5).map((row, index) => (
                    <tr key={index}>
                      {Object.values(row).map((value, cellIndex) => (
                        <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {typeof value === 'number' ? value.toFixed(2) : value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
  
          {/* Feature Selection */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Select Features for Training</h2>
            <div className="flex flex-wrap gap-4">
              {Object.keys(data[0]).filter(key => typeof data[0][key] === 'number').map(feature => (
                <label key={feature} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => toggleFeature(feature)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2">{feature}</span>
                </label>
              ))}
            </div>
          </div>
  
          {/* X-Axis Selection */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Select X-Axis for Graphs</h2>
            <select
              value={selectedXAxis}
              onChange={(e) => setSelectedXAxis(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              {Object.keys(data[0]).map(feature => (
                <option key={feature} value={feature}>{feature}</option>
              ))}
            </select>
          </div>
  
          {/* Target Selection */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Select Target Feature to Predict</h2>
            <select
              value={selectedTarget}
              onChange={(e) => setSelectedTarget(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Select Target Feature</option>
              {selectedFeatures.map(feature => (
                <option key={feature} value={feature}>{feature}</option>
              ))}
            </select>
          </div>
  
          {/* Model Selection */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Select Model Type</h2>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="dense">Dense Neural Network</option>
              <option value="lstm">LSTM</option>
              <option value="cnn">CNN</option>
            </select>
          </div>
  
          {/* Train Model Button */}
          <div className="mb-6">
            <button
              onClick={trainModel}
              disabled={isTraining || selectedFeatures.length === 0 || !selectedTarget}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              {isTraining ? 'Training...' : 'Train Model'}
            </button>
            {modelAccuracy !== null && (
              <p className="mt-2">Model Accuracy: {(modelAccuracy * 100).toFixed(2)}%</p>
            )}
          </div>
  
          {/* Error Display */}
          {error && <p className="text-red-500 mb-4">{error}</p>}
  
          {/* Prediction Inputs */}
          {model && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Make Prediction</h2>
              {selectedFeatures.filter(feature => feature !== selectedTarget).map(feature => (
                <div key={feature} className="mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {feature}:
                    <input
                      type="number"
                      value={userInputs[feature] || ''}
                      onChange={(e) => handleUserInputChange(feature, e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </label>
                </div>
              ))}
              <button
                onClick={predictFuture}
                className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Predict
              </button>
            </div>
          )}
  
          {/* Prediction Result */}
          {predictions.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Prediction Result</h2>
              <p className="text-lg">
                Predicted {selectedTarget}:{' '}
                <span className="font-bold">
                  {typeof predictions[predictions.length - 1][selectedTarget] === 'number'
                    ? (predictions[predictions.length - 1][selectedTarget] as number).toFixed(4)
                    : predictions[predictions.length - 1][selectedTarget]}
                </span>
              </p>
            </div>
          )}
  
          {/* Predictions Chart */}
          {predictions.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Predictions Chart</h2>
              <div style={{ width: '100%', height: 400 }}>
                <ResponsiveContainer>
                  <LineChart data={[...data, ...predictions]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={selectedXAxis} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey={selectedTarget} 
                      stroke="#8884d8" 
                      strokeWidth={2}
                      dot={{ stroke: '#8884d8', strokeWidth: 2 }}
                    />
                    {predictions.length > 0 && (
                      <Line 
                        type="monotone" 
                        dataKey={selectedTarget} 
                        stroke="#82ca9d" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={{ stroke: '#82ca9d', strokeWidth: 2, r: 4 }}
                        data={predictions}
                      />
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
  
          {/* Feature Graphs */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Feature Graphs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedFeatures.filter(feature => feature !== selectedTarget).map(feature => (
                <div key={feature} className="bg-white shadow-md rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">{feature}</h3>
                  <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={selectedXAxis} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={feature} stroke="#8884d8" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Export Data Button */}
          <div className="mb-6">
            <button
              onClick={exportData}
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Export Results
            </button>
          </div>
        </>
      )}
    </div>
  );
  };