import { Phone, MessageCircle } from 'lucide-react';

interface FinalCTAProps {
  onOpenForm: () => void;
}

export default function FinalCTA({ onOpenForm }: FinalCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-500 via-green-500 to-emerald-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Starten Sie jetzt Ihre Energiewende
        </h2>
        <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Sichern Sie sich Ihre kostenlose Beratung und profitieren Sie von steigenden Energiepreisen statt darunter zu leiden
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={onOpenForm}
            className="bg-dark-900 hover:bg-dark-800 text-white font-bold px-10 py-5 text-xl transition shadow-xl rounded-xl"
          >
            Jetzt Angebot anfordern
          </button>
          <a
            href="tel:+4972112345678"
            className="flex items-center space-x-3 bg-white hover:bg-gray-100 text-dark-900 font-bold px-10 py-5 text-xl transition shadow-xl rounded-xl"
          >
            <Phone size={24} className="icon-hover-rotate" />
            <span>+4917675093299</span>
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center space-x-8 text-white">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-semibold">Kostenlose Beratung</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-semibold">Unverbindlich</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-semibold">Vor Ort</span>
          </div>
        </div>
      </div>
    </section>
  );
}
