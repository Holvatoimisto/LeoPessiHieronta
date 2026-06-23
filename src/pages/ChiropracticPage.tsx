import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Target, AlertCircle, Activity, Move, Zap, CircleDot } from 'lucide-react';

const conditions = [
  { icon: <Target size={40} />, label: 'Niskakipu ja päänsärky' },
  { icon: <AlertCircle size={40} />, label: 'Alaselkäkipu' },
  { icon: <Activity size={40} />, label: 'Olkapäävaivat' },
  { icon: <Move size={40} />, label: 'Lonkka- ja polvikipu' },
  { icon: <Zap size={40} />, label: 'Iskias' },
  { icon: <CircleDot size={40} />, label: 'Huimaus ja tasapaino' },
];

const steps = [
  { number: '01', title: 'Alkukartoitus', desc: 'Kuuntelemme, miten kehosi voi ja kartoitamme vaivasi.' },
  { number: '02', title: 'Tutkimus', desc: 'Tutkimme liikelaajuudet, asennot ja toiminnan.' },
  { number: '03', title: 'Hoito', desc: 'Räätälöity kiropraktinen hoito juuri sinulle.' },
  { number: '04', title: 'Jatkohoito', desc: 'Ohjeet ja suositukset kotiharjoitteluun.' },
];

export function ChiropracticPage() {
  return (
    <>
      <Helmet>
        <title>Kiropraktiikka Tampere — The Back Room</title>
        <meta name="description" content="Asiantuntevaa kivun hoitoa ja kehon toiminnan palauttamista Papinkadulla. Kiropraktikot Krista Ketelä ja Jari Salminen. Varaa aika." />
        <link rel="canonical" href="https://www.thebackroom.fi/palvelut/kiropraktiikka" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/kiropraktikko_krista_hoito.jpg" alt="Kiropraktinen hoito" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,12,10,0.4)] to-[rgba(8,12,10,0.85)]" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h1 className="font-marcellus text-[36px] md:text-[48px] text-[#F4F4F4] mb-4">
              Kiropraktiikka Tampereella
            </h1>
            <p className="font-jakarta text-[16px] md:text-[18px] text-[#F4F4F4]/85 max-w-[600px] mb-8">
              Asiantuntevaa kivun hoitoa ja kehon toiminnan palauttamista Papinkadulla.
            </p>
            <Link
              to="/yhteystiedot"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded font-jakarta text-[15px] font-semibold tracking-wide bg-gold text-[#080C0A] hover:bg-white-custom hover:shadow-[0_4px_20px_rgba(212,160,61,0.3)] transition-all duration-300"
            >
              Varaa aika kiropraktikolle
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-[#F4F4F4] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <h2 className="font-marcellus text-[32px] md:text-[36px] text-[#080C0A] text-center mb-14">
              Mihin kiropraktiikka auttaa?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {conditions.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-gold">{c.icon}</div>
                  <p className="font-jakarta text-[16px] text-[#080C0A]">{c.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#080C0A] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <h2 className="font-marcellus text-[32px] md:text-[36px] text-[#F4F4F4] text-center mb-14">
              Miten hoito etenee?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="text-center">
                  <p className="font-marcellus text-[56px] md:text-[72px] text-gold leading-none mb-4">{step.number}</p>
                  <h3 className="font-marcellus text-[22px] text-[#F4F4F4] mb-2">{step.title}</h3>
                  <p className="font-jakarta text-[14px] text-[#9A9A9A]">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experts */}
      <section className="bg-[#151B18] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <h2 className="font-marcellus text-[32px] md:text-[36px] text-[#F4F4F4] text-center mb-14">
              Kiropraktikkomme
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { name: 'Krista Ketelä', role: 'Kiropraktikko D.C., MChiro, perustaja', image: '/assets/krista_potrait.jpg', desc: 'Yli 20 vuoden kokemuksella Krista on hoitanut tuhansia tamperelaisia. Hänen filosofiansa on kokonaisvaltainen hoito, jossa potilas nähdään yksilönä.' },
              { name: 'Jari Salminen', role: 'Kiropraktikko D.C.', image: '/assets/jari_potrait.jpg', desc: 'Jari on erikoistunut tuki- ja liikuntaelimistön vaivojen tutkimiseen ja hoitoon. Hänellä on laaja kokemus eri ikäryhmien ja elämäntilanteiden parissa.' },
            ].map((expert, i) => (
              <ScrollReveal key={i} delay={i * 0.2}>
                <div className="text-center">
                  <img src={expert.image} alt={expert.name} loading="lazy" className="w-48 h-48 rounded-full object-cover mx-auto mb-6 shadow-lg" />
                  <h3 className="font-marcellus text-[24px] text-[#F4F4F4] mb-1">{expert.name}</h3>
                  <p className="font-jakarta text-[14px] text-gold mb-4">{expert.role}</p>
                  <p className="font-jakarta text-[14px] text-[#9A9A9A] max-w-[400px] mx-auto mb-6">{expert.desc}</p>
                  <Link
                    to="/yhteystiedot"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded font-jakarta text-[14px] font-semibold bg-gold text-[#080C0A] hover:bg-white-custom transition-all duration-300"
                  >
                    Varaa aika
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Price & CTA */}
      <section className="bg-[#F4F4F4] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[720px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-marcellus text-[32px] md:text-[36px] text-[#080C0A] mb-4">
              Kiropraktiikkakäynti: 80–84&euro;
            </h2>
            <p className="font-jakarta text-[16px] text-[#9A9A9A] mb-8">
              Ensimmäinen käynti sisältää alkukartoituksen, tutkimuksen ja hoidon. Kestää noin 45 min.
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
