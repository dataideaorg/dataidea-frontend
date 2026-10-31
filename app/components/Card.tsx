import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', featured = false }) => (
  <div
    className={`bg-panel border rounded-xl p-6 md:p-8 ${
      featured ? 'border-2 border-featured' : 'border-line'
    } ${className}`}
  >
    {children}
  </div>
);

export const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl md:text-2xl font-bold text-bright mb-3">
    {children}
  </h3>
);

export const CardDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-support text-sm md:text-base leading-relaxed mb-4">
    {children}
  </p>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`flex gap-4 mt-6 ${className}`}>
    {children}
  </div>
);
