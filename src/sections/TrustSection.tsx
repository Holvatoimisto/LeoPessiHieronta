import { Leaf, Shield, User, MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const items = [
  {
    icon: <Leaf size={24} strokeWidth={1.5} />,
    title: 'Kokonaisvaltainen hoito',
    description: 'Hoitoa keholle kokonaisuutena — ei vain oireisiin.',
  },
  {
    icon: <Shield size={24} strokeWidth={1.5} />,
    title: 'Koulutetut ammattilaiset',
    description: 'Kokeneet ja korkeakoulutetut asiantuntijat.',
  },
  {
    icon: <User size={24} strokeWidth={1.5} />,
    title: 'Yksilöllinen lähestymistapa',
    description: 'Hoito suunnitellaan sinun tilanteesi mukaan.',
  },
  {
    icon: <MapPin size={24} strokeWidth={1.5} />,
    title: 'Keskellä Tamperetta',
    description: 'Helposti saavutettava sijainti Hämeenpuiston kupeessa.',
  },
];

export function TrustSection() {
  return (
    <section className="bg-[#f5f1ea] py-10 md:py-12 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="flex flex-col items-center text-center gap-2.5">
              <div className="text-gold">{item.icon}</div>
              <h4 className="font-marcellus text-[18px] text-[#080C0A]">{item.title}</h4>
              <p className="font-jakarta text-[14px] text-[#9A9A9A] leading-relaxed max-w-[220px]">
                {item.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
