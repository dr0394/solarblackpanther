import { Euro, TrendingUp, Award, Shield, Leaf, Home } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Euro,
      title: 'Energiekosten senken',
      description: 'Sparen Sie bis zu 70% Ihrer jährlichen Energiekosten durch eigenen Solarstrom und effiziente Wärmepumpen.',
      stat: 'bis zu 70%',
    },
    {
      icon: TrendingUp,
      title: 'Immobilienwert steigern',
      description: 'Moderne Energiesysteme erhöhen den Marktwert Ihrer Immobilie nachhaltig und messbar.',
      stat: '+15-20%',
    },
    {
      icon: Award,
      title: 'Staatliche Förderung',
      description: 'Profitieren Sie von attraktiven Zuschüssen der KfW und BAFA für Solar und Wärmepumpen.',
      stat: 'bis zu 45%',
    },
    {
      icon: Shield,
      title: 'Energieunabhängigkeit',
      description: 'Machen Sie sich unabhängig von steigenden Strompreisen und unsicheren Energiemärkten.',
      stat: '100%',
    },
    {
      icon: Leaf,
      title: 'Klimaschutz',
      description: 'Reduzieren Sie Ihren CO2-Fußabdruck und leisten Sie einen aktiven Beitrag zum Umweltschutz.',
      stat: '-5t CO2',
    },
    {
      icon: Home,
      title: 'Wohnkomfort',
      description: 'Genießen Sie angenehme Temperaturen das ganze Jahr über bei niedrigsten Betriebskosten.',
      stat: '24/7',
    },
  ];

  return (
    <section id="vorteile" className="py-20 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ihre Vorteile mit Solar Black Panther
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Wir schaffen Arbeitsplätze, entlasten Familien von hohen Energiekosten und leisten gleichzeitig einen wichtigen Beitrag zur Natur, Wirtschaft und zum Umweltschutz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition container-hover"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                  <benefit.icon className="text-white icon-hover-rotate" size={28} />
                </div>
                <div className="text-emerald-500 font-bold text-2xl">{benefit.stat}</div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
          <img
  src="https://alkaio.com/media/1384877615978446.jpeg"
  alt="Energieeffiziente Gebäude mit Solar und Wärmepumpe"
  className="w-full max-h-[500px] object-contain bg-black/20"
/>
        </div>
      </div>
    </section>
  );
}
