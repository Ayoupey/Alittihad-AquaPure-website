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
      <main className="pt-32">
        <section className="max-w-7xl mx-auto px-6 py-16 space-y-20 fade-in">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>

          {/* Section with Text + 2 Images Underneath */}
          {mainSections.map((section, i) => (
            <div key={i} className="space-y-6 text-center">
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">{section.text}</p>
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
        </section>
      </main>
      <Footer />
    </>
  );
}
