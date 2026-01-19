import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = () => {
    const message = 'Hallo Solar Black Panther Team, ich habe eine Frage zu Ihren Leistungen.';
    const whatsappUrl = `https://wa.me/4917675093299?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition z-40 flex items-center justify-center group"
      aria-label="WhatsApp kontaktieren"
    >
      <MessageCircle size={28} className="icon-hover-rotate" />
      <span className="absolute right-full mr-4 bg-gray-900 text-white px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
        Über WhatsApp kontaktieren
      </span>
    </button>
  );
}
