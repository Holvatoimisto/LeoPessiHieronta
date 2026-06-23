import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

interface PriceItem {
  name: string;
  price: string;
}

interface PriceCategory {
  title: string;
  items: PriceItem[];
}

const categories: PriceCategory[] = [
  {
    title: 'Kiropraktiikka',
    items: [
      { name: 'Ensikäynti', price: '84' },
      { name: 'Jatkohoito', price: '80' },
    ],
  },
  {
    title: 'Hieronta',
    items: [
      { name: '60 min', price: '65' },
      { name: '90 min', price: '89' },
    ],
  },
  {
    title: 'Valmennus',
    items: [
      { name: 'Myover40\u00AE', price: '75' },
      { name: '5 kerran aloituspaketti', price: '350' },
    ],
  },
];

export function PricingPreviewSection() {
  return (
    <section className="bg-[#F4F0EA] py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-[520px] mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-14">
            <p className="font-jakarta text-[11px] font-medium uppercase tracking-[4px] text-[#D4A03D]/60 mb-5">
              HINNASTO
            </p>
            <h2 className="font-marcellus text-[26px] md:text-[30px] text-[#1A1714] leading-[1.25] mb-5">
              Selke&auml;t hinnat, ei yll&auml;tyksi&auml;
            </h2>
            <p className="font-jakarta text-[14px] text-[#4A4540] leading-[1.7] max-w-[400px] mx-auto">
              Ensimm&auml;inen k&auml;ynti alkaa aina rauhallisella kartoituksella ja tilanteesi ymm&auml;rt&auml;misell&auml;.
            </p>
          </div>
        </ScrollReveal>

        {/* Price categories */}
        <ScrollReveal delay={0.1}>
          <div className="mb-12">
            {categories.map((cat, ci) => (
              <div key={ci} className={ci > 0 ? 'mt-8' : ''}>
                {/* Category title */}
                <p className="font-jakarta text-[10px] font-medium uppercase tracking-[3px] text-[#9A948C]/40 mb-3">
                  {cat.title}
                </p>
                {/* Items */}
                <div className="border-t border-[#1A1714]/[0.05]">
                  {cat.items.map((item, ii) => (
                    <div
                      key={ii}
                      className={`flex justify-between items-baseline py-4 ${
                        ii < cat.items.length - 1 ? 'border-b border-[#1A1714]/[0.05]' : ''
                      }`}
                    >
                      <span className="font-jakarta text-[15px] font-medium text-[#1A1714]/80">
                        {item.name}
                      </span>
                      <span className="flex items-baseline gap-1 ml-6">
                        <span className="font-marcellus text-[18px] text-[#1A1714]">
                          {item.price}
                        </span>
                        <span className="font-jakarta text-[13px] text-[#9A948C]/50">
                          &euro;
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA link */}
        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <Link
              to="/hinnasto"
              className="group inline-flex items-center gap-1.5 font-jakarta text-[13px] text-[#4A4540]/65 hover:text-[#1A1714] transition-colors duration-300 tracking-wider underline underline-offset-4 decoration-[#4A4540]/20 hover:decoration-[#1A1714]/40"
            >
              Katso koko hinnasto
              <ArrowRight
                size={12}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
