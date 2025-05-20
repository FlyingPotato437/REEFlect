import React from 'react';

interface SimpleTeamProps {
  names: string[];
}

const SimpleTeam: React.FC<SimpleTeamProps> = ({ names }) => (
  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Team Members</h2>
    <ul className="list-disc pl-5">
      {names.map((name, index) => (
        <li key={index} className="text-lg text-gray-700 dark:text-gray-300">
          {name}
        </li>
      ))}
    </ul>
  </div>
);

export default SimpleTeam;