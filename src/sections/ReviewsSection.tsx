import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    quote: 'Krista on poikkeuksellinen ammattilainen. Hän ymmärtää kehon kokonaisuutena ja jokainen hoito tuntuu aidosti vaikuttavalta.',
    name: 'Asiakas',
    location: 'Tampere',
  },
  {
    quote: 'The Back Room on ollut osa hyvinvointirutiiniani vuosia. En voisi kuvitella parempaa paikkaa kehonhuoltoon.',
    name: 'Asiakas',
    location: 'Tampere',
  },
  {
    quote: 'Olen käynyt monella kiropraktikolla, mutta Kristan hoito on eri levelillä. Hänellä on taito löytää oikeat kohdat ja hoitaa ne hellästi.',
    name: 'Asiakas',
    location: 'Tampere',
  },
  {
    quote: 'Aina kivuton ja asiantunteva. The Back Roomissa tulee hyvin kohdatuksi ja hoito on aina räätälöityä.',
    name: 'Asiakas',
    location: 'Tampere',
  },
  {
    quote: 'Käyn sekä Kristalla että Jarilla. Molemmat ovat ammattilaisia oikealla tavalla — taitavia, lämpimiä ja aitoja.',
    name: 'Asiakas',
    location: 'Tampere',
  },
  {
    quote: 'Hoidon jälkeen olo on aina kuin uusi ihminen. Suosittelen lämpimästi kaikille, joilla on kipua tai jäykkyyttä.',
    name: 'Asiakas',
    location: 'Tampere',
  },
  {
    quote: 'The Back Room ei ole pelkkä kiropraktikkotoimisto. Se on kokonaisvaltainen kehonhuollon studio, jossa olen saanut apua vuosien ajan.',
    name: 'Asiakas',
    location: 'Tampere',
  },
  {
    quote: 'Se mikä tekee The Back Roomista erityisen on se, että täällä kuunnellaan oikeasti. Hoito räätälöidään aina tilanteesi mukaan.',
    name: 'Asiakas',
    location: 'Tampere',
  },
];

export function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, [checkScroll]);

  const scrollBy = (direction: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.children[0]?.clientWidth || 400;
    el.scrollBy({ left: direction * (cardWidth + 24), behavior: 'smooth' });
  };

  return (
    <section className="bg-[#E7E0D6] py-20 md:py-28 pb-24 md:pb-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-marcellus text-[32px] md:text-[36px] text-[#080C0A] mb-4">
              Mitä asiakkaamme sanovat
            </h2>
            <p className="font-jakarta text-[12px] tracking-[3px] text-[#9A9A9A]/55 uppercase">
              4,8/5 asiakkaiden suosima
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel container */}
        <div className="relative">
          {/* Left arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scrollBy(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full border border-[#080C0A]/10 flex items-center justify-center text-[#9A9A9A]/40 hover:text-[#080C0A]/60 transition-all duration-300 -ml-2 md:-ml-4 bg-transparent"
              aria-label="Edellinen"
            >
              <ChevronLeft size={16} />
            </button>
          )}

          {/* Right arrow */}
          {canScrollRight && (
            <button
              onClick={() => scrollBy(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full border border-[#080C0A]/10 flex items-center justify-center text-[#9A9A9A]/40 hover:text-[#080C0A]/60 transition-all duration-300 -mr-2 md:-mr-4 bg-transparent"
              aria-label="Seuraava"
            >
              <ChevronRight size={16} />
            </button>
          )}

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                className="snap-start flex-shrink-0 w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
              >
                <div className="bg-[#F6F2EC] rounded-[20px] p-8 md:p-10 pt-10 md:pt-12 h-full flex flex-col min-h-[280px] shadow-[0_8px_32px_rgba(8,12,10,0.06)] border border-[rgba(8,12,10,0.02)]">
                  {/* Stars */}
                  <div className="flex gap-[3px] mb-6">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} fill="#C49A3C" stroke="#C49A3C" strokeWidth={0} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-jakarta text-[15px] md:text-[16px] text-[#151B18]/80 leading-[1.7] mb-8 flex-1">
                    &ldquo;{review.quote}&rdquo;
                  </p>

                  {/* Name */}
                  <div>
                    <p className="font-jakarta text-[12px] text-[#9A9A9A]/55 tracking-wide">
                      {review.name}, {review.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA — editorial link, not button */}
        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              to="/arvostelut"
              className="group inline-flex items-center gap-2 font-jakarta text-[12px] text-[#9A9A9A]/45 hover:text-[#9A9A9A]/70 transition-colors duration-300 tracking-wider"
            >
              Lue lisää kokemuksia
              <ArrowRight size={12} strokeWidth={1.5} className="text-[#9A9A9A]/25 group-hover:text-[#9A9A9A]/50 group-hover:translate-x-0.5 transition-all duration-300" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
