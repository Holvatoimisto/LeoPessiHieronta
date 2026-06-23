import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';

const chiroPrices = [
  { service: 'Ensimmäinen käynti (sis. alkukartoitus)', price: '84€' },
  { service: 'Jatkohoito', price: '80€' },
  { service: 'Akupunktio + kiropraktiikka', price: '94€' },
];

const massagePrices = [
  { service: '45 min klassinen hieronta', price: '50€' },
  { service: '60 min klassinen hieronta', price: '65€' },
  { service: '60 min urheiluhieronta', price: '65€' },
  { service: '60 min mobilisoiva hieronta', price: '70€' },
];

const ptPrices = [
  { service: 'Yksittäinen valmennus', price: '75€' },
  { service: 'Starter-paketti (5x)', price: '350€' },
  { service: 'Classic-paketti (10x)', price: '650€' },
  { service: 'Premium-paketti (20x + ravinto)', price: '1200€' },
];

function PriceTable({ title, prices, dark = false }: { title: string; prices: { service: string; price: string }[]; dark?: boolean }) {
  return (
    <div className={`${dark ? 'bg-[#151B18]' : 'bg-white-custom'} p-8 rounded-lg`}>
      <h3 className={`font-marcellus text-[24px] ${dark ? 'text-[#F4F4F4]' : 'text-[#080C0A]'} mb-6`}>{title}</h3>
      <div className="space-y-0">
        {prices.map((p, i) => (
          <div key={i} className={`flex justify-between items-center py-4 ${i < prices.length - 1 ? `border-b ${dark ? 'border-[rgba(244,244,244,0.1)]' : 'border-[rgba(8,12,10,0.08)]'}` : ''}`}>
            <span className={`font-jakarta text-[15px] ${dark ? 'text-[#F4F4F4]' : 'text-[#151B18]'}`}>{p.service}</span>
            <span className={`font-marcellus text-[18px] font-semibold ${dark ? 'text-gold' : 'text-[#080C0A]'}`}>{p.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Hinnasto — The Back Room Tampere</title>
        <meta name="description" content="Selkeät hinnat ilman piilokuluja. Kiropraktiikka, hieronta ja personal training Tampereella. Tutustu hinnastoomme ja varaa aika." />
      </Helmet>

      {/* Header */}
      <section className="bg-[#080C0A] pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <h1 className="font-marcellus text-[36px] md:text-[48px] text-[#F4F4F4] mb-4">
              Hinnasto
            </h1>
            <p className="font-jakarta text-[16px] md:text-[18px] text-[#9A9A9A]">
              Selkeät hinnat ilman piilokuluja.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing tables */}
      <section className="bg-[#F4F4F4] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto space-y-8">
          <ScrollReveal>
            <PriceTable title="Kiropraktiikka" prices={chiroPrices} />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <PriceTable title="Hieronta" prices={massagePrices} dark />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <PriceTable title="Personal Training" prices={ptPrices} />
          </ScrollReveal>
        </div>
      </section>

      {/* Payment methods */}
      <section className="bg-[#080C0A] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-marcellus text-[24px] text-[#F4F4F4] mb-4">Maksutavat</h2>
            <p className="font-jakarta text-[16px] text-[#9A9A9A] mb-8">
              Käteinen, pankkikortti, ePassi, Smartum, Eazybreak, Edenred
            </p>
            <Link
              to="/yhteystiedot"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded font-jakarta text-[15px] font-semibold tracking-wide bg-gold text-[#080C0A] hover:bg-white-custom hover:shadow-[0_4px_20px_rgba(212,160,61,0.3)] transition-all duration-300"
            >
              Varaa aika
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
