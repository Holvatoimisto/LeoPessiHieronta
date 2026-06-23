import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ReviewCard } from '@/components/ReviewCard';

const reviews = [
  { quote: 'Jo käsittelyn aikana huomasin muutoksen kehossa ja seuraavana aamuna olo oli suorastaan euforinen.', name: '— Asiakas' },
  { quote: 'Aivan mielettömän hyvä fiilis, kivuttomampi ja kepeempi. Kiitos käsittelystä ja neuvoista!', name: '— Asiakas' },
  { quote: 'Kiropraktikko Krista Ketelä hoitaa kokonaisvaltaisesti. Hän jaksoi kuunnella ja auttoi ymmärtämään, mitä itse voin tehdä.', name: '— Asiakas' },
  { quote: 'Siellä on aina lämmin vastaanotto ja tulee tunne, että ihan kuin kotiin menisi. Lämmin ilmapiiri on hoidon onnistumiseksi tärkeää.', name: '— Asiakas' },
  { quote: 'Olen ollut oikein tyytyväinen, aina on hoidon jälkeen kävely tuntunut helpommalta ja olen pystynyt kohentamaan ryhtiänikin.', name: '— Asiakas' },
  { quote: 'Krista on mahtavan ammattitaitoinen kiropraktikko. Lisäksi mukava ja iloinen persoona, jolla on ilo käydä. Hoidon aikana kertoo mitä tekee ja miksi.', name: '— Asiakas' },
  { quote: 'Vahva suositus täältä Jarille. Ajanvaraus onnistui sujuvasti haluamalleni ajalle ja vaiva tuli hoidetuksi.', name: '— Asiakas' },
  { quote: 'Huippupalvelua ja asiantuntemusta! Suosittelen lämpimästi myös urheilijoille, lajista riippumatta!', name: '— Asiakas' },
  { quote: 'Uskomatonta! Oli pakko kotiin kävellessä ottaa muutama juoksuaskel, kiitos!', name: '— Asiakas' },
  { quote: 'Kiitos Kristalle, mukava ja ammattitaitoinen ihminen. Kun olet pulassa, varaa pikimmiten aika ja Krista auttaa!', name: '— Asiakas' },
  { quote: 'Ihanat viihtyisät tilat ja huippupalvelu!', name: '— Asiakas' },
  { quote: 'Kaiken kaikkiaan voin selkeästi ja kokonaisvaltaisesti paremmin. Tietoisuus omasta kehosta on lisääntynyt.', name: '— Asiakas' },
  { quote: 'Elisa Kuusela is a super star who has a holistic, soothing approach but infuses just the right amount of strength to her massage.', name: '— Asiakas' },
  { quote: 'Hieroja Elisa Kuusela on kiipeilijänä osannut ymmärtää ja käsitellä omasta kiipeilyharrastuksestani johtuvia vaivojani.', name: '— Asiakas' },
  { quote: 'Amazing professional service and treatment. Chiropractor Jari Salminen helped improve my ulnar nerve problems.', name: '— Asiakas' },
  { quote: 'Great chiropractor, Jari Salminen saved me on a very rough Saturday afternoon! Highly recommend!', name: '— Asiakas' },
];

export function ReviewsPage() {
  return (
    <>
      <Helmet>
        <title>Asiakaspalautteet — The Back Room Tampere</title>
        <meta name="description" content="Lue mitä asiakkaamme sanovat kokemuksistaan The Back Roomissa. 5/5 arviot. Kiropraktiikkaa, hierontaa ja personal trainingia Tampereella." />
      </Helmet>

      {/* Header */}
      <section className="bg-[#080C0A] pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <h1 className="font-marcellus text-[36px] md:text-[48px] text-[#F4F4F4] mb-4">
              Asiakkaamme kertovat
            </h1>
            <p className="font-jakarta text-[16px] md:text-[18px] text-[#9A9A9A]">
              Tässä mitä asiakkaamme sanovat kokemuksistaan.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-[#F4F4F4] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <ReviewCard quote={review.quote} name={review.name} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080C0A] py-16 px-6 md:px-12">
        <div className="max-w-[720px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-marcellus text-[28px] md:text-[32px] text-[#F4F4F4] mb-6">
              Haluatko kokea itse?
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
