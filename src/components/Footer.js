"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
        
        {/* Left Side: Logo + Address + Phones */}
        <div className="space-y-3 text-sm md:text-base">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-blue-600">ALITTIHAD-AQUAPURE</span>
          </div>
          <p><strong>📍 Address:</strong> El-Raml Station, Alexandria, Egypt.</p>
          <p><strong>📞 Phone:</strong> +20-110-105-2354</p>
          <p><strong>📞 Phone:</strong> +20 100 405 4221</p>
          <p><strong>☎️ Landline:</strong> 03-4807666</p>
        </div>

        {/* Right Side: Emails Only */}
        <div className="space-y-3 text-sm md:text-base">
          <p><strong>✉️ Email:</strong> info@aquapure-eg.net</p>
          <p><strong>✉️ Email:</strong> sales@aquapure-eg.net</p>
          <p><strong>✉️ Email:</strong> technical-office@aquapure-eg.net</p>
        </div>
      </div>
    </footer>
  );
}
