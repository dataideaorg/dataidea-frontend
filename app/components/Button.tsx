import React from 'react';
import Link from 'next/link';

type Variant = 'primary' | 'secondary' | 'outline';
type Size = 'sm' | 'md' | 'lg';

const baseStyles =
  'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center active:scale-95';

const variants: Record<Variant, string> = {
  primary: 'btn-primary bg-signal text-black hover:bg-signal-press',
  secondary: 'bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-fg)] hover:bg-[var(--btn-secondary-hover)]',
  outline:
    'border-2 border-bright text-bright hover:bg-[var(--btn-outline-hover)]',
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
