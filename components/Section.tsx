import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'dark' | 'darker' | 'gradient' | 'none';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id = '', 
  background = 'dark' 
}) => {
  const bgClasses = {
    dark: 'bg-mystic-900',
    darker: 'bg-black',
    gradient: 'bg-gradient-to-b from-mystic-900 via-mystic-800 to-mystic-900',
    none: '',
  };

  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${bgClasses[background]} ${className}`}>
      <div className="max-w-4xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};