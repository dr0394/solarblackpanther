import { Star, Quote } from 'lucide-react';

export default function SocialProof() {
  const testimonials = [
    {
      name: 'Familie Müller',
      location: 'Karlsruhe',
      rating: 5,
      text: 'Von der Beratung bis zur Installation war alles perfekt. Unsere Solar-Anlage läuft einwandfrei und wir sparen monatlich mehrere hundert Euro. Absolute Empfehlung!',
    },
    {
      name: 'Thomas Schmidt',
      location: 'Ettlingen',
      rating: 5,
      text: 'Die Wärmepumpe wurde schnell und professionell installiert. Das Team war pünktlich, sauber und sehr kompetent. Förderanträge wurden komplett übernommen.',
    },
    {
      name: 'Sandra Wagner',
      location: 'Baden-Baden',
      rating: 5,
      text: 'Endlich unabhängig von steigenden Strompreisen! Solar Black Panther hat uns bestens beraten und ein maßgeschneidertes System installiert. Top Service!',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Über 500 zufriedene Kunden vertrauen auf Solar Black Panther
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition container-hover"
            >
              <Quote className="text-emerald-500 mb-4 icon-hover-rotate" size={40} />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-emerald-500 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="border-t border-white/20 pt-4">
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-gray-400 text-sm">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="text-5xl font-bold text-emerald-500 mb-2">500+</div>
            <div className="text-gray-300">Zufriedene Kunden</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="text-5xl font-bold text-emerald-500 mb-2">22</div>
            <div className="text-gray-300">Jahre Solar-Erfahrung</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="text-5xl font-bold text-emerald-500 mb-2">20</div>
            <div className="text-gray-300">Jahre Bau</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="text-5xl font-bold text-emerald-500 mb-2">5.0</div>
            <div className="text-gray-300">Google Bewertung</div>
          </div>
        </div>
      </div>
    </section>
  );
}
