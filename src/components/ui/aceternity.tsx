import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../utils/cn';

export const MovingBorderBtn = ({
  borderRadius = '1.75rem',
  children,
  as: Component = 'button',
  containerClassName,
  borderClassName,
  duration = 2000,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <Component
      className={cn('relative p-[1px] overflow-hidden', containerClassName)}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className={cn(
          'absolute inset-0',
          'bg-[linear-gradient(to_right,#818cf8,#c084fc,#818cf8)]',
          'animate-gradient',
          borderClassName
        )}
        style={{
          backgroundSize: '200% 100%',
          animationDuration: `${duration}ms`,
        }}
      />
      <div
        className={cn(
          'relative',
          'bg-slate-900',
          'backdrop-blur-xl',
          'rounded-[calc(1.75rem-1px)]',
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} - 1px)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
};

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
  };
  return (
    <div className={cn('relative p-[4px] group', containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: '400% 400%',
        }}
        className={cn(
          'absolute inset-0 rounded-3xl opacity-60 group-hover:opacity-100 blur-xl transition duration-500',
          'bg-[linear-gradient(to_right,#818cf8,#c084fc,#818cf8)]',
          className
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: '400% 400%',
        }}
        className={cn(
          'absolute inset-0 rounded-3xl',
          'bg-[linear-gradient(to_right,#818cf8,#c084fc,#818cf8)]',
          className
        )}
      />

      <div className="relative">{children}</div>
    </div>
  );
};

export const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0">
        {Array.from({ length: 700 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const ScrollParallax = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <motion.div
      style={{ y }}
      className={cn('will-change-transform', className)}
    >
      {children}
    </motion.div>
  );
};

export const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative bg-gray-900 rounded-lg p-6 max-w-4xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
};
