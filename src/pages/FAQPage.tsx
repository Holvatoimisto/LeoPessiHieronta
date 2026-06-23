import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowLeft } from 'lucide-react';

const faqs = [
  {
    question: 'Minkä pituinen hieronta minulle?',
    answer: 'Ensikertalaisille suosittelemme 45–60 minuutin hoitoa. 30 min riittää, jos haluat keskittyä vain yhteen alueeseen. 90 min antaa aikaa koko keholle perusteellisesti.',
  },
  {
    question: 'Sopiiko hieronta minulle?',
    answer: 'Kyllä! Hieronta sopii kaikille ikään ja kuntoon katsomatta. Meille ovat tervetulleita niin urheilijat, toimistotyöntekijät kuin senioritkin.',
  },
  {
    question: 'Mitä eroa on klassisella ja urheiluhieronalla?',
    answer: 'Klassinen hieronta on rauhallisempaa ja rentouttavampaa. Urheiluhieronnassa käytetään voimakkaampia tekniikoita lihaskireyksien ja -vammojen hoitoon. Molemmat sopivat kaikille.',
  },
  {
    question: 'Miten ajanvaraus toimii?',
    answer: 'Varaa aika helposti nettiajanvarauksestamme tai soita 044 546 6554. Voit myös lähettää WhatsApp-viestin.',
  },
  {
    question: 'Missä sijaitsette?',
    answer: 'Toimimme Tampereen Tampellassa, osoitteessa Tampellan esplanadi 13. Sisäänkäynti on Kyttälönkadun puolelta.',
  },
  {
    question: 'Maksutavat?',
    answer: 'Käteinen, MobilePay, Edenred ja Smartum. Lahjakortit ovat myös saatavilla.',
  },
  {
    question: 'Onko teillä lahjakortteja?',
    answer: 'Kyllä, lahjakortteja saa kaikkiin hoitoihimme. Ota yhteyttä puhelimitse tai paikan päällä.',
  },
  {
    question: 'Voinko perua ajan?',
    answer: 'Kyllä, peruutus viimeistään 24 tuntia ennen varattua aikaa. Myöhäisemmästä peruutuksesta veloitetaan hoidon hinta.',
  },
  {
    question: 'Mitä vaatetusta hierontaan tarvitsen?',
    answer: 'Riittää, että riisut yläosan (naisilla rintaliivit pois). Alaosan voi pitää päällä tai riisua tarpeen mukaan. Saat peiton päälle hoidon ajaksi.',
  },
  {
    question: 'Sopiiko hieronta raskausaikana?',
    answer: 'Kyllä, raskausaikana hieronta on turvallista ja erittäin hyödyllistä. Kerrothan raskaudestasi etukäteen, jotta voimme räätälöidä hoidon sinulle sopivaksi.',
  },
  {
    question: 'Kuinka usein kannattaa käydä hieronnassa?',
    answer: 'Se riippuu tilanteestasi. Akuuttiin vaivaan suositellaan 1–2 kertaa viikossa, ylläpitohoitona kerran kuukaudessa tai tarpeen mukaan.',
  },
  {
    question: 'Mitä jos minulla on kipua tai sairaus?',
    answer: 'Kerrothan kaikista sairauksistasi ja lääkityksestäsi etukäteen. Joitakin tilanteita vastaan ei voi hieroa (esim. akuutti tulehdus, kuume). Kysy rohkeasti!',
  },
];

export function FAQPage() {
  return (
    <div className="bg-white min-h-[100dvh]">
      <div className="h-[60px] md:h-[68px]" />

      <section className="pt-16 md:pt-20 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-[640px] mx-auto">
          <ScrollReveal>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 font-inter text-[13px] text-[#565656] hover:text-[#2B2B2B] transition-colors duration-300 mb-10"
            >
              <ArrowLeft size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
              Takaisin etusivulle
            </Link>
            <p className="font-inter text-[10px] font-medium uppercase tracking-[4px] text-[#2B2B2B]/60 mb-5">
              USEIN KYSYTTYÄ
            </p>
            <h1 className="font-cormorant text-[26px] md:text-[32px] text-[#2B2B2B] leading-[1.25] mb-5">
              Vastauksia yleisimpiin kysymyksiin
            </h1>
            <p className="font-inter text-[14px] text-[#2B2B2B] leading-[1.7] mb-12 max-w-[440px]">
              Jos et löydä vastausta kysymykseesi, soita 044 546 6554 tai lähetä viesti WhatsAppilla.
            </p>
          </ScrollReveal>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="border-t border-[#1A1A1A]/[0.06] py-6">
                  <h3 className="font-inter text-[16px] font-medium text-[#2B2B2B] leading-[1.5] mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-inter text-[14px] text-[#565656] leading-[1.7]">
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-[#1A1A1A]/[0.06]" />
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <p className="font-inter text-[14px] text-[#2B2B2B] mb-5">
                Etkö löytänyt vastausta?
              </p>
              <a
                href="tel:+358445466554"
                className="inline-flex items-center justify-center px-10 py-[14px] rounded font-inter text-[14px] font-semibold bg-[#2B2B2B] text-white hover:bg-[#565656] transition-colors duration-300"
              >
                Soita 044 546 6554
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
