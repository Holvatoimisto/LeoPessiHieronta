import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

interface TeamMember {
  name: string;
  firstName: string;
  title: string;
  role: string;
  image: string;
  bio: string;
  testimonial?: string;
}

const team: TeamMember[] = [
  {
    name: 'Krista Ketelä',
    firstName: 'Kristasta',
    title: 'Kiropraktikko D.C., MChiro',
    role: 'Kiropraktikko',
    image: '/assets/krista_hero.png',
    bio: 'Krista on The Back Roomin perustaja ja kokenut kiropraktikko, jonka hoidossa yhdistyvät vahva ammattitaito ja yksilöllinen kohtaaminen. Hän on erikoistunut niska- ja selkävaivoihin, raskausajan hoitoon sekä post-operatiiviseen kuntoutukseen.',
    testimonial: 'Krista on mahtavan ammattitaitoinen kiropraktikko ja lisäksi mukava persoona, jolla on aina ilo käydä.',
  },
  {
    name: 'Jari Salminen',
    firstName: 'Jarista',
    title: 'Kiropraktikko D.C.',
    role: 'Kiropraktikko',
    image: '/assets/jari.jpg',
    bio: 'Jari on kiropraktikko, joka erikoistunut tuki- ja liikuntaelimistön vaivojen tutkimiseen ja hoitoon kaikissa ikäryhmissä. Hänellä on erityisvahvuutena raajojen lihas- ja nivelvaivoissa sekä urheiluvammoissa.',
    testimonial: 'Jari on todella asiantunteva, perusteellinen ja miellyttävä kiropraktikko, jota suosittelen lämpimästi.',
  },
  {
    name: 'Annika Toivonen',
    firstName: 'Annikasta',
    title: 'Urheiluhieroja, Dry Needling -terapeutti',
    role: 'Hieronta',
    image: '/assets/annika.jpg',
    bio: 'Annika on koulutettu hieroja, jolla on laaja osaaminen hierontatekniikoista ja Dry Needling -hoidoista. Hoito alkaa aina monipuolisella alkukartoituksella, ja hoito räätälöidään asiakkaan tarpeiden mukaan.',
    testimonial: 'Useamman vuoden kokemuksella voi sanoa, että Annika on todella ammattilainen.',
  },
  {
    name: 'Sari Kuivanen',
    firstName: 'Sarista',
    title: 'Personal Trainer, MyOver40® Master Trainer',
    role: 'Training',
    image: '/assets/sari.jpg',
    bio: 'Sari on MyOver40®-valmentaja, joka auttaa yli 40-vuotiaita naisia löytämään liikkuvuutta ja voimaa arjen keskellä. Kivun lievittyminen ja liikkuvuuden parantuminen kulkevat käsi kädessä juuri sinulle räätälöidyissä harjoituksissa.',
    testimonial: 'Sarin Myover40®-tuntien myötä myös unen laatu ja jaksaminen ovat parantuneet selvästi.',
  },
  {
    name: 'Elisa Kuusela',
    firstName: 'Elisasta',
    title: 'Hieroja',
    role: 'Hieronta',
    image: '/assets/elisa.jpg',
    bio: 'Rauhallista ja yksilöllistä kehonhuoltoa vakioasiakkaille Tampereella.',
  },
];

