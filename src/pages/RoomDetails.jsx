import React from "react";
import roominfo from "../data/roominfo.json";
import { FaWifi, FaTv, FaSnowflake, FaShower, FaBed } from "react-icons/fa6";

export default function RoomDetails() {

  const room = roominfo[0]; // later this can come from URL params

  const iconMap = {
    "Free WiFi": <FaWifi />,
    "Smart TV": <FaTv />,
    "Air Conditioning": <FaSnowflake />,
    "Hot Shower": <FaShower />,
    "King Size Bed": <FaBed />
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="relative h-[60vh]">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">{room.name}</h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="md:col-span-2">

          <h2 className="text-3xl font-bold mb-4">{room.name}</h2>

          <p className="text-gray-600 mb-8">{room.description}</p>

          {/* AMENITIES */}
          <h3 className="text-2xl font-semibold mb-4">Room Amenities</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {room.amenities.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-green-600 text-xl">
                  {iconMap[item]}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* GALLERY */}
          <h3 className="text-2xl font-semibold mb-4">Gallery</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {room.images.map((img, index) => (
              <img
                key={index}
                src={img}
                className="rounded-lg"
                alt="room"
              />
            ))}
          </div>

        </div>

        {/* BOOKING CARD */}
        <div className="bg-white shadow-xl rounded-xl p-6 h-fit sticky top-24">

          <h3 className="text-3xl font-bold text-green-600">
            ₦{room.price.toLocaleString()}
          </h3>

          <p className="text-gray-500 mb-6">Per Night</p>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
            Book Now
          </button>

          <div className="mt-6 border-t pt-4 text-sm text-gray-600">
            <p>✔ Free cancellation</p>
            <p>✔ Breakfast Included</p>
            <p>✔ Airport Shuttle</p>
          </div>

        </div>

      </div>

      {/* POLICIES */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">

          <h3 className="text-2xl font-bold mb-4">
            Room Policies
          </h3>

          <ul className="space-y-2 text-gray-600">
            {room.policies.map((policy, index) => (
              <li key={index}>• {policy}</li>
            ))}
          </ul>

        </div>
      </div>

    </div>
  );
}