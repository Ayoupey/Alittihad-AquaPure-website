"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          ALITTIHAD-AQUAPURE
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-800 font-medium">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white text-gray-800 font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