export function ExpertSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = useCallback((index: number) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 350);
  }, [activeIndex, isTransitioning]);

  const member = team[activeIndex];

  return (
    <section className="relative bg-[#1A1714] pt-20 md:pt-28 pb-8 md:pb-10 px-6 md:px-12 overflow-hidden">
      {/* Warm gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 25%, rgba(212,160,61,0.05) 0%, transparent 55%)',
        }}
      />
      {/* Subtle grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div className="relative max-w-[1000px] mx-auto">
        {/* Static header */}
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <p className="font-jakarta text-[11px] font-medium uppercase tracking-[3px] text-[#D4A03D]/70 mb-5">
              TUTUSTU ASIANTUNTIJOIHIMME
            </p>
            <h2 className="font-marcellus text-[26px] md:text-[32px] text-[#F4F4F4] leading-[1.2]">
              Hoitoa kokemuksella ja l&auml;sn&auml;ololla
            </h2>
          </div>
        </ScrollReveal>

        {/* Interactive profile */}
        <div className="grid grid-cols-1 md:grid-cols-[38%_1fr] gap-8 md:gap-14 items-start">
          {/* Left — portrait */}
          <div
            style={{
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? 'translateY(8px)' : 'translateY(0)',
              transition: 'opacity 350ms ease-in-out, transform 350ms ease-out',
            }}
          >
            <div className="relative overflow-hidden rounded-lg mx-auto md:mx-0 max-w-[320px] md:max-w-none">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover object-[center_20%]"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, transparent 65%, rgba(13,10,8,0.45) 100%)',
                }}
              />
            </div>
          </div>

          {/* Right — content */}
          <div
            style={{
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? 'translateY(8px)' : 'translateY(0)',
              transition: 'opacity 350ms ease-in-out, transform 350ms ease-out',
            }}
          >
            {/* Name */}
            <p className="font-marcellus text-[22px] md:text-[24px] text-[#F4F4F4] mb-2">
              {member.name}
            </p>

            {/* Title — one of 3 gold accents */}
            <p className="font-jakarta text-[12px] font-medium text-[#D4A03D]/55 tracking-[1px] uppercase mb-8">
              {member.title}
            </p>

            {/* Bio — longer, warmer, editorial */}
            <p className="font-jakarta text-[14px] text-[#E8E4DF] leading-[1.75] mb-8 max-w-[420px]">
              {member.bio}
            </p>

            {/* Testimonial — whisper-quiet, editorial */}
            {member.testimonial && (
              <div className="mb-8 max-w-[420px]">
                <div className="pl-3 border-l border-[#F4F4F4]/[0.07]">
                  <p className="font-jakarta text-[13px] italic text-[#F4F4F4]/[0.38] leading-[1.7]">
                    &ldquo;{member.testimonial}&rdquo;
                  </p>
                </div>
              </div>
            )}

            {/* Avatar selector */}
            <div className="flex gap-5 md:gap-7 mb-7">
              {team.map((t, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className="group flex flex-col items-center text-center cursor-pointer bg-transparent border-none p-0"
                >
                  <div
                    className={
                      'rounded-full overflow-hidden mb-2 transition-all duration-300 ' +
                      (i === activeIndex
                        ? 'w-12 h-12 md:w-14 md:h-14 ring-1 ring-[#D4A03D]/80 opacity-100 scale-105'
                        : 'w-10 h-10 md:w-11 md:h-11 opacity-40 group-hover:opacity-75 scale-100')
                    }
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    className={
                      'font-jakarta text-[11px] mb-px transition-colors duration-300 ' +
                      (i === activeIndex
                        ? 'text-[#F4F4F4]/80'
                        : 'text-[#F4F4F4]/25 group-hover:text-[#F4F4F4]/50')
                    }
                  >
                    {t.name.split(' ')[0]}
                  </p>
                  <p
                    className={
                      'font-jakarta text-[9px] tracking-wide transition-colors duration-300 ' +
                      (i === activeIndex
                        ? 'text-[#D4A03D]/55'
                        : 'text-[#9A9A9A]/30 group-hover:text-[#9A9A9A]/50')
                    }
                  >
                    {t.role}
                  </p>
                </button>
              ))}
            </div>

            {/* CTA — understated, white with gold hover */}
            <Link
              to="/tiimi"
              className="group inline-flex items-center gap-2"
            >
              <span className="font-jakarta text-[13px] font-medium text-[#F4F4F4]/55 group-hover:text-[#D4A03D] transition-colors duration-300">
                Lue lisää {member.firstName}
              </span>
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="text-[#F4F4F4]/30 group-hover:text-[#D4A03D] group-hover:translate-x-1 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
