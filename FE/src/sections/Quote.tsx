import { useRef } from 'react';
import { Quote as QuoteIcon } from 'lucide-react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function Quote() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden bg-slate-900">
      {/* Background with network pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%237C3AED' stroke-width='0.5' stroke-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900"></div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Portrait */}
          <motion.div
            className="relative flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.div className="relative" style={{ y }}>
              {/* Glow */}
              <motion.div
                className="absolute inset-0 bg-purple-600/20 rounded-2xl blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Image container */}
              <motion.div
                className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-white/10"
                whileHover={{ scale: 1.02, borderColor: 'rgba(124, 58, 237, 0.5)' }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                  alt="Elon Musk"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              </motion.div>

              {/* Quote icon */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-600/30"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <QuoteIcon className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Quote */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.blockquote
              className="text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              "Artificial intelligence is advancing rapidly, and while it offers immense opportunity, 
              it also poses significant risks. If not properly regulated and aligned with human values, 
              AI could become a fundamental threat to civilization."
            </motion.blockquote>
            <motion.cite
              className="text-slate-400 not-italic block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.span
                className="text-white font-semibold"
                whileHover={{ color: '#A78BFA' }}
              >
                Elon Musk
              </motion.span>
            </motion.cite>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
