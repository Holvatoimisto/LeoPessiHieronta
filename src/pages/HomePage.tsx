import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/sections/HeroSection';
import { IntroSection } from '@/sections/IntroSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { ExpertSection } from '@/sections/ExpertSection';
import { ReviewsSection } from '@/sections/ReviewsSection';
import { PricingPreviewSection } from '@/sections/PricingPreviewSection';
import { FAQSection } from '@/sections/FAQSection';
import { FinalCTASection } from '@/sections/FinalCTASection';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>The Back Room — Kiropraktiikka Tampere | Hieronta | Personal Training</title>
        <meta name="description" content="Kohti kevyempää ja kivuttomampaa oloa. Kiropraktiikkaa, hierontaa ja personal trainingia Tampereen keskustassa. Varaa aika jo tänään." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "The Back Room",
          "description": "Kiropraktiikkaa, hierontaa ja personal trainingia Tampereella",
          "url": "https://www.thebackroom.fi",
          "telephone": "+358400601819",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Papinkatu 19",
            "addressLocality": "Tampere",
            "postalCode": "33200",
            "addressCountry": "FI"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "61.4978",
            "longitude": "23.7610"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          ],
          "priceRange": "$$",
          "paymentAccepted": "Cash, Credit Card, ePassi, Smartum"
        })}</script>
      </Helmet>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <PricingPreviewSection />
      <ReviewsSection />
      <ExpertSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
