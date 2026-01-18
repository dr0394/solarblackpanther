import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 max-w-md bg-white rounded-lg shadow-2xl border-2 border-gray-200 z-50 p-6">
      <button
        onClick={handleDecline}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        aria-label="Schließen"
      >
        <X size={20} />
      </button>

      <h3 className="text-lg font-bold text-gray-900 mb-3">
        Cookie-Einstellungen
      </h3>
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.
        Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß
        unserer{' '}
        <a href="/datenschutz" className="text-primary-600 hover:underline">
          Datenschutzerklärung
        </a>{' '}
        zu.
      </p>

      <div className="flex space-x-3">
        <button
          onClick={handleDecline}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-4 py-3 rounded-lg transition text-sm"
        >
          Alles ablehnen
        </button>
        <button
          onClick={handleAccept}
          className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-4 py-3 rounded-lg transition text-sm"
        >
          Alle akzeptieren
        </button>
      </div>
    </div>
  );
}
