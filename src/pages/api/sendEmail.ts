import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('1. API route started');
  console.log('Environment variables:');
  console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Set' : 'Not set');
  console.log('EMAIL_PASS:', process.env.EMAIL_APP_PASSWORD ? 'Set' : 'Not set');
  
  try {
    if (req.method !== 'POST') {
      console.log('2. Method not allowed:', req.method);
      return res.status(405).json({ message: 'Method Not Allowed' });
    }

    console.log('3. POST method confirmed');

    const { name, email, subject, message } = req.body;
    console.log('4. Parsed data:', { 
      name: name || 'missing', 
      email: email || 'missing', 
      subject: subject || 'missing', 
      message: message ? `${message.substring(0, 50)}...` : 'missing' 
    });

    if (!name || !email || !message) {
      console.log('5. Missing required fields');
      return res.status(400).json({ 
        message: 'Missing required fields',
        receivedFields: { name, email, subject, message: message ? 'present' : 'missing' }
      });
    }

    console.log('6. All required fields present');

    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error('7. Missing email configuration');
      return res.status(500).json({ message: 'Server configuration error: Missing email credentials' });
    }

    console.log('8. Email configuration present');

    console.log('9. Creating transporter');
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    console.log('10. Transporter created, attempting to send email');
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: subject ? `New message from ${name}: ${subject}` : `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'Not provided'}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject || 'Not provided'}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    console.log('11. Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('12. Error caught:', error);
    res.status(500).json({ 
      message: 'Error sending email', 
      error: error instanceof Error ? {
        name: error.name,
        message: error.message,
        stack: error.stack
      } : 'Unknown error' 
    });
  }
}