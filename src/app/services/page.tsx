"use client";
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const mainSections = [
  {
    text: "Designing and implementing sewage and industrial wastewater treatment plants, firefighting systems, improving and maintaining current water systems.",
    imgs: ["/assets/services1.png", "/assets/services1b.png"],
  },
  {
    text: "Installation and maintenance of sewage lifting stations",
    imgs: ["/assets/services2.png", "/assets/services2b.png"],
  },
  {
    text: "Providing customized solutions for heavy industries",
    imgs: ["/assets/services4.png", "/assets/services4b.png"],
  },
];

export default function Services() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="max-w-7xl mx-auto px-6 py-16 space-y-20 fade-in">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>

          {/* Section with Text + 2 Images Underneath */}
          {mainSections.map((section, i) => (
            <div key={i} className="space-y-6 text-center">
              <p className="text-3xl text-gray-800 max-w-3xl mx-auto">{section.text}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {section.imgs.map((src, j) => (
                  <Image
                    key={j}
                    src={src}
                    alt={`service-img-${i}-${j}`}
                    width={500}
                    height={350}
                    className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg shadow-md mx-auto transform transition duration-300 hover:scale-105"
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Cooling Towers */}
          <div className="mb-16">
  <h2 className="text-3xl font-bold text-blue-800 mb-16">Cooling Towers</h2>

  <div className="flex flex-col md:flex-row gap-10">
    {/* النص */}
    <div className="flex-1 space-y-24 text-2xl text-gray-700 leading-relaxed">
      <div>
        <h3 className="font-semibold text-3xl flex items-center mb-2">
          🔧 <span className="ml-2">Installation & Commissioning</span>
        </h3>
        <p className="ml-7 text-gray-600 text-2xl">Professional installation ensuring optimal performance from day one.</p>
      </div>

      <div>
        <h3 className="font-semibold text-3xl flex items-center mb-2">
          🛠️ <span className="ml-2">Maintenance & Servicing</span>
        </h3>
        <ul className="list-disc ml-10 space-y-2 text-gray-600 text-2xl">
          <li>Inspection & Cleaning</li>
          <li>Performance Optimization</li>
          <li>Repair & Replacement</li>
          <li>Water treatment during operation</li>
        </ul>
      </div>
    </div>

    {/* الصورة */}
    <div className="flex-1">
      <Image
        src="/assets/coolingtowers.png"
        alt="Cooling Tower"
        width={500}
        height={550}
        className="rounded-xl shadow-md w-full h-[550px] object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
</div>


          {/* Sand Filters */}
           <div className="mb-16">
  <h2 className="text-3xl font-bold text-blue-800 mb-16">Pressurized Sand Filters</h2>

  <div className="flex flex-col md:flex-row gap-10">
    {/* النص */}
    <div className="flex-1 space-y-24 text-2xl text-gray-700 leading-relaxed">
      <div>
        <h3 className="font-semibold text-3xl flex items-center mb-2">
          ✨ <span className="ml-2">Features</span>
        </h3>
        <ul className="list-disc ml-10 space-y-2 text-gray-600 text-2xl">
          <li>High Filtration Efficiency</li>
          <li>Durable Construction</li>
          <li>Automatic & manual backwashing</li>
          <li>Customisable Designs</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-3xl flex items-center mb-2">
          📋 <span className="ml-2">Applications</span>
        </h3>
        <ul className="list-disc ml-10 space-y-2 text-gray-600 text-2xl">
          <li>Industrial Process Water Treatment</li>
          <li>Cooling Tower Water Filtration</li>
          <li>Pretreatment for Reverse Osmosis</li>
          <li>Wastewater Recycling & Reuse</li>
        </ul>
      </div>
    </div>

    {/* الصورة */}
    <div className="flex-1">
      <Image
        src="/assets/pressurizedsandfilters.png"
        alt="sandfilter"
        width={500}
        height={350}
        className="rounded-xl shadow-md w-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
</div>


          {/* Chemicals */}
          {/* Chemicals Section */}
<div className="mb-16">
  <h2 className="text-3xl font-bold text-blue-800 mb-12">Chemicals</h2>

  <div className="flex flex-col md:flex-row gap-10">
    {/* النص */}
    <div className="flex-1 space-y-16 text-2xl text-gray-700 leading-relaxed">
      <div>
        <h3 className="font-semibold text-3xl flex items-center mb-2">
          ✏️ <span className="ml-2">Treatment Programs for:</span>
        </h3>
        <ul className="list-disc ml-10 space-y-2 text-gray-600 text-2xl">
          <li>Boilers</li>
          <li>Cooling Towers</li>
          <li>Demineralization Units</li>
          <li>Sewage WWT Units</li>
          <li>Industrial WWT Units</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-3xl flex items-center mb-2">
          🧪 <span className="ml-2">Quality & Expertise</span>
        </h3>
        <p className="ml-7 text-gray-600 text-2xl">
          Our programs undergo strict lab testing to ensure maximum effectiveness and safety.
        </p>
      </div>
    </div>

    {/* الصورة */}
    <div className="flex-1">
      <Image
        src="/assets/services3.png"
        alt="Chemicals"
        width={500}
        height={400}
        className="rounded-xl shadow-md w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
</div>

        </section>
      </main>
      <Footer />
    </>
  );
}

