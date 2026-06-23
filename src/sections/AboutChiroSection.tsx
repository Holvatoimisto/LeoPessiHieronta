import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export function AboutChiroSection() {
  return (
    <section className="bg-[#080C0A] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
        {/* Image — mobile first, desktop second */}
        <ScrollReveal direction="right" delay={0.2} className="order-1 md:order-2">
          <div>
            <img
              src="/assets/kiropraktiikka_selkaranka.jpg"
              alt="Kiropraktinen hoito ja selkäranka"
              loading="lazy"
              className="w-full md:w-[280px] rounded-lg"
            />
          </div>
        </ScrollReveal>

        {/* Text — mobile second, desktop first */}
        <ScrollReveal className="order-2 md:order-1">
          <div>
            <h2 className="font-marcellus text-[32px] md:text-[36px] text-[#F4F4F4] mb-6">
              Mitä kiropraktiikka on?
            </h2>
            <p className="font-jakarta text-[16px] text-[#9A9A9A] leading-relaxed mb-4">
              Kiropraktiikka on tuki- ja liikuntaelimistön häiriöiden tutkimiseen ja hoitoon erikoistunut terveydenhuoltoala. Kiropraktikko käyttää käsillä tehtäviä hoitotekniikoita, joilla pyritään palauttamaan nivelten ja lihasten normaali toiminta.
            </p>
            <p className="font-jakarta text-[16px] text-[#9A9A9A] leading-relaxed mb-8">
              The Back Roomissa jokainen hoito alkaa huolellisella tutkimuksella. Kuulemme, miten kehosi voi, tutkimme liikelaajuudet ja räätälöimme hoitosuunnitelman juuri sinulle.
            </p>
            <Link
              to="/palvelut/kiropraktiikka"
              className="inline-flex items-center px-7 py-3 rounded font-jakarta text-[15px] font-semibold border border-[#F4F4F4]/40 text-[#F4F4F4]/80 hover:bg-[rgba(244,244,244,0.08)] hover:border-[#F4F4F4]/50 transition-all duration-300"
            >
              Lue lisää kiropraktiikasta
            </Link>

            {/* Related pathways — subtle, editorial */}
            <div className="mt-6">
              <span className="font-jakarta text-[13px] text-[#9A9A9A]/60 mr-3">Tutustu myös:</span>
              <Link
                to="/palvelut/hieronta"
                className="inline-flex items-center gap-1 font-jakarta text-[13px] text-[#9A9A9A]/60 hover:text-gold transition-colors duration-300 group mr-4"
              >
                Hieronta
                <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/palvelut/personal-training"
                className="inline-flex items-center gap-1 font-jakarta text-[13px] text-[#9A9A9A]/60 hover:text-gold transition-colors duration-300 group"
              >
                Personal Training
                <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
