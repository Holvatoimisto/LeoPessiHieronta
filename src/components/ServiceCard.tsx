import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export function ServiceCard({ image, title, description, link }: ServiceCardProps) {
  return (
    <Link to={link} className="group block rounded-xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[rgba(8,12,10,0.03)] transition-all duration-500 ease-out hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full aspect-[16/13] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6 md:p-7">
        <h3 className="font-marcellus text-[22px] md:text-[24px] text-[#080C0A] mb-2">{title}</h3>
        <p className="font-jakarta text-[14px] text-[#151B18]/70 leading-[1.65] mb-5">{description}</p>
        <span className="font-jakarta text-[13px] font-normal text-[#151B18]/50 tracking-wide inline-flex items-center gap-1.5 group-hover:text-gold/70 transition-colors duration-300">
          Lue lisää <ArrowRight size={13} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
