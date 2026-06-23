import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Heart, UserCheck, ShieldCheck, TrendingUp } from 'lucide-react';

const values = [
  { icon: <Heart size={48} />, title: 'Kokonaisvaltaisuus', desc: 'Näemme ihmisen kokonaisuutena — keho ja mieli ovat yhteydessä toisiinsa.' },
  { icon: <UserCheck size={48} />, title: 'Yksilöllisyys', desc: 'Jokainen asiakas on uniikki. Hoito räätälöidään aina yksilön tarpeisiin.' },
  { icon: <ShieldCheck size={48} />, title: 'Rehellisyys', desc: 'Kerromme aina rehellisesti, mitä voimme tehdä ja mitä suosittelemme.' },
  { icon: <TrendingUp size={48} />, title: 'Jatkuva kehitys', desc: 'Pysymme ajan tasalla ja kehitämme osaamistamme jatkuvasti.' },
];

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Tietoa meistä — The Back Room Tampere</title>
        <meta name="description" content="The Back Room on tamperelainen hyvinvointikeskus. Kiropraktiikkaa, hierontaa ja personal trainingia jo vuodesta 2016. Tutustu tarinaamme." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/toimitila_ulkoa.jpg" alt="The Back Room Tampere" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,12,10,0.4)] to-[rgba(8,12,10,0.85)]" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h1 className="font-marcellus text-[36px] md:text-[48px] text-[#F4F4F4] mb-4">
              The Back Room
            </h1>
            <p className="font-jakarta text-[16px] md:text-[18px] text-[#F4F4F4]/85 max-w-[600px]">
              Kiropraktiikkaa, hierontaa ja personal trainingia Tampereella jo vuodesta 2016.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F4F4F4] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[45%_55%] gap-10 md:gap-16 items-center">
          <ScrollReveal direction="left">
            <img
              src="/assets/toimitila_sisa.jpg"
              alt="The Back Roomin tilat"
              loading="lazy"
              className="w-full rounded-lg shadow-lg"
            />
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <h2 className="font-marcellus text-[32px] md:text-[36px] text-[#080C0A] mb-6">
                Meidän tarinamme
              </h2>
              <div className="space-y-4">
                <p className="font-jakarta text-[16px] text-[#151B18] leading-relaxed">
                  The Back Room syntyi vuonna 2016 Krista Ketelän rakkaudesta omaan ammattiin ja paikallisyhteisöön. Krista oli työskennellyt kiropraktikkona yli 12 vuotta Terveystalossa, kunnes päätti perustaa oman vastaanoton — paikan, jossa hän voisi toteuttaa omaa visiotaan kokonaisvaltaisesta kehonhuollosta.
                </p>
                <p className="font-jakarta text-[16px] text-[#151B18] leading-relaxed">
                  Kristan tausta on poikkeuksellinen: ennen kiropraktiikan uraa hän työskenteli lennonjohtajana. Onnettomuus avasi tien kehonhuoltoon, ja kiropraktiikan löytäminen muutti hänen elämänsä. Koulutus Englannin Bournemouthissa AECC-yliopistossa antoi vahvan perustan ammattitaidolle.
                </p>
                <p className="font-jakarta text-[16px] text-[#151B18] leading-relaxed">
                  Vuosien varrella tiimi on kasvanut. Jari Salminen toi mukanaan oman osaamisensa kiropraktiikassa, Annika Toivonen hieronnan ja Dry Needlingin taitonsa, ja Sari Kuivanen personal trainingin ja MyOver40®-menetelmän. Jokainen tiimin jäsen jakaa saman arvomaailman: asiakas on aina yksilö, joka ansaitsee kokonaisvaltaisen ja huolellisen hoidon.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#080C0A] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <h2 className="font-marcellus text-[32px] md:text-[36px] text-[#F4F4F4] text-center mb-14">
              Arvomme
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-gold">{v.icon}</div>
                  <h3 className="font-marcellus text-[22px] text-[#F4F4F4]">{v.title}</h3>
                  <p className="font-jakarta text-[14px] text-[#9A9A9A] leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Facilities */}
      <section className="bg-[#151B18] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <h2 className="font-marcellus text-[32px] md:text-[36px] text-[#F4F4F4] text-center mb-8">
              Tilamme
            </h2>
            <p className="font-jakarta text-[16px] text-[#9A9A9A] text-center mb-14 max-w-[600px] mx-auto">
              Papinkatu 19, Tampere. Hämeenpuiston kupeessa, hyvien kulkuyhteyksien varrella.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <img src="/assets/toimitila_ulkoa.jpg" alt="The Back Roomin sisäänkäynti" loading="lazy" className="w-full aspect-[16/10] object-cover rounded-lg" />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <img src="/assets/toimitila_sisa.jpg" alt="The Back Roomin sisätilat" loading="lazy" className="w-full aspect-[16/10] object-cover rounded-lg" />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <img src="/assets/hoitotilanne_krista.jpg" alt="Hoitotila" loading="lazy" className="w-full aspect-[16/10] object-cover rounded-lg" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080C0A] py-16 px-6 md:px-12">
        <div className="max-w-[720px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-marcellus text-[28px] md:text-[32px] text-[#F4F4F4] mb-6">
              Tule käymään
            </h2>
            <Link
              to="/yhteystiedot"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded font-jakarta text-[15px] font-semibold tracking-wide bg-gold text-[#080C0A] hover:bg-white-custom hover:shadow-[0_4px_20px_rgba(212,160,61,0.3)] transition-all duration-300"
            >
              Varaa aika
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
