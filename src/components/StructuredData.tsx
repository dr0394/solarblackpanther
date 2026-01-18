import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "HeatingAndCoolingBusiness",
      "name": "Wärmepumpen Karlsruhe",
      "image": "https://yourdomain.de/logo.jpg",
      "@id": "https://yourdomain.de",
      "url": "https://yourdomain.de",
      "telephone": "+49-721-123-456-78",
      "priceRange": "€€€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Scheffelstr 60",
        "addressLocality": "Karlsruhe",
        "postalCode": "76135",
        "addressRegion": "Baden-Württemberg",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 49.0069,
        "longitude": 8.4037
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "14:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/yourpage",
        "https://www.instagram.com/yourpage"
      ],
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 49.0069,
          "longitude": 8.4037
        },
        "geoRadius": "50000"
      },
      "slogan": "Ihr Wärmepumpen-Experte in Karlsruhe",
      "description": "Wärmepumpen-Experte in Karlsruhe. Vaillant Premium Partner. Installation, Wartung und Service von Wärmepumpen mit bis zu 45% BAFA Förderung.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Wärmepumpen Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Wärmepumpen Installation",
              "description": "Professionelle Installation von Luft-Wasser-Wärmepumpen und Erdwärmepumpen"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Wärmepumpen Wartung",
              "description": "Regelmäßige Wartung und Service für optimale Effizienz"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "BAFA Förderung",
              "description": "Unterstützung bei der Beantragung von bis zu 45% BAFA Förderung"
            }
          }
        ]
      }
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://yourdomain.de"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Wärmepumpen",
          "item": "https://yourdomain.de#services"
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Was kostet eine Wärmepumpe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Kosten für eine Wärmepumpe liegen zwischen 15.000€ und 30.000€. Mit der BAFA-Förderung von bis zu 45% reduzieren sich die Kosten erheblich."
          }
        },
        {
          "@type": "Question",
          "name": "Wie hoch ist die BAFA-Förderung für Wärmepumpen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die BAFA-Förderung für Wärmepumpen beträgt aktuell bis zu 45% der förderfähigen Kosten. Wir unterstützen Sie bei der Antragsstellung."
          }
        },
        {
          "@type": "Question",
          "name": "Wie lange dauert die Installation einer Wärmepumpe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Installation einer Wärmepumpe dauert in der Regel 2-5 Tage, abhängig vom Umfang der Arbeiten und den örtlichen Gegebenheiten."
          }
        }
      ]
    };

    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'application/ld+json';
    script3.text = JSON.stringify(faqSchema);
    document.head.appendChild(script3);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);

  return null;
}
