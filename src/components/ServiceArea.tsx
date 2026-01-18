import { MapPin, Check } from 'lucide-react';

export default function ServiceArea() {
  const cities = [
    'Karlsruhe',
    'Baden-Baden',
    'Pforzheim',
    'Rastatt',
    'Ettlingen',
    'Bruchsal',
    'Stutensee',
    'Rheinstetten',
    'Gaggenau',
    'Bretten',
    'Waghäusel',
    'Kraichtal',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Unser Servicegebiet
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Von Karlsruhe über ganz Baden-Württemberg: Wir sind Ihr Partner für Solar-Anlagen und Wärmepumpen. Durch internationale Montage-Teams und strategische Partnerschaften realisieren wir Projekte weltweit.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className="text-primary-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{city}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <MapPin className="text-emerald-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Regional</h3>
                  <p className="text-gray-300 mb-3">
                    Sie wohnen außerhalb dieser Gebiete? Kontaktieren Sie uns - durch Montage-Teams und strategische Partnerschaften können wir Projekte Regional realisieren.
                  </p>
                  <p className="text-emerald-400 font-semibold">
                    Unser Ziel: Eine führende Rolle im Zukunftsmarkt Solarenergie - in Deutschland und darüber hinaus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.474944796!2d8.400934!3d49.004167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47970653c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sScheffelstra%C3%9Fe%2060%2C%2076135%20Karlsruhe!5e0!3m2!1sde!2sde!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
