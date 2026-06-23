import { useParams, Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  duration: string;
  image: string;
  eyebrow: string;
}

const services: ServiceDetail[] = [
  {
    slug: 'hieronta',
    eyebrow: 'HIERONTA',
    title: 'Klassinen & Urheiluhieronta',
    subtitle: 'Kehon pehmytkudosten käsittelyä ammattitaidolla',
    description: 'Käsin tehtävää kehon pehmytkudosten muokkaavaa ja huoltavaa terapiamuotoa. Mobilisoivia otteita, faskia- ja triggerpistekäsittelyä sekä venytyksiä. Voimakkuus räätälöidään aina asiakkaan tarpeiden mukaan. Klassinen hieronta on rauhallisempaa ja rentouttavampaa, kun taas urheiluhieronnassa käytetään voimakkaampia tekniikoita lihaskireyksien ja -vammojen hoitoon. Molemmat sopivat kaikille.',
    benefits: ['Rentouttaa lihaksia', 'Parantaa verenkiertoa', 'Auttaa palautumisessa', 'Lieventää kipua', 'Lisää liikkuvuutta', 'Ehkäisee vammoja'],
    duration: '30–120 min',
    image: '/assets/leopessi_classic.jpg',
  },
  {
    slug: 'dry-needling',
    eyebrow: 'DRY NEEDLING',
    title: 'Dry Needling / Kuivaneulaus',
    subtitle: 'Tarkkaa hoitoa lihaskireyksiin',
    description: 'Hieronta voidaan aloittaa ja syventää kuivaneulauksella. Neula vapauttaa lihaksen herkemmän pisteen nopeasti ja tehokkaasti. Dry needling on erittäin tehokas tapa hoitaa lihaskipuja, kireyksiä ja liikkuvuusrajoituksia. Se sopii erityisesti urheilijoille ja aktiiviliikkujille, mutta myös toimistotyöntekijöille.',
    benefits: ['Vapauttaa triggerpisteet', 'Lieventää lihaskipua', 'Parantaa liikkuvuutta', 'Nopeuttaa palautumista', 'Tehostaa hieronnan vaikutusta', 'Turvallinen ja kivuton'],
    duration: '45–90 min',
    image: '/assets/leopessi_dryneedling.jpg',
  },
  {
    slug: 'purentalihashieronta',
    eyebrow: 'PUREMENTALIHASHIERONTA',
    title: 'Purentalihashieronta',
    subtitle: 'Apua leukakipuihin ja päänsärkyyn',
    description: 'Purentalihashieronta keskittyy leuan alueen lihaksiin, jotka voivat aiheuttaa päänsärkyä, leukakipua ja niskajännitystä. Hoito sisältää leukanivelen mobilisointia, lihaskäsittelyä ja tarvittaessa venytyksiä. Useat asiakkaat ovat kokeneet merkittävää helpotusta pitkäaikaisiin vaivoihin.',
    benefits: ['Lieventää leukakipua', 'Vähentää päänsärkyä', 'Rentouttaa purentalihakset', 'Parantaa leukanivelten liikkuvuutta', 'Vähentää niskajännitystä', 'Auttaa narskutteluun'],
    duration: '45–60 min',
    image: '/assets/leopessi_jaw.jpg',
  },
  {
    slug: 'kuivakuppaus',
    eyebrow: 'KUIVAKUPPAUS',
    title: 'Kuivakuppaus',
    subtitle: 'Perinteistä hoitoa modernilla otteella',
    description: 'Kuivakuppaus on vanha hoitomuoto, joka rentouttaa lihaksia ja parantaa verenkiertoa. Kupit luovat ihon alle alipaineen, joka vetää kudosta ylöspäin ja stimuloi verenkiertoa. Hoito on tehokas apu lihaskireyksiin, jännityksiin ja palautumiseen. Se sopii hyvin yhdistettäväksi hieronnan kanssa.',
    benefits: ['Rentouttaa lihaksia', 'Parantaa verenkiertoa', 'Edistää palautumista', 'Poistaa kuona-aineita', 'Vähentää stressiä', 'Lisää liikkuvuutta'],
    duration: '30–60 min',
    image: '/assets/leopessi_cupping.jpg',
  },
  {
    slug: 'faskiaraudat',
    eyebrow: 'IASTM',
    title: 'Faskiarautojen käsittely (IASTM)',
    subtitle: 'Syväkäsittely lihaskudokselle',
    description: 'IASTM (Instrument Assisted Soft Tissue Mobilization) on syväkäsittelyä, jossa käytetään erityisiä metallisia työkaluja lihaskudoksen käsittelyyn. Se auttaa lihaskireyksissä, arpikudoksessa ja palautumisessa. Erittäin tehokasta urheilijoille ja aktiiviliikkujille.',
    benefits: ['Käsittely syvemmälle kudokseen', 'Auttaa arpikudoksessa', 'Parantaa liikkuvuutta', 'Nopeuttaa palautumista', 'Vapauttaa lihaskalvot', 'Tehostaa hierontaa'],
    duration: '45–90 min',
    image: '/assets/leopessi_iastm.jpg',
  },
  {
    slug: 'kinesioteippaus',
    eyebrow: 'KINESIOTEIPPAUS',
    title: 'Kinesioteippaus',
    subtitle: 'Tuki ja apu liikuntaan',
    description: 'Kinesioteippaus on elastista teippiä, joka tukee lihaksia ja niveliä ilman liikkuvuuden rajoittamista. Se auttaa vähentämään kipua, turvotusta ja lihaskireyttä. Teippaus sopii erinomaisesti urheiluun, työhön ja arjen toimintoihin.',
    benefits: ['Tukee lihaksia ja niveliä', 'Vähentää kipua', 'Alentaa turvotusta', 'Parantaa asentoa', 'Sallii täyden liikkuvuuden', 'Nopeuttaa palautumista'],
    duration: '15–30 min (osa hierontaa)',
    image: '/assets/leopessi_taping.jpg',
  },
  {
    slug: 'osteopatia',
    eyebrow: 'OSTEOPATIA',
    title: 'Osteopatia',
    subtitle: 'Kokonaisvaltaista kehonhuoltoa',
    description: 'Osteopatia on manuaalisen lääketieteen muoto, joka keskittyy kehon rakenteiden ja toimintojen väliseen yhteyteen. Osteopaattisessa hoidossa käsitellään niveliä, lihaksia, jänteitä ja sidekudosta kokonaisvaltaisesti. Se auttaa selkäkipuihin, nivelvaivoihin ja yleiseen hyvinvointiin.',
    benefits: ['Kokonaisvaltainen hoito', 'Auttaa selkäkipuihin', 'Parantaa nivelten liikkuvuutta', 'Vähentää jännitystä', 'Tukee kehon omaa paranemista', 'Yksilöllinen lähestymistapa'],
    duration: '45–60 min',
    image: '/assets/leopessi_osteopathy.jpg',
  },
];

