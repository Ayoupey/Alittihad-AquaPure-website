import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 fade-in">
        <div className="flex items-center gap-4">
          <span className="text-xl">📞</span>
          <div>
            <p>+20-103-016-1864</p>
            <p>+20-110-105-2354</p>
            <p>03-4807666</p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="flex items-center gap-4">
            <Image src="/assets/logo.png" alt="ALITTIHAD Logo" width={64} height={64} className="h-16" />
            <div>
              <h3 className="text-lg font-semibold">ALITTIHAD-AQUAPURE</h3>
              <div className="flex text-xs text-brand-blue gap-4">
                <span>SAFE</span>
                <span>QUICK</span>
                <span>ACCURATE</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-start gap-4">
            <span className="text-xl mt-1">📍</span>
            <div>
              <p>• El-Rami Station, Alexandria, Egypt</p>
              <p>• 20 Ahmed ElShatoury Street, Doki, Egypt</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xl">📧</span>
            <p>Almotaheda.Electromechanic@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
