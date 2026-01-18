import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const updateMetaTags = () => {
      let title = 'Wärmepumpe Karlsruhe | Vaillant Wärmepumpen Installation & Service | bis 45% Förderung';
      let description = 'Wärmepumpen-Experte in Karlsruhe ✓ Vaillant Premium Partner ✓ bis 45% BAFA Förderung ✓ Kostenlose Beratung ✓ Installation & Wartung ✓ Professionell & Effizient. Jetzt anfragen!';
      let canonical = 'https://yourdomain.de';

      if (location.pathname === '/impressum') {
        title = 'Impressum | Wärmepumpen Karlsruhe';
        description = 'Impressum und Kontaktdaten von Wärmepumpen Karlsruhe - Ihr Vaillant Premium Partner';
        canonical = 'https://yourdomain.de/impressum';
      } else if (location.pathname === '/datenschutz') {
        title = 'Datenschutzerklärung | Wärmepumpen Karlsruhe';
        description = 'Datenschutzerklärung von Wärmepumpen Karlsruhe - Informationen zum Umgang mit Ihren Daten';
        canonical = 'https://yourdomain.de/datenschutz';
      }

      document.title = title;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', title);
      }

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      }

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', canonical);
      }

      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', title);
      }

      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', description);
      }

      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        linkCanonical.setAttribute('href', canonical);
      } else {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        linkCanonical.setAttribute('href', canonical);
        document.head.appendChild(linkCanonical);
      }
    };

    updateMetaTags();
  }, [location]);

  return null;
}
