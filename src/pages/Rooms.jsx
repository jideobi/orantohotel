import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWifi, FaTv, FaBed, FaBath, FaSnowflake } from "react-icons/fa6";
import TopContactBar from "../component/TopContactBar";
import roominfo from "../data/roominfo.json"

// const roomsData = [
//   {
//     id: 1,
//     name: "Standard Suite",
//     price: 85000,
//     category: "Standard",
//     image:
//       "https://images.unsplash.com/photo-1590490360182-c33d57733427",
//     description:
//       "Comfortable and stylish room perfect for business and short stays.",
//   },
//   {
//     id: 2,
//     name: "Deluxe Suite",
//     price: 120000,
//     category: "Deluxe",
//     image:
//       "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
//     description:
//       "Spacious room with premium interior and executive workspace.",
//   },
//   {
//     id: 3,
//     name: "Executive Suite",
//     price: 180000,
//     category: "Executive",
//     image:
//       "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
//     description:
//       "Luxury suite with living area, city view and exclusive services.",
//   },
// ];

// ✅ Hero slider images
const heroImages = [
  "https://i.ibb.co/6JBXkgCj/outside-view2.jpg",
  "https://i.ibb.co/4ZrXKW2H/Whats-App-Image-2026-01-30-at-1-16-32-PM.jpg",
  "https://i.ibb.co/8Lkqbt9s/gym2.jpg",
];

function Rooms() {
  const [filter, setFilter] = useState("All");
  const [showContactBar, setShowContactBar] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  // ✅ SLIDER STATE
  const [currentImage, setCurrentImage] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setShowContactBar(false);
      } else {
        setShowContactBar(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const filteredRooms =
    filter === "All"
      ? roominfo
      : roominfo.filter((room) => room.category === filter);

  return (
    <div className="bg-black text-white overflow-x-hidden">

      <TopContactBar visible={showContactBar} />

      {/* ================= HERO SLIDER ================= */}
      <section className="relative h-[75vh] w-full overflow-hidden">

        {/* Sliding Wrapper */}
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Rooms Banner"
              className="w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our Luxury Rooms
            </h1>
            <p className="text-gray-300 text-lg">
              Experience elegance, comfort and world-class hospitality.
            </p>
          </div>
        </div>
      </section>
      {/* ================================================= */}

      {/* FILTER BUTTONS */}
      <section className="py-10 text-center">
        <div className="flex justify-center gap-6 flex-wrap">
          {["All", "Standard", "Deluxe", "Executive"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full border transition ${filter === category
                  ? "bg-yellow-500 text-black"
                  : "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* ROOMS GRID */}
      <section className="px-6 md:px-20 pb-20">
        <div className="grid md:grid-cols-3 gap-10">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-500"
            >
              <img
                src={room.images[0]}
                alt={room.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">
                  {room.name}
                </h3>

                <p className="text-yellow-500 font-bold mb-4">
                  ₦{room.price.toLocaleString()} / night
                </p>

                <p className="text-gray-400 mb-6 line-clamp-3">
                  {room.description}
                </p>

                {/* Amenities Icons */}
                <div className="flex flex-wrap gap-4 text-yellow-500 mb-6 text-lg">
                  <FaWifi title="Free WiFi" />
                  <FaTv title="Smart TV" />
                  <FaBed title="King Bed" />
                  <FaBath title="Hot Shower" />
                  <FaSnowflake title="Air Conditioning" />
                </div>

                <Link
                  to={`/room/${room.id}`}
                  className="block text-center bg-yellow-500 text-black py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
                >
                  View Room Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-500 text-black py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Need Assistance?
        </h2>
        <p className="mb-6">
          Contact our reservation team for special packages and offers.
        </p>
        <Link
          to="/contact"
          className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
}

export default Rooms;