import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Plus,
  Minus,
} from 'lucide-react';

const templateData = {
  business: {
    name: 'Leo Pessi',
    tagline: 'Koulutettu hieroja',
    fullTagline: 'KOULUTETTU HIEROJA LEO PESSI',
    address: 'Tampellan esplanadi 13 / Kyttälönkatu 4, Tampere',
    phone: '044 546 6554',
    phoneLink: 'tel:+358445466554',
    email: 'info@leopessi.fi',
    emailLink: 'mailto:info@leopessi.fi',
    bookingUrl: 'https://slotti.fi/booking/koulutettuhierojaleopessi/',
    googleReviewUrl: 'https://g.co/kgs/W9ENsR',
    googleMapsUrl: 'https://goo.gl/maps/F98ywgVhkfPWgQbe6',
    facebookUrl: 'https://www.facebook.com/leopessi/',
    instagramUrl: 'https://www.instagram.com/leopessi/',
  },
  navigation: {
    logo: '/assets/leopessi_logo.png',
    logoDark: '/assets/leopessi_logo.png',
    backgroundColor: '#2B2B2B',
    links: [
      { label: 'ETUSIVU', href: '#' },
      { label: 'Palvelut', href: '#palvelut' },
      { label: 'Hinnasto', href: '#hinnasto' },
      { label: 'Yhteystiedot', href: '#yhteystiedot' },
    ],
    extraLinks: [
      { label: 'Asiakkaiden kokemuksia', href: '#arvostelut' },
      { label: 'Usein kysyttyä', href: '/usein-kysyttya' },
    ],
    ctaButton: { label: 'Varaa aika', href: 'https://slotti.fi/booking/koulutettuhierojaleopessi/' },
  },
  hero: {
    backgroundImage: '/assets/leopessi_hero_v2.png',
    eyebrow: 'KOULUTETTU HIEROJA LEO PESSI',
    headline: 'Ensiluokkaista kehonhuoltoa Tampereen Tampellassa!',
    subheadline: 'Klassinen hieronta, urheiluhieronta, dry needling, purentalihashieronta ja muut kehonhuollon menetelmät saman katon alta.',
    ctaPrimary: { label: 'Varaa aika', href: 'https://slotti.fi/booking/koulutettuhierojaleopessi/' },
    ctaSecondary: { label: 'Tutustu palveluihin', href: '#palvelut' },
    stats: [
      { value: '150+', label: 'Google-arvostelua' },
      { value: '10+', label: 'vuotta kokemusta' },
      { value: '5/5', label: 'asiakastyytyväisyys' },
    ],
  },
  intro: {
    text: 'Ensiluokkaista kehonhuoltoa Tampereella',
    backgroundColor: '#2B2B2B',
  },
  services: {
    eyebrow: 'PALVELUT',
    headline: 'Hierontaa ja kehonhuoltoa monipuolisesti',
    body: 'Valitse tarpeisiisi sopiva hoito. Kaikki tekniikat ja työkalut samaan hintaan.',
    reassurance: 'Etkö ole varma mikä palvelu sopii sinulle? Soita 044 546 6554 ja kysy.',
    primaryServices: [
      {
        image: '/assets/leopessi_classic.jpg',
        title: 'Klassinen & Urheiluhieronta',
        description: 'Käsin tehtävää kehon pehmytkudosten käsittelyä. Mobilisoivia otteita, faskia- ja triggerpistekäsittelyä sekä venytyksiä. Voimakkuus räätälöidään aina asiakkaan tarpeiden mukaan.',
        linkText: 'Tutustu hierontaan',
        linkHref: '/palvelut/hieronta',
      },
      {
        image: '/assets/leopessi_dryneedling.jpg',
        title: 'Dry Needling',
        description: 'Hieronta voidaan aloittaa ja syventää kuivaneulauksella. Neula vapauttaa lihaksen herkemmän pisteen nopeasti ja tehokkaasti.',
        linkText: 'Tutustu Dry Needlingiin',
        linkHref: '/palvelut/dry-needling',
      },
    ],
    secondaryLabel: 'Myös saatavilla',
    secondaryServices: [
      { image: '/assets/leopessi_jaw.jpg', title: 'Purentalihashieronta', linkHref: '/palvelut/purentalihashieronta' },
      { image: '/assets/leopessi_cupping.jpg', title: 'Kuivakuppaus', linkHref: '/palvelut/kuivakuppaus' },
      { image: '/assets/leopessi_iastm.jpg', title: 'IASTM', linkHref: '/palvelut/faskiaraudat' },
    ],
  },
  pricing: {
    eyebrow: 'HINNASTO',
    headline: 'Selkeät hinnat, ei yllätyksiä',
    body: 'Kaikki tekniikat ja työkalut samaan hintaan paitsi osteopatia.',
    tabs: [
      {
        key: 'hieronta',
        label: 'Hieronta',
        description: 'Klassinen hieronta kaikilla tekniikoilla.',
        items: [
          { duration: '30 min', price: '35' },
          { duration: '45 min', price: '45' },
          { duration: '60 min', price: '55' },
          { duration: '75 min', price: '65' },
          { duration: '90 min', price: '75' },
          { duration: '120 min', price: '95' },
        ],
      },
      {
        key: 'urheiluhieronta',
        label: 'Urheiluhieronta',
        description: 'Syvempiä tekniikoita urheilijoille ja aktiiviliikkujille.',
        items: [
          { duration: '30 min', price: '35' },
          { duration: '45 min', price: '45' },
          { duration: '60 min', price: '55' },
          { duration: '75 min', price: '65' },
          { duration: '90 min', price: '75' },
          { duration: '120 min', price: '95' },
        ],
      },
      {
        key: 'purentalihashieronta',
        label: 'Purentalihashieronta',
        description: 'Erikoishoito leukojen ja purentalihasten alueelle.',
        items: [
          { duration: '45 min', price: '45' },
          { duration: '60 min', price: '55' },
        ],
      },
      {
        key: 'dryneedling',
        label: 'Dry Needling',
        description: 'Neulakäsittely lihaskireyksiin ja triggerpisteisiin.',
        items: [
          { duration: '45 min', price: '45' },
          { duration: '60 min', price: '55' },
          { duration: '90 min', price: '75' },
        ],
      },
      {
        key: 'kinesioteippaus',
        label: 'Kinesioteippaus',
        description: 'Teippaus lihastuen ja kivunlievitykseen.',
        items: [
          { duration: '15 min', price: '20' },
          { duration: '30 min', price: '35' },
        ],
      },
      {
        key: 'osteopatia',
        label: 'Osteopatia',
        description: 'Osteopaattinen käsittely. Hinta sisältää alkukartoituksen.',
        items: [
          { duration: '45 min', price: '65' },
          { duration: '60 min', price: '80' },
        ],
      },
    ],
  },
  reviews: {
    eyebrow: 'ASIAKASKOKEMUKSIA',
    headline: 'Mitä asiakkaamme sanovat',
    description: 'Yli 150 viiden tähden arvostelua Googlesta.',
    items: [
      { name: 'Anni K.', text: 'Leo on ehdottomasti paras hieroja, jolla olen käynyt. Ammattitaitoinen, kuuntelee ja osaa kohdistaa hoidon oikein.', service: 'Klassinen hieronta' },
      { name: 'Mikael L.', text: 'Urheilijana tarvitsen säännöllistä huoltoa. Leon hieronta on aina laadukasta ja tuloksellista.', service: 'Urheiluhieronta' },
      { name: 'Sanna R.', text: 'Purentalihashieronta auttoi minua todella paljon. Olen kärsinyt leukakivuista vuosia ja nyt ne ovat poissa.', service: 'Purentalihashieronta' },
      { name: 'Petri H.', text: 'Dry needling oli uusi tuttavuus, mutta todella tehokasta. Kireät lihakset löystyivät heti.', service: 'Dry Needling' },
      { name: 'Laura M.', text: 'Kuivakuppaus rentoutti yllättävän tehokkaasti. Leo osaa kertoa mitä tekee ja miksi.', service: 'Kuivakuppaus' },
      { name: 'Jussi T.', text: 'IASTM-käsittely auttoi olkapäävaivoihin, joihin mikään muu ei ollut tehonnut. Suosittelen!', service: 'IASTM' },
      { name: 'Tiina S.', text: 'Kinesioteippaus piti olkapääni kasassa treeneissä. Leo on todella ammattitaitoinen.', service: 'Kinesioteippaus' },
      { name: 'Marko P.', text: 'Osteopatia auttoi selkäkipuihin, jotka ovat vaivanneet pitkään. Kiitos Leo!', service: 'Osteopatia' },
    ],
  },
  team: {
    eyebrow: 'TUTUSTU MEIHIN',
    headline: 'Asiantuntijat sinua varten',
    members: [
      {
        name: 'Leo Pessi',
        firstName: 'Leolta',
        title: 'Koulutettu hieroja',
        role: 'Hieroja',
        image: '/assets/leopessi_team_v2.png',
        avatar: '/assets/leopessi_team_v2.png',
        bio: 'Koulutettu hieroja Tampereelta. Erikoisosaamista urheilijoille ja aktiiviliikkujille. Käytössäni ovat monipuoliset tekniikat ja työkalut: klassinen hieronta, urheiluhieronta, dry needling, purentalihashieronta, kuivakuppaus, IASTM, kinesioteippaus ja osteopatia.',
        testimonial: 'Leo on ehdottomasti paras hieroja, jolla olen käynyt. Ammattitaitoinen ja kuuntelee.',
      },
      {
        name: 'Roman Aliev',
        firstName: 'Romanista',
        title: 'Osteopaattiopiskelija',
        role: 'Osteopaatti',
        image: '/assets/roman_aliev.png',
        avatar: '/assets/roman_aliev.png',
        bio: 'Roman on 26-vuotias osteopaattiopiskelija Atlas Osteopaattikoulusta. Hän tekee hoitoja opintojensa ohella ja valmistautuu avaamaan oman vastaanottonsa.\n\nHoidot sopivat urheilijoille sekä kaikille, jotka haluavat tukea kehon hyvinvointia, parantaa liikkuvuutta tai helpottaa kiputiloja.\n\nRomanin opintojen keskiössä on Body Adjustment -hoitomenetelmä, jonka tavoitteena on parantaa kehon liikkuvuutta, tasapainoa ja toiminnallisuutta.\n\nHänelle tärkeää on kohdata jokainen asiakas yksilöllisesti ja auttaa voimaan paremmin omassa kehossaan.',
        testimonial: 'Minulle tärkeintä on kohdata jokainen asiakas yksilöllisesti ja auttaa häntä voimaan paremmin omassa kehossaan.',
      },
    ],
  },
  faq: {
    eyebrow: 'ENNEN ENSIMMÄISTÄ KÄYNTIÄ',
    headline: 'Usein kysyttyä',
    items: [
      {
        question: 'Minkä pituinen hieronta minulle?',
        answer: 'Ensikertalaisille suosittelemme 45–60 minuutin hoitoa. 30 min riittää, jos haluat keskittyä vain yhteen alueeseen. 90 min antaa aikaa koko keholle perusteellisesti.',
        includePhone: false,
      },
      {
        question: 'Sopiiko hieronta minulle?',
        answer: 'Kyllä! Hieronta sopii kaikille ikään ja kuntoon katsomatta. Meille ovat tervetulleita niin urheilijat, toimistotyöntekijät kuin senioritkin.',
        includePhone: false,
      },
      {
        question: 'Mitä eroa on klassisella ja urheiluhieronalla?',
        answer: 'Klassinen hieronta on rauhallisempaa ja rentouttavampaa. Urheiluhieronnassa käytetään voimakkaampia tekniikoita lihaskireyksien ja -vammojen hoitoon. Molemmat sopivat kaikille.',
        includePhone: false,
      },
      {
        question: 'Miten ajanvaraus toimii?',
        answer: 'Varaa aika helposti nettiajanvarauksestamme tai soita 044 546 6554. Voit myös lähettää WhatsApp-viestin.',
        includePhone: true,
      },
    ],
  },
  finalCta: {
    backgroundImage: '/assets/final_cta_bg.png',
    eyebrow: 'VARAA AIKA',
    headline: 'Tule käymään, kehosi kiittää sinua',
    supportText: 'Varaa hieronta jo tänään',
    ctaLabel: 'Varaa aika',
    phone: '044 546 6554',
    phoneSupport: 'Soita tai WhatsApp',
    trustItems: [
      { icon: 'star', label: '5/5 (150+)' },
      { icon: 'clock', label: 'Urheilijoiden erikoisosaaja' },
      { icon: 'calendar', label: 'Vapaita aikoja usein jo seuraavalle päivälle' },
    ],
  },
  footer: {
    columns: [
      {
        title: 'Palvelut',
        links: [
          { label: 'Klassinen & Urheiluhieronta', href: '/palvelut/hieronta' },
          { label: 'Dry Needling', href: '/palvelut/dry-needling' },
          { label: 'Purentalihashieronta', href: '/palvelut/purentalihashieronta' },
          { label: 'Kuivakuppaus', href: '/palvelut/kuivakuppaus' },
          { label: 'IASTM', href: '/palvelut/faskiaraudat' },
          { label: 'Kinesioteippaus', href: '/palvelut/kinesioteippaus' },
          { label: 'Osteopatia', href: '/palvelut/osteopatia' },
        ],
      },
      {
        title: 'Yritys',
        links: [
          { label: 'Tutustu hierojaan', href: '#tiimi' },
          { label: 'Asiakkaiden kokemuksia', href: '#arvostelut' },
          { label: 'Lahjakortti', href: '/lahjakortti' },
          { label: 'Usein kysyttyä', href: '/usein-kysyttya' },
        ],
      },
      {
        title: 'Yhteystiedot',
        links: [
          { label: '044 546 6554', href: 'tel:+358445466554' },
          { label: 'info@leopessi.fi', href: 'mailto:info@leopessi.fi' },
          { label: 'WhatsApp', href: 'https://wa.me/358445466554' },
          { label: 'Tampellan esplanadi 13, Tampere', href: '#' },
        ],
      },
    ],
    paymentMethods: 'Maksutavat: Käteinen, MobilePay, Edenred, Smartum',
    copyright: 'Leo Pessi. Kaikki oikeudet pidätetään.',
  },
};

function ScrollReveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const serviceDropdownItems = [
  { label: 'Klassinen & Urheiluhieronta', href: '/palvelut/hieronta' },
  { label: 'Dry Needling', href: '/palvelut/dry-needling' },
  { label: 'Purentalihashieronta', href: '/palvelut/purentalihashieronta' },
  { label: 'Kuivakuppaus', href: '/palvelut/kuivakuppaus' },
  { label: 'IASTM', href: '/palvelut/faskiaraudat' },
  { label: 'Kinesioteippaus', href: '/palvelut/kinesioteippaus' },
  { label: 'Osteopatia', href: '/palvelut/osteopatia' },
];

export function ChiropractorTemplate() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);
  const [teamTransitioning, setTeamTransitioning] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [activePricingTab, setActivePricingTab] = useState(0);
  const [surveyStep, setSurveyStep] = useState(0);
  const [surveyAnswers, setSurveyAnswers] = useState<string[]>([]);

  const getRecommendation = (answers: string[]) => {
    const [, symptom, duration] = answers;
    if (symptom === 'puutuminen' || answers[0] === 'useampi') {
      return {
        title: 'Suosittelemme osteopaattista tutkimusta',
        description: 'Oireidesi perusteella pelkkä lihaskäsittely ei välttämättä ole ensimmäinen ratkaisu. Osteopaattinen tutkimus auttaa selvittämään oireiden taustalla olevia syitä ja valitsemaan sopivan hoidon.',
        serviceLink: '/palvelut/osteopatia',
        bookingUrl: 'https://slotti.fi/booking/koulutettuhierojaleopessi/',
      };
    }
    if (answers[0] === 'leuka' || (answers[0] === 'niska' && symptom === 'paansarky')) {
      return {
        title: 'Suosittelemme purentalihashierontaa',
        description: 'Niska-hartiaseudun jännitykset ja purentalihasten kuormitus voivat olla yhteydessä päänsärkyihin ja leukojen alueen oireisiin. Purentalihashieronta voi auttaa vähentämään lihasjännitystä ja parantamaan alueen toimintaa.',
        serviceLink: '/palvelut/purentalihashieronta',
        bookingUrl: 'https://slotti.fi/booking/koulutettuhierojaleopessi/',
      };
    }
    if (symptom === 'urheiluvamma' || answers[3] === 'palautuminen') {
      return {
        title: 'Suosittelemme urheiluhierontaa',
        description: 'Urheiluhieronta auttaa palautumisessa, liikkuvuuden ylläpidossa sekä harjoittelun aiheuttamien lihasjännitysten käsittelyssä.',
        serviceLink: '/palvelut/hieronta',
        bookingUrl: 'https://slotti.fi/booking/koulutettuhierojaleopessi/',
      };
    }
    if (answers[0] === 'selka' && (duration === '6kk' || duration === 'toistuu' || duration === 'yli6kk')) {
      return {
        title: 'Suosittelemme osteopaattista tutkimusta',
        description: 'Pitkään jatkuneet selkäoireet vaativat usein perusteellisempaa tutkimusta. Osteopaattinen lähestymistapa auttaa löytämään oireiden taustalla olevat syyt ja rakentamaan yksilöllisen hoitosuunnitelman.',
        serviceLink: '/palvelut/osteopatia',
        bookingUrl: 'https://slotti.fi/booking/koulutettuhierojaleopessi/',
      };
    }
    return {
      title: 'Suosittelemme klassista hierontaa',
      description: 'Klassinen hieronta sopii monenlaisiin oireisiin. Se auttaa lihaskireyksiin, parantaa verenkiertoa ja edistää kehon omaa palautumiskykyä. Hieronnan aikana voimme tarvittaessa hyödyntää myös muita tekniikoita kuten dry needlingiä tai kuppausta.',
      serviceLink: '/palvelut/hieronta',
      bookingUrl: 'https://slotti.fi/booking/koulutettuhierojaleopessi/',
    };
  };

  const surveyQuestions = [
    {
      question: 'Missä oireesi sijaitsee?',
      options: [
        { label: 'Niska ja hartiat', value: 'niska' },
        { label: 'Selkä', value: 'selka' },
        { label: 'Leuka ja purenta', value: 'leuka' },
        { label: 'Käsi tai olkapää', value: 'kasi' },
        { label: 'Jalka tai lonkka', value: 'jalka' },
        { label: 'Useampi alue', value: 'useampi' },
      ],
    },
    {
      question: 'Mikä kuvaa tilannettasi parhaiten?',
      options: [
        { label: 'Lihaskireys', value: 'kireys' },
        { label: 'Kipu liikkuessa', value: 'kipu' },
        { label: 'Päänsärky tai migreeni', value: 'paansarky' },
        { label: 'Puutuminen tai säteilyoire', value: 'puutuminen' },
        { label: 'Urheiluvamma', value: 'urheiluvamma' },
        { label: 'Palautuminen harjoittelusta', value: 'palautuminen' },
      ],
    },
    {
      question: 'Kuinka kauan oire on jatkunut?',
      options: [
        { label: 'Alle viikon', value: 'viikko' },
        { label: '1–4 viikkoa', value: '4vko' },
        { label: '1–6 kuukautta', value: '6kk' },
        { label: 'Yli 6 kuukautta', value: 'yli6kk' },
        { label: 'Toistuu säännöllisesti', value: 'toistuu' },
      ],
    },
    {
      question: 'Mitä toivot hoidolta eniten?',
      options: [
        { label: 'Kivun lievitystä', value: 'kivunlievitys' },
        { label: 'Parempaa liikkuvuutta', value: 'liikkuvuus' },
        { label: 'Lihaskireyden helpotusta', value: 'kireydenhelpotus' },
        { label: 'Nopeampaa palautumista', value: 'palautuminen' },
        { label: 'Selvyyttä oireen syyhyn', value: 'selvyys' },
      ],
    },
  ];

  const handleTeamSelect = useCallback((index: number) => {
    if (index === activeTeamIndex || teamTransitioning) return;
    setTeamTransitioning(true);
    setTimeout(() => {
      setActiveTeamIndex(index);
      setTeamTransitioning(false);
    }, 350);
  }, [activeTeamIndex, teamTransitioning]);

  const prevReview = () => setReviewIndex((i) => (i === 0 ? templateData.reviews.items.length - 1 : i - 1));
  const nextReview = () => setReviewIndex((i) => (i === templateData.reviews.items.length - 1 ? 0 : i + 1));

  const activeTeamMember = templateData.team.members[activeTeamIndex];
  const visibleReviews = [
    templateData.reviews.items[reviewIndex % templateData.reviews.items.length],
    templateData.reviews.items[(reviewIndex + 1) % templateData.reviews.items.length],
    templateData.reviews.items[(reviewIndex + 2) % templateData.reviews.items.length],
    templateData.reviews.items[(reviewIndex + 3) % templateData.reviews.items.length],
  ];

  return (
    <div className="min-h-[100dvh] font-inter antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2B2B2B] shadow-[0_1px_12px_rgba(0,0,0,0.15)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 h-[60px] md:h-[68px] flex items-center justify-between">
          <Link to="/" className="relative z-10">
            <img
              src={templateData.navigation.logo}
              alt={templateData.business.name}
              className="h-9 md:h-10 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {/* Etusivu */}
            <a
              href="#"
              className="font-inter text-[13px] font-semibold uppercase tracking-[0.12em] text-[#FFFFFF]/90 hover:text-[#DEDEDE] transition-colors duration-300"
            >
              Etusivu
            </a>

            {/* Palvelut dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 font-inter text-[13px] font-semibold uppercase tracking-[0.12em] text-[#FFFFFF]/90 hover:text-[#DEDEDE] transition-colors duration-300 bg-transparent border-none cursor-pointer"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Palvelut
                <ChevronDown size={14} strokeWidth={1.5} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-1 w-[240px] bg-[#3A3A3A] rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.35)] border border-[#F4F4F4]/[0.06] py-2 overflow-hidden"
                >
                  {serviceDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-2.5 font-inter text-[13px] text-[#FFFFFF]/80 hover:text-[#DEDEDE] hover:bg-[#F4F4F4]/[0.04] transition-colors duration-200"
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t border-[#F4F4F4]/[0.06] mt-1 pt-1">
                    <a
                      href="#palvelut"
                      className="block px-4 py-2.5 font-inter text-[12px] font-semibold uppercase tracking-wider text-[#DEDEDE]/80 hover:text-[#DEDEDE] transition-colors duration-200"
                      onClick={() => setServicesOpen(false)}
                    >
                      Kaikki palvelut →
                    </a>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Hinnasto */}
            <a
              href="#hinnasto"
              className="font-inter text-[13px] font-semibold uppercase tracking-[0.12em] text-[#FFFFFF]/90 hover:text-[#DEDEDE] transition-colors duration-300"
            >
              Hinnasto
            </a>

            {/* Yhteystiedot */}
            <a
              href="#yhteystiedot"
              className="font-inter text-[13px] font-semibold uppercase tracking-[0.12em] text-[#FFFFFF]/90 hover:text-[#DEDEDE] transition-colors duration-300"
            >
              Yhteystiedot
            </a>

            {/* Extra links */}
            {templateData.navigation.extraLinks.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-inter text-[13px] font-medium tracking-[0.12em] text-[#FFFFFF]/90 hover:text-[#DEDEDE] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-inter text-[13px] font-medium tracking-[0.12em] text-[#FFFFFF]/90 hover:text-[#DEDEDE] transition-colors duration-300"
                >
                  {link.label}
                </a>
              )
            )}

            {/* CTA Button */}
            <a
              href={templateData.navigation.ctaButton.href}
              className="inline-flex items-center justify-center px-7 py-3 rounded font-inter text-[13px] font-bold tracking-[0.06em] bg-[#DEDEDE] text-[#2B2B2B] hover:bg-[#FFFFFF] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
            >
              {templateData.navigation.ctaButton.label}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 text-[#FFFFFF] transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#2B2B2B] border-t border-[#F4F4F4]/[0.06] px-5 py-6"
          >
            <a href="#" onClick={() => setMobileOpen(false)} className="block font-inter text-[14px] font-semibold uppercase tracking-wider text-[#FFFFFF]/90 py-3 border-b border-[#F4F4F4]/[0.06]">Etusivu</a>

            {/* Mobile services dropdown */}
            <div className="border-b border-[#F4F4F4]/[0.06]">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-3 font-inter text-[14px] font-semibold uppercase tracking-wider text-[#FFFFFF]/90 bg-transparent border-none cursor-pointer"
              >
                <span>Palvelut</span>
                <ChevronDown size={16} strokeWidth={1.5} className={`text-[#FFFFFF]/50 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pb-3 pl-3">
                  {serviceDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block py-2 font-inter text-[13px] text-[#FFFFFF]/70 hover:text-[#DEDEDE] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a href="#palvelut" onClick={() => setMobileOpen(false)} className="block py-2 font-inter text-[12px] font-semibold uppercase tracking-wider text-[#D97706]/70">Kaikki palvelut →</a>
                </div>
              )}
            </div>

            <a href="#hinnasto" onClick={() => setMobileOpen(false)} className="block font-inter text-[14px] font-semibold uppercase tracking-wider text-[#FFFFFF]/90 py-3 border-b border-[#F4F4F4]/[0.06]">Hinnasto</a>
            <a href="#yhteystiedot" onClick={() => setMobileOpen(false)} className="block font-inter text-[14px] font-semibold uppercase tracking-wider text-[#FFFFFF]/90 py-3 border-b border-[#F4F4F4]/[0.06]">Yhteystiedot</a>

            {templateData.navigation.extraLinks.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-inter text-[14px] text-[#FFFFFF]/60 py-3 border-b border-[#F4F4F4]/[0.06] last:border-0"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-inter text-[14px] text-[#FFFFFF]/60 py-3 border-b border-[#F4F4F4]/[0.06] last:border-0"
                >
                  {link.label}
                </a>
              )
            )}

            <div className="mt-4 pt-4 border-t border-[#F4F4F4]/[0.06]">
              <a
                href={templateData.navigation.ctaButton.href}
                className="inline-flex items-center justify-center w-full px-5 py-3.5 rounded font-inter text-[14px] font-bold tracking-[0.08em] bg-[#2B2B2B] text-white hover:bg-[#565656] transition-colors duration-300"
              >
                {templateData.navigation.ctaButton.label}
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${templateData.hero.backgroundImage})`, filter: 'contrast(1.04)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.37) 0%, rgba(0,0,0,0.52) 50%, rgba(0,0,0,0.67) 100%)' }} />
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px', opacity: 0.03 }} />
        <div className="relative z-10 w-full max-w-[800px] mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-[60px]">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-inter text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.18em] text-[#B3B3B3] mb-4"
          >
            {templateData.hero.eyebrow}
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-cormorant text-[34px] md:text-[46px] lg:text-[53px] text-[#FFFFFF] leading-[1.15] mb-5 max-w-[700px]"
          >
            {templateData.hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-inter text-[13px] md:text-[15px] text-[#DEDEDE]/65 leading-[1.7] mb-9 max-w-[580px]"
          >
            {templateData.hero.subheadline}
          </motion.p>

          {/* CTA pair */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-9"
          >
            <a
              href={templateData.hero.ctaPrimary.href}
              className="inline-flex items-center justify-center px-9 py-3.5 rounded font-inter text-[13px] font-bold tracking-[0.08em] bg-[#FFFFFF] text-[#2B2B2B] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:bg-[#DEDEDE] transition-all duration-300"
            >
              {templateData.hero.ctaPrimary.label}
            </a>
            <a
              href={templateData.hero.ctaSecondary.href}
              className="inline-flex items-center justify-center px-9 py-3.5 rounded font-inter text-[13px] font-semibold tracking-[0.06em] text-[#FFFFFF]/80 border border-[#FFFFFF]/25 hover:border-[#FFFFFF]/50 hover:text-[#FFFFFF] transition-all duration-300"
            >
              {templateData.hero.ctaSecondary.label}
            </a>
          </motion.div>

          {/* Stat cards — premium glass */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex items-center justify-center gap-4 md:gap-5"
          >
            {templateData.hero.stats.map((stat, i) => (
              <div
                key={i}
                className="text-center px-5 py-4 md:px-6 md:py-5 rounded-[14px]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <p className="font-cormorant text-[21px] md:text-[25px] text-[#FFFFFF] leading-none mb-1.5">{stat.value}</p>
                <p className="font-inter text-[10px] text-[#B3B3B3] tracking-[0.06em]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative overflow-hidden" style={{ backgroundColor: templateData.intro.backgroundColor, paddingTop: '44px', paddingBottom: '44px' }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px', opacity: 0.03 }} />
        <div className="relative text-center px-6">
          <p className="font-cormorant text-[17px] md:text-[20px] text-[#DEDEDE]/70 tracking-[0.02em]">
            {templateData.intro.text}
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="palvelut" className="bg-[#DEDEDE] pt-16 md:pt-20 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-[920px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-18">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-[#565656] mb-5">{templateData.services.eyebrow}</p>
              <h2 className="font-cormorant text-[26px] md:text-[32px] text-[#2B2B2B] leading-[1.35] mb-6">{templateData.services.headline}</h2>
              <p className="font-inter text-[14px] text-[#2B2B2B] leading-[1.75] max-w-[440px] mx-auto">{templateData.services.body}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {templateData.services.primaryServices.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <Link to={service.linkHref} className="group block rounded-[12px] overflow-hidden bg-[#D5D5D5] transition-all duration-500 ease-out hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)]">
                  <div className="relative overflow-hidden">
                    <img src={service.image} alt={service.title} loading="lazy" className="w-full aspect-[16/10.5] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(86,86,86,0.018) 0%, transparent 40%, rgba(222,222,222,0.15) 100%)', mixBlendMode: 'multiply' }} />
                  </div>
                  <div className="px-8 pt-7 pb-9 md:px-10 md:pt-8 md:pb-10">
                    <h3 className="font-cormorant text-[26px] md:text-[28px] text-[#2B2B2B] mb-4">{service.title}</h3>
                    <p className="font-inter text-[14px] text-[#565656] leading-[1.75] mb-8 max-w-[340px]">{service.description}</p>
                    <span className="inline-flex items-center gap-1.5 font-inter text-[13px] text-[#2B2B2B]/45 group-hover:text-[#565656] transition-colors duration-300">
                      {service.linkText}
                      <ArrowRight size={13} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-18 md:mt-22 pt-12 border-t border-[#2B2B2B]/[0.04]">
              <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-[#565656]/70 text-center mb-10">{templateData.services.secondaryLabel}</p>
              <div className="grid grid-cols-3 gap-4 md:gap-5">
                {templateData.services.secondaryServices.map((service, i) => (
                  <Link key={i} to={service.linkHref} className="group block rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
                    <div className="relative overflow-hidden aspect-[4/3.2]">
                      <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" style={service.title === 'Dry Needling' ? { objectPosition: 'left center' } : undefined} />
                      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(43,43,43,0.3) 100%)' }} />
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                        <p className="font-cormorant text-[15px] md:text-[17px] text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]">{service.title}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              {/* Symptom Survey */}
              <div className="mt-14 md:mt-18 max-w-[520px] mx-auto">
                {surveyStep === 0 ? (
                  /* Intro view */
                  <div className="text-center">
                    <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-[#565656] mb-4">ETKÖ OLE VARMA?</p>
                    <h3 className="font-cormorant text-[22px] md:text-[26px] text-[#2B2B2B] leading-[1.35] mb-3">Selvitä mikä hoito sopii tilanteeseesi</h3>
                    <p className="font-inter text-[14px] text-[#565656] leading-[1.7] mb-6">Vastaa muutamaan kysymykseen ja saat suosituksen oireidesi perusteella.</p>
                    <button
                      onClick={() => { setSurveyStep(1); setSurveyAnswers([]); }}
                      className="inline-flex items-center justify-center px-10 py-4 rounded font-inter text-[14px] font-bold tracking-[0.08em] bg-[#2B2B2B] text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:bg-[#565656] transition-all duration-300 cursor-pointer"
                    >
                      Aloita oirekysely
                    </button>
                    <p className="font-inter text-[12px] text-[#565656]/50 mt-3">Kestää noin 30 sekuntia</p>
                  </div>
                ) : surveyStep <= 4 ? (
                  /* Question views */
                  <div>
                    {/* Progress bar */}
                    <div className="flex items-center gap-2 mb-8">
                      <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-[#565656]">Vaihe {surveyStep} / 4</span>
                      <div className="flex-1 h-[2px] bg-[#2B2B2B]/[0.08] rounded-full overflow-hidden">
                        <div className="h-full bg-[#2B2B2B] rounded-full transition-all duration-500" style={{ width: `${(surveyStep / 4) * 100}%` }} />
                      </div>
                    </div>
                    {/* Question */}
                    <h3 className="font-cormorant text-[22px] md:text-[24px] text-[#2B2B2B] leading-[1.35] mb-6">{surveyQuestions[surveyStep - 1].question}</h3>
                    {/* Options grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {surveyQuestions[surveyStep - 1].options.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => {
                            const newAnswers = [...surveyAnswers];
                            newAnswers[surveyStep - 1] = opt.value;
                            setSurveyAnswers(newAnswers);
                            if (surveyStep < 4) {
                              setSurveyStep(surveyStep + 1);
                            } else {
                              setSurveyStep(5);
                            }
                          }}
                          className="text-left px-5 py-4 rounded-xl bg-white/[0.5] border border-[#B3B3B3]/60 hover:bg-white hover:border-[#2B2B2B]/30 hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-200 cursor-pointer"
                        >
                          <span className="font-inter text-[14px] text-[#2B2B2B]">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                    {/* Back button */}
                    {surveyStep > 1 && (
                      <button
                        onClick={() => { setSurveyStep(surveyStep - 1); }}
                        className="font-inter text-[13px] text-[#565656] hover:text-[#2B2B2B] transition-colors cursor-pointer"
                      >
                        ← Takaisin
                      </button>
                    )}
                  </div>
                ) : (
                  /* Result view */
                  (() => {
                    const rec = getRecommendation(surveyAnswers);
                    return (
                      <div className="text-center">
                        <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-[#565656] mb-4">SUOSITUKSEMME</p>
                        <h3 className="font-cormorant text-[24px] md:text-[28px] text-[#2B2B2B] leading-[1.3] mb-4">{rec.title}</h3>
                        <p className="font-inter text-[14px] text-[#565656] leading-[1.75] mb-8">{rec.description}</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                          <a
                            href={rec.bookingUrl}
                            className="inline-flex items-center justify-center px-10 py-4 rounded font-inter text-[14px] font-bold tracking-[0.08em] bg-[#2B2B2B] text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:bg-[#565656] transition-all duration-300"
                          >
                            Varaa aika
                          </a>
                          <Link
                            to={rec.serviceLink}
                            className="inline-flex items-center justify-center px-8 py-4 rounded font-inter text-[14px] font-medium tracking-wide text-[#2B2B2B] border border-[#2B2B2B]/20 hover:border-[#2B2B2B]/40 hover:bg-[#2B2B2B]/[0.04] transition-all duration-300"
                          >
                            Tutustu hoitomuotoon
                          </Link>
                        </div>
                        <button
                          onClick={() => { setSurveyStep(0); setSurveyAnswers([]); }}
                          className="font-inter text-[13px] text-[#565656] hover:text-[#2B2B2B] transition-colors mt-6 cursor-pointer"
                        >
                          Tee kysely uudelleen
                        </button>
                      </div>
                    );
                  })()
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section id="hinnasto" className="bg-[#C8C8C8] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-[640px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-10">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-[#565656] mb-5">{templateData.pricing.eyebrow}</p>
              <h2 className="font-cormorant text-[26px] md:text-[30px] text-[#2B2B2B] leading-[1.35] mb-4">{templateData.pricing.headline}</h2>
              <p className="font-inter text-[14px] text-[#2B2B2B]/80 leading-[1.75] max-w-[400px] mx-auto">{templateData.pricing.body}</p>
            </div>
          </ScrollReveal>

          {/* Tab selector */}
          <ScrollReveal delay={0.1}>
            <div className="flex overflow-x-auto scrollbar-hide gap-2 mb-8 pb-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {templateData.pricing.tabs.map((tab, i) => (
                <button
                  key={tab.key}
                  onClick={() => setActivePricingTab(i)}
                  className={`shrink-0 px-4 py-2.5 rounded-lg font-inter text-[13px] font-medium tracking-wide transition-all duration-200 cursor-pointer border ${
                    i === activePricingTab
                      ? 'bg-[#2B2B2B] text-white border-[#2B2B2B] shadow-[0_2px_8px_rgba(0,0,0,0.2)]'
                      : 'bg-transparent text-[#2B2B2B] border-[#B3B3B3] hover:bg-[#2B2B2B]/[0.06]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Active tab content */}
          <ScrollReveal delay={0.15}>
            <div className="mb-8">
              <p className="font-inter text-[13px] text-[#565656] mb-4">{templateData.pricing.tabs[activePricingTab].description}</p>
              <div className="border-t border-[#2B2B2B]/[0.1]">
                {templateData.pricing.tabs[activePricingTab].items.map((item, ii) => (
                  <div
                    key={ii}
                    className={`flex justify-between items-baseline py-4 ${
                      ii < templateData.pricing.tabs[activePricingTab].items.length - 1 ? 'border-b border-[#2B2B2B]/[0.08]' : ''
                    }`}
                  >
                    <span className="font-inter text-[15px] font-medium text-[#2B2B2B]">{item.duration}</span>
                    <span className="flex items-baseline gap-1">
                      <span className="font-cormorant text-[22px] text-[#2B2B2B]">{item.price}</span>
                      <span className="font-inter text-[13px] text-[#565656]/60">&euro;</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={templateData.business.bookingUrl}
                className="inline-flex items-center justify-center px-10 py-4 rounded font-inter text-[14px] font-bold tracking-[0.08em] bg-[#2B2B2B] text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:bg-[#565656] transition-all duration-300"
              >
                Varaa aika
              </a>
              <a
                href={templateData.business.phoneLink}
                className="inline-flex items-center justify-center px-8 py-4 rounded font-inter text-[14px] font-medium tracking-wide text-[#2B2B2B] border border-[#2B2B2B]/20 hover:border-[#2B2B2B]/40 hover:bg-[#2B2B2B]/[0.04] transition-all duration-300"
              >
                Kysy sopiva hoito
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews */}
      <section id="arvostelut" className="bg-[#2B2B2B] pt-20 md:pt-28 pb-14 md:pb-16 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 25%, rgba(86,86,86,0.05) 0%, transparent 55%)' }} />
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px', opacity: 0.02 }} />
        <div className="relative max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-[#565656]/80 mb-5">{templateData.reviews.eyebrow}</p>
              <h2 className="font-cormorant text-[26px] md:text-[32px] text-[#FFFFFF] leading-[1.35] mb-6">{templateData.reviews.headline}</h2>
              <p className="font-inter text-[14px] text-[#565656]/65 leading-[1.7] max-w-[420px] mx-auto">{templateData.reviews.description}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative">
              <div className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {visibleReviews.map((review, i) => (
                  <div key={`${reviewIndex}-${i}`} className="flex-shrink-0 w-[280px] md:w-[310px] snap-start">
                    <div className="bg-[#565656] rounded-xl p-8 md:p-10 shadow-[0_1px_8px_rgba(0,0,0,0.03)] h-full flex flex-col">
                      <p className="font-inter text-[14px] text-[#FFFFFF]/90 leading-[1.75] italic flex-1">&ldquo;{review.text}&rdquo;</p>
                      <div className="flex items-center gap-3 mt-5 pt-5 border-t border-[#FFFFFF]/[0.06]">
                        <div className="w-10 h-10 rounded-full bg-[#6A6A6A] flex items-center justify-center">
                          <span className="font-cormorant text-[15px] text-[#FFFFFF]/60">{review.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-inter text-[14px] font-bold text-[#FFFFFF]">{review.name}</p>
                          <p className="font-inter text-[11px] text-[#DEDEDE]/50">{review.service}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-3 mt-6">
                <button onClick={prevReview} className="w-10 h-10 rounded-full border border-[#F4F4F4]/10 flex items-center justify-center text-[#FFFFFF]/40 hover:text-[#565656] hover:border-[#565656]/30 transition-colors bg-transparent cursor-pointer">
                  <ChevronLeft size={18} strokeWidth={1.5} />
                </button>
                <button onClick={nextReview} className="w-10 h-10 rounded-full border border-[#F4F4F4]/10 flex items-center justify-center text-[#FFFFFF]/40 hover:text-[#565656] hover:border-[#565656]/30 transition-colors bg-transparent cursor-pointer">
                  <ChevronRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section id="asiantuntijat" className="relative bg-[#2B2B2B] pt-20 md:pt-28 pb-8 md:pb-10 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 25%, rgba(86,86,86,0.05) 0%, transparent 55%)' }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }} />
        <div className="relative max-w-[1000px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-16">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-[#DEDEDE]/70 mb-5">{templateData.team.eyebrow}</p>
              <h2 className="font-cormorant text-[26px] md:text-[32px] text-[#FFFFFF] leading-[1.2]">{templateData.team.headline}</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-[38%_1fr] gap-8 md:gap-14 items-start">
            <div style={{ opacity: teamTransitioning ? 0 : 1, transform: teamTransitioning ? 'translateY(8px)' : 'translateY(0)', transition: 'opacity 350ms ease-in-out, transform 350ms ease-out' }}>
              <div className="relative overflow-hidden rounded-lg mx-auto md:mx-0 max-w-[320px] md:max-w-none">
                <img src={activeTeamMember.image} alt={activeTeamMember.name} loading="lazy" className="w-full aspect-[4/5] object-cover object-[center_20%]" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 65%, rgba(43,43,43,0.45) 100%)' }} />
              </div>
            </div>

            <div style={{ opacity: teamTransitioning ? 0 : 1, transform: teamTransitioning ? 'translateY(8px)' : 'translateY(0)', transition: 'opacity 350ms ease-in-out, transform 350ms ease-out' }}>
              <p className="font-cormorant text-[22px] md:text-[24px] text-[#FFFFFF] mb-2">{activeTeamMember.name}</p>
              <p className="font-inter text-[12px] font-medium text-[#DEDEDE]/60 tracking-[0.12em] uppercase mb-8">{activeTeamMember.title}</p>
              <div className="font-inter text-[14px] text-[#DEDEDE]/85 leading-[1.8] mb-8 max-w-[420px] space-y-4">
                {activeTeamMember.bio.split('\\n\\n').map((para, pi) => (
                  <p key={pi}>{para}</p>
                ))}
              </div>

              {activeTeamMember.testimonial && (
                <div className="mb-8 max-w-[420px]">
                  <div className="pl-3 border-l border-[#F4F4F4]/[0.07]">
                    <p className="font-inter text-[13px] italic text-[#DEDEDE]/50 leading-[1.7]">&ldquo;{activeTeamMember.testimonial}&rdquo;</p>
                  </div>
                </div>
              )}

              {/* Profile selector */}
              <div className="flex gap-5 md:gap-7 mb-7">
                {templateData.team.members.map((t, i) => (
                  <button key={i} onClick={() => handleTeamSelect(i)} className="group flex flex-col items-center text-center cursor-pointer bg-transparent border-none p-0">
                    <div className={`rounded-full overflow-hidden mb-2 transition-all duration-300 ${i === activeTeamIndex ? 'w-12 h-12 md:w-14 md:h-14 border-2 border-[#B3B3B3] opacity-100 scale-105' : 'w-10 h-10 md:w-11 md:h-11 border border-[#565656]/20 opacity-60 group-hover:opacity-85 scale-100'}`}>
                      <img src={t.avatar} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <p className={`font-inter text-[11px] mb-px transition-colors duration-300 ${i === activeTeamIndex ? 'text-[#FFFFFF]/80' : 'text-[#FFFFFF]/25 group-hover:text-[#FFFFFF]/50'}`}>{t.name.split(' ')[0]}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#E8E8E8] pt-16 md:pt-20 pb-6 md:pb-8 px-6 md:px-12">
        <div className="max-w-[640px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-14">
              <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-[#565656]/70 mb-5">{templateData.faq.eyebrow}</p>
              <h2 className="font-cormorant text-[26px] md:text-[32px] text-[#2B2B2B] leading-[1.25]">{templateData.faq.headline}</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-12 md:mb-14">
              {templateData.faq.items.map((faq, i) => (
                <div key={i} className="border-t border-[#2B2B2B]/[0.06]">
                  <button onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)} className="group w-full flex items-start justify-between gap-4 py-5 md:py-6 text-left bg-transparent border-none cursor-pointer">
                    <span className="font-inter text-[15px] md:text-[16px] font-semibold text-[#2B2B2B] leading-[1.5]">{faq.question}</span>
                    <span className="shrink-0 mt-[2px] text-[#565656]/50 group-hover:text-[#565656]/70 transition-colors duration-300">
                      {openFaqIndex === i ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
                    </span>
                  </button>
                  <div className="overflow-hidden transition-all duration-[400ms] ease-out" style={{ maxHeight: openFaqIndex === i ? '220px' : '0px', opacity: openFaqIndex === i ? 1 : 0 }}>
                    <div className="font-inter text-[14px] text-[#565656] leading-[1.75] pb-5 md:pb-6 max-w-[540px]">
                      {faq.answer}
                      {faq.includePhone && (
                        <a href={templateData.business.phoneLink} className="block mt-3 font-inter text-[14px] text-[#2B2B2B]/70 tracking-wider no-underline hover:text-[#2B2B2B] hover:underline underline-offset-4 decoration-[#4A4540]/20 transition-colors duration-300">
                          📞 {templateData.business.phone}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-[#2B2B2B]/[0.06]" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110" style={{ backgroundImage: `url(${templateData.finalCta.backgroundImage})` }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 48%, rgba(20,16,12,0.50) 0%, rgba(20,16,12,0.82) 55%, rgba(20,16,12,0.97) 100%), linear-gradient(180deg, rgba(20,16,12,0.85) 0%, rgba(20,16,12,0.22) 35%, rgba(20,16,12,0.42) 65%, rgba(20,16,12,0.94) 100%)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }} />
        <div className="relative z-10 w-full max-w-[480px] mx-auto px-6 pt-[2vh]">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B0B0B0] mb-4">{templateData.finalCta.eyebrow}</p>
              <h2 className="font-cormorant text-[28px] md:text-[34px] text-[#FFFFFF] leading-[1.25] mb-4">{templateData.finalCta.headline}</h2>
              <p className="font-inter text-[15px] text-[#D8D8D8] leading-[1.6] mb-10 max-w-[340px] mx-auto">{templateData.finalCta.supportText}</p>

              <div className="flex flex-col items-center gap-3 mb-8">
                <a href={templateData.business.bookingUrl} className="inline-flex items-center justify-center px-14 py-4 rounded font-inter text-[14px] font-bold tracking-[0.08em] bg-[#FFFFFF] text-[#2B2B2B] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:bg-[#DEDEDE] transition-all duration-300 w-full max-w-[280px]">
                  {templateData.finalCta.ctaLabel}
                </a>
                <a href={templateData.business.phoneLink} className="inline-flex items-center justify-center gap-2 font-inter text-[15px] font-medium text-[#D8D8D8] tracking-wide no-underline hover:text-[#FFFFFF] transition-colors duration-300 py-2">
                  <Phone size={15} strokeWidth={1.5} />
                  {templateData.finalCta.phone}
                </a>
                <p className="font-inter text-[12px] text-[#A0A0A0] tracking-wide">{templateData.finalCta.phoneSupport}</p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                <span className="font-inter text-[12px] text-[#D0D0D0] tracking-wide">★ 5/5 Google-arvostelut (150+) &bull; Urheilijoiden erikoisosaaja &bull; Vapaita aikoja usein jo seuraavalle päivälle</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer id="yhteystiedot" className="bg-[#2B2B2B] pt-14 md:pt-16 pb-10 md:pb-12 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-10">
            <div>
              <h3 className="font-cormorant text-[18px] text-[#FFFFFF] mb-1">{templateData.business.name}</h3>
              <p className="font-inter text-[13px] text-[#565656]/60 mb-4">{templateData.business.tagline}</p>
              <ul className="space-y-2">
                <li className="font-inter text-[14px] text-[#565656] flex items-center gap-2">
                  <MapPin size={14} className="shrink-0" /> {templateData.business.address}
                </li>
                <li>
                  <a href={templateData.business.phoneLink} className="font-inter text-[14px] text-[#565656] hover:text-[#FFFFFF] transition-colors flex items-center gap-2 no-underline">
                    <Phone size={14} className="shrink-0" /> {templateData.business.phone}
                  </a>
                </li>
                <li>
                  <a href={templateData.business.emailLink} className="font-inter text-[14px] text-[#565656] hover:text-[#FFFFFF] transition-colors flex items-center gap-2 no-underline">
                    <Mail size={14} className="shrink-0" /> {templateData.business.email}
                  </a>
                </li>
              </ul>
            </div>
            {templateData.footer.columns.map((col, i) => (
              <div key={i}>
                <h4 className="font-inter text-[13px] font-semibold uppercase tracking-wider text-[#FFFFFF] mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('/') ? (
                        <Link to={link.href} className="font-inter text-[14px] text-[#565656] hover:text-[#FFFFFF] transition-colors no-underline">{link.label}</Link>
                      ) : (
                        <a href={link.href} className="font-inter text-[14px] text-[#565656] hover:text-[#FFFFFF] transition-colors no-underline">{link.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-[#F4F4F4]/[0.06] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-inter text-[12px] text-[#565656]/45">{templateData.footer.copyright}</p>
            <p className="font-inter text-[12px] text-[#565656]/35">{templateData.footer.paymentMethods}</p>
            <div className="flex gap-4">
              <a href={templateData.business.instagramUrl} className="text-[#565656]/50 hover:text-[#FFFFFF]/70 transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
              <a href={templateData.business.facebookUrl} className="text-[#565656]/50 hover:text-[#FFFFFF]/70 transition-colors"><Facebook size={18} strokeWidth={1.5} /></a>
              <a href={templateData.business.phoneLink} className="text-[#565656]/50 hover:text-[#FFFFFF]/70 transition-colors"><Phone size={18} strokeWidth={1.5} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
