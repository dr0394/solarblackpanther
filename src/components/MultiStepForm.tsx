import { useState } from 'react';
import { X, Home, Building, Factory, ChevronRight, MessageCircle, Mail } from 'lucide-react';

interface MultiStepFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MultiStepForm({ isOpen, onClose }: MultiStepFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: '',
    interest: '',
    postalCode: '',
    address: '',
    name: '',
    email: '',
    phone: '',
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const generateWhatsAppMessage = () => {
    const message = `Hallo Solar Black Panther Team,

ich interessiere mich für ein Angebot.

Meine Daten:
- Immobilientyp: ${formData.propertyType}
- Interesse: ${formData.interest}
- PLZ: ${formData.postalCode}
- Adresse: ${formData.address}
- Name: ${formData.name}
- E-Mail: ${formData.email}
- Telefon: ${formData.phone}

Bitte kontaktieren Sie mich für ein individuelles Angebot.

Vielen Dank!`;

    const whatsappUrl = `https://wa.me/4972112345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const generateEmailMessage = () => {
    const subject = 'Anfrage für Solar-Anlage / Wärmepumpe';
    const body = `Hallo Solar Black Panther Team,

ich interessiere mich für ein Angebot.

Meine Daten:
- Immobilientyp: ${formData.propertyType}
- Interesse: ${formData.interest}
- PLZ: ${formData.postalCode}
- Adresse: ${formData.address}
- Name: ${formData.name}
- E-Mail: ${formData.email}
- Telefon: ${formData.phone}

Bitte kontaktieren Sie mich für ein individuelles Angebot.

Vielen Dank!`;

    const mailtoUrl = `mailto:info@solar-black-panther.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Angebot anfordern</h2>
            <p className="text-gray-600">Schritt {step} von 4</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      s <= step
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {s}
                  </div>
                  {s < 4 && (
                    <div
                      className={`w-16 h-1 mx-2 ${
                        s < step ? 'bg-primary-400' : 'bg-gray-200'
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Welche Art von Immobilie haben Sie?
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <button
                  onClick={() => {
                    setFormData({ ...formData, propertyType: 'Einfamilienhaus' });
                    handleNext();
                  }}
                  className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary-400 hover:bg-primary-50 transition group"
                >
                  <Home className="mx-auto mb-4 text-gray-600 group-hover:text-primary-600" size={48} />
                  <div className="font-bold text-gray-900">Einfamilienhaus</div>
                </button>
                <button
                  onClick={() => {
                    setFormData({ ...formData, propertyType: 'Mehrfamilienhaus' });
                    handleNext();
                  }}
                  className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary-400 hover:bg-primary-50 transition group"
                >
                  <Building className="mx-auto mb-4 text-gray-600 group-hover:text-primary-600" size={48} />
                  <div className="font-bold text-gray-900">Mehrfamilienhaus</div>
                </button>
                <button
                  onClick={() => {
                    setFormData({ ...formData, propertyType: 'Gewerbe' });
                    handleNext();
                  }}
                  className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary-400 hover:bg-primary-50 transition group"
                >
                  <Factory className="mx-auto mb-4 text-gray-600 group-hover:text-primary-600" size={48} />
                  <div className="font-bold text-gray-900">Gewerbe</div>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Wofür interessieren Sie sich?
              </h3>
              <div className="space-y-3">
                {['Solar-Anlage', 'Wärmepumpe', 'Solar-Anlage + Wärmepumpe', 'Beratung'].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setFormData({ ...formData, interest: option });
                      handleNext();
                    }}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-primary-400 hover:bg-primary-50 transition text-left flex justify-between items-center"
                  >
                    <span className="font-semibold text-gray-900">{option}</span>
                    <ChevronRight className="text-primary-600" size={24} />
                  </button>
                ))}
              </div>
              <button
                onClick={handleBack}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                &larr; Zurück
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Wo befindet sich Ihre Immobilie?
              </h3>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Postleitzahl *
                </label>
                <input
                  type="text"
                  value={formData.postalCode}
                  onChange={(e) =>
                    setFormData({ ...formData, postalCode: e.target.value })
                  }
                  placeholder="76135"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Adresse *
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  placeholder="Straße und Hausnummer"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handleBack}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-lg transition"
                >
                  Zurück
                </button>
                <button
                  onClick={handleNext}
                  disabled={!formData.postalCode || !formData.address}
                  className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary-500/20"
                >
                  Weiter
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ihre Kontaktdaten
              </h3>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Max Mustermann"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="max@beispiel.de"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="0721 123456"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{' '}
                  <a href="/datenschutz" className="text-primary-600 hover:underline">
                    Datenschutzerklärung
                  </a>{' '}
                  zu.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-gray-900">Anfrage senden per:</h4>
                <button
                  onClick={generateWhatsAppMessage}
                  disabled={!formData.name || !formData.email}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-lg transition flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <MessageCircle size={24} />
                  <span>Per WhatsApp senden</span>
                </button>
                <button
                  onClick={generateEmailMessage}
                  disabled={!formData.name || !formData.email}
                  className="w-full bg-dark-900 hover:bg-dark-800 text-white font-semibold px-6 py-4 rounded-lg transition flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Mail size={24} />
                  <span>Per E-Mail senden</span>
                </button>
              </div>

              <button
                onClick={handleBack}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                &larr; Zurück
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
