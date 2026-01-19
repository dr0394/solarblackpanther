import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  onOpenForm: () => void;
}

export default function Contact({ onOpenForm }: ContactProps) {
  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Jetzt Kontakt aufnehmen
          </h2>
          <p className="text-xl text-gray-600">
            Lassen Sie uns gemeinsam Ihre Energiewende planen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformationen</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4 container-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Phone className="text-white icon-hover-rotate" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Telefon</div>
                  <a href="tel:+4917675093299" className="text-lg text-emerald-600 hover:text-emerald-700">
                    +4917675093299
                  </a>
                  <p className="text-gray-600 text-sm">Mo-Fr 8:00 - 18:00 Uhr</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 container-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Mail className="text-white icon-hover-rotate" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">E-Mail</div>
                  <a href="mailto:Ilyas.duyar@yahoo.de" className="text-lg text-emerald-600 hover:text-emerald-700">
                    Ilyas.duyar@yahoo.de
                  </a>
                  <p className="text-gray-600 text-sm">Antwort innerhalb 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 container-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <MapPin className="text-white icon-hover-rotate" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Adresse</div>
                  <p className="text-gray-700">
                    Solar Black Panther GmbH<br />
                    Scheffelstr 60<br />
                    76135 Karlsruhe
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 container-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Clock className="text-white icon-hover-rotate" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Öffnungszeiten</div>
                  <p className="text-gray-700">
                    Montag - Freitag: 8:00 - 18:00 Uhr<br />
                    Samstag: 9:00 - 14:00 Uhr<br />
                    Termine nach Vereinbarung
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenForm}
              className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold px-8 py-4 text-lg transition rounded-xl shadow-lg shadow-emerald-600/20"
            >
              Angebot anfordern
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Schnellanfrage</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Ihr Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">E-Mail *</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="ihre@email.de"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Telefon</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="0721 123456"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Interesse an</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Bitte wählen</option>
                  <option>Solar-Anlage</option>
                  <option>Wärmepumpe</option>
                  <option>Solar-Anlage + Wärmepumpe</option>
                  <option>Beratung</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nachricht</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Ihre Nachricht..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-dark-900 hover:bg-dark-800 text-white font-bold px-8 py-4 transition rounded-xl"
              >
                Nachricht senden
              </button>
              <p className="text-sm text-gray-600">
                * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
