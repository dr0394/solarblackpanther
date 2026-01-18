import { Shield, Award, FileCheck, Users, Handshake, GraduationCap } from 'lucide-react';

export default function Trust() {
  const trustElements = [
    {
      icon: Shield,
      title: 'Geprüfte Qualität',
      description: 'Zertifizierte Fachbetriebe und geprüfte Installateure garantieren höchste Qualitätsstandards',
    },
    {
      icon: Award,
      title: 'Premium-Hersteller',
      description: 'Wir arbeiten ausschließlich mit führenden Herstellern und bieten umfassende Garantien',
    },
    {
      icon: FileCheck,
      title: 'Transparente Angebote',
      description: 'Festpreise ohne versteckte Kosten - Sie wissen von Anfang an, was Sie erwartet',
    },
    {
      icon: Users,
      title: 'Persönliche Betreuung',
      description: 'Ihr fester Ansprechpartner begleitet Sie von der Planung bis zur Inbetriebnahme',
    },
    {
      icon: Handshake,
      title: 'Starke Partnerschaften',
      description: 'Langjährige Zusammenarbeit mit führenden Herstellern und Zulieferern für beste Qualität',
    },
    {
      icon: GraduationCap,
      title: 'Geschultes Team',
      description: 'Regelmäßige Weiterbildungen und Zertifizierungen garantieren höchstes Fachwissen',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Darauf können Sie vertrauen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mit 22 Jahren Solar-Erfahrung und 20 Jahren Heizungs-Bau setzen wir auf nachhaltige Produkte, starke Partner und geschulte Teams. Qualität statt Masse - das ist unser Versprechen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustElements.map((element, index) => (
            <div
              key={index}
              className="text-center container-hover"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 transition">
                <element.icon className="text-white icon-hover-rotate" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{element.title}</h3>
              <p className="text-gray-600 leading-relaxed">{element.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-dark-900 to-dark-800 text-white p-12 rounded-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">22 Jahre</div>
              <div className="text-gray-300">Solar-Erfahrung</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">20 Jahre</div>
              <div className="text-gray-300">Heizungs-Bau</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">100%</div>
              <div className="text-gray-300">Kundenzufriedenheit</div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://i.imgur.com/R596HHJ.jpeg"
            alt="Unsere Projekte und Installationen"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