export function ServicePageTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="bg-white pt-32 pb-20 px-6 text-center">
        <h1 className="font-cormorant text-2xl text-[#2B2B2B] mb-4">Palvelua ei löytynyt</h1>
        <Link to="/" className="font-inter text-[13px] text-[#565656] hover:text-[#2B2B2B]">
          Takaisin etusivulle
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-[100dvh]">
      {/* Header spacer */}
      <div className="h-[60px] md:h-[68px]" />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[55vh] overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="font-inter text-[11px] font-medium uppercase tracking-[3px] text-white/40 mb-4">
              {service.eyebrow}
            </p>
            <h1 className="font-cormorant text-[28px] md:text-[36px] text-white leading-[1.2] mb-4">
              {service.title}
            </h1>
            <p className="font-inter text-[14px] text-white/60 max-w-[400px] mx-auto">
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-[640px] mx-auto">
          <ScrollReveal>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 font-inter text-[13px] text-[#565656] hover:text-[#2B2B2B] transition-colors duration-300 mb-10"
            >
              <ArrowLeft size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
              Takaisin etusivulle
            </Link>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-cormorant text-[22px] md:text-[26px] text-[#2B2B2B] leading-[1.3] mb-6">
              {service.subtitle}
            </h2>
            <p className="font-inter text-[15px] text-[#2B2B2B] leading-[1.75] mb-10">
              {service.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="font-inter text-[13px] font-semibold uppercase tracking-[2px] text-[#565656] mb-5">
              Hoidon hyödyt
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-[6px] h-[6px] rounded-full bg-[#2B2B2B]/50 shrink-0" />
                  <span className="font-inter text-[14px] text-[#2B2B2B]">{b}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex items-center gap-4 mb-10 py-4 border-t border-b border-[#1A1A1A]/[0.05]">
              <span className="font-inter text-[13px] font-semibold uppercase tracking-[2px] text-[#565656]">
                Kesto
              </span>
              <span className="font-inter text-[15px] font-medium text-[#2B2B2B]">
                {service.duration}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <a
              href="https://slotti.fi/booking/koulutettuhierojaleopessi/"
              className="inline-flex items-center justify-center px-14 py-[16px] rounded font-inter text-[14px] font-semibold tracking-wide bg-[#2B2B2B] text-white hover:bg-[#565656] transition-colors duration-300 mb-4"
            >
              Varaa aika
            </a>
            <p className="font-inter text-[13px] text-[#565656]/60">
              tai soita <a href="tel:+358445466554" className="text-[#565656] hover:text-[#2B2B2B]">044 546 6554</a>
            </p>
          </ScrollReveal>

          {/* All services nav */}
          <ScrollReveal delay={0.25}>
            <div className="mt-14 pt-10 border-t border-[#1A1A1A]/[0.05]">
              <h3 className="font-inter text-[13px] font-semibold uppercase tracking-[2px] text-[#565656] mb-5">
                Kaikki palvelut
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/palvelut/${s.slug}`}
                    className={`font-inter text-[13px] py-2 transition-colors duration-300 flex items-center gap-1.5 ${
                      s.slug === service.slug
                        ? 'text-[#2B2B2B] font-medium'
                        : 'text-[#2B2B2B] hover:text-[#2B2B2B]'
                    }`}
                  >
                    {s.title.split(' ')[0]}
                    {s.slug !== service.slug && <ArrowRight size={11} strokeWidth={1.5} />}
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
