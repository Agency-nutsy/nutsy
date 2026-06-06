import './globals.css';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import LoadingScreen from '@/components/LoadingScreen';

/* ============================================
   TEMPLATE VARIABLES — Replace these for each salon
   ============================================ */
const SALON_NAME = 'Your Salon Name';
const SALON_TAGLINE = 'Premium Unisex Salon';
const SALON_PHONE = '+91 XXXXX XXXXX';
const SALON_PHONE_RAW = '+91XXXXXXXXXX'; // No spaces, for WhatsApp/tel links
const SALON_DOMAIN = 'https://yoursalon.com';
const SALON_ADDRESS = 'Your Full Address Here';
const SALON_CITY = 'Your City';
const SALON_STATE = 'Your State';
const SALON_PIN = '000000';
const SALON_RATING = '4.9';
const SALON_REVIEW_COUNT = '100';
const SALON_HOURS = 'Mo-Su 08:30-21:00';
const SALON_OWNER = 'Owner Name';
const SALON_INSTAGRAM = 'https://www.instagram.com/your_salon/';
const SALON_GOOGLE_MAPS = 'https://www.google.com/maps/search/Your+Salon';
/* ============================================ */

export const metadata = {
  metadataBase: new URL(SALON_DOMAIN),
  title: {
    default: `${SALON_NAME} ${SALON_CITY} | Hair, Skin, Bridal & Beauty Services`,
    template: `%s | ${SALON_NAME} ${SALON_CITY}`,
  },
  description: `${SALON_NAME} in ${SALON_CITY} — Premium unisex salon offering haircuts, hair colour, keratin, bridal makeup, facials, waxing, nail art & men's grooming. Book via WhatsApp: ${SALON_PHONE}.`,
  keywords: `unisex salon ${SALON_CITY.toLowerCase()}, hair salon ${SALON_CITY.toLowerCase()}, bridal makeup, keratin treatment, salon near me, ${SALON_NAME.toLowerCase()}, best salon ${SALON_CITY.toLowerCase()}`,
  authors: [{ name: `${SALON_NAME} — ${SALON_OWNER}` }],
  openGraph: {
    title: `${SALON_NAME} | Premium Hair & Beauty`,
    description: `${SALON_CITY}'s top-rated unisex salon. ${SALON_RATING}★ rated. Hair, Bridal, Skin, Nails & Spa.`,
    type: 'website',
    url: `${SALON_DOMAIN}/`,
    siteName: SALON_NAME,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SALON_DOMAIN}/`,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": SALON_NAME,
    "image": "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SALON_ADDRESS,
      "addressLocality": SALON_CITY,
      "addressRegion": SALON_STATE,
      "postalCode": SALON_PIN,
      "addressCountry": "IN"
    },
    "telephone": SALON_PHONE_RAW,
    "openingHours": SALON_HOURS,
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": SALON_RATING,
      "reviewCount": SALON_REVIEW_COUNT
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LoadingScreen />
        <a href="#main" className="skip-link sr-only">Skip to content</a>
        <ScrollProgress />
        <Navbar />
        <main id="main">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />

        {/* AOS Library */}
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
        <Script src="https://unpkg.com/aos@2.3.4/dist/aos.js" strategy="afterInteractive" />
        <Script id="aos-init" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              if (typeof AOS !== 'undefined') {
                AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
              }
            });
            setTimeout(function() {
              if (typeof AOS !== 'undefined') {
                AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
              }
            }, 500);
          `}
        </Script>
      </body>
    </html>
  );
}
