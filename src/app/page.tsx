"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-white max-w-7xl mx-auto px-6 py-20 fade-in">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center py-20 px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Innovative Water Treatment Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              We provide unique solutions that meet industrial needs with a
              professional approach and high standards.
            </p>
          </div>
          <div>
            <Image
              src="/assets/hero.png"
              alt="Hero"
              width={600}
              height={400}
              className="w-full rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Services</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Cooling Towers",
              desc: "Custom tower designs to your specific cooling needs, optimizing energy consumption and performance",
              img: "/assets/coolingtowers.png",
            },
            {
              title: "Pressurized Sand Filters",
              desc: "Water filtration solutions with excellent efficiency and durable costs",
              img: "/assets/pressurizedsandfilters.png",
            },
            {
              title: "Chemicals",
              desc: "Chemical treatment programs for various industrial equipment and units tailored to your needs.",
              img: "/assets/Chemicals.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col h-full"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-full object-contain bg-white"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-gray-50 py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Notable Achievements</h2>

    <div className="grid md:grid-cols-2 gap-12 items-center md:flex md:flex-row-reverse">
      <ul className="space-y-6 text-gray-800 text-lg">
        <li className="flex items-start">
          <span className="mr-2 text-xl">•</span>
          First Egyptian company to design a floating system...
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-xl">•</span>
          Innovative design of a system capable of...
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-xl">•</span>
          Execution of multiple projects...
        </li>
      </ul>
      <Image
        src="/assets/Acheivment.png"
        alt="Achievements"
        width={600}
        height={400}
        className="w-full rounded-xl transform transition duration-300 hover:scale-105"
      />
    </div>
  </div>
</section>


      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900">
          <span className="text-4xl">👥</span> Why Choose Us?
        </h2>
        <p className="mb-12 text-lg text-gray-700">
          At Al-Ittihad Aquapure, we ensure safe services that guarantee secure
          implementation, with swift performance and accurate results to meet all
          your needs.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { img: "Experience", title: "EXTENSIVE EXPERIENCE" },
            { img: "standards", title: "HIGH STANDARDS" },
            { img: "designs", title: "UNIQUE DESIGNS" },
            { img: "team", title: "QUALIFIED TEAM" },
          ].map((item, i) => (
            <div key={i}>
              <Image
                src={`/assets/${item.img}.png`}
                alt={item.title}
                width={80}
                height={80}
                className="mx-auto mb-2 transform transition duration-300 hover:scale-105"
              />
              <p className="text-sm font-bold">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Our Partners</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {[...Array(10)].map((_, i) => (
              <Image
                key={i}
                src={`/assets/partner${i + 1}.png`}
                alt={`Partner ${i + 1}`}
                width={100}
                height={50}
                className="h-12 object-contain mx-auto transform transition duration-300 hover:scale-150"
              />
            ))}
          </div>
        </div>
      </section>

            <Footer />
    </>
  );
}
