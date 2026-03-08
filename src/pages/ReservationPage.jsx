import React, { useState } from "react";

export default function ReservationPage() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    roomType: "",
    guests: 1,
    checkIn: "",
    checkOut: "",
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
    alert("Reservation submitted successfully!");
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="relative h-[50vh]">

        <img
          src="https://i.ibb.co/6JBXkgCj/outside-view2.jpg"
          alt="Hotel Reservation"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

          <h1 className="text-white text-5xl font-bold">
            Make a Reservation
          </h1>

        </div>
      </div>


      {/* FORM SECTION */}
      <div className="max-w-6xl mx-auto py-16 px-6">

        <div className="bg-white rounded-xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-8 text-center">
            Reserve Your Stay
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >

            {/* FULL NAME */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            {/* PHONE */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            {/* ROOM TYPE */}
            <select
              name="roomType"
              required
              onChange={handleChange}
              className="border p-3 rounded-lg"
            >
              <option value="">Select Room Type</option>
              <option>Standard Room</option>
              <option>Deluxe Room</option>
              <option>Executive Room</option>
              <option>Presidential Suite</option>
            </select>

            {/* CHECK IN */}
            <div>
              <label className="text-sm text-gray-600">
                Check In
              </label>

              <input
                type="date"
                name="checkIn"
                required
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />
            </div>

            {/* CHECK OUT */}
            <div>
              <label className="text-sm text-gray-600">
                Check Out
              </label>

              <input
                type="date"
                name="checkOut"
                required
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />
            </div>

            {/* GUESTS */}
            <input
              type="number"
              name="guests"
              min="1"
              placeholder="Number of Guests"
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            {/* SPECIAL REQUEST */}
            <textarea
              name="specialRequest"
              placeholder="Special Requests"
              rows="3"
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            {/* BUTTON */}
            <div className="md:col-span-2">

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-lg text-lg hover:bg-green-700"
              >
                Confirm Reservation
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}