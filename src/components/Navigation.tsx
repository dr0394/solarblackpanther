import { useState, useEffect } from 'react';
import { Search, User } from 'lucide-react';

interface NavigationProps {
  onOpenForm: () => void;
}

export default function Navigation({ onOpenForm }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-12">
            <a href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Solar Black Panther Logo"
                className="h-20 w-auto"
                style={{ mixBlendMode: 'screen' }}
              />
            </a>

            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('leistungen')}
                className="text-gray-300 hover:text-primary-400 transition-colors text-[15px] font-medium"
              >
                Leistungen
              </button>
              <button
                onClick={() => scrollToSection('vorteile')}
                className="text-gray-300 hover:text-primary-400 transition-colors text-[15px] font-medium"
              >
                Vorteile
              </button>
              <button
                onClick={() => scrollToSection('ablauf')}
                className="text-gray-300 hover:text-primary-400 transition-colors text-[15px] font-medium"
              >
                Ablauf
              </button>
              <button
                onClick={() => scrollToSection('anlagen')}
                className="text-gray-300 hover:text-primary-400 transition-colors text-[15px] font-medium"
              >
                Unsere Anlagen
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="text-gray-300 hover:text-primary-400 transition-colors text-[15px] font-medium"
              >
                Kontakt
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenForm}
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-2.5 rounded-full transition-all duration-200 text-[15px]"
            >
              Geschäftspartner
            </button>
            <button className="p-2 text-gray-300 hover:text-primary-400 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-300 hover:text-primary-400 transition-colors">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
