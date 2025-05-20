"use client";
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export interface FormProps {
  title?: string;
  description?: string;
  containerClass?: string;
  btnPosition?: 'left' | 'center' | 'right';
}

const Form: React.FC<FormProps> = ({
  title,
  description,
  containerClass,
  btnPosition = 'left',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitting form data:', formData);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form after successful submission
      } else {
        const errorData = await response.json();
        alert(`Failed to send email: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the email. Please try again.');
    }
  };

  const getButtonClass = () => {
    const baseClass = "mt-4 rounded-md bg-blue-500 py-2 text-white px-4";
    const positionClass = btnPosition === 'center' 
      ? 'mx-auto block' 
      : btnPosition === 'right' 
        ? 'ml-auto block' 
        : '';
    return `${baseClass} ${positionClass}`;
  };

  return (
    <form id="contactForm" className={twMerge('', containerClass)} onSubmit={handleSubmit}>
      {title && <h2 className={`${description ? 'mb-2' : 'mb-4'} text-2xl font-bold`}>{title}</h2>}
      {description && <p className="mb-4">{description}</p>}
      <div className="mb-6">
        <div className="mx-0 mb-1 sm:mb-4">
          <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
            required
          />
        </div>
        <div className="mx-0 mb-1 sm:mb-4">
          <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your email"
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
            required
          />
        </div>
        <div className="mx-0 mb-1 sm:mb-4">
          <label htmlFor="subject" className="pb-1 text-xs uppercase tracking-wider">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Email subject"
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
            required
          />
        </div>
        <div className="mx-0 mb-1 sm:mb-4">
          <label htmlFor="message" className="pb-1 text-xs uppercase tracking-wider">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message"
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
            rows={4}
            required
          />
        </div>
      </div>
      <button 
        type="submit" 
        className={getButtonClass()}
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;