'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, Variants, motion } from 'framer-motion';

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
  textClassName?: string;
}

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
  textClassName,
}: GradualSpacingProps) {
  return (
    <div className={cn('flex justify-center space-x-1', className)}>
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.p
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn('drop-shadow-sm', textClassName)}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}
