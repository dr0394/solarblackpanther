import { Sun, Zap, ClipboardCheck, Wrench, HeadphonesIcon } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Sun,
      title: 'Photovoltaik-Anlagen',
      description: 'Maßgeschneiderte Solar-Lösungen mit hochwertigen Komponenten. Von der Planung über den Vertrieb bis zur Installation - alles aus Expertenhand.',
    },
    {
      icon: Zap,
      title: 'Wärmepumpen',
      description: 'Effiziente Heiz- und Kühlsysteme für maximalen Komfort. Modernste Technologie für nachhaltige Energieeinsparung.',
    },
    {
      icon: ClipboardCheck,
      title: 'Energetische Sanierung',
      description: 'Ganzheitliche energetische Sanierung Ihrer Immobilie. Wir optimieren Ihre Gebäudehülle für maximale Energieeffizienz.',
    },
    {
      icon: Wrench,
      title: 'Planung & Installation',
      description: 'Professionelle Installation durch qualifizierte Teams. Datengetriebener Ansatz für optimale Ergebnisse.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Service & Wartung',
      description: 'Langfristige Betreuung durch erfahrene Fachkräfte. 18 Jahre Branchenerfahrung garantieren höchste Qualität.',
    },
  ];

  return (
    <section id="leistungen" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Photovoltaik-Anlagen, Wärmepumpen und energetische Sanierungen - von der Planung über den Vertrieb bis zur Installation. Mit 22 Jahren Solar-Erfahrung und 20 Jahren Heizungs-Bau.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition container-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="text-white icon-hover-rotate" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://alkaio.com/media/25409323492092372.jpeg"
            alt="Professionelle Installation von Solar- und Wärmepumpenanlagen"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
