import './globals.css';

export const metadata = {
  title: 'ALITTIHAD-AQUAPURE',
  description: 'Innovative Water Treatment Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
