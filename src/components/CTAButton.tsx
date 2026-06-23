import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  to?: string;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

export function CTAButton({ children, variant = 'primary', href, to, className = '', onClick, fullWidth = false }: CTAButtonProps) {
  const baseStyles = `inline-flex items-center justify-center px-8 py-3.5 rounded font-jakarta text-[15px] font-semibold tracking-wide transition-all duration-300 ease-in-out ${fullWidth ? 'w-full' : ''}`;

  const variants = {
    primary: 'bg-gold text-[#080C0A] hover:bg-white-custom hover:shadow-[0_4px_20px_rgba(212,160,61,0.3)]',
    secondary: 'bg-transparent border border-[#F4F4F4] text-[#F4F4F4] hover:bg-[rgba(244,244,244,0.1)]',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
