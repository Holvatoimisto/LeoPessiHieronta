import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';

const massageTypes = [
  {
    title: 'Klassinen hieronta',
    desc: 'Perinteinen hieronta lihasjännitysten lievittämiseen ja rentoutumiseen. Sopii kaikille, jotka kaipaavat helpotusta jännitykseen ja stressiin.',
    duration: '45–60 min',
    price: '50–65€',
  },
  {
    title: 'Urheiluhieronta',
    desc: 'Syvempi, kohdennettu hieronta urheilijoille ja aktiivisesti liikkuville. Auttaa palautumisessa ja ennaltaehkäisee vammoja.',
    duration: '60 min',
    price: '65€',
  },
  {
    title: 'Mobilisoiva hieronta',
    desc: 'Yhdistää klassisen hieronnan nivelten mobilisointitekniikoihin. Parantaa nivelten liikelaajuutta ja liikkuvuutta tehokkaasti.',
    duration: '60 min',
    price: '70€',
  },
];

export function MassagePage() {
  return (
    <>
      <Helmet>
        <title>Hieronta Tampere — The Back Room</title>
        <meta name="description" content="Klassista ja urheiluhierontaa lihasjännitysten lievittämiseen ja palautumiseen. Hieroja Annika Toivonen. Varaa aika Tampereella." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hieroja_hoito.jpg" alt="Hieronta" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,12,10,0.4)] to-[rgba(8,12,10,0.85)]" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h1 className="font-marcellus text-[36px] md:text-[48px] text-[#F4F4F4] mb-4">
              Hieronta Tampereella
            </h1>
            <p className="font-jakarta text-[16px] md:text-[18px] text-[#F4F4F4]/85 max-w-[600px] mb-8">
              Klassista ja urheiluhierontaa lihasjännitysten lievittämiseen ja palautumiseen.
            </p>
            <Link
              to="/yhteystiedot"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded font-jakarta text-[15px] font-semibold tracking-wide bg-gold text-[#080C0A] hover:bg-white-custom hover:shadow-[0_4px_20px_rgba(212,160,61,0.3)] transition-all duration-300"
            >
              Varaa aika hierojalle
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Massage types */}
      <section className="bg-[#F4F4F4] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <h2 className="font-marcellus text-[32px] md:text-[36px] text-[#080C0A] text-center mb-14">
              Hierontapalvelumme
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {massageTypes.map((type, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="bg-white-custom p-8 rounded-lg shadow-[0_4px_24px_rgba(8,12,10,0.06)]">
                  <h3 className="font-marcellus text-[24px] text-[#080C0A] mb-3">{type.title}</h3>
                  <p className="font-jakarta text-[15px] text-[#151B18] leading-relaxed mb-4">{type.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(8,12,10,0.08)]">
                    <span className="font-jakarta text-[14px] text-[#9A9A9A]">{type.duration}</span>
                    <span className="font-marcellus text-[20px] text-gold font-semibold">{type.price}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Therapist */}
      <section className="bg-[#080C0A] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 md:gap-16 items-center">
          <ScrollReveal direction="left">
            <img
              src="/assets/annika_potrait.jpg"
              alt="Annika Toivonen, urheiluhieroja"
              loading="lazy"
              className="w-full max-w-[400px] mx-auto rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            />
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <p className="font-jakarta text-[13px] font-semibold uppercase tracking-[1.5px] text-gold mb-3">
                HIEROJAMME
              </p>
              <h2 className="font-marcellus text-[32px] text-[#F4F4F4] mb-2">Annika Toivonen</h2>
              <p className="font-jakarta text-[16px] text-gold mb-6">
                Urheiluhieroja, Dry Needling -terapeutti
              </p>
              <p className="font-jakarta text-[16px] text-[#9A9A9A] leading-relaxed mb-4">
                Annika on koulutettu urheiluhieroja, jolla on laaja osaaminen erilaisista hierontatekniikoista. Hänen erikoisosaamistaan ovat mobilisoivat tekniikat, jotka parantavat nivelten liikelaajuutta ja vähentävät kipua.
              </p>
              <p className="font-jakarta text-[16px] text-[#9A9A9A] leading-relaxed mb-8">
                Dry Needling -koulutus antaa Annikalle työkaluja lihaskipujen ja jumien tehokkaaseen hoitoon. Jokainen hoitokerta räätälöidään asiakkaan tarpeiden mukaan.
              </p>
              <Link
                to="/yhteystiedot"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded font-jakarta text-[15px] font-semibold tracking-wide bg-gold text-[#080C0A] hover:bg-white-custom hover:shadow-[0_4px_20px_rgba(212,160,61,0.3)] transition-all duration-300"
              >
                Varaa aika hierojalle
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
              Hinnasto
            </h2>
            <div className="space-y-3 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-[rgba(8,12,10,0.1)]">
                <span className="font-jakarta text-[16px] text-[#151B18]">45 min klassinen hieronta</span>
                <span className="font-marcellus text-[20px] text-[#080C0A]">50&euro;</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[rgba(8,12,10,0.1)]">
                <span className="font-jakarta text-[16px] text-[#151B18]">60 min klassinen hieronta</span>
                <span className="font-marcellus text-[20px] text-[#080C0A]">65&euro;</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[rgba(8,12,10,0.1)]">
                <span className="font-jakarta text-[16px] text-[#151B18]">60 min mobilisoiva hieronta</span>
                <span className="font-marcellus text-[20px] text-[#080C0A]">70&euro;</span>
              </div>
            </div>
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
