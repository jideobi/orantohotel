import { useState, useEffect } from 'react'
import VideoHeroBackground from '../component/VideoHeroBackground';
import '../App.css'
import TopContactBar from '../component/TopContactBar';
import { Link } from 'react-router-dom';


function Homepage() {
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
    <>

      <TopContactBar visible={showContactBar} />
      <VideoHeroBackground />

      <div className="bg-black text-white font-sans overflow-x-hidden">

        {/* HERO SECTION */}


        {/* ABOUT SECTION */}
        <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-black to-gray-900">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Where Comfort Meets Elegance
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our hotel blends contemporary design with timeless luxury.
                From executive suites to fine dining experiences, every detail
                is curated for your comfort and satisfaction.
              </p>
              <Link to="/rooms" className="text-yellow-500 font-semibold hover:underline">
                Discover More →
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
                alt="Hotel Interior"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black px-6 py-4 rounded-2xl font-bold shadow-lg">
                4-Star Premium
              </div>
            </div>
          </div>
        </section>

        {/* ROOMS SECTION */}
        <section className="py-24 px-6 md:px-20 bg-black">
          <h2 className="text-4xl font-bold text-center mb-16">
            Signature Rooms
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {["Standard Suite", "Deluxe Suite", "Executive Suite"].map(
              (room, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-500"
                >
                  <img
                    src="https://i.ibb.co/8LXJ9WD7/FRONT-7.jpg"
                    alt={room}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">{room}</h3>
                    <p className="text-gray-400 mb-6">
                      Elegant interior, luxury bedding, high-speed WiFi,
                      and 24-hour room service.
                    </p>
                    <Link to="/rooms" className="text-yellow-500 font-semibold hover:underline">
                      View Details →
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* AMENITIES */}
        <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-gray-900 to-black">
          <h2 className="text-4xl font-bold text-center mb-16">
            Premium Amenities
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Infinity Pool",
              "Fine Dining",
              "Conference Hall",
              "Spa & Wellness",
              "Airport Pickup",
              "Smart Rooms",
              "Fitness Center",
              "Secure Parking",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 backdrop-blur-md p-8 rounded-2xl hover:bg-yellow-500 hover:text-black transition duration-300"
              >
                <p className="font-semibold text-lg">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-24 text-center bg-yellow-500 text-black">
          <h2 className="text-4xl font-bold mb-6">
            Ready for an Unforgettable Stay?
          </h2>
          <p className="mb-8 text-lg">
            Reserve your room today and experience world-class hospitality.
          </p>
          <button className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition duration-300">
            Reserve Now
          </button>
        </section>

      </div>
    </>
  )
}

export default Homepage
