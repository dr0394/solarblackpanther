import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Solar Black Panther Logo"
                className="h-14 w-auto"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
            <p className="text-gray-400 mb-6">
              Ihr Experte für Solar-Anlagen und Wärmepumpen in Karlsruhe und Baden-Württemberg.
            </p>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-3 rounded inline-flex">
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-5" />
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-primary-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Leistungen</h3>
            <ul className="space-y-3">
              <li><a href="#leistungen" className="text-gray-400 hover:text-primary-400 transition">Photovoltaik-Anlagen</a></li>
              <li><a href="#leistungen" className="text-gray-400 hover:text-primary-400 transition">Wärmepumpen</a></li>
              <li><a href="#leistungen" className="text-gray-400 hover:text-primary-400 transition">Energieberatung</a></li>
              <li><a href="#leistungen" className="text-gray-400 hover:text-primary-400 transition">Installation</a></li>
              <li><a href="#leistungen" className="text-gray-400 hover:text-primary-400 transition">Service & Wartung</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Unternehmen</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition">Über uns</a></li>
              <li><a href="#anlagen" className="text-gray-400 hover:text-primary-400 transition">Unsere Anlagen</a></li>
              <li><a href="#kontakt" className="text-gray-400 hover:text-primary-400 transition">Kontakt</a></li>
              <li><a href="/impressum" className="text-gray-400 hover:text-primary-400 transition">Impressum</a></li>
              <li><a href="/datenschutz" className="text-gray-400 hover:text-primary-400 transition">Datenschutz</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+4972112345678" className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition">
                  <Phone size={18} />
                  <span>+4917675093299</span>
                </a>
              </li>
              <li>
                <a href="mailto:Ilyas.duyar@yahoo.de" className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition">
                  <Mail size={18} />
                  <span>Ilyas.duyar@yahoo.de</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin size={18} className="flex-shrink-0 mt-1" />
                  <span>
                    Scheffelstr 60<br />
                    76135 Karlsruhe
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Solar Black Panther GmbH. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
