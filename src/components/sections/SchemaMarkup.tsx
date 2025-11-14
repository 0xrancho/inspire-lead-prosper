import { Helmet } from "react-helmet-async";

interface SchemaMarkupProps {
  type?: "organization" | "faq";
  faqData?: Array<{ question: string; answer: string }>;
}

const SchemaMarkup = ({ type = "organization", faqData }: SchemaMarkupProps) => {
  // Organization schema - appears on all pages
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "C12 Indianapolis",
    "alternateName": "C12 Indy",
    "url": "https://www.c12indy.com",
    "description": "C12 Indianapolis is a Christian CEO peer advisory organization bringing together business leaders in confidential forums for mutual support, accountability, and growth through biblical principles and world-class business curriculum.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Indianapolis",
      "addressRegion": "IN",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "39.7684",
        "longitude": "-86.1581"
      },
      "geoRadius": "50 miles",
      "description": "Indianapolis and Central Indiana"
    },
    "founder": {
      "@type": "Person",
      "name": "Kelly Schwedland"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "C12 Group",
      "url": "https://www.c12group.com"
    },
    "knowsAbout": [
      "CEO peer advisory",
      "Christian business leadership",
      "Executive coaching",
      "Business strategy",
      "Faith-based leadership",
      "Biblical business principles"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "CEOs, Business Owners, Executives",
      "geographicArea": {
        "@type": "Place",
        "name": "Indianapolis, Indiana"
      }
    }
  };

  // LocalBusiness schema - adds local business details
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "C12 Indianapolis",
    "image": "https://www.c12indy.com/logo.png",
    "url": "https://www.c12indy.com",
    "telephone": "",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Indianapolis",
      "addressRegion": "IN",
      "postalCode": "",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.7684,
      "longitude": -86.1581
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "areaServed": "Indianapolis, Indiana",
    "serviceType": [
      "CEO Peer Advisory",
      "Executive Coaching",
      "Business Leadership Development",
      "Faith-Based Business Consulting"
    ],
    "knowsAbout": [
      "Christian business leadership",
      "CEO forums",
      "Executive development",
      "Biblical leadership principles"
    ]
  };

  // FAQ schema - only for FAQ page
  const faqSchema = faqData
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    : null;

  return (
    <Helmet>
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* FAQ Schema (only if faqData provided) */}
      {type === "faq" && faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SchemaMarkup;
