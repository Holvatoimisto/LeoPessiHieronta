import { ScrollReveal } from '@/components/ScrollReveal';

export function TrustBridgeSection() {
  return (
    <section className="bg-[#0D0A08] py-14 md:py-16 px-6 md:px-12">
      <div className="max-w-[960px] mx-auto">
        <ScrollReveal>
          <div className="text-center">
            {/* Thin gold divider */}
            <div className="w-[40px] h-[1px] bg-[#D4A03D]/25 mx-auto mb-8" />

            {/* Main trust line */}
            <p className="font-marcellus text-[20px] md:text-[24px] text-[#F4F4F4]/85 leading-[1.35] mb-4">
              Moniammatillista kehonhuoltoa kokemuksella ja läsnäololla
            </p>

            {/* Services row */}
            <p className="font-jakarta text-[12px] md:text-[13px] text-[#9A9A9A]/45 tracking-wider">
              Kiropraktiikka &middot; Hieronta &middot; Urheiluhieronta &middot; Dry Needling &middot; Personal Training
            </p>

            {/* Bottom gold divider */}
            <div className="w-[40px] h-[1px] bg-[#D4A03D]/25 mx-auto mt-8" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
