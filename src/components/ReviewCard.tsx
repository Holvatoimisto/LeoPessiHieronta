import { Star } from 'lucide-react';

interface ReviewCardProps {
  quote: string;
  name: string;
}

export function ReviewCard({ quote, name }: ReviewCardProps) {
  return (
    <div className="bg-white-custom p-8 md:p-10 rounded-lg shadow-[0_4px_24px_rgba(8,12,10,0.06)] transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(8,12,10,0.1)]">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={18} fill="#6D8A6B" stroke="#6D8A6B" />
        ))}
      </div>
      <p className="font-marcellus text-[18px] text-[#151B18] italic leading-relaxed mb-5">
        "{quote}"
      </p>
      <p className="font-jakarta text-[14px] font-semibold text-[#080C0A]">{name}</p>
    </div>
  );
}
