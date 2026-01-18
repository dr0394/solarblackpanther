import { Phone, ClipboardCheck, FileText, Wrench, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Phone,
      title: 'Kontakt & Beratung',
      description: 'Sie kontaktieren uns per Telefon, WhatsApp oder Formular. Wir vereinbaren einen kostenlosen Beratungstermin vor Ort.',
    },
    {
      icon: ClipboardCheck,
      title: 'Vorprüfung & Analyse',
      description: 'Unser Experte prüft Ihre Immobilie, analysiert den Energiebedarf und erstellt ein maßgeschneidertes Konzept.',
    },
    {
      icon: FileText,
      title: 'Angebot & Förderung',
      description: 'Sie erhalten ein transparentes Angebot inkl. Fördermittel-Check. Wir unterstützen Sie bei der Beantragung.',
    },
    {
      icon: Wrench,
      title: 'Installation',
      description: 'Unsere qualifizierten Teams installieren Ihre Solar-Anlage bzw. Wärmepumpe schnell und professionell.',
    },
    {
      icon: CheckCircle,
      title: 'Inbetriebnahme',
      description: 'Nach erfolgreicher Installation und Abnahme nehmen wir Ihre Anlage in Betrieb. Sie sparen ab Tag 1.',
    },
  ];

  return (
    <section id="ablauf" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            So einfach geht's
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In 5 Schritten zu Ihrer eigenen Solar-Anlage oder Wärmepumpe
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-emerald-500 -translate-y-1/2" style={{ zIndex: 0 }}></div>

          <div className="grid md:grid-cols-5 gap-8 relative" style={{ zIndex: 1 }}>
            {steps.map((step, index) => (
              <div key={index} className="text-center container-hover">
                <div className="bg-white mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="text-white icon-hover-rotate" size={32} />
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-emerald-600 font-bold text-sm mb-2">SCHRITT {index + 1}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
