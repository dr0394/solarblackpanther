import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Wie lange dauert die Installation einer Solar-Anlage?',
      answer: 'Die Installation einer typischen Photovoltaik-Anlage für ein Einfamilienhaus dauert in der Regel 2-3 Tage. Nach der Montage erfolgt die Inbetriebnahme durch unsere Elektriker und die Anmeldung beim Netzbetreiber.',
    },
    {
      question: 'Welche Förderungen kann ich in Anspruch nehmen?',
      answer: 'Sie können von verschiedenen Förderprogrammen profitieren: KfW-Kredite mit günstigen Zinsen, BAFA-Zuschüsse für Wärmepumpen (bis zu 45%), regionale Förderprogramme in Baden-Württemberg sowie steuerliche Absetzbarkeit. Wir prüfen alle Möglichkeiten für Sie und übernehmen die Antragstellung.',
    },
    {
      question: 'Ist mein Dach für eine Solar-Anlage geeignet?',
      answer: 'Die meisten Dächer sind für Solar-Anlagen geeignet. Wichtige Faktoren sind: Ausrichtung (ideal: Süd, aber auch Ost-West funktioniert), Neigung (25-35° optimal), ausreichende Fläche und Statik. Bei unserem kostenlosen Vor-Ort-Termin prüfen wir alle Voraussetzungen.',
    },
    {
      question: 'Lohnt sich eine Wärmepumpe auch im Altbau?',
      answer: 'Ja, moderne Wärmepumpen funktionieren auch in Altbauten sehr gut. Wichtig ist eine fachgerechte Planung und ggf. eine energetische Sanierung der Gebäudehülle. Wir analysieren Ihre Immobilie und erstellen ein passendes Konzept.',
    },
    {
      question: 'Was kostet eine komplette Solar-Anlage?',
      answer: 'Die Kosten variieren je nach Anlagengröße, Speicher und individuellen Anforderungen. Eine typische Anlage für ein Einfamilienhaus (8-10 kWp) kostet zwischen 15.000-25.000 € inkl. Installation. Durch Förderungen reduziert sich Ihre Investition deutlich. Wir erstellen Ihnen ein individuelles Angebot.',
    },
    {
      question: 'Wie hoch ist die Ersparnis mit Solar und Wärmepumpe?',
      answer: 'Die Ersparnis hängt von Ihrem Energieverbrauch ab. Im Durchschnitt sparen Haushalte 60-70% ihrer Stromkosten durch eine Solar-Anlage und bis zu 75% der Heizkosten durch eine Wärmepumpe. Die Amortisation erfolgt meist nach 8-12 Jahren.',
    },
    {
      question: 'Bieten Sie auch Wartung und Service an?',
      answer: 'Ja, wir bieten umfassende Wartungs- und Serviceverträge an. Solar-Anlagen sind sehr wartungsarm, sollten aber regelmäßig überprüft werden. Wärmepumpen benötigen eine jährliche Wartung. Wir kümmern uns um alles und sorgen für optimale Performance.',
    },
    {
      question: 'Wie läuft die Finanzierung ab?',
      answer: 'Wir arbeiten mit verschiedenen Finanzierungspartnern zusammen und helfen Ihnen bei der Beantragung von KfW-Krediten mit günstigen Konditionen. Auch Ratenzahlung und Mietkauf-Modelle sind möglich. Wir finden die beste Lösung für Ihr Budget.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Häufige Fragen
          </h2>
          <p className="text-xl text-gray-600">
            Alles, was Sie über Solar-Anlagen und Wärmepumpen wissen müssen
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition"
              >
                <span className="font-bold text-lg text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`flex-shrink-0 ml-4 text-yellow-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
