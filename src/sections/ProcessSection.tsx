import { ScrollReveal } from '@/components/ScrollReveal';
import { Calendar, ClipboardCheck, Route } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Varaa aika',
    description: 'Valitse sinulle sopiva hetki ja varaa aika verkossa tai soittamalla.',
    icon: Calendar,
  },
  {
    number: '02',
    title: 'Kartoitus & hoito',
    description: 'Tapaamisessa kuulemme, tutkimme ja hoidamme — juuri sinun tarpeisiisi.',
    icon: ClipboardCheck,
  },
  {
    number: '03',
    title: 'Jatkosuunnitelma',
    description: 'Saat yksilöllisen suunnitelman ja ohjeistuksen jatkohoidosta.',
    icon: Route,
  },
];

export function ProcessSection() {
  return (
    <section className="bg-[#F5F0E8] py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-[900px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="font-jakarta text-[11px] font-medium uppercase tracking-[4px] text-gold/50 mb-4">
              MITEN SE TOIMII
            </p>
            <h2 className="font-marcellus text-[26px] md:text-[30px] text-[#080C0A] leading-[1.25]">
              Kolme askelta parempaan oloon
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D4A03D]/20 mb-5">
                  <step.icon size={16} strokeWidth={1.5} className="text-[#D4A03D]/50" />
                </div>
                <p className="font-jakarta text-[10px] font-medium text-[#D4A03D]/40 tracking-[3px] uppercase mb-3">
                  {step.number}
                </p>
                <h3 className="font-marcellus text-[20px] text-[#080C0A] mb-2.5">
                  {step.title}
                </h3>
                <p className="font-jakarta text-[13px] text-[#9A9A9A] leading-[1.65] max-w-[240px] mx-auto">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
