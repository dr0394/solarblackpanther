import { Award, Euro, FileText, TrendingDown } from 'lucide-react';

export default function Funding() {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Förderungen & Investition in die Zukunft
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Nutzen Sie staatliche Zuschüsse und attraktive Finanzierungsmodelle für Ihre Energiewende. Solar Black Panther entwickelt ein skalierbares Geschäftsmodell im am schnellsten wachsenden Zukunftsmarkt: Solarenergie.
            </p>
            <div className="bg-emerald-600/20 backdrop-blur-sm border border-emerald-500/30 p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-3">Unsere Vision</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                Durch die Kombination aus hochwertigen Photovoltaik-Lösungen, einer starken Marke und einem datengetriebenen Vertriebsansatz erschließen wir neue Märkte und treiben nachhaltiges Wachstum voran.
              </p>
              <p className="text-emerald-400 font-semibold">
                Wir bauen ein Vertriebsteam mit 10 qualifizierten Mitarbeitern auf, um Prozesse zu optimieren und den Vertrieb als zentrale Triebkraft unseres Erfolgs zu etablieren.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 container-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Award className="text-white icon-hover-rotate" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">KfW-Förderung</h3>
                  <p className="text-gray-300">Attraktive Zuschüsse für energieeffiziente Sanierungen und Neubauten</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 container-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Euro className="text-white icon-hover-rotate" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">BAFA-Zuschüsse</h3>
                  <p className="text-gray-300">Bis zu 45% Förderung für Wärmepumpen und erneuerbare Heizsysteme</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 container-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingDown className="text-white icon-hover-rotate" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Steuervorteile</h3>
                  <p className="text-gray-300">Profitieren Sie von der steuerlichen Absetzbarkeit energetischer Sanierungen</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 container-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FileText className="text-white icon-hover-rotate" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fördermittel-Service</h3>
                  <p className="text-gray-300">Wir übernehmen die komplette Antragstellung und Abwicklung für Sie</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-12 rounded-xl text-white">
            <h3 className="text-3xl font-bold mb-6">Investition & Rendite</h3>
            <div className="space-y-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-3">Für Privatkunden</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Solar-Anlage (10 kWp)</span>
                    <span className="text-xl font-bold">18.000 €</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Staatliche Förderung</span>
                    <span className="font-bold text-green-300">- 3.600 €</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-white/30 pt-3">
                    <span className="font-semibold">Jährliche Ersparnis</span>
                    <span className="text-xl font-bold">ca. 1.800 €</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-2 border-white/40">
                <h4 className="text-xl font-bold mb-3">Für Kapitalgeber</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Kapitalbedarf</span>
                    <span className="text-2xl font-bold">388.000 €</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Rendite</span>
                    <span className="text-2xl font-bold text-green-300">18% p.a.</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Laufzeit</span>
                    <span className="font-bold">10 Jahre</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white/10 rounded-xl">
              <p className="text-sm leading-relaxed">
                Solar Black Panther sucht derzeit einen Kapitalgeber für nachhaltiges Wachstum. Mit unserem skalierbaren Geschäftsmodell, effizienten Prozessen und starkem Vertrieb sind wir optimal positioniert für den Zukunftsmarkt Solarenergie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
