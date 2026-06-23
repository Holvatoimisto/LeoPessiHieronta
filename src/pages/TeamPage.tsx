import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ChevronDown } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  dark: boolean;
  noCta?: boolean;
  longText: string;
}

const team: TeamMember[] = [
  {
    name: 'Krista Ketelä',
    role: 'Kiropraktikko D.C., MChiro, The Back Roomin perustaja',
    image: '/assets/krista.jpg',
    bio: 'The Back Roomin perustaja. Yli 20 vuoden kokemuksella kiropraktiikkaa ja yksilöllistä kohtaamista.',
    expertise: ['Niska- ja selkävaivat', 'Raskausajan hoito', 'Post-operatiivinen kuntoutus', 'Akupunktio'],
    dark: false,
    longText: `Olen suorittanut 5-vuotisen ylemmän korkeakoulututkinnon (MChiro) ja valmistunut kiropraktikoksi vuonna 2004. Opiskelin maineikkaassa AECC:ssa (The Anglo-European College of Chiropractic), joka sijaitsee Bournemouthissa, Etelä-Englannissa. Olen Suomen Kiropraktikkoliiton jäsen.

Kiropraktiikasta urana minut sai innostumaan omat hyvät hoitokokemukset legendaarisen tamperelaisen kiropraktikon Kari Kausen asiakkaana. Onnettomuuden seurauksena tullut niska- ja selkävamma sekä näyttöpäätetyö lennonjohdossa olivat sellainen yhdistelmä, että oma kroppa temppuili jo parikymppisenä.

Valmistumiseni jälkeen päädyinkin sitten työskentelemään juurikin edellämainitun kollega Kausen kanssa Terveystalossa 12 vuoden ajaksi. Vuonna 2016 siirryin pitämään vastaanottoani omiin tiloihin, kun perustin The Back Roomiin Tampereen Papinkadulle. Nykyään meitä on täällä kaksi kiropraktikkoa: Jari ja minä.

Olen äärimmäisen kiitollinen, että löysin kiropraktiikan. Se toi uuden suunnan ei vain keholleni, mutta myös ammatillisesti.

Kiropraktikon työ on toisaalta haastavaa, mutta myös äärimmäisen palkitsevaa. Haastavan työstä tekee se tosiseikka, että kiropraktikon työ on kivun, välillä erittäin vaikeankin kivun, hoitoa. Itselleni työstä palkitsevan tekee se, että kiropraktiikka on hoitomuotona niin tehokas, sillä pääsee hyviin hoitotuloksiin. Lisäksi tykkään tehdä työtä ihmisten parissa.

---

Kiropraktikkona olen perehtynyt tuki- ja liikuntaelimistön häiriöiden tutkimukseen ja hoitoon. Nämä häiriötilat ovat yleensä nivelten ja lihasten toiminnallisia ongelmia, eivät niinkään rakenteellisia. Toisin sanoen ongelmia, joita ei voi esim. röntgen- tai magneettikuvissa nähdä, mutta jotka voi tuntea käsin.

Asiakkaani yleisimmin hakeutuvat vastaanotolleni seuraavien oireiden vuoksi:

• Päänsärky
• Niska-hartiasäryt
• Purentalihasten oireilu
• Niskan tai selän jäykkyys
• Keskiselän kipu ja alaselkäkipu (fasettilukot)
• SI-nivelen pakaran alueen kipu
• Nivuskipu ja lonkkakipu
• Raajojen kivut ja puutuminen
• Olkapään vaivat
• Lihasvaivat
• Jalkapöydän, jalkaterän ja jalkapohjan kipu
• Nilkkakipu
• Selkäleikkauksen ja tekonivelleikkauksen jälkeinen kuntoutus

Varsinainen hoito on nivelten ja lihasten käsittelyä, jolla pyritään palauttamaan hoidettavan alueen normaali liikkuvuus ja asento.

Omat vahvuusalueeni kiropraktikon työssä ovat niskan, rintarangan, alaselän, lantion, nivusalueen ja pakaran ongelmien lisäksi ääreisnivelten (olkapää, nilkka, jalkapöytä) vaivat sekä hampaiden narskuttelusta ja vagus-hermon ärsytyksestä aiheutuvat oireet. Minulla on paljon kokemusta myös raskaana olevien ja hiljattain synnyttäneiden sekä selkäleikkauksesta ja tekonivelleikkausesta toipuvien hoidosta.

---

Kiropraktikkokoulutuksen lisäksi olen suorittanut 4-vuotisen kiinalaisen lääketieteen akupunktiohoitajakoulutuksen.

Pääasiassa teen kiropraktisia hoitoja, mutta tarvittaessa yhdistän kiropraktiseen hoitoon akupunktiohoitoa. Varsinkin päänsärkyjen tai hankalan iskiaskivun yhteydessä päädyn usein tekemään tällaisia yhdistelmähoitoja.

Myös pelkkään akupunktiohoitoon voit halutessasi tulla. Akupunktiohoito toimii hyvin mm. stressiin, toiminnallisiin vatsavaivoihin ja kuukautishäiriöihin.

---

Uskon, että liike on lääke. Mahtava sellainen. Ajattelen, että liikunta toimii parhaiten, ja eniten siitä nauttii, kun keho on ensin hoidettu kivuttomaksi.

Itselleni hyvä päivä on sellainen päivä, kun saa liikkua. En ole suuri liikunnallinen lahjakkuus, eikä minulla ole kilpaurheilutaustaa. Mutta rakastan liikkumista, ja yritän liikkua päivittäin: soudan soutulaitteella, joogaan, teen pilatesta ja venyttelen. Taluttelen koiraa. Hölkkään ja teen voimaharjoittelua. Kesäisin harrastan avovesiuintia.

Ymmärtääkseni paremmin millaiset liikkeet voivat tukea kehon paranemista, olen kouluttautunut myös kuntosali- ja pilatesohjaajaksi.

Omassa työssäni yritän neuvoa kaikille asiakkailleni yksilöllisiä kehonhuolto-ohjeita, eli venyttelyä, liikkuvuutta ja voimaa, sopivassa suhteessa.

---

Keho voi olla joskus vaativa, työläs ja isohuoltoinen. Ajattelen, että omaa kehoa ja sen hyvinvointia kannattaa vaalia niin hyvin kuin vain ehtii ja jaksaa. Se maksaa itsensä takaisin. Hyvin toimiva, kivuton keho on valtava voimavara.

Kehon huollossa jatkuvuus ja säännöllisyys on tärkeää. Itse ajattelen että kehoa kannattaa huoltaa samalla periaatteella kuin hampaitaan. Eli säännöllinen, omatoiminen perushuolto, jonka lisäksi riittävä määrä korjaus- ja huoltotoimenpiteitä ammattilaisen tekemänä. Uskon, että tämä resepti toimii sinullekin.

Aina ei kuitenkaan voimavarat riitä liikkumiseen, tai inspiraatio on hukassa. Jos näin on sinun tapauksessasi, autan silti mielelläni. Hyvin toimiva keho kuuluu kaikille.`
  },
  {
    name: 'Jari Salminen',
    role: 'Kiropraktikko D.C.',
    image: '/assets/jari.jpg',
    bio: 'Erikoistunut tuki- ja liikuntaelimistön vaivojen tutkimiseen ja hoitoon kaikissa ikäryhmissä.',
    expertise: ['Selkävaivat', 'Nivelvaivat', 'Urheiluvammat', 'Kuntoutus'],
    dark: true,
    longText: `Kiropraktikko mielletään pääosin rankaan liittyvien ongelmien hoitajaksi, mutta viisivuotiseen koulutukseen kuuluu myös raajojen hoito, olipa vaiva sitten paikallinen, säteilyoire tai vaikkapa puutuminen.

Olen työskennellyt paljon myös urheilijoiden kanssa ja kokemusta on kertynyt runsaasti myös raajojen lihas- sekä nivelvaivoista. Monet asiakkaani ovatkin saaneet tehokasta apua esimerkiksi olkapään, polven tai nilkan vaivoihin.

Voit varata minulle ajan netistä tai soittamalla 0400 601 819

---

Kiropraktikkona omia vahvuuksiani ovat:

• Hyvä diagnoositaito, joka on välttämätöntä oireiden syyn selvittämiseksi
• Hyvät kädentaidot pehmytkudos- ja nivelkäsittelyissä
• Toiminnallinen osaaminen, jonka avulla pystyn ohjaamaan asiakkaitani huolehtimaan itsestään sekä estämään vaivan uusiutumista

Lähitulevaisuuden suunnitelmissa on kehittää omaa ammatillista osaamista etenkin neurologian alueella sekä lisätä akupunktio osaksi omaa työkalupakkia.

---

Omiin harrastuksiini kuuluu tällä hetkellä crosstraining eli yhdistelmäharjoittelu, jossa treeniin yhdistyy kestävyys, voima ja liikkuvuus. Monipuolinen harjoittelu auttaa pysymään hyvässä kunnossa fyysisessä ammatissa, mutta myös ymmärtämään oikeanlaisen liikkeen tärkeyden sekä terveessä että kipuilevassa kehossa.`
  },
  {
    name: 'Annika Toivonen',
    role: 'Urheiluhieroja, Dry Needling -terapeutti',
    image: '/assets/annika.jpg',
    bio: 'Koulutettu urheiluhieroja. Laaja osaaminen hierontatekniikoista ja Dry Needling -hoidoista.',
    expertise: ['Urheiluhieronta', 'Mobilisoivat tekniikat', 'Dry Needling', 'Palautuminen'],
    dark: false,
    longText: `Olen Annika Toivonen, koulutettu hieroja ja teen monipuolista mobilisoivaa hierontaa.

Olen valmistunut klassiseksi hierojaksi vuonna 2019 ja suorittanut sen jälkeen myös urheiluhieronnan erikoisammattitutkinnon. Olen laajentanut osaamistani erilaisilla koulutuksilla, suurimpana kokonaisuutena Dry Needling -terapeutin tutkinto vuonna 2023.

Tällä hetkellä opiskelen vastaanottotyön ohella fysioterapeutiksi (valmistuminen vuonna 2027).

Hoitooni kuuluu aina monipuolinen alkukartoitus ja erilaisten testien tekeminen. Pidän tärkeänä ottaa ihminen huomioon yksilönä ja ymmärtää kehon toimintaa kokonaisuutena.

Räätälöimme yhdessä sinulle sopivan hoidon, jotta saat mahdollisimman tehokkaan ja monipuolisen avun. Käytän hieronnassa paljon nivelten mobilisointitekniikoita, joka tehostaa hoidon vaikutusta ja auttaa myös parantamaan nivelten liikelaajuuksia.

Kiinnostuin aikoinaan hieronta-alasta kamppaillessani oman kehon ongelmien parissa odottaessani esikoista. Suoritin ensin liikunnanohjaajan tutkinnon ja tein personal trainerin töitä. Edellinen ammattini ravitsemusalalla tuki tätä puolta hyvin. Halusin oppia syvemmin kehomme toiminnasta ja silloin innostuin hakeutumaan hierojakouluun. Se polku on vienyt mennessään ja liikunta ja hyvinvointi on edelleen tärkeässä osassa elämääni.

Fysioterapiaopinnot syventävät osaamistani entisestään manuaaliterapian ammattilaisena. Olen itsekin aina urheillut monipuolisesti ja tällä hetkellä pelaan salibandya 3. divari tasolla. Pidän myös rauhallisesta ja rentouttavasta liikunnasta kuten luonnossa liikkumisesta, vaeltamisesta ja kehonhuollosta.

Olen erikoistunut erityisesti tuki- ja liikuntaelinongelmien hoitoon ja ennaltaehkäisyyn. Toimin koripallon parissa fysiikkavalmentajana ja juniorijoukkueenhuoltajana ja vastaanotollani käy paljon urheilijoita.

Erityisesti mielenkiinnon kohteenani on lantion alueen toimintahäiriöt ja urheiluvammojen ennaltaehkäisy ja kuntoutus. Muun muassa raskausajan ja synnytyksen jälkeiset ongelmat sekä purentalihashieronta ovat myös isossa osassa arkipäiväistä työtäni.

---

Purentalihasten ongelmat ovat osana monien arkipäiväistä elämää. Purentalihasten kireys voi aiheuttaa päänsärkyä, migreeniä, tinnitusta ja niskan alueen kipua ja jäykkyyttä.

Purentalihasten hieronta vaikuttaa rentouttavasti koko kehoon ja suosittelen ehdottomasti hoitoa, mikäli sinulla on hampaiden narskuttelua, jännitystä ja stressiä.

---

Dry Needling, eli kuivaneulaus on länsimaalaiseen lääketieteeseen perustuvaa akupunktiota. Kuivaneulauksella paneudutaan erityisesti lihaksien triggerpisteiden hoitoon.

Neulat aktivoi kehon omaa kivunlievitysjärjestelmää ja vapauttaa muun muassa endorfiini-hormonia. Kuivaneulaus on kivuton ja lempeä hoitomuoto yhdessä hieronnan kanssa.

Moni on saanut Dry Needling -hoidosta apua migreenin oireiden lievittämiseen ja nivelten liikerajoituksien parantamiseen. Yhdistän kuivaneulausta hierontaan, joten voit matalalla kynnyksellä kokeilla, sopisiko kuivaneulaus sinulle yhtenä hoitomuotona kehosi hyvinvoinnin tukemiseen.

Lämpimästi tervetuloa vastaanotolleni!`
  },
  {
    name: 'Sari Kuivanen',
    role: 'Personal Trainer, MyOver40® Master Trainer',
    image: '/assets/sari.jpg',
    bio: 'MyOver40®-valmentaja. Liikkuvuutta ja voimaa yli 40-vuotiaille naisille arjen keskellä.',
    expertise: ['Liikkuvuusvalmennus', 'Voimaharjoittelu', 'Ravinto-ohjaus', 'MyOver40®'],
    dark: true,
    noCta: true,
    longText: `Olen Sari Kuivanen, kokenut personal trainer ja MyOver40® Master Trainer Tampereella.

Olen auttanut lukuisia asiakkaita pääsemään eroon kivuista, jotka johtuvat kehon kireyksistä ja samalla saavuttamaan liikuntaan, lihaskuntoon ja painonhallintaan liittyvät tavoitteet.

Oma selkävaivani motivoi minua kehittämään osaamistani personal trainerista MyOver40® Master -valmentajaksi. Koulutukseni antoi minulle avaimet auttaa erityisesti yli 40-vuotiaita kipuilevia asiakkaita liikkumaan taas kivuttomasti.

---

Räätälöin sinulle yksilölliset harjoitusohjelmat, joiden avulla pyritään palauttamaan kiristävä ja kipuileva kehosi takaisin joustavaksi ja liikkuvaksi. Harjoitukset auttavat tuntemaan olosi jälleen nuorekkaaksi ja energiseksi, jolloin kehityt myös muussa harjoittelussa.

Autan sinua saavuttamaan seuraavat tavoitteet:

• Kivun lievitys — pääset eroon kroonisista kiputiloista ja jäykkyydestä
• Liikkuvuuden parantaminen — tunnet olosi ketterämmäksi ja rennommaksi
• Voiman kasvattaminen — vahvistat lihaksia ja parannat lihastasapainoasi
• Energinen olo — saat lisää virtaa arkeen ja apua painonhallintaan

Olen erikoistunut treeniohjelmiin yli 40-vuotiaille. Autan sinua löytämään juuri ikäisellesi sopivan harjoittelun ja palautumisen määrän. Lisäksi huomioin ravitsemuksen tarpeen.

Mikäli etsit henkilökohtaista personal training -ohjausta, joka huomioi kokonaisvaltaisesti sinun kehosi erityistarpeet ja auttaa sinua saavuttamaan hyvinvointiin liittyvät tavoitteet, olet tullut oikeaan paikkaan.

Yhdessä Back Roomin kiropraktikoiden kanssa tarjoamme sinulle kokonaisvaltaista huolenpitoa, joka vie kehosi kohti terveyttä ja hyvinvointia.

---

Personal Trainer – ProFi-Fitness School taso 4 -koulutus, joka kattaa laajan valikoiman liikuntamuotoja, voima- ja kestävyysvalmennuksesta kehonhuoltoon.

Pilates-ohjaaja – ProFi-Fitness School. Erikoistuminen kehon liikkuvuuden, keskivartalon vahvuuden ja tasapainon parantamiseen pilates-harjoittelun avulla.

Ravintovalmentaja – Syvällinen ymmärrys ravitsemuksesta, painonhallinnasta ja näiden vaikutuksesta kehon terveyteen ja suorituskykyyn.

MyOver40®-ohjaaja – ProFi-Fitness School. Lisenssikoulutus, joka keskittyy yli 40-vuotiaiden erityistarpeisiin ja haasteisiin liikunnan, liikkuvuuden ja kehonhuollon saralla.

MyOver40® Master Trainer – ProFi-Fitness School. Valmius toimia liikunta-alan ammattilaisten kouluttajana MyOver40®-lisenssin haluaville.

---

Voit varata ajan Sari Kuivaselle puhelimella tai sähköpostilla!

Sähköposti: myover40finland@gmail.com
Puhelin: 040 216 28 28
Kotisivut: www.myover40.fi`
  },
  {
    name: 'Elisa Kuusela',
    role: 'Hieroja',
    image: '/assets/elisa.jpg',
    bio: 'Rauhallista ja yksilöllistä kehonhuoltoa vakioasiakkaille Tampereella.',
    expertise: ['Hieronta'],
    dark: false,
    noCta: true,
    longText: `Rauhallista ja yksilöllistä kehonhuoltoa vakioasiakkaille Tampereella.`
  },
];

