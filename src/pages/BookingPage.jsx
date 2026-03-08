import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function BookingPage() {

  const location = useLocation();
  const room = location.state?.room;

  const [formData, setFormData] = useState({
    roomName: room?.name || "",
    category: room?.category || "",
    price: room?.price || "",
    fullName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    specialRequest: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Booking submitted successfully!");
  };

  if (!room) {
    return (
      <div className="text-center p-40 text-2xl">
        No room selected
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* ROOM CARD */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <img
            src={room.images[0]}
            alt={room.name}
            className="h-64 w-full object-cover"
          />

          <div className="p-6">

            <h2 className="text-2xl font-bold mb-2">
              {room.name}
            </h2>

            <p className="text-gray-600 mb-4">
              {room.description}
            </p>

            <p className="text-lg text-gray-500 mb-1">
              Category: {room.category}
            </p>

            <p className="text-3xl font-bold text-green-600">
              ₦{room.price.toLocaleString()}
            </p>

            <p className="text-gray-500">Per Night</p>

          </div>
        </div>


        {/* BOOKING FORM */}
        <div className="bg-white shadow-xl rounded-xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Complete Your Booking
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* ROOM NAME */}
            <div>
              <label className="text-sm text-gray-600">
                Room Name
              </label>

              <input
                type="text"
                name="roomName"
                value={formData.roomName}
                readOnly
                className="w-full border p-3 rounded-lg bg-gray-100"
              />
            </div>

            {/* ROOM CATEGORY */}
            <div>
              <label className="text-sm text-gray-600">
                Room Category
              </label>

              <input
                type="text"
                name="category"
                value={formData.category}
                readOnly
                className="w-full border p-3 rounded-lg bg-gray-100"
              />
            </div>

            {/* PRICE */}
            <div>
              <label className="text-sm text-gray-600">
                Price Per Night
              </label>

              <input
                type="text"
                value={`₦${Number(formData.price).toLocaleString()}`}
                readOnly
                className="w-full border p-3 rounded-lg bg-gray-100"
              />
            </div>

            {/* CUSTOMER NAME */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            {/* PHONE */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            {/* DATES */}
            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="text-sm text-gray-600">
                  Check In
                </label>

                <input
                  type="date"
                  name="checkIn"
                  required
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Check Out
                </label>

                <input
                  type="date"
                  name="checkOut"
                  required
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg"
                />
              </div>

            </div>

            {/* GUESTS */}
            <input
              type="number"
              name="guests"
              min="1"
              placeholder="Number of Guests"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            {/* REQUEST */}
            <textarea
              name="specialRequest"
              placeholder="Special Requests"
              rows="3"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Confirm Booking
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}