import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function BookingPage() {

  const location = useLocation();
  const room = location.state?.room;

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ DATE VALIDATION (correct place)
    if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      return setError("Check-out date must be after check-in date");
    }

    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://orantohotel-backend.onrender.com/api/bookings",
        formData
      );

      if (res.data.success) {
        setSuccess(true);

        // ✅ Reset form AFTER success
        setFormData({
          ...formData,
          fullName: "",
          email: "",
          phone: "",
          checkIn: "",
          checkOut: "",
          guests: 1,
          specialRequest: ""
        });
      }

    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ❌ No room selected
  if (!room) {
    return (
      <div className="text-center p-40 text-2xl">
        No room selected
      </div>
    );
  }

  // 🎉 SUCCESS SCREEN (correct placement)
  if (success) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-green-50">
        <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md">

          <div className="text-6xl mb-4">🎉</div>

          <h1 className="text-3xl font-bold text-green-600 mb-3">
            Booking Confirmed!
          </h1>

          <p className="text-gray-600 mb-6">
            Your reservation has been successfully processed.
            A confirmation email and WhatsApp message have been sent.
          </p>

          <button
            onClick={() => window.location.href = "/"}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Back to Home
          </button>

        </div>
      </div>
    );
  }

  // ✅ MAIN UI
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

            {/* ROOM DETAILS */}
            <input
              type="text"
              value={formData.roomName}
              readOnly
              className="w-full border p-3 rounded-lg bg-gray-100"
            />

            <input
              type="text"
              value={formData.category}
              readOnly
              className="w-full border p-3 rounded-lg bg-gray-100"
            />

            <input
              type="text"
              value={`₦${Number(formData.price).toLocaleString()}`}
              readOnly
              className="w-full border p-3 rounded-lg bg-gray-100"
            />

            {/* USER INPUTS */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

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
              <input
                type="date"
                name="checkIn"
                required
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="date"
                name="checkOut"
                required
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />
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

            {/* ERROR */}
            {error && (
              <p className="text-red-500 text-sm text-center">
                {error}
              </p>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white transition flex items-center justify-center gap-2
              ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Processing...
                </>
              ) : (
                "Confirm Booking"
              )}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}