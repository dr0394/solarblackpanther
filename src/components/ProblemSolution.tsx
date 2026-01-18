import { TrendingDown, Zap, Sun } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-lg mb-4 font-semibold">
              Das Problem
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Explodierende Energiekosten belasten Ihr Budget
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3 container-hover">
                <TrendingDown className="text-red-600 flex-shrink-0 mt-1 icon-hover-rotate" size={24} />
                <p className="text-lg">Steigende Strompreise machen Wohnen und Heizen unbezahlbar</p>
              </div>
              <div className="flex items-start space-x-3 container-hover">
                <TrendingDown className="text-red-600 flex-shrink-0 mt-1 icon-hover-rotate" size={24} />
                <p className="text-lg">Abhängigkeit von fossilen Energieträgern und unsicheren Märkten</p>
              </div>
              <div className="flex items-start space-x-3 container-hover">
                <TrendingDown className="text-red-600 flex-shrink-0 mt-1 icon-hover-rotate" size={24} />
                <p className="text-lg">Veraltete Heizsysteme verschwenden Energie und Geld</p>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-lg mb-4 font-semibold">
              Die Lösung
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Solar & Wärmepumpe: Ihre Energiewende beginnt jetzt
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3 container-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <Sun className="text-white icon-hover-rotate" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Eigener Solarstrom</h3>
                  <p>Produzieren Sie Ihren eigenen Strom und senken Sie Ihre Kosten um bis zu 70%</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 container-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="text-white icon-hover-rotate" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Effiziente Wärmepumpe</h3>
                  <p>Heizen Sie umweltfreundlich mit bis zu 75% weniger Energiekosten</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 container-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <TrendingDown className="text-white icon-hover-rotate" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Staatliche Förderung</h3>
                  <p>Profitieren Sie von attraktiven Zuschüssen und günstigen Finanzierungen</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://alkaio.com/media/3242045975976966.jpeg
"
            alt="Moderne Solaranlage und Wärmepumpe für nachhaltiges Wohnen"
            className="w-full h-auto md:h-[500px] object-contain md:object-cover"
          />
        </div>
      </div>
    </section>
  );
}
