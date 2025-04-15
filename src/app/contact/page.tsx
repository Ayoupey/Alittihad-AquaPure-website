"use client";
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or a service like Formspree
    // For now, we'll just show a success message
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto p-6 fade-in">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        
        {submitStatus === 'success' && (
          <div className="bg-green-100 text-green-700 p-4 mb-6 rounded">
            Thank you for your message! We will get back to you soon.
          </div>
        )}
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded"
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded"
            required
          />
          <textarea 
            placeholder="Message" 
            rows="5" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded"
            required
          ></textarea>
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full"
          >
            Send
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
