import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import VaillantSection from './components/VaillantSection';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Funding from './components/Funding';
import Projects from './components/Projects';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ServiceArea from './components/ServiceArea';
import Trust from './components/Trust';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import WhatsAppButton from './components/WhatsAppButton';
import MultiStepForm from './components/MultiStepForm';
import SEO from './components/SEO';
import StructuredData from './components/StructuredData';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <StructuredData />
      <Navigation onOpenForm={() => setShowForm(true)} />
      <Hero onOpenForm={() => setShowForm(true)} />

      <ProblemSolution />
      <Services />
      <VaillantSection onOpenForm={() => setShowForm(true)} />

      <Benefits />
      <Funding />
      <Projects />
      <SocialProof />
      <FAQ />
      <Contact onOpenForm={() => setShowForm(true)} />
      <ServiceArea />
      <Trust />
      <FinalCTA onOpenForm={() => setShowForm(true)} />
      <Footer />
      <CookieBanner />
      <WhatsAppButton />
      <MultiStepForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </div>
  );
}

export default App;
