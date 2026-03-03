import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: number;
  hoverY?: number;
}

export default function AnimatedCard({
  children,
  className = '',
  delay = 0,
  hoverScale = 1.02,
  hoverY = -10,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
      whileHover={{
        scale: hoverScale,
        y: hoverY,
        transition: { duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  );
}
