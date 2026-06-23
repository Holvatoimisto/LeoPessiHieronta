import { Helmet } from 'react-helmet-async';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Phone, Mail } from 'lucide-react';

const services = [
  {
    title: 'Kiropraktiikka',
    description: 'Kehon toiminnan ja liikkuvuuden tueksi.',
    image: '/assets/kiropraktikko.jpg',
  },
  {
    title: 'Hieronta',
    description: 'Palautumiseen, rentoutumiseen ja kehon huoltoon.',
    image: '/assets/urheiluhieronta.jpg',
  },
  {
    title: 'Personal Training',
    description: 'Voimaa, liikkuvuutta ja varmuutta arkeen.',
    image: '/assets/pt_wellness.jpg',
  },
];

export function GiftCardPage() {
  return (
    <>
      <Helmet>
        <title>Lahjakortti — The Back Room Tampere</title>
        <meta name="description" content="Lahjakortti, joka antaa aikaa palautumiselle, liikkumiselle ja paremmalle ololle. Tilaa The Back Room -lahjakortti Tampereella." />
      </Helmet>

      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: 'url(/assets/giftcard_hero.jpg)' }}
        />
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse at 50% 45%, rgba(26,23,20,0.35) 0%, rgba(26,23,20,0.72) 60%, rgba(26,23,20,0.92) 100%),
            linear-gradient(180deg, rgba(26,23,20,0.7) 0%, rgba(26,23,20,0.2) 40%, rgba(26,23,20,0.5) 70%, rgba(26,23,20,0.85) 100%)
          `,
          backdropFilter: 'blur(2px)',
        }} />
        <div className="relative z-10 w-full max-w-[540px] mx-auto px-6 text-center pt-[6vh]">
          <ScrollReveal>
            <p className="font-jakarta text-[11px] font-medium uppercase tracking-[3px] text-[#D4A03D]/55 mb-5">
              THE BACK ROOM LAHJAKORTTI
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-marcellus text-[30px] md:text-[40px] text-[#F4F4F4] leading-[1.2] mb-5">
              Ilahduta ystäväsi, perheenjäsenesi tai kumppanisi
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-jakarta text-[14px] md:text-[15px] text-[#9A9A9A]/65 leading-[1.6] mb-10 max-w-[380px] mx-auto">
              Lahjakortti, joka antaa aikaa palautumiselle, liikkumiselle ja paremmalle ololle.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a
              href="tel:0400601819"
              className="inline-flex items-center justify-center px-14 py-[16px] rounded font-jakarta text-[14px] font-semibold tracking-wide bg-[#B8892A] text-[#080C0A] shadow-[0_2px_16px_rgba(184,137,42,0.18)] hover:-translate-y-0.5 hover:bg-[#C99A3A] hover:shadow-[0_8px_30px_rgba(184,137,42,0.28)] transition-all duration-400 mb-6"
            >
              Tilaa lahjakortti
            </a>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <a
              href="tel:0400601819"
              className="inline-flex items-center gap-1.5 font-jakarta text-[12px] text-[#9A9A9A]/35 hover:text-[#D4A03D]/50 transition-colors duration-300 tracking-wider"
            >
              Tai soita 0400 601 819
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SECTION 2: INFO / HOW IT WORKS ─── */}
      <section className="bg-[#F4F4F4] py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-[560px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-jakarta text-[11px] font-medium uppercase tracking-[4px] text-gold/55 mb-5">
              LAHJAKORTIT
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-marcellus text-[26px] md:text-[30px] text-[#080C0A] leading-[1.25] mb-6">
              Lahjakortti haluamallesi summalle
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <p className="font-jakarta text-[14px] text-[#151B18]/65 leading-[1.7]">
                Voit ostaa The Back Room -lahjakortin haluamallesi summalle. Lahjakortti käy kaikkiin palveluihimme, kuten kiropraktiikkaan, hierontaan ja personal trainingiin.
              </p>
              <p className="font-jakarta text-[14px] text-[#151B18]/65 leading-[1.7]">
                Voit hakea lahjakortin meiltä The Back Roomista tai tilata sen puhelimitse tai sähköpostilla.
              </p>
              <p className="font-jakarta text-[14px] text-[#151B18]/65 leading-[1.7]">
                Tilaamasi lahjakortin voit maksaa tilisiirrolla, jonka jälkeen toimitamme sen haluamaasi osoitteeseen. Jos noudat lahjakortin paikan päältä, varmistathan etukäteen että olemme paikalla.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SECTION 3: SERVICE HIGHLIGHTS ─── */}
      <section className="bg-[#EDE8E0] py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-[960px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-jakarta text-[11px] font-medium uppercase tracking-[4px] text-gold/50 mb-4">
                PALVELUT
              </p>
              <h2 className="font-marcellus text-[24px] md:text-[28px] text-[#080C0A] leading-[1.25]">
                Lahja, joka tukee hyvinvointia
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="group">
                  <div className="overflow-hidden rounded-xl mb-5">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="font-marcellus text-[20px] text-[#080C0A] mb-2">
                    {service.title}
                  </h3>
                  <p className="font-jakarta text-[13px] text-[#9A9A9A] leading-[1.6]">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: EMOTIONAL QUOTE ─── */}
      <section className="relative bg-[#1A1714] py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
          }}
        />
        <div className="relative z-10 max-w-[600px] mx-auto text-center">
          <ScrollReveal>
            <div className="w-[32px] h-[1px] bg-[#D4A03D]/25 mx-auto mb-8" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-marcellus text-[22px] md:text-[26px] text-[#F4F4F4]/70 leading-[1.45] italic mb-8">
              &ldquo;The Back Roomin lahjakortti on lahja, joka tuntuu vielä arjessakin.&rdquo;
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="w-[32px] h-[1px] bg-[#D4A03D]/25 mx-auto" />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SECTION 5: FINAL CTA ─── */}
      <section className="relative bg-[#151210] py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-[480px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-jakarta text-[11px] font-medium uppercase tracking-[3px] text-[#D4A03D]/50 mb-5">
              THE BACK ROOM
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-marcellus text-[26px] md:text-[32px] text-[#F4F4F4] leading-[1.2] mb-4">
              Tilaa lahjakortti helposti
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-jakarta text-[14px] text-[#9A9A9A]/60 leading-[1.6] mb-10 max-w-[380px] mx-auto">
              Voit tilata lahjakortin puhelimitse tai sähköpostilla. Autamme mielellämme valitsemaan sopivan vaihtoehdon.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a
                href="tel:0400601819"
                className="group inline-flex items-center gap-2 font-jakarta text-[13px] text-[#D4A03D]/65 hover:text-[#D4A03D] transition-colors duration-300 tracking-wider"
              >
                <Phone size={13} strokeWidth={1.5} className="text-[#D4A03D]/35" />
                0400 601 819
              </a>
              <a
                href="mailto:thebackroomtampere@gmail.com"
                className="group inline-flex items-center gap-2 font-jakarta text-[13px] text-[#D4A03D]/65 hover:text-[#D4A03D] transition-colors duration-300 tracking-wider"
              >
                <Mail size={13} strokeWidth={1.5} className="text-[#D4A03D]/35" />
                thebackroomtampere@gmail.com
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
