import React from 'react';

type LogoProps = {
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({ className = 'text-[1.35rem]' }) => (
  <span className={`wordmark ${className}`} aria-label="DATAIDEA">
    <span className="wordmark-data">DATA</span>
    <span className="wordmark-idea">IDEA</span>
  </span>
);
