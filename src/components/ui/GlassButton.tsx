import type { ReactNode } from 'react';

interface GlassButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function GlassButton({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: GlassButtonProps) {
  const baseClasses = 'glass-button inline-flex items-center justify-center font-semibold transition-all duration-300';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  };
  
  const variantClasses = {
    primary: 'hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-blue-300',
    secondary: 'hover:bg-purple-500/20 hover:border-purple-400/50 hover:text-purple-300'
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
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