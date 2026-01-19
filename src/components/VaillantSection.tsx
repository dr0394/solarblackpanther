import { Check, Thermometer, Droplets, Battery, Award } from 'lucide-react';

interface VaillantSectionProps {
  onOpenForm: () => void;
}

export default function VaillantSection({ onOpenForm }: VaillantSectionProps) {
  const features = [
    {
      icon: Thermometer,
      title: 'Höchste Effizienz',
      description: 'COP-Werte bis zu 5,0 - aus 1 kW Strom werden 5 kW Wärme',
    },
    {
      icon: Droplets,
      title: 'Flüsterleise',
      description: 'Geräuscharm mit nur 35 dB(A) - ideal für Wohngebiete',
    },
    {
      icon: Battery,
      title: 'Smart Grid Ready',
      description: 'Perfekte Integration mit Ihrer Solar-Anlage',
    },
    {
      icon: Award,
      title: 'Premium-Qualität',
      description: 'Made in Germany mit 5 Jahren Garantie',
    },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://i.imgur.com/8Nh4C2T.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/90 to-dark-900/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-block bg-emerald-600/20 backdrop-blur-sm border border-emerald-500/30 px-4 py-2 rounded-lg mb-4">
              <span className="text-emerald-400 font-semibold">Premium Partner</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vaillant Wärmepumpen
              <span className="block text-emerald-400 mt-2">
                Die perfekte Heizlösung
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Als zertifizierter Vaillant Partner bieten wir Ihnen hocheffiziente Wärmepumpen-Systeme für Neubau und Sanierung. Profitieren Sie von deutscher Ingenieurskunst und maximaler Energieeffizienz.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-600/20 backdrop-blur-sm border border-emerald-500/30 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-4">Unsere Vaillant Leistungen:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Kostenlose Vor-Ort-Beratung',
                  'Individuelle Systemplanung',
                  'Professionelle Installation',
                  'Förderservice inklusive',
                  'Wartung & Service',
                  '5 Jahre Garantie'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="text-emerald-400 flex-shrink-0" size={20} />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenForm}
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold px-8 py-4 text-lg transition rounded-xl shadow-lg shadow-emerald-600/30"
              >
                Beratung anfordern
              </button>
              <a
                href="tel:+4972112345678"
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-bold px-8 py-4 text-lg transition rounded-xl text-center"
              >
                +4917675093299
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-emerald-600/20 to-green-600/20 backdrop-blur-sm border border-emerald-500/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Förderung & Ersparnis</h3>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <div className="text-emerald-400 text-sm font-semibold mb-2">BAFA FÖRDERUNG</div>
                  <div className="text-4xl font-bold text-white mb-2">bis zu 45%</div>
                  <p className="text-gray-300 text-sm">Staatlicher Zuschuss für Ihre Wärmepumpe</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <div className="text-emerald-400 text-sm font-semibold mb-2">JÄHRLICHE ERSPARNIS</div>
                  <div className="text-4xl font-bold text-white mb-2">bis zu 70%</div>
                  <p className="text-gray-300 text-sm">Weniger Heizkosten im Vergleich zu Öl/Gas</p>
                </div>

                <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-6 rounded-xl">
                  <div className="text-white text-sm font-semibold mb-2">BEISPIELRECHNUNG</div>
                  <div className="space-y-2 text-white">
                    <div className="flex justify-between">
                      <span>Investition</span>
                      <span className="font-bold">25.000 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span>BAFA Förderung (40%)</span>
                      <span className="font-bold">- 10.000 €</span>
                    </div>
                    <div className="border-t border-white/30 pt-2 mt-2 flex justify-between">
                      <span className="font-bold">Ihr Preis</span>
                      <span className="text-2xl font-bold">15.000 €</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
