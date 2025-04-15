import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between fade-in">
        <div className="flex items-center space-x-4">
          <Image src="/assets/logo.png" alt="Logo" width={64} height={64} className="h-16 w-auto transform transition duration-300 hover:scale-150" />
          <span className="font-bold text-xl transform transition duration-300 hover:scale-105">ALITTIHAD-AQUAPURE</span>
        </div>
        <nav className="space-x-6 text-sm  ">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition duration-300 hover:scale-105 ">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition duration-300 hover:scale-105">
            Our Services
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition duration-300 hover:scale-105">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
