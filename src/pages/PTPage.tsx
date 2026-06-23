import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Heart, Dumbbell, Apple, TrendingUp } from 'lucide-react';

const benefits = [
  { icon: <Heart size={32} />, title: 'Liikkuvuus', desc: 'Paranna nivelten liikelaajuutta ja vähennä kipua' },
  { icon: <Dumbbell size={32} />, title: 'Voima', desc: 'Rakenna toiminnallista voimaa arjen askareisiin' },
  { icon: <Apple size={32} />, title: 'Ravinto', desc: 'Yksilöllinen ravinto-ohjaus osana kokonaisuutta' },
  { icon: <TrendingUp size={32} />, title: 'Energia', desc: 'Lisää energiaa ja jaksamista arkeen' },
];

const packages = [
  {
    name: 'Starter',
    desc: 'Tutustumispaketti, joka sisältää alkukartoituksen ja 5 valmennuskertaa.',
    price: '350€',
    features: ['Alkukartoitus', '5 x valmennus', 'Kotiharjoitusohjelma'],
  },
  {
    name: 'Classic',
    desc: 'Suosituin pakettimme — 10 valmennuskertaa alkukartoituksella.',
    price: '650€',
    features: ['Alkukartoitus', '10 x valmennus', 'Kotiharjoitusohjelma', 'Ravintoneuvonta'],
    popular: true,
  },
  {
    name: 'Premium',
    desc: 'Kattavin paketti, joka sisältää 20 valmennuskertaa ja täyden ravinto-ohjelman.',
    price: '1200€',
    features: ['Alkukartoitus', '20 x valmennus', 'Kotiharjoitusohjelma', 'Täysi ravinto-ohjelma', 'Seuranta ja tuki'],
  },
];

export function PTPage() {
  return (
    <>
      <Helmet>
        <title>Personal Training Tampere — The Back Room</title>
        <meta name="description" content="Yksilöllistä valmennusta yli 40-vuotiaille naisille. Liikkuvuutta, voimaa ja energiaa MyOver40®-menetelmällä. Varaa aika Tampereella." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/pt_valmennus.jpg" alt="Personal Training" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,12,10,0.4)] to-[rgba(8,12,10,0.85)]" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h1 className="font-marcellus text-[36px] md:text-[48px] text-[#F4F4F4] mb-4">
              Personal Training Tampereella
            </h1>
            <p className="font-jakarta text-[16px] md:text-[18px] text-[#F4F4F4]/85 max-w-[600px] mb-8">
              Yksilöllistä valmennusta yli 40-vuotiaille naisille. Liikkuvuutta, voimaa ja energiaa.
            </p>
            <Link
              to="/yhteystiedot"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded font-jakarta text-[15px] font-semibold tracking-wide bg-gold text-[#080C0A] hover:bg-white-custom hover:shadow-[0_4px_20px_rgba(212,160,61,0.3)] transition-all duration-300"
            >
              Varaa aika alkukartoitukseen
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Method */}
      <section className="bg-[#F4F4F4] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-marcellus text-[32px] md:text-[36px] text-[#080C0A] mb-4">
                MyOver40® — Liiku paremmin
              </h2>
              <p className="font-jakarta text-[16px] text-[#9A9A9A] max-w-[700px] mx-auto">
                MyOver40® on yli 40-vuotiaille naisille suunniteltu valmennusmenetelmä, joka yhdistää liikkuvuusharjoittelun, lihaskunto-ohjelman ja ravintovalmennuksen kokonaisvaltaiseksi hyvinvointipaketiksi.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="text-gold">{b.icon}</div>
                  <h3 className="font-marcellus text-[20px] text-[#080C0A]">{b.title}</h3>
                  <p className="font-jakarta text-[14px] text-[#9A9A9A]">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-[#151B18] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <h2 className="font-marcellus text-[32px] md:text-[36px] text-[#F4F4F4] text-center mb-14">
              Valitse sinulle sopiva paketti
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className={`bg-[#080C0A] p-8 rounded-lg relative ${pkg.popular ? 'ring-2 ring-gold' : ''}`}>
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-jakarta text-[12px] font-semibold bg-gold text-[#080C0A] px-4 py-1 rounded-full uppercase tracking-wider">
                      Suosituin
                    </span>
                  )}
                  <h3 className="font-marcellus text-[24px] text-[#F4F4F4] mb-2">{pkg.name}</h3>
                  <p className="font-marcellus text-[36px] text-gold mb-4">{pkg.price}</p>
                  <p className="font-jakarta text-[14px] text-[#9A9A9A] mb-6">{pkg.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="font-jakarta text-[14px] text-[#F4F4F4] flex items-center gap-2">
                        <span className="text-gold">•</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/yhteystiedot"
                    className={`block text-center font-jakarta text-[14px] font-semibold py-3 rounded transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gold text-[#080C0A] hover:bg-white-custom'
                        : 'border border-[#F4F4F4]/30 text-[#F4F4F4] hover:border-[#F4F4F4]'
                    }`}
                  >
                    Varaa
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer */}
      <section className="bg-[#080C0A] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 md:gap-16 items-center">
          <ScrollReveal direction="left">
            <img
              src="/assets/sari_potrait.jpg"
              alt="Sari Kuivanen, Personal Trainer"
              loading="lazy"
              className="w-full max-w-[400px] mx-auto rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            />
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <p className="font-jakarta text-[13px] font-semibold uppercase tracking-[1.5px] text-gold mb-3">
                VALMENTAJAMME
              </p>
              <h2 className="font-marcellus text-[32px] text-[#F4F4F4] mb-2">Sari Kuivanen</h2>
              <p className="font-jakarta text-[16px] text-gold mb-6">
                Personal Trainer, MyOver40® Master Trainer
              </p>
              <p className="font-jakarta text-[16px] text-[#9A9A9A] leading-relaxed mb-4">
                Sari on erikoistunut yli 40-vuotiaille naisille suunnattuun liikkuvuus- ja voimaharjoitteluun. MyOver40®-menetelmän avulla hän auttaa asiakkaitaan lisäämään liikkuvuutta, rakentamaan voimaa ja parantamaan kokonaisvaltaista hyvinvointia.
              </p>
              <p className="font-jakarta text-[16px] text-[#9A9A9A] leading-relaxed mb-8">
                Jokainen valmennusohjelma räätälöidään yksilöllisesti asiakkaan tavoitteiden ja lähtötason mukaan.
              </p>
              <Link
                to="/yhteystiedot"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded font-jakarta text-[15px] font-semibold tracking-wide bg-gold text-[#080C0A] hover:bg-white-custom hover:shadow-[0_4px_20px_rgba(212,160,61,0.3)] transition-all duration-300"
              >
                Varaa aika alkukartoitukseen
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Price */}
      <section className="bg-[#F4F4F4] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[720px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-marcellus text-[32px] text-[#080C0A] mb-4">
              Hinta
            </h2>
            <p className="font-jakarta text-[16px] text-[#9A9A9A] mb-8">
              Yksittäinen valmennus alk. 75&euro; tai valitse sopiva paketti. Alkukartoitus sisältyy aina paketteihin.
            </p>
            <Link
              to="/hinnasto"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded font-jakarta text-[15px] font-semibold tracking-wide bg-gold text-[#080C0A] hover:bg-white-custom hover:shadow-[0_4px_20px_rgba(212,160,61,0.3)] transition-all duration-300"
            >
              Katso täysi hinnasto
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
