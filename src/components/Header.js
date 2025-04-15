"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo + Brand Name */}
        <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-blue-600">ALITTIHAD-AQUAPURE</span>
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
          <Link href="/" className="hover:text-blue-600 transition-colors duration-300">Home</Link>
          <Link href="/services" className="hover:text-blue-600 transition-colors duration-300">Services</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors duration-300">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-4 bg

