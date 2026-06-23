import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const serviceLinks = [
  { label: 'Kiropraktiikka', to: '/palvelut/kiropraktiikka' },
  { label: 'Hieronta', to: '/palvelut/hieronta' },
  { label: 'Personal Training', to: '/palvelut/personal-training' },
];

export function Footer() {
  return (
    <footer className="bg-[#3D3834]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-20 md:pt-24 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Column 1: Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
            <img
              src="/assets/logo.png"
              alt="The Back Room"
              className="h-10 w-auto brightness-[10]"
            />
          </Link>
            <p className="font-jakarta text-[14px] text-[#9A9A9A] leading-relaxed max-w-[280px]">
              Kiropraktiikkaa, hierontaa ja personal trainingia Tampereella. Kokonaisvaltaista kehonhuoltoa ammattitaidolla.
            </p>
            <p className="font-jakarta text-[13px] text-[#9A9A9A] mt-6">© 2025 The Back Room.</p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-jakarta text-[13px] font-semibold uppercase tracking-wider text-[#F4F4F4] mb-4">
              Palvelut
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-jakarta text-[14px] text-[#9A9A9A] hover:text-[#F4F4F4] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-jakarta text-[13px] font-semibold uppercase tracking-wider text-[#F4F4F4] mb-4">
              Yhteystiedot
            </h4>
            <ul className="space-y-3">
              <li className="font-jakarta text-[14px] text-[#9A9A9A] flex items-center gap-2">
                <MapPin size={14} className="shrink-0" />
                Papinkatu 19, 33200 Tampere
              </li>
              <li>
                <a href="tel:+358400601819" className="font-jakarta text-[14px] text-[#9A9A9A] hover:text-[#F4F4F4] transition-colors flex items-center gap-2">
                  <Phone size={14} className="shrink-0" />
                  0400 60 18 19
                </a>
              </li>
              <li>
                <a href="mailto:thebackroomtampere@gmail.com" className="font-jakarta text-[14px] text-[#9A9A9A] hover:text-[#F4F4F4] transition-colors flex items-center gap-2">
                  <Mail size={14} className="shrink-0" />
                  thebackroomtampere@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="font-jakarta text-[13px] font-semibold uppercase tracking-wider text-[#F4F4F4] mb-4">
              Seuraa meitä
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.facebook.com/thebackroomtampere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-jakarta text-[14px] text-[#9A9A9A] hover:text-[#F4F4F4] transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/thebackroomtampere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-jakarta text-[14px] text-[#9A9A9A] hover:text-[#F4F4F4] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <Link
                  to="/lahjakortti"
                  className="font-jakarta text-[14px] text-[#9A9A9A] hover:text-[#F4F4F4] transition-colors"
                >
                  Lahjakortit
                </Link>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-[rgba(244,244,244,0.1)]">
              <p className="font-jakarta text-[13px] text-[#9A9A9A]">
                Maksutavat: ePassi, Smartum
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[rgba(244,244,244,0.1)] text-center">
          <p className="font-jakarta text-[13px] text-[#9A9A9A]">
            © 2025 The Back Room. Kaikki oikeudet pidätetään.
          </p>
        </div>
      </div>
    </footer>
  );
}
