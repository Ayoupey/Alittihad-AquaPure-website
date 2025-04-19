import './globals.css';

export const metadata = {
  title: 'ALITTIHAD-AQUAPURE',
  description: 'Innovative Water Treatment Solutions',
}

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
      <body className="font-times bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
