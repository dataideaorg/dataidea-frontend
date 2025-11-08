import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-[#222] border border-[#333] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 md:p-8 ${className}`}>
    {children}
  </div>
);

export const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
    {children}
  </h3>
);

export const CardDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[#bbb] text-sm md:text-base leading-relaxed mb-4">
    {children}
  </p>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`flex gap-4 mt-6 ${className}`}>
    {children}
  </div>
);