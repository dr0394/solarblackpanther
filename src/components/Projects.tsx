import { MapPin, Calendar } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      image: 'https://i.imgur.com/8Nh4C2T.jpeg',
      title: 'Einfamilienhaus Karlsruhe',
      location: 'Karlsruhe-Durlach',
      type: 'Solar-Anlage 12 kWp + Speicher',
      year: '2024',
    },
    {
      image: 'https://i.imgur.com/xAKsSX0.jpeg',
      title: 'Mehrfamilienhaus Baden-Baden',
      location: 'Baden-Baden',
      type: 'Wärmepumpe + Solar 18 kWp',
      year: '2024',
    },
    {
      image: 'https://i.imgur.com/E2x42tl.jpeg',
      title: 'Gewerbe Pforzheim',
      location: 'Pforzheim',
      type: 'Solar-Anlage 45 kWp',
      year: '2023',
    },
    {
      image: 'https://i.imgur.com/x5plqdo.jpeg',
      title: 'Doppelhaushälfte Ettlingen',
      location: 'Ettlingen',
      type: 'Luft-Wasser Wärmepumpe',
      year: '2024',
    },
    {
      image: 'https://i.imgur.com/J7Ut2iA.jpeg',
      title: 'Neubau Bruchsal',
      location: 'Bruchsal',
      type: 'Solar 15 kWp + Wärmepumpe',
      year: '2024',
    },
    {
      image: 'https://i.imgur.com/XhXcaJq.jpeg',
      title: 'Altbau-Sanierung Rastatt',
      location: 'Rastatt',
      type: 'Komplettsanierung mit Solar',
      year: '2023',
    },
    {
      image: 'https://alkaio.com/media/1203377788437215.jpeg',
      title: 'Wohnanlage Karlsruhe',
      location: 'Karlsruhe',
      type: 'Solar-Anlage mit Speichersystem',
      year: '2024',
    },
    {
      image: 'https://i.imgur.com/jma6hYD.jpeg',
      title: 'Modernisierung Pforzheim',
      location: 'Pforzheim',
      type: 'Wärmepumpe + Photovoltaik',
      year: '2024',
    },
  ];

  return (
    <section id="anlagen" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unsere Anlagen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Über 500 zufriedene Kunden in Karlsruhe und Baden-Württemberg vertrauen uns
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition container-hover"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-3 py-1 rounded-lg font-semibold text-sm">
                  {project.year}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-emerald-600 icon-hover-rotate" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-emerald-600 icon-hover-rotate" />
                    <span>{project.type}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
