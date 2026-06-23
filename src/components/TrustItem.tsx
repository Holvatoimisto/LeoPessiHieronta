import type { ReactNode } from 'react';

interface TrustItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function TrustItem({ icon, title, description }: TrustItemProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="text-gold">{icon}</div>
      <h4 className="font-marcellus text-[22px] text-[#F4F4F4]">{title}</h4>
      <p className="font-jakarta text-[16px] text-[#9A9A9A] leading-relaxed">{description}</p>
    </div>
  );
}
