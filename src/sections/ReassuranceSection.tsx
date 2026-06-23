import { ScrollReveal } from '@/components/ScrollReveal';

export function ReassuranceSection() {
  return (
    <section className="bg-[#F0EBE3] pt-14 md:pt-16 pb-14 md:pb-16 px-6 md:px-12">
      <div className="max-w-[580px] mx-auto text-center">
        <ScrollReveal>
          <p className="font-jakarta text-[11px] font-medium uppercase tracking-[4px] text-[#9A948C]/40 mb-5">
            EI PAINETTA SITOUTUMISEEN
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-marcellus text-[24px] md:text-[28px] text-[#080C0A] leading-[1.3] mb-5">
            Sinun ei tarvitse tietää tarkalleen mistä aloittaa
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-jakarta text-[14px] text-[#151B18]/65 leading-[1.65] mb-10 max-w-[520px] mx-auto">
            Jos et ole varma mikä palvelu tai asiantuntija sopii sinulle parhaiten, voit aina soittaa meille. Käymme tilanteesi rauhassa läpi ja autamme löytämään sinulle sopivan hoidon tai oikean tekijän.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <a
            href="tel:0400601819"
            className="inline-flex items-center gap-2 font-jakarta text-[14px] text-[#4A4540]/45 tracking-wider no-underline hover:text-[#080C0A] transition-colors duration-300 group"
          >
            <span className="w-[24px] h-[1px] bg-[#4A4540]/15 group-hover:w-[32px] group-hover:bg-[#4A4540]/25 transition-all duration-300" />
            Soita 0400 601 819
            <span className="w-[24px] h-[1px] bg-[#4A4540]/15 group-hover:w-[32px] group-hover:bg-[#4A4540]/25 transition-all duration-300" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
