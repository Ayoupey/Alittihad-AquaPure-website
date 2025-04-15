"use client";
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Services() {
  return (
    <>
      <Header />
      <main>
        {/* Services Overview */}
        <section className="max-w-7xl mx-auto px-4 py-12 fade-in">
          <h1 className="text-3xl font-bold mb-12">Our Services</h1>
          
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
                <Image src="/assets/services1.png" alt="Wastewater Treatment" width={350} height={250} className="service-image transform transition duration-300 hover:scale-105" />
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
                <Image src="/assets/services2.png" alt="Sewage Lifting Stations" width={350} height={250} className="service-image transform transition duration-300 hover:scale-105" />
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
                <Image src="/assets/services4.png" alt="Heavy Industries Solutions" width={350} height={250} className="service-image transform transition duration-300 hover:scale-105" />
              </div>
            </div>
          </div>

          {/* Cooling Towers Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Cooling towers</h2>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Text Section */}
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
                  <div className="ml-6 space-y-3 text-xl">
                    <div className="flex items-center">
                      <span className="mr-2 text-green-600">✓</span>
                      <p>Inspection & Cleaning</p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 text-green-600">✓</span>
                      <p>Performance Optimisation</p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 text-green-600">✓</span>
                      <p>Repair & Replacement</p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 text-green-600">✓</span>
                      <p>Water treatment during operation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex-1">
                <Image src="/assets/coolingtowers.png" alt="Cooling Tower" width={350} height={250} className="service-image transform transition duration-300 hover:scale-105" />
              </div>
            </div>
          </div>
          
          {/* Pressurized Sand Filters */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Pressurized Sand Filters</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3 text-xl">
                <div className="flex items-center">
                  <span className="mr-2 text-green-600">✓</span>
                  <p>High Filtration Efficiency</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-green-600">✓</span>
                  <p>Durable Construction</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-green-600">✓</span>
                  <p>Automatic & manual backwashing</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-green-600">✓</span>
                  <p>Customisable Designs</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-green-600">✓</span>
                  <p>Energy Efficient</p>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-bold mb-2 text-xl">📋 Applications</h3>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-center">
                      <span className="mr-2 text-blue-600">🔹</span>
                      <p>Industrial Process Water Treatment</p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 text-blue-600">🔹</span>
                      <p>Cooling Tower Water Filtration</p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 text-blue-600">🔹</span>
                      <p>Pretreatment for Reverse Osmosis (RO)</p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 text-blue-600">🔹</span>
                      <p>Wastewater Recycling & Reuse</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Image src="/assets/pressurizedsandfilters.png" alt="Sand Filters" width={350} height={250} className="service-image transform transition duration-300 hover:scale-105" />
              </div>
            </div>
          </div>
          
          {/* Chemicals Section */}
          <div>
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Chemicals</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-2xl">✏️ Chemical treatment Programs for:</h3>
                <div className="ml-4 space-y-2 text-xl">
                  <div className="flex items-center">
                    <span className="mr-2 text-green-600">✓</span>
                    <p>Boilers</p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-green-600">✓</span>
                    <p>Cooling towers</p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-green-600">✓</span>
                    <p>Demineralization units</p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-green-600">✓</span>
                    <p>Sewage WWT units</p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-green-600">✓</span>
                    <p>Industrial WWT units</p>
                  </div>
                </div>
                
                <div className="mt-6 text-xl">
                  <h3 className="font-bold mb-2 text-2xl">🧪 Quality Assurance & Expertise</h3>
                  <p>Our treatment programs undergo strict quality control testing in modern laboratories to ensure maximum effectiveness.</p>
                </div>
              </div>
              
              <div>
                <Image src="/assets/services3.png" alt="Chemicals" width={350} height={250} className="service-image transform transition duration-300 hover:scale-105" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
