import React, { useState } from "react";
import axios from "axios";

export default function ReservationPage() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ DATE VALIDATION
    if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      return setError("Check-out must be after check-in");
    }

    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://orantohotel-backend.onrender.com/api/reservations",
        formData
      );

      if (res.data.success) {
        setSuccess(true);

        // ✅ Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          roomType: "",
          guests: 1,
          checkIn: "",
          checkOut: "",
          specialRequest: ""
        });
      }

    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // 🎉 SUCCESS SCREEN
  if (success) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-green-50">
        <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md">

          <div className="text-6xl mb-4">🎉</div>

          <h1 className="text-3xl font-bold text-green-600 mb-3">
            Reservation Confirmed!
          </h1>

          <p className="text-gray-600 mb-6">
            Your reservation has been received.
            A confirmation email and WhatsApp message have been sent.
          </p>

          <button
            onClick={() => window.location.href = "/"}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Back to Home
          </button>

        </div>
      </div>
    );
  }

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

      {/* FORM */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="bg-white rounded-xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-8 text-center">
            Reserve Your Stay
          </h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

            <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} className="border p-3 rounded-lg" />
            <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} className="border p-3 rounded-lg" />
            <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} className="border p-3 rounded-lg" />

            <select name="roomType" required onChange={handleChange} className="border p-3 rounded-lg">
              <option value="">Select Room Type</option>
              <option>Standard Room</option>
              <option>Deluxe Room</option>
              <option>Executive Room</option>
              <option>Presidential Suite</option>
            </select>

            <div>
              <label className="text-sm text-gray-600">Check In</label>
              <input type="date" name="checkIn" required onChange={handleChange} className="border p-3 rounded-lg w-full" />
            </div>

            <div>
              <label className="text-sm text-gray-600">Check Out</label>
              <input type="date" name="checkOut" required onChange={handleChange} className="border p-3 rounded-lg w-full" />
            </div>

            <input type="number" name="guests" min="1" placeholder="Number of Guests" onChange={handleChange} className="border p-3 rounded-lg" />

            <textarea name="specialRequest" placeholder="Special Requests" rows="3" onChange={handleChange} className="border p-3 rounded-lg" />

            {/* ERROR */}
            {error && (
              <p className="text-red-500 text-sm md:col-span-2 text-center">
                {error}
              </p>
            )}

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-lg text-lg text-white flex justify-center items-center gap-2
                ${loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"}`}
              >
                {loading ? "Processing..." : "Confirm Reservation"}
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}