import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaCommentDots } from "react-icons/fa";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  const phoneNumber = "2349160002437"; // replace with hotel number

  const message = encodeURIComponent(
    "Hello Oranto International Airport Hotel, I would like to make a reservation."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
  const callLink = `tel:+${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Tooltip */}
      {!open && (
        <div className="bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg animate-bounce">
          Chat with us
        </div>
      )}

      {/* WhatsApp Button */}
      {open && (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition"
        >
          <FaWhatsapp size={20} />
          <span className="hidden md:inline">WhatsApp</span>
        </a>
      )}

      {/* Call Button */}
      {open && (
        <a
          href={callLink}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg transition"
        >
          <FaPhoneAlt size={18} />
          <span className="hidden md:inline">Call</span>
        </a>
      )}

      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative bg-yellow-500 hover:bg-yellow-600 text-black p-4 rounded-full shadow-xl transition"
      >
        {/* Pulse animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75 animate-ping"></span>

        <FaCommentDots size={24} className="relative" />
      </button>
    </div>
  );
}