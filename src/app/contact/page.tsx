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

  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto p-6 pt-32 fade-in">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

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
            rows={5}
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

          {sent && (
            <p className="text-green-600 text-center mt-4">
              ✅ Thank you! Your message was sent successfully.
            </p>
          )}
        </form>
      </main>
      <Footer />
    </>
  );
}
