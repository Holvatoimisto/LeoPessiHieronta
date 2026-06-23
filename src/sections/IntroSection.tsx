export function IntroSection() {
  return (
    <section
      className="relative bg-[#4E4842] overflow-hidden"
      style={{ paddingTop: '44px', paddingBottom: '44px' }}
    >
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12">
        <p className="font-marcellus text-[17px] md:text-[20px] text-[#F4F4F4]/55 text-center leading-[1.4]">
          Parempi olo alkaa kehoa kuuntelemalla
        </p>
      </div>
    </section>
  );
}
