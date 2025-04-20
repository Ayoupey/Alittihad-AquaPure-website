import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'ALITTIHAD-AQUAPURE',
  description: 'Innovative Water Treatment Solutions',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Tidio Script in head (اختياري، ينفع في البودي برضو) */}
        <script src="//code.tidio.co/hx2y5zvcejl8yv88bzkgh9bngmmvlxpe.js" async></script>
      </head>
      <body className="font-times bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
