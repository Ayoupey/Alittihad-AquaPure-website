"use client";
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Services() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <section className="max-w-7xl mx-auto px-6 py-16 space-y-20 fade-in">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>

          {/* Services Blocks */}
          {[{
            text: "Designing and implementing sewage and industrial wastewater treatment plants, firefighting systems, improving and maintaining current water systems.",
            img: "/assets/services1.png",
            alt: "Wastewater Treatment"
          }, {
            text: "Installation and maintenance of sewage lifting stations",
            img: "/assets/services2.png",
            alt: "Sewage Lifting Stations"
          }, {
            text: "Providing customized solutions for heavy industries",
            img: "/assets/services4.png",
            alt: "Heavy Industries Solutions"
          }].map((item, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div>
                <p className="text-3xl leading-relaxed text-gray-700">{item.text}</p>
              </div>
              <div>
                <Image src={item.img} alt={item.alt} width={500} height={300} className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-full object-contain" />
              </div>
            </div>
          ))}

          {/* Cooling Towers */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-blue-800">Cooling Towers</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6 text-lg">
                <h3 className="text-3xl font-semibold">🔧 Installation & Commissioning</h3>
                <h3 className="text-3xl font-semibold">❌ Maintenance & Servicing</h3>
                <ul className="space-y-2 list-disc ml-6 text-2xl">
                  <li>Inspection & Cleaning</li>
                  <li>Performance Optimisation</li>
                  <li>Repair & Replacement</li>
                  <li>Water treatment during operation</li>
                </ul>
              </div>
              <Image src="/assets/coolingtowers.png" alt="Cooling Tower" width={500} height={300} className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-full object-contain" />
            </div>
          </div>

          {/* Sand Filters */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-blue-800">Pressurized Sand Filters</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-2 text-2xl">
                {["High Filtration Efficiency", "Durable Construction", "Automatic & manual backwashing", "Customisable Designs", "Energy Efficient"].map((point, i) => (
                  <p key={i} className="flex items-center"><span className="text-green-600 mr-2">✓</span>{point}</p>
                ))}
                <h3 className="text-3xl font-semibold mt-6">📋 Applications</h3>
                <ul className="list-disc ml-6 space-y-1 text-2xl">
                  <li>Industrial Process Water Treatment</li>
                  <li>Cooling Tower Water Filtration</li>
                  <li>Pretreatment for Reverse Osmosis (RO)</li>
                  <li>Wastewater Recycling & Reuse</li>
                </ul>
              </div>
              <Image src="/assets/pressurizedsandfilters.png" alt="Sand Filters" width={500} height={300} className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-full object-contain" />
            </div>
          </div>

          {/* Chemicals */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-blue-800">Chemicals</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 text-lg">
                <h3 className="text-3xl font-semibold">✏️ Treatment Programs for:</h3>
                <ul className="list-disc ml-6 space-y-1 text-2xl">
                  <li>Boilers</li>
                  <li>Cooling towers</li>
                  <li>Demineralization units</li>
                  <li>Sewage WWT units</li>
                  <li>Industrial WWT units</li>
                </ul>
                <div className="mt-4">
                  <h3 className="text-3xl font-semibold">🧪 Quality Assurance</h3>
                  <p>Our programs undergo strict lab testing to ensure effectiveness.</p>
                </div>
              </div>
              <Image src="/assets/services3.png" alt="Chemicals" width={500} height={300} className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-full object-contain" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

