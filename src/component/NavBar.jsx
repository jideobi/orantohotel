import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // scrolling down → show navbar
                setShowNav(true);
            } else {
                // scrolling up → hide navbar
                setShowNav(false);
            }

            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full bg-black  text-white shadow-lg transition-transform duration-500 z-50 ${showNav ? "translate-y-0" : "-translate-y-full "
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <div>
                    <Link to="/" className="text-2xl font-bold text-[#12f00a]">
                        <img src={Logo} alt="Logo" className="w-18 h-16" />
                    </Link>
                </div>



                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 font-medium ">
                    <Link to="/" className=" hover:text-green-600 font-medium text-white">
                       <p className="text-white">Home</p>
                    </Link>
                    <Link to="/Rooms" className="text-gray-800 hover:text-green-600 font-medium">
                        <p className="text-white">Rooms</p>
                    </Link>
                    <Link to="/amenities" className="text-gray-800 hover:text-green-600 font-medium">
                        <p className="text-white">Amenities</p>
                    </Link>
                      <Link to="/contact" className="text-gray-800 hover:text-green-600 font-medium">
                      <p className="text-white">Contact</p>
                    </Link>
                </ul>

                {/* Mobile Toggle */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black px-6 text-lg pb-6 border-t border-gray-800">
            <ul className="space-y-5 font-medium">
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/rooms" onClick={() => setMenuOpen(false)}>Rooms</Link>
              </li>
              <li>
                <Link to="/amenities" onClick={() => setMenuOpen(false)}>Amenities</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
        </nav>
    );
}