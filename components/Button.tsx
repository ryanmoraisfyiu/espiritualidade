import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  icon = true,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center py-4 px-8 rounded-full font-serif font-bold tracking-wide transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-300 to-gold-500 text-mystic-900 hover:shadow-gold-500/20",
    secondary: "bg-mystic-800 text-gold-200 border border-gold-700 hover:bg-mystic-700",
    outline: "bg-transparent border-2 border-gold-400 text-gold-300 hover:bg-gold-400/10"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <ArrowRight className="w-5 h-5" />}
      </span>
    </button>
  );
};