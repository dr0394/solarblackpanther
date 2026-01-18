import { Check } from 'lucide-react';

interface HeroProps {
  onOpenForm: () => void;
}

export default function Hero({ onOpenForm }: HeroProps) {
  return (
    <section
      className="pt-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://i.imgur.com/fX0UMPm.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/80 to-gray-800/85"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white"
              style={{
                textShadow: '0 10px 40px rgba(0, 0, 0, 0.8), 0 4px 20px rgba(0, 0, 0, 0.6), 0 2px 8px rgba(0, 0, 0, 0.4)',
                letterSpacing: '-0.02em'
              }}
            >
              Energiekosten senken.<br />
              <span
                className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 40px rgba(16, 185, 129, 0.3), 0 0 20px rgba(34, 197, 94, 0.25)',
                  filter: 'drop-shadow(0 4px 12px rgba(16, 185, 129, 0.4))'
                }}
              >
                Zukunft sichern.
              </span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 font-medium">
              Mit über 22 Jahren Erfahrung in der Solarbranche macht Solar Black Panther Sie unabhängig von steigenden Energiepreisen. Wir sind Ihr Partner für hochwertige Photovoltaik-Anlagen, Wärmepumpen und energetische Sanierungen in Karlsruhe und ganz Baden-Württemberg.
            </p>
            <div className="bg-emerald-600/20 backdrop-blur-sm border border-emerald-500/30 p-4 rounded-xl mb-8">
              <p className="text-white text-sm font-semibold">
                Nachhaltig. Klimafreundlich. Zukunftsorientiert. Wir schaffen Arbeitsplätze, entlasten Familien von hohen Energiekosten und leisten einen wichtigen Beitrag zum Umweltschutz.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-600/40">
                  <Check size={16} className="text-white" />
                </div>
                <span className="text-lg text-gray-100">Kostenlose Erstberatung vor Ort</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-600/40">
                  <Check size={16} className="text-white" />
                </div>
                <span className="text-lg text-gray-100">Fördermittel-Check inklusive</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-600/40">
                  <Check size={16} className="text-white" />
                </div>
                <span className="text-lg text-gray-100">Schnelle Installation durch eigene Teams</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 mb-8">
              <button
                onClick={onOpenForm}
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold px-8 py-4 text-lg transition rounded-lg shadow-lg shadow-emerald-600/30"
              >
                Jetzt Angebot anfordern
              </button>
              <a href="tel:+4972112345678" className="text-emerald-500 hover:text-emerald-400 font-semibold">
                0721 123 456 78
              </a>
            </div>

            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded inline-flex">
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6" />
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-emerald-500 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-semibold">5.0 Bewertung</span>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://i.imgur.com/IuPvUY4.jpeg "
              alt="Modernes Haus mit Solar-Anlage"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6 rounded shadow-xl shadow-emerald-600/40">
              <div className="text-3xl font-bold">22 Jahre</div>
              <div className="font-semibold">Solar-Erfahrung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
