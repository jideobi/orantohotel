import { useState } from "react";
import { motion } from "framer-motion";

const diningData = [
  {
    id: 1,
    title: "Fine Dining Restaurant",
    description: "Elegant restaurant serving international and African cuisine.",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de"
  },
  {
    id: 2,
    title: "Buffet Experience",
    description: "Enjoy our luxury buffet breakfast, lunch and dinner.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
  },
  {
    id: 3,
    title: "Signature Dishes",
    description: "Prepared by our award winning chefs.",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
  },
  {
    id: 4,
    title: "Cocktail & Wine Bar",
    description: "Relax with premium cocktails and wine selections.",
    img: "https://images.unsplash.com/photo-1510626176961-4b37d0a1c3f6"
  },
  {
    id: 5,
    title: "Outdoor Garden Dining",
    description: "Beautiful outdoor setting for romantic dinners.",
    img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1"
  },
  {
    id: 6,
    title: "Private Dining",
    description: "Exclusive dining for meetings and special occasions.",
    img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c"
  }
];

export default function Dining() {
  const [active, setActive] = useState(2);

  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-[70vh]">

        <img
          src="https://i.ibb.co/pBdW9pcS/FRONT-5.jpg"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Dining Experience
            </h1>

            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover exceptional cuisine, signature dishes and unforgettable
              culinary moments at Oranto International Airport Hotel.
            </p>
          </div>
        </div>

      </section>

      {/* INTRO */}
      <section className="py-20 text-center px-6 md:px-20">

        <h2 className="text-4xl font-bold mb-6">
          A Culinary Destination
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          From refined dining to relaxed lounge experiences, every dish is
          carefully crafted to delight your senses.
        </p>

      </section>

      {/* UNIQUE SLIDER */}
      <section className="px-6 md:px-20 pb-24">

        <div className="flex gap-6 overflow-x-auto scrollbar-hide py-10">

          {diningData.map((item, index) => {

            const isActive = active === index;

            return (
              <motion.div
                key={item.id}
                onClick={() => setActive(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer
                min-w-[85%] sm:min-w-[45%] md:min-w-[32%] lg:min-w-[24%] xl:min-w-[18%]
                transition-all duration-500
                ${isActive ? "scale-110 shadow-2xl border border-yellow-500" : "opacity-60"}
                `}
                whileHover={{ scale: 1.05 }}
              >

                <img
                  src={item.img}
                  className="h-80 w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">

                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  {isActive && (
                    <p className="text-sm text-gray-300 mt-2">
                      {item.description}
                    </p>
                  )}

                </div>

              </motion.div>
            );
          })}

        </div>

      </section>

      {/* CHEF SECTION */}
      <section className="grid md:grid-cols-2 gap-16 px-6 md:px-20 pb-24 items-center">

        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          className="rounded-3xl shadow-xl"
        />

        <div>

          <h2 className="text-4xl font-bold mb-6">
            Chef’s Signature Creations
          </h2>

          <p className="text-gray-400 mb-8">
            Our chefs combine international culinary techniques with authentic
            African flavours to create dishes that delight every guest.
          </p>

          <button className="bg-yellow-500 text-black px-10 py-3 rounded-full font-semibold hover:bg-yellow-400">
            View Menu
          </button>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-yellow-500 text-black text-center py-20">

        <h2 className="text-4xl font-bold mb-6">
          Reserve a Dining Experience
        </h2>

        <p className="mb-8">
          Join us for breakfast, lunch or dinner at Oranto Hotel.
        </p>

        <button className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800">
          Reserve Table
        </button>

      </section>

    </div>
  );
}