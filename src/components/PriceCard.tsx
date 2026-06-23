interface PriceCardProps {
  title: string;
  price: string;
  unit: string;
}

export function PriceCard({ title, price, unit }: PriceCardProps) {
  return (
    <div className="text-center p-8">
      <h3 className="font-marcellus text-[24px] md:text-[28px] text-[#F4F4F4] mb-2">{title}</h3>
      <p className="font-marcellus text-[28px] md:text-[32px] text-gold font-semibold mb-1">{price}</p>
      <p className="font-jakarta text-[14px] text-[#9A9A9A]">{unit}</p>
    </div>
  );
}
