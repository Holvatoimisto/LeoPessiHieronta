import { ScrollReveal } from '@/components/ScrollReveal';
import { Star, Clock, Calendar } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: 'url(/assets/final_cta_bg.jpg)' }}
      />

      {/* Deep warm cinematic overlay */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse at 50% 48%, rgba(20,16,12,0.50) 0%, rgba(20,16,12,0.82) 55%, rgba(20,16,12,0.97) 100%),
          linear-gradient(180deg, rgba(20,16,12,0.85) 0%, rgba(20,16,12,0.22) 35%, rgba(20,16,12,0.42) 65%, rgba(20,16,12,0.94) 100%)
        `,
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      }} />

      {/* Floating content */}
      <div className="relative z-10 w-full max-w-[480px] mx-auto px-6 pt-[2vh]">
        <ScrollReveal>
          <div className="text-center">
            {/* Eyebrow */}
            <p className="font-jakarta text-[11px] font-medium uppercase tracking-[3px] text-[#D4A03D]/40 mb-4">
              VARAA AIKA
            </p>

            {/* Headline */}
            <h2 className="font-marcellus text-[24px] md:text-[30px] text-[#F4F4F4] leading-[1.3] mb-4">
              Kun keho voi paremmin, arki tuntuu kevyemmältä
            </h2>

            {/* Support */}
            <p className="font-jakarta text-[14px] text-[#9A9A9A]/55 leading-[1.6] mb-8 max-w-[300px] mx-auto">
              Parempi olo voi alkaa yhdestä ajasta
            </p>

            {/* CTA — warm bronze */}
            <a
              href="https://www.varaamossalmenniemi.fi/thebackroom/"
              className="inline-flex items-center justify-center px-14 py-[16px] rounded font-jakarta text-[14px] font-semibold tracking-wide bg-[#B8892A] text-[#080C0A] shadow-[0_2px_16px_rgba(184,137,42,0.18),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 hover:bg-[#C99A3A] hover:shadow-[0_8px_30px_rgba(184,137,42,0.28),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-[400ms] mb-5"
            >
              Varaa aika
            </a>

            {/* Phone — supportive, tight */}
            <div className="mb-8 text-center">
              <a
                href="tel:0400601819"
                className="block font-jakarta text-[13px] text-[#9A9A9A]/55 tracking-wider no-underline hover:text-[#F4F4F4]/80 transition-colors duration-300 mb-1.5"
              >
                0400 601 819
              </a>
              <p className="font-jakarta text-[12px] text-[#9A9A9A]/40 tracking-wide">
                Kysy neuvoa tai varaa aika puhelimitse
              </p>
            </div>

            {/* Trust — tied to CTA */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
              <div className="flex items-center gap-1.5 md:px-4">
                <Star size={10} strokeWidth={1.5} className="text-[#D4A03D]/35" />
                <span className="font-jakarta text-[10px] text-[#9A9A9A]/55 tracking-wider">
                  4.8/5
                </span>
              </div>
              <span className="hidden md:block w-[1px] h-[8px] bg-white/[0.06]" />
              <div className="flex items-center gap-1.5 md:px-4">
                <Clock size={10} strokeWidth={1.5} className="text-[#D4A03D]/35" />
                <span className="font-jakarta text-[10px] text-[#9A9A9A]/55 tracking-wider">
                  20+ vuotta
                </span>
              </div>
              <span className="hidden md:block w-[1px] h-[8px] bg-white/[0.06]" />
              <div className="flex items-center gap-1.5 md:px-4">
                <Calendar size={10} strokeWidth={1.5} className="text-[#D4A03D]/35" />
                <span className="font-jakarta text-[10px] text-[#9A9A9A]/55 tracking-wider">
                  Helppo varaus
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
