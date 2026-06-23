import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

const symptomsRow1 = [
  'Niska- ja hartiajännitys',
  'Selkäkivut',
  'Päänsärky',
  'Kehon jäykkyys',
];

const symptomsRow2 = [
  'Stressin aiheuttama kuormitus',
  'Palautumisen haasteet',
  'Urheiluvammat',
  'Post-operatiivinen kuntoutus',
];

export function SymptomsSection() {
  return (
    <section className="bg-[#1f1b16] pt-12 md:pt-16 pb-10 md:pb-14 px-6 md:px-12">
      <div className="max-w-[800px] mx-auto">
        {/* Headline + supporting — warm, personal */}
        <ScrollReveal>
          <div className="text-center mb-6">
            <h2 className="font-marcellus text-[28px] md:text-[36px] text-[#F4F4F4] leading-[1.25] mb-4">
              Kuulostaako jokin näistä tutulta?
            </h2>
            <p className="font-jakarta text-[14px] md:text-[15px] text-[#F4F4F4]/30 leading-[1.7] max-w-[420px] mx-auto">
              Moni hakeutuu The Back Roomiin juuri näiden oireiden vuoksi.
            </p>
          </div>
        </ScrollReveal>

        {/* Pills — tighter, closer to headline */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-wrap justify-center gap-2.5">
              {symptomsRow1.map((s, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full border border-[#F4F4F4]/[0.07] bg-[#F4F4F4]/[0.02] backdrop-blur-md font-jakarta text-[13px] text-[#F4F4F4]/70 tracking-wide transition-all duration-[400ms] hover:border-[#D4A03D]/20 hover:bg-[#D4A03D]/[0.04] hover:text-[#F4F4F4]/90 cursor-default"
                  style={{ boxShadow: 'inset 0 1px 1px rgba(244,244,244,0.03)' }}
                >
                  <span className="w-[4px] h-[4px] rounded-full bg-[#D4A03D]/40 flex-shrink-0" />
                  {s}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              {symptomsRow2.map((s, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full border border-[#F4F4F4]/[0.07] bg-[#F4F4F4]/[0.02] backdrop-blur-md font-jakarta text-[13px] text-[#F4F4F4]/70 tracking-wide transition-all duration-[400ms] hover:border-[#D4A03D]/20 hover:bg-[#D4A03D]/[0.04] hover:text-[#F4F4F4]/90 cursor-default"
                  style={{ boxShadow: 'inset 0 1px 1px rgba(244,244,244,0.03)' }}
                >
                  <span className="w-[4px] h-[4px] rounded-full bg-[#D4A03D]/40 flex-shrink-0" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA — closer to chips, refined */}
        <ScrollReveal delay={0.25}>
          <button
            onClick={() => {
              document.getElementById('palvelut')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="group flex items-center gap-2 mx-auto mt-8 cursor-pointer bg-transparent border-none p-0"
            aria-label="Tutustu hoitoihin"
          >
            <span className="font-jakarta text-[13px] text-[#F4F4F4]/25 group-hover:text-[#D4A03D]/50 transition-colors duration-[400ms] tracking-wide">
              Tutustu hoitoihin
            </span>
            <ArrowRight
              size={13}
              strokeWidth={1.5}
              className="text-[#F4F4F4]/[0.08] group-hover:text-[#D4A03D]/30 transition-all duration-[400ms] group-hover:translate-x-0.5"
            />
          </button>
        </ScrollReveal>

      </div>
    </section>
  );
}

