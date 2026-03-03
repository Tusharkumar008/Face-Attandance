import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GradientButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function GradientButton({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
}: GradientButtonProps) {
  const baseStyles = 'relative font-semibold rounded-xl transition-all duration-300 overflow-hidden';
  
  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50',
    secondary: 'bg-slate-800 text-white hover:bg-slate-700 border border-white/10',
    outline: 'border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      type={type}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        whileHover={{ translateX: '100%' }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
