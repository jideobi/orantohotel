import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {

  const phoneNumber = "+2349160002437"; // replace with hotel WhatsApp number

  const message = encodeURIComponent(
    "Hello Oranto International Airport Hotel, I would like to make a room reservation."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition transform hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}