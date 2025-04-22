"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm md:text-base">
        
        {/* Column 1: Address & Phones */}
        <div className="space-y-3">
          <p><strong>📍 Address:</strong> El-Raml Station, Alexandria, Egypt.</p>
          <p><strong>📞 Phone:</strong> +20-110-105-2354</p>
          <p><strong>📞 Phone:</strong> +20 100 405 4221</p>
          <p><strong>☎️ Landline:</strong> 03-4807666</p>
        </div>

        {/* Column 2: Logo & Name (centered) */}
        <div className="flex flex-col items-center justify-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-blue-600 text-center">ALITTIHAD-AQUAPURE</span>
        </div>

        {/* Column 3: Emails */}
        <div className="space-y-3">
          <p><strong>✉️ Email:</strong> info@aquapure-eg.net</p>
          <p><strong>✉️ Email:</strong> technical-office@aquapure-eg.net</p>
          <p><strong>✉️ Email:</strong> sales@aquapure-eg.net</p>
        </div>
      </div>
    </footer>
  );
}