function LongTextAccordion({ text, isDark }: { text: string; isDark: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = text.split('---').map(s => s.trim()).filter(Boolean);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex flex-col items-center gap-1 cursor-pointer bg-transparent border-none p-0 mb-2"
        aria-label={isOpen ? 'Sulje' : 'Avaa lisää'}
      >
        <span className={`font-jakarta text-[11px] font-medium uppercase tracking-[2px] transition-colors duration-300 ${isOpen ? 'text-[#D4A03D]/70' : 'text-[#9A9A9A]/40 group-hover:text-[#D4A03D]/55'}`}>
          {isOpen ? 'Sulje' : 'Lue lisää'}
        </span>
        <ChevronDown
          size={18}
          strokeWidth={1.5}
          className={`transition-all duration-400 ${isOpen ? 'text-[#D4A03D]/60 rotate-180' : 'text-[#9A9A9A]/30 group-hover:text-[#D4A03D]/40'}`}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{
          maxHeight: isOpen ? '2000px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className={`pt-4 pb-2 border-t ${isDark ? 'border-[#F4F4F4]/[0.06]' : 'border-[#080C0A]/[0.06]'}`}>
          {sections.map((section, i) => (
            <div key={i} className={i > 0 ? 'mt-6' : ''}>
              {section.split('\n').map((line, j) => {
                const trimmed = line.trim();
                if (!trimmed) return null;
                if (trimmed.startsWith('• ')) {
                  return (
                    <p key={j} className={`font-jakarta text-[13px] leading-[1.7] pl-4 mb-1.5 ${isDark ? 'text-[#9A9A9A]/80' : 'text-[#151B18]/70'}`}>
                      {trimmed}
                    </p>
                  );
                }
                return (
                  <p key={j} className={`font-jakarta text-[14px] leading-[1.75] mb-3 ${isDark ? 'text-[#9A9A9A]' : 'text-[#151B18]/80'}`}>
                    {trimmed}
                  </p>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Asiantuntijat — The Back Room Tampere</title>
        <meta name="description" content="Tutustu ammattilaisiimme: Krista Ketelä, Jari Salminen, Annika Toivonen ja Sari Kuivanen. Kiropraktiikkaa, hierontaa ja personal trainingia Tampereella." />
      </Helmet>

      {/* Header */}
      <section className="bg-[#080C0A] pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <h1 className="font-marcellus text-[36px] md:text-[48px] text-[#F4F4F4] mb-4">
              Asiantuntijamme
            </h1>
            <p className="font-jakarta text-[16px] md:text-[18px] text-[#9A9A9A] max-w-[600px]">
              Tutustu ammattilaisiimme, jotka ovat täällä sinua varten.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team members */}
      {team.map((member, i) => (
        <section key={i} className={`${member.dark ? 'bg-[#151B18]' : 'bg-[#F4F4F4]'} py-16 md:py-24 px-6 md:px-12`}>
          <div className="max-w-[1280px] mx-auto">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? 'md:[direction:rtl] md:[&>*]:[direction:ltr]' : ''}`}>
              <ScrollReveal direction={i % 2 === 0 ? 'left' : 'right'}>
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full max-w-[450px] mx-auto rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                />
              </ScrollReveal>
              <ScrollReveal direction={i % 2 === 0 ? 'right' : 'left'} delay={0.2}>
                <div>
                  <h2 className={`font-marcellus text-[32px] ${member.dark ? 'text-[#F4F4F4]' : 'text-[#080C0A]'} mb-2`}>
                    {member.name}
                  </h2>
                  <p className="font-jakarta text-[16px] text-gold mb-6">{member.role}</p>
                  <p className={`font-jakarta text-[16px] leading-relaxed mb-6 ${member.dark ? 'text-[#9A9A9A]' : 'text-[#151B18]'}`}>
                    {member.bio}
                  </p>

                  {/* Accordion dropdown */}
                  <LongTextAccordion text={member.longText} isDark={member.dark} />

                  <div className="mt-6 mb-8">
                    <p className={`font-jakarta text-[13px] font-semibold uppercase tracking-wider mb-3 ${member.dark ? 'text-[#F4F4F4]' : 'text-[#080C0A]'}`}>
                      Erikoisosaaminen
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((e, j) => (
                        <span key={j} className="font-jakarta text-[13px] px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>

                  {!member.noCta && (
                    <a
                      href="https://www.varaamossalmenniemi.fi/thebackroom/"
                      className="inline-flex items-center justify-center px-8 py-3.5 rounded font-jakarta text-[15px] font-semibold tracking-wide bg-gold text-[#080C0A] hover:bg-white-custom hover:shadow-[0_4px_20px_rgba(212,160,61,0.3)] transition-all duration-300"
                    >
                      Varaa aika
                    </a>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#080C0A] py-16 px-6 md:px-12">
        <div className="max-w-[720px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-marcellus text-[28px] md:text-[32px] text-[#F4F4F4] mb-6">
              Kenelle varaisit ajan?
            </h2>
            <a
              href="https://www.varaamossalmenniemi.fi/thebackroom/"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded font-jakarta text-[15px] font-semibold tracking-wide bg-gold text-[#080C0A] hover:bg-white-custom hover:shadow-[0_4px_20px_rgba(212,160,61,0.3)] transition-all duration-300"
            >
              Varaa aika
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
