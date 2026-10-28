import React from 'react';
import Link from 'next/link';

type Variant = 'primary' | 'secondary' | 'outline';
type Size = 'sm' | 'md' | 'lg';

const baseStyles = 'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center';

const variants: Record<Variant, string> = {
  primary: 'bg-white text-[#111] hover:bg-[#e5e5e5] active:scale-95 shadow-lg hover:shadow-xl',
  secondary: 'bg-[#333] text-white hover:bg-[#444] active:scale-95',
  outline: 'border-2 border-white text-white hover:bg-white/10 active:scale-95',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

function buttonClassName(variant: Variant, size: Size, className: string) {
  return `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
}

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'href'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className = '',
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const classes = buttonClassName(variant, size, className);

    if (href) {
      const isInternal = href.startsWith('/') && !target;
      if (isInternal) {
        return (
          <Link href={href} className={classes}>
            {children}
          </Link>
        );
      }
      return (
        <a href={href} target={target} rel={rel} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
