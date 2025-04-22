"use client";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto p-6 pt-32 fade-in">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        <form
          action="https://getform.io/f/bgdpropa"
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border border-gray-300 p-3 rounded"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            required
            className="w-full border border-gray-300 p-3 rounded"
          ></textarea>

          {/* Honeypot field (anti-spam) */}
          <input type="hidden" name="_gotcha" style={{ display: "none" }} />

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
