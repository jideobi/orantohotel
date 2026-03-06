import React from "react";
import { motion } from "framer-motion";

export default function VideoHeroBackground() {
    return (
        <div className="relative w-full h-[65vh] md:h-[85vh] overflow-hidden">
            {/* YouTube Video Background */}
            <iframe
                className="absolute top-1/2 left-1/2 w-[250%] h-[170%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                src="https://www.youtube.com/embed/OBXKHtqKS50?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=OBXKHtqKS50
"
                title="Background Video"
                frameBorder="0"
                allow="autoplay; fullscreen"
            ></iframe>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
      <section className="relative h-screen  flex items-center justify-center text-center">
    
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black"></div>

        <div className="relative z-10 px-6 ">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Experience <span className="text-yellow-500">Luxury</span> Redefined
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-20 md:mb-10">
            A 4-star sanctuary offering premium comfort, elegant suites,
            and exceptional hospitality in the heart of the city.
          </p>

          <div className="flex justify-center  gap-6">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold transition duration-300">
              Book Your Stay
            </button>
            <button className="border border-whit text-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition duration-300">
              Explore Rooms
            </button>
          </div>
        </div>
      </section>
        </div>
    );
}
