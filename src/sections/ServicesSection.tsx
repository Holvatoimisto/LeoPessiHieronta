import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

const primaryServices = [
  {
    image: '/assets/urheiluhieronta.jpg',
    title: 'Hieronta',
    description: 'Hieronta auttaa rauhoittamaan ylikuormittunutta kehoa ja tukee palautumista arjen rasituksesta.',
    link: '/palvelut/hieronta',
    linkText: 'Tutustu hierontaan',
  },
  {
    image: '/assets/kiropraktikko.jpg',
    title: 'Kiropraktiikka',
    description: 'Kiropraktiikka auttaa vapauttamaan kehon liikettä ja tekee arjessa liikkumisesta kevyempää.',
    link: '/palvelut/kiropraktiikka',
    linkText: 'Tutustu kiropraktiikkaan',
  },
];

const miniServices = [
  {
    image: '/assets/myover40.jpg',
    title: 'Myover40®',
    link: '/palvelut/personal-training',
  },
  {
    image: '/assets/dryneedling.jpg',
    title: 'Dry Needling',
    link: '/palvelut/hieronta',
  },
  {
    image: '/assets/sportmassage.jpg',
    title: 'Urheiluhieronta',
    link: '/palvelut/hieronta',
  },
];

export function ServicesSection() {
  return (
    <section id="palvelut" className="bg-[#F4F0EA] pt-16 md:pt-20 pb-16 md:pb-20 px-6 md:px-12">
      <div className="max-w-[920px] mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-18">
            <p className="font-jakarta text-[11px] font-medium uppercase tracking-[4px] text-[#D4A03D]/60 mb-5">
              PALVELUT
            </p>
            <h2 className="font-marcellus text-[26px] md:text-[32px] text-[#1A1714] leading-[1.25] mb-5">
              Sinulle r&auml;&auml;t&auml;l&ouml;ity hoito ja kehonhuolto
            </h2>
            <p className="font-jakarta text-[14px] text-[#4A4540] leading-[1.7] max-w-[440px] mx-auto">
              Hierontaa, kiropraktiikkaa ja valmennusta yksil&ouml;llisesti sinun arkeesi.
            </p>
          </div>
        </ScrollReveal>

        {/* Primary services — 2 premium editorial panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {primaryServices.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <Link
                to={service.link}
                className="group block rounded-[12px] overflow-hidden bg-[#FAF7F2] transition-all duration-500 ease-out hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)]"
              >
                {/* Image with warm cinematic treatment */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full aspect-[16/10.5] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(180deg, rgba(212,160,61,0.018) 0%, transparent 40%, rgba(244,240,234,0.15) 100%)',
                      mixBlendMode: 'multiply',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="px-8 pt-7 pb-9 md:px-10 md:pt-8 md:pb-10">
                  <h3 className="font-marcellus text-[26px] md:text-[28px] text-[#1A1714] mb-4">
                    {service.title}
                  </h3>
                  <p className="font-jakarta text-[14px] text-[#5C5650] leading-[1.75] mb-8 max-w-[340px]">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-jakarta text-[13px] text-[#4A4540]/45 group-hover:text-[#D4A03D] transition-colors duration-300">
                    {service.linkText}
                    <ArrowRight
                      size={13}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Secondary services — image tile navigation */}
        <ScrollReveal delay={0.2}>
          <div className="mt-18 md:mt-22 pt-12 border-t border-[#1A1714]/[0.04]">
            {/* Label */}
            <p className="font-jakarta text-[10px] font-medium uppercase tracking-[4px] text-[#9A948C]/40 text-center mb-10">
              My&ouml;s saatavilla
            </p>

            {/* Mini cards — equal 3-column grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-5">
              {miniServices.map((service, i) => (
                <Link
                  key={i}
                  to={service.link}
                  className="group block rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
                >
                  <div className="relative overflow-hidden aspect-[4/3.2]">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      style={service.title === 'Dry Needling' ? { objectPosition: 'left center' } : undefined}
                    />
                    {/* Darker gradient for contrast */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(180deg, transparent 45%, rgba(26,23,20,0.3) 100%)',
                      }}
                    />
                    {/* White text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                      <p className="font-marcellus text-[15px] md:text-[17px] text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
                        {service.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Reassurance */}
            <div className="mt-10 text-center">
              <p className="font-jakarta text-[13px] text-[#9A948C]/50 leading-[1.6] max-w-[380px] mx-auto">
                Etk&ouml; ole varma mik&auml; palvelu sopii sinulle? Autamme mielell&auml;&auml;mme valitsemaan oikean vaihtoehdon.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
