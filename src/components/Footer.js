"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
        
        {/* Logo + Company Name */}
        <div className="flex items-center gap-4">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-blue-600">ALITTIHAD-AQUAPURE</span>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm md:text-base">
          <p><strong>📍 Address:</strong> 123 Water Treatment Street, Cairo, Egypt</p>
          <p><strong>📞 Phone:</strong> +20-110-105-2354</p>
          <p><strong>☎️ Landline:</strong> 03-4807666</p>
          <p><strong>✉️ Email:</strong> info@alittihadaquapure.com</p>
        </div>
      </div>
    </footer>
  );
}
