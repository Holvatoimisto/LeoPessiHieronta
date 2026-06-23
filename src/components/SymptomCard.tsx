import type { ReactNode } from 'react';

interface SymptomCardProps {
  icon: ReactNode;
  label: string;
}

export function SymptomCard({ icon, label }: SymptomCardProps) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="text-gold">{icon}</div>
      <p className="font-jakarta text-[16px] text-[#F4F4F4]">{label}</p>
    </div>
  );
}
