import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Plus, Minus } from 'lucide-react';

interface FAQData {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQData[] = [
  {
    question: 'Mistä tiedän kenelle asiantuntijalle varata?',
    answer: (
      <>
        Jos et ole varma mikä palvelu tai asiantuntija sopii tilanteeseesi, voit aina soittaa meille ja kysyä. Neuvomme mielellämme sinulle sopivaa hoitoa.
        <a
          href="tel:0400601819"
          className="block mt-3 font-jakarta text-[14px] text-[#4A4540]/70 tracking-wider no-underline hover:text-[#1A1714] hover:underline underline-offset-4 decoration-[#4A4540]/20 transition-colors duration-300"
        >
          📞 0400 601 819
        </a>
      </>
    ),
  },
  {
    question: 'Voinko tulla vaikka en tietäisi mistä kipu tai oire johtuu?',
    answer: 'Kyllä. Moni tulee vastaanotolle juuri siksi, ettei tiedä mistä oireet johtuvat. Hoito alkaa aina kuuntelemisesta, tilanteen kartoituksesta ja huolellisesta tutkimisesta.',
  },
  {
    question: 'Pitääkö ensimmäisellä käynnillä sitoutua hoitojaksoon?',
    answer: 'Ei tarvitse. Hoito suunnitellaan aina sinun tilanteesi mukaan ilman painetta sitoutumiseen.',
  },
  {
    question: 'Miten ajanvaraus toimii?',
    answer: 'Ajan voit varata helposti nettisivuillamme tai soittaa meille suoraan ja varata ajan puhelimitse. Autamme tarvittaessa myös oikean palvelun valinnassa.',
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-t border-[#1A1714]/[0.06]">
      <button
        onClick={onClick}
        className="group w-full flex items-start justify-between gap-4 py-5 md:py-6 text-left bg-transparent border-none cursor-pointer"
      >
        <span className="font-jakarta text-[15px] md:text-[16px] font-medium text-[#1A1714] leading-[1.5]">
          {question}
        </span>
        <span className="shrink-0 mt-[2px] text-[#9A948C]/50 group-hover:text-[#9A948C]/70 transition-colors duration-300">
          {isOpen ? (
            <Minus size={16} strokeWidth={1.5} />
          ) : (
            <Plus size={16} strokeWidth={1.5} />
          )}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-[400ms] ease-out"
        style={{
          maxHeight: isOpen ? '220px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="font-jakarta text-[14px] text-[#5C5650] leading-[1.7] pb-5 md:pb-6 max-w-[540px]">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F4F0EA] pt-16 md:pt-20 pb-6 md:pb-8 px-6 md:px-12">
      <div className="max-w-[640px] mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-14">
            <p className="font-jakarta text-[10px] font-medium uppercase tracking-[4px] text-[#9A948C]/40 mb-5">
              ENNEN ENSIMMÄISTÄ KÄYNTIÄ
            </p>
            <h2 className="font-marcellus text-[26px] md:text-[32px] text-[#1A1714] leading-[1.25]">
              Moni kysyy näitä ennen ajanvarausta
            </h2>
          </div>
        </ScrollReveal>

        {/* FAQ accordion */}
        <ScrollReveal delay={0.1}>
          <div className="mb-12 md:mb-14">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onClick={() => handleClick(i)}
              />
            ))}
            {/* Bottom border */}
            <div className="border-t border-[#1A1714]/[0.06]" />
          </div>
        </ScrollReveal>

        {/* Intentionally empty — flows directly to Final CTA */}
      </div>
    </section>
  );
}
