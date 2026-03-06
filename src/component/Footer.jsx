import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Oranto Int'l Airport Hotel Enugu
          </h2>
          <p className="text-sm leading-relaxed opacity-80">
           A modern 4-star hospitality destination offering refined comfort,
            world-class service, and unforgettable stays for travelers across generations and 
            borders.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-green-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-green-500 transition">
                Rooms
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: info@orantohotel.ng</li>
            <li>Phone: +234 916 000 2437</li>
            <li>Location: Plot no: 556, Akanu Ibiam, Emene, 4001004 Enugu</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Stay Connected
          </h3>
          <p className="text-sm mb-4 opacity-80">
            Subscribe to receive updates on exhibitions and events.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-white rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 px-4 py-2 rounded-r-md text-black font-semibold hover:bg-green-500 transition"
            >
              <FaEnvelope />
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs opacity-70">
          © {new Date().getFullYear()} Oranto Int'l Airport Hotel Enugu. All rights reserved.
        </p>

        {/* Social Media */}
        <div className="flex space-x-4">
          <a
            href="#"
            aria-label="Instagram"
            className="p-2 border border-gray-700 rounded-full hover:bg-green-600 hover:text-black transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="p-2 border border-gray-700 rounded-full hover:bg-green-600 hover:text-black transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="p-2 border border-gray-700 rounded-full hover:bg-green-600 hover:text-black transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="p-2 border border-gray-700 rounded-full hover:bg-green-600 hover:text-black transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
