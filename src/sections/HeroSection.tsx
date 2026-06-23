import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center md:blur-0"
        style={{ backgroundImage: 'url(/assets/hero.jpg)' }}
      />

      {/* Desktop overlay — warm charcoal */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-[rgba(18,14,10,0.58)] via-[rgba(18,14,10,0.62)] to-[rgba(18,14,10,0.68)]" />

      {/* Mobile overlay — cinematic left-to-right gradient */}
      <div
        className="md:hidden absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(12,10,8,0.80) 0%, rgba(18,14,10,0.65) 35%, rgba(18,14,10,0.30) 65%, rgba(18,14,10,0.12) 100%)',
        }}
      />

      {/* Mobile subtle blur overlay */}
      <div className="md:hidden absolute inset-0 backdrop-blur-[1.5px]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-[10%] pt-14 md:pt-20">
        <div className="max-w-[720px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-jakarta text-[13px] font-semibold uppercase tracking-[2px] text-gold mb-6 hidden md:block"
          >
            THE BACK ROOM — TAMPERE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-marcellus text-[30px] md:text-[40px] font-semibold text-white leading-[1.2] max-w-[600px] mb-5 md:mb-6"
          >
            Kivuttomampaa ja
            <br />
            tasapainoisempaa oloa.
          </motion.h1>

          {/* Desktop supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden md:block font-jakarta text-[16px] md:text-[18px] text-white/75 leading-[1.75] max-w-[480px] mb-12"
          >
            Kiropraktiikkaa, hierontaa ja kokonaisvaltaista kehonhuoltoa Tampereen keskustassa — jotta liikkuminen, palautuminen ja arki tuntuvat paremmilta.
          </motion.p>

          {/* Mobile supporting text — shorter, smaller */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:hidden font-jakarta text-[14px] text-white/60 leading-[1.7] max-w-[260px] mb-5"
          >
            Kiropraktiikkaa, hierontaa ja kokonaisvaltaista kehonhuoltoa Tampereen keskustassa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-start gap-3 mb-7 md:mb-14"
          >
            <Link
              to="/yhteystiedot"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded font-jakarta text-[15px] font-semibold tracking-wide bg-gold text-[#080C0A] hover:bg-white hover:shadow-[0_4px_20px_rgba(212,160,61,0.3)] transition-all duration-300"
            >
              Varaa aika
            </Link>
            <a
              href="tel:+358400601819"
              className="inline-flex items-center gap-2 font-jakarta text-[14px] text-white/60 hover:text-white/80 transition-colors duration-300 px-3 py-2.5 group"
            >
              <Phone size={15} className="opacity-50" />
              <span className="group-hover:underline underline-offset-4 decoration-white/20">
                0400 60 18 19
              </span>
            </a>
          </motion.div>

          {/* Desktop trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="hidden md:flex flex-wrap items-center gap-x-3 gap-y-2 mt-6"
          >
            {[
              { text: '4.8/5 asiakasarvio', url: 'https://www.google.com/search?sa=X&sca_esv=dc37c2f0b8a15054&sxsrf=ANbL-n7NqlVx3l2FTG78cyfN4147rqhP5w:1779014806439&q=The+Back+Room,+Kiropraktikko,+Tampere+Arvostelut&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2MDIyMDQyNjc2NzOzNDczt7Aw3cDI-IrRICQjVcEpMTlbISg_P1dHwTuzKL-gKDG7JDM7O19HISQxtyC1KFXBsagsv7gkNae0ZBEryVoA4sbkioAAAAA&rldimm=8220123737669767885&tbm=lcl&hl=fi-FI&ved=2ahUKEwjm5NnMksCUAxVuKRAIHbALLi4Q9fQKegQIShAI&biw=1280&bih=585&dpr=1.5#lkt=LocalPoiReviews' },
              { text: 'Koulutetut ammattilaiset', url: null },
              { text: '20+ vuoden kokemus', url: null },
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="text-white/25 text-[10px]">●</span>
                )}
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-jakarta text-[14px] text-white/65 no-underline"
                  >
                    ★ {item.text}
                  </a>
                ) : (
                  <span className="font-jakarta text-[14px] text-white/65">
                    {item.text}
                  </span>
                )}
              </span>
            ))}
          </motion.div>

          {/* Mobile trust bar — simplified */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="md:hidden flex flex-wrap items-center gap-x-2 gap-y-2 mt-5"
          >
            <a
              href="https://www.google.com/search?sa=X&sca_esv=dc37c2f0b8a15054&sxsrf=ANbL-n7NqlVx3l2FTG78cyfN4147rqhP5w:1779014806439&q=The+Back+Room,+Kiropraktikko,+Tampere+Arvostelut&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2MDIyMDQyNjc2NzOzNDczt7Aw3cDI-IrRICQjVcEpMTlbISg_P1dHwTuzKL-gKDG7JDM7O19HISQxtyC1KFXBsagsv7gkNae0ZBEryVoA4sbkioAAAAA&rldimm=8220123737669767885&tbm=lcl&hl=fi-FI&ved=2ahUKEwjm5NnMksCUAxVuKRAIHbALLi4Q9fQKegQIShAI&biw=1280&bih=585&dpr=1.5#lkt=LocalPoiReviews"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jakarta text-[13px] text-white/50 no-underline"
            >
              ★ 4.8/5 asiakasarvio
            </a>
            <span className="text-white/20 text-[8px]">●</span>
            <span className="font-jakarta text-[13px] text-white/50">20+ vuoden kokemus</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
