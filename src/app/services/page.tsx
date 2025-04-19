"use client";
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Services() {
  return (
    <>
      <Header />
      <main>
        <section className="max-w-7xl mx-auto px-4 py-12 pt-32 fade-in">
          <h1 className="text-4xl font-bold mb-12 text-gray-900">Our Services</h1>

          {/* Main Services List */}
          <div className="space-y-12 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-start">
                  <span className="mr-2 text-2xl">•</span>
                  <p className="text-2xl">Designing and implementing sewage and industrial wastewater treatment plants, firefighting systems, improving and maintaining current water systems.</p>
                </div>
              </div>
              <div>
                <Image src="/assets/services1.png" alt="Wastewater Treatment" width={350} height={250} className="service-image transform transition-all duration-300 hover:scale-105 hover:shadow-xl" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-start">
                  <span className="mr-2 text-2xl">•</span>
                  <p className="text-2xl">Installation and maintenance of sewage lifting stations</p>
                </div>
              </div>
              <div>
                <Image src="/assets/services2.png" alt="Sewage Lifting Stations" width={350} height={250} className="service-image transform transition-all duration-300 hover:scale-105 hover:shadow-xl" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-start">
                  <span className="mr-2 text-2xl">•</span>
                  <p className="text-2xl">Providing customized solutions for heavy industries</p>
                </div>
              </div>
              <div>
                <Image src="/assets/services4.png" alt="Heavy Industries Solutions" width={350} height={250} className="service-image transform transition-all duration-300 hover:scale-105 hover:shadow-xl" />
              </div>
            </div>
          </div>

          {/* Cooling Towers Section */}
          <div className="mb-12 bg-gray-50 p-6 rounded-xl">
            <h2 className="text-4xl font-bold text-brand-blue mb-6">Cooling Towers</h2>

            <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-8">
              <div className="flex-1">
                <div className="mb-8">
                  <div className="flex items-center mb-2">
                    <span className="mr-2">🔧</span>
                    <h3 className="text-2xl font-bold">Installation & Commissioning</h3>
                  </div>
                </div>

                <div className="mb-12">
                  <div className="flex items-center mb-2">
                    <span className="mr-2">❌</span>
                    <h3 className="text-2xl font-bold">Maintenance & Servicing</h3>
                  </div>
                  <ul className="ml-6 space-y-3 text-xl list-disc list-inside">
                    <li>Inspection & Cleaning</li>
                    <li>Performance Optimisation</li>
                    <li>Repair & Replacement</li>
                    <li>Water treatment during operation</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <Image src="/assets/coolingtowers.png" alt="Cooling Tower" width={350} height={250} className="service-image transform transition-all duration-300 hover:scale-105 hover:shadow-xl" />
              </div>
            </div>
          </div>

          {/* Pressurized Sand Filters */}
          <div className="mb-12 bg-white p-6 rounded-xl">
            <h2 className="text-4xl font-bold text-brand-blue mb-6">Pressurized Sand Filters</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-3 text-xl list-disc list-inside">
                <li>High Filtration Efficiency</li>
                <li>Durable Construction</li>
                <li>Automatic & manual backwashing</li>
                <li>Customisable Designs</li>
                <li>Energy Efficient</li>
              </ul>
              <div>
                <Image src="/assets/pressurizedsandfilters.png" alt="Sand Filters" width={350} height={250} className="service-image transform transition-all duration-300 hover:scale-105 hover:shadow-xl" />
              </div>
            </div>

            <div className="mt-6 text-xl">
              <h3 className="font-bold mb-2 text-2xl">📋 Applications</h3>
              <ul className="ml-4 space-y-2 list-disc list-inside">
                <li>Industrial Process Water Treatment</li>
                <li>Cooling Tower Water Filtration</li>
                <li>Pretreatment for Reverse Osmosis (RO)</li>
                <li>Wastewater Recycling & Reuse</li>
              </ul>
            </div>
          </div>

          {/* Chemicals Section */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-4xl font-bold text-brand-blue mb-6">Chemicals</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-2xl">✏️ Chemical treatment Programs for:</h3>
                <ul className="ml-4 space-y-2 text-xl list-disc list-inside">
                  <li>Boilers</li>
                  <li>Cooling towers</li>
                  <li>Demineralization units</li>
                  <li>Sewage WWT units</li>
                  <li>Industrial WWT units</li>
                </ul>

                <div className="mt-6 text-xl">
                  <h3 className="font-bold mb-2 text-2xl">🧪 Quality Assurance & Expertise</h3>
                  <p className="text-lg">Our programs undergo strict lab testing to ensure effectiveness.</p>
                </div>
              </div>
              <div>
                <Image src="/assets/services3.png" alt="Chemicals" width={350} height={250} className="service-image transform transition-all duration-300 hover:scale-105 hover:shadow-xl" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
