import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { MapPin, Phone, Mail, Clock, Car } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Yhteystiedot — The Back Room Tampere</title>
        <meta name="description" content="The Back Room sijaitsee Papinkadulla 19, Tampere. Soita 0400 60 18 19 tai varaa aika verkossa. Kiropraktiikkaa, hierontaa ja personal trainingia." />
      </Helmet>

      {/* Header */}
      <section className="bg-[#080C0A] pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <h1 className="font-marcellus text-[36px] md:text-[48px] text-[#F4F4F4] mb-4">
              Yhteystiedot
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Info & Map */}
      <section className="bg-[#F4F4F4] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[45%_55%] gap-10 md:gap-16">
          {/* Info */}
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h2 className="font-marcellus text-[24px] text-[#080C0A] mb-6">Ota yhteyttä</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-gold mt-1 shrink-0" />
                    <div>
                      <p className="font-jakarta text-[16px] text-[#151B18]">Papinkatu 19</p>
                      <p className="font-jakarta text-[16px] text-[#9A9A9A]">33200 Tampere</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-gold shrink-0" />
                    <a href="tel:+358400601819" className="font-jakarta text-[16px] text-[#151B18] hover:text-gold transition-colors">
                      0400 60 18 19
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-gold shrink-0" />
                    <a href="mailto:thebackroomtampere@gmail.com" className="font-jakarta text-[16px] text-[#151B18] hover:text-gold transition-colors">
                      thebackroomtampere@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-gold mt-1 shrink-0" />
                    <div>
                      <p className="font-jakarta text-[16px] text-[#151B18]">Aukioloajat</p>
                      <p className="font-jakarta text-[14px] text-[#9A9A9A]">Ma–Pe 8:00–18:00</p>
                      <p className="font-jakarta text-[14px] text-[#9A9A9A]">La–Su suljettu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Car size={20} className="text-gold mt-1 shrink-0" />
                    <div>
                      <p className="font-jakarta text-[16px] text-[#151B18]">Pysäköinti</p>
                      <p className="font-jakarta text-[14px] text-[#9A9A9A]">Maksullinen pysäköinti Papinkadulla ja lähiseudulla.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="font-jakarta text-[13px] font-semibold uppercase tracking-wider text-[#080C0A] mb-3">Seuraa meitä</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/thebackroomtampere/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-jakarta text-[14px] text-[#9A9A9A] hover:text-gold transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/thebackroomtampere/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-jakarta text-[14px] text-[#9A9A9A] hover:text-gold transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="rounded-lg overflow-hidden shadow-lg h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1907.0!2d23.7610!3d61.4978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468edf27deadbeef%3A0xdeadbeef!2sPapinkatu+19%2C+33200+Tampere%2C+Finland!5e0!3m2!1sen!2sfi!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Back Roomin sijainti"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#151B18] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <h2 className="font-marcellus text-[32px] text-[#F4F4F4] text-center mb-10">
              Lähetä viesti
            </h2>

            {submitted ? (
              <div className="text-center py-12">
                <p className="font-marcellus text-[24px] text-gold mb-4">Kiitos viestistäsi!</p>
                <p className="font-jakarta text-[16px] text-[#9A9A9A]">Otamme sinuun yhteyttä pian.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-jakarta text-[13px] font-semibold uppercase tracking-wider text-[#9A9A9A] mb-2">Nimi</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-[#080C0A] border border-[rgba(244,244,244,0.1)] text-[#F4F4F4] font-jakarta text-[15px] focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-jakarta text-[13px] font-semibold uppercase tracking-wider text-[#9A9A9A] mb-2">Sähköposti</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-[#080C0A] border border-[rgba(244,244,244,0.1)] text-[#F4F4F4] font-jakarta text-[15px] focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block font-jakarta text-[13px] font-semibold uppercase tracking-wider text-[#9A9A9A] mb-2">Puhelin</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#080C0A] border border-[rgba(244,244,244,0.1)] text-[#F4F4F4] font-jakarta text-[15px] focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-jakarta text-[13px] font-semibold uppercase tracking-wider text-[#9A9A9A] mb-2">Viesti</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#080C0A] border border-[rgba(244,244,244,0.1)] text-[#F4F4F4] font-jakarta text-[15px] focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded font-jakarta text-[15px] font-semibold tracking-wide bg-gold text-[#080C0A] hover:bg-white-custom hover:shadow-[0_4px_20px_rgba(212,160,61,0.3)] transition-all duration-300"
                >
                  Lähetä
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-[#080C0A] py-16 px-6 md:px-12">
        <div className="max-w-[720px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-marcellus text-[28px] md:text-[32px] text-[#F4F4F4] mb-4">
              Varaa aika suoraan
            </h2>
            <p className="font-jakarta text-[16px] text-[#9A9A9A] mb-8">
              Soita meille numeroon{' '}
              <a href="tel:+358400601819" className="text-gold hover:underline">0400 60 18 19</a>
              {' '}tai lähetä viesti yhteydenottolomakkeella.
            </p>
            <a
              href="tel:+358400601819"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded font-jakarta text-[15px] font-semibold tracking-wide bg-gold text-[#080C0A] hover:bg-white-custom hover:shadow-[0_4px_20px_rgba(212,160,61,0.3)] transition-all duration-300"
            >
              Soita 0400 60 18 19
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
