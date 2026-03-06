import { useState } from "react";
import { FaPhone, FaEnvelope, FaLocationDot, FaClock } from "react-icons/fa6";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message submitted successfully!");
        console.log(formData);
    };

    return (
        <div className="bg-black text-white min-h-screen">

            {/* HERO SECTION */}
            <section className="relative h-[50vh] flex items-center justify-center text-center">
                <img
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
                    alt="Contact Banner"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-gray-300 text-lg">
                        We are here to assist you 24/7.
                    </p>
                </div>
            </section>

            {/* CONTACT INFO SECTION */}
            <section className="py-16 px-6 md:px-20">
                <div className="grid md:grid-cols-4 gap-8 text-center">

                    <div className="bg-gray-900 p-8 rounded-2xl hover:bg-yellow-500 hover:text-black transition">
                        <FaLocationDot className="text-3xl mb-4 mx-auto" />
                        <h3 className="font-semibold mb-2">Address</h3>
                        <p>Location: Plot no: 556, Akanu Ibiam, Emene, Enugu</p>
                    </div>

                    <div className="bg-gray-900 p-8 rounded-2xl hover:bg-yellow-500 hover:text-black transition">
                        <FaPhone className="text-3xl mb-4 mx-auto" />
                        <h3 className="font-semibold mb-2">Switchboard</h3>
                        <p>+234 916 000 2437</p>
                    </div>

                    <div className="bg-gray-900 p-8 rounded-2xl hover:bg-yellow-500 hover:text-black transition">
                        <FaEnvelope className="text-3xl mb-4 mx-auto" />
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p>info@orantohotel.ng</p>
                    </div>

                    <div className="bg-gray-900 p-8 rounded-2xl hover:bg-yellow-500 hover:text-black transition">
                        <FaClock className="text-3xl mb-4 mx-auto" />
                        <h3 className="font-semibold mb-2">Business Hours</h3>
                        <p>24 Hours Service</p>
                    </div>

                </div>
            </section>

            {/* CONTACT FORM + MAP */}
            <section className="pb-20 px-6 md:px-20">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* FORM */}
                    <div className="bg-gray-900 p-10 rounded-3xl shadow-lg">
                        <h2 className="text-3xl font-bold mb-6">
                            Send Us a Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                onChange={handleChange}
                                className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-yellow-500"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                onChange={handleChange}
                                className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-yellow-500"
                                required
                            />

                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                onChange={handleChange}
                                className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-yellow-500"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-black py-4 rounded-full font-semibold hover:bg-yellow-400 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* GOOGLE MAP */}
                    <div className="rounded-3xl overflow-hidden shadow-lg">
                        <iframe
                            title="Oranto International Airport Hotel Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.4761590985404!2d7.5646901!3d6.4691058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a591fdd11fa9%3A0xb4d1e885e2c4dff6!2sOranto%20International%20Airport%20Hotel!5e0!3m2!1sen!2sng!4v1700000000000"
                            width="100%"
                            height="400"
                            className="rounded-2xl shadow-lg"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </section>

            {/* FOOTER CTA */}
            <section className="bg-yellow-500 text-black py-16 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Ready to Book Your Stay?
                </h2>
                <p className="mb-6">
                    Contact us today and let us prepare a luxury experience for you.
                </p>
                <a
                    href="/booking"
                    className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
                >
                    Make a Reservation
                </a>
            </section>

        </div>
    );
}

export default Contact;