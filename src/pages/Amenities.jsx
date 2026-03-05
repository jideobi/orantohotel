import {  FaUtensils, FaSpa, FaWifi, FaDumbbell, FaCar, FaBriefcase } from "react-icons/fa6";
import { FaSwimmingPool, FaCocktail } from "react-icons/fa";
import TopContactBar from '../component/TopContactBar';
import { useState, useEffect} from 'react'

const amenities = [
  {
    icon: <FaSwimmingPool />,
    title: "Infinity Pool",
    description: "Relax in our premium outdoor infinity pool with lounge seating.",
  },
  {
    icon: <FaUtensils />,
    title: "Fine Dining Restaurant",
    description: "Experience world-class cuisine prepared by professional chefs.",
  },
  {
    icon: <FaSpa />,
    title: "Spa & Wellness",
    description: "Rejuvenate with luxury spa treatments and massage therapy.",
  },
  {
    icon: <FaWifi />,
    title: "High-Speed WiFi",
    description: "Complimentary high-speed internet access throughout the hotel.",
  },
  {
    icon: <FaDumbbell />,
    title: "Modern Gym",
    description: "Fully equipped fitness center with modern training equipment.",
  },
  {
    icon: <FaCar />,
    title: "Secure Parking",
    description: "24/7 monitored parking space with full security coverage.",
  },
  {
    icon: <FaBriefcase />,
    title: "Conference Hall",
    description: "Professional event space for meetings, seminars and corporate events.",
  },
  {
    icon: <FaCocktail />,
    title: "Luxury Bar",
    description: "Enjoy premium cocktails and premium lounge experience.",
  },
];

function Amenities() {
        const [showNavbar, setShowNavbar] = useState(true);
      const [showContactBar, setShowContactBar] = useState(false);
      const [lastScroll, setLastScroll] = useState(0);
    
      useEffect(() => {
        const handleScroll = () => {
          const currentScroll = window.scrollY;
    
          if (currentScroll > lastScroll && currentScroll > 80) {
            // scrolling down → show navbar
            setShowNavbar(true);
            setShowContactBar(false);
          } else {
            // scrolling up → hide navbar, show contact bar
            setShowNavbar(false);
            setShowContactBar(true);
          }
    
          setLastScroll(currentScroll);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, [lastScroll]);
  return (
    <div className="bg-black text-white min-h-screen">
         <TopContactBar visible={showContactBar} />

      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1561501900-3701fa6a0864"
          alt="Amenities"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our Hotel Amenities
          </h1>
          <p className="text-lg text-gray-300">
            Premium facilities designed for comfort and luxury.
          </p>
        </div>
      </section>

      {/* AMENITIES GRID */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Explore Our Facilities
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-3xl shadow-lg hover:bg-yellow-500 hover:text-black transition duration-500 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 hover:text-black">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FACILITY IMAGE GALLERY */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-900 to-black">
        <h2 className="text-4xl font-bold text-center mb-16">
          Experience Luxury Spaces
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
          ].map((img, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-500"
            >
              <img
                src={img}
                alt="Facility"
                className="w-full h-72 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-yellow-500 text-black py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Experience Our Amenities?
        </h2>
        <p className="mb-8 text-lg">
          Book your stay today and enjoy world-class facilities.
        </p>
        <a
          href="/booking"
          className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Book Now
        </a>
      </section>

    </div>
  );
}

export default Amenities;