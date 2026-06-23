import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    image: '/assets/kiropraktikko.jpg',
    title: 'Kiropraktiikka',
    description: 'Kiropraktikko tutkii ja hoitaa tuki- ja liikuntaelimistön toiminnallisia häiriöitä käsillä tehtävillä hoitotekniikoilla. Hoidamme niska-, selkä- ja raajakipuja sekä autamme ennaltaehkäisemään vaivojen uusiutumista.',
    audience: 'Kenelle: Kipua kärsivät, toimistotyöläiset, urheilijat, raskaana olevat, leikkauksesta toipuvat',
    link: '/palvelut/kiropraktiikka',
  },
  {
    image: '/assets/urheiluhieronta.jpg',
    title: 'Hieronta',
    description: 'Klassinen ja urheiluhieronta lihasjännitysten lievittämiseen, palautumisen nopeuttamiseen ja stressin vähentämiseen. Mobilisoivat tekniikat parantavat nivelten liikelaajuutta.',
    audience: 'Kenelle: Lihasjännityksestä kärsivät, urheilijat, stressaantuneet, toipujat',
    link: '/palvelut/hieronta',
  },
  {
    image: '/assets/pt_valmennus.jpg',
    title: 'Personal Training',
    description: 'Yli 40-vuotiaille naisille suunnattu liikkuvuus- ja voimaharjoittelu. MyOver40®-menetelmällä parannamme liikkuvuutta, vahvistamme lihaksia ja lisäämme energiaa.',
    audience: 'Kenelle: Yli 40-vuotiaat naiset, liikkuvuusongelmista kärsivät, painonhallinnasta kiinnostuneet',
    link: '/palvelut/personal-training',
  },
  {
    image: '/assets/dry_needling.jpg',
    title: 'Dry Needling',
    description: 'Tarkasti kohdistettua lihaskäsittelyä neuloilla jännitysten ja trigger-pisteiden lievittämiseen.',
    audience: 'Kenelle: Lihasjännityksestä kärsivät, toipujat, urheilijat',
    link: '/palvelut/hieronta',
  },
  {
    image: '/assets/hieronta.jpg',
    title: 'Urheiluhieronta',
    description: 'Syvempää lihaskäsittelyä aktiivisille liikkujille, urheilijoille ja palautumisen tueksi.',
    audience: 'Kenelle: Urheilijat, aktiiviset liikkujat, palautumista kaipaavat',
    link: '/palvelut/hieronta',
  },
];

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Palvelut — The Back Room Tampere</title>
        <meta name="description" content="Kiropraktiikkaa, hierontaa ja personal trainingia Tampereella. Kokonaisvaltaista kehonhuoltoa ammattitaidolla. Tutustu palveluihimme ja varaa aika." />
      </Helmet>

      {/* Page header */}
      <section className="bg-[#080C0A] pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <h1 className="font-marcellus text-[36px] md:text-[48px] text-[#F4F4F4] mb-4">
              Palvelumme
            </h1>
            <p className="font-jakarta text-[16px] md:text-[18px] text-[#9A9A9A] max-w-[700px]">
              Kokonaisvaltaista kehonhuoltoa Tampereella — kiropraktiikkaa, hierontaa ja personal trainingia.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-[#F4F4F4] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto space-y-20">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${i % 2 === 1 ? 'md:[direction:rtl] md:[&>*]:[direction:ltr]' : ''}`}>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-marcellus text-[32px] text-[#080C0A] mb-4">{service.title}</h2>
                  <p className="font-jakarta text-[16px] text-[#151B18] leading-relaxed mb-4">{service.description}</p>
                  <p className="font-jakarta text-[14px] text-[#9A9A9A] mb-6">{service.audience}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 font-jakarta text-[14px] font-semibold text-gold hover:underline"
                  >
                    Lue lisää <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080C0A] py-16 px-6 md:px-12">
        <div className="max-w-[720px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-marcellus text-[28px] md:text-[32px] text-[#F4F4F4] mb-6">
              Valmis aloittamaan?
            </h2>
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
