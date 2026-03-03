import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  '5 days of keynotes, workshops, and networking',
  '50 world-class speakers',
  'Startup showcase and live demos',
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    const sphere = sphereRef.current;
    if (!sphere) return;

    const ctx = gsap.context(() => {
      // Parallax effect for sphere
      gsap.to(sphere, {
        yPercent: -30,
        rotation: 360,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    }),
  };

  return (
    <section ref={sectionRef} id="about" className="relative py-20 md:py-32 overflow-hidden bg-slate-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            className="order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.span className="section-label mb-4 block" variants={itemVariants}>
              About the Event
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              A Global Gathering of<br />
              <span className="gradient-text">AI Innovators</span>
            </motion.h2>
            <motion.p
              className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Join thought leaders, developers, researchers, and founders as we explore how 
              artificial intelligence is reshaping industries, creativity, and the future of work.
            </motion.p>
            
            {/* Feature List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  custom={index}
                  variants={featureVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.2, backgroundColor: 'rgba(124, 58, 237, 0.4)' }}
                  >
                    <Check className="w-3.5 h-3.5 text-purple-400" />
                  </motion.div>
                  <span className="text-slate-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Content - 3D Sphere */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <motion.div
              ref={sphereRef}
              className="relative w-72 h-72 md:w-96 md:h-96"
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-purple-600/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* 3D Wireframe Sphere */}
              <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
                <motion.svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <defs>
                    <linearGradient id="sphereGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A78BFA" />
                      <stop offset="50%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#4C1D95" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Outer sphere wireframe */}
                  <g stroke="url(#sphereGradient)" strokeWidth="1.5" fill="none" filter="url(#glow)">
                    {/* Latitude lines */}
                    <ellipse cx="200" cy="200" rx="180" ry="60" opacity="0.8" />
                    <ellipse cx="200" cy="200" rx="170" ry="100" opacity="0.7" />
                    <ellipse cx="200" cy="200" rx="140" ry="130" opacity="0.6" />
                    <ellipse cx="200" cy="200" rx="90" ry="150" opacity="0.5" />
                    
                    {/* Longitude lines */}
                    <ellipse cx="200" cy="200" rx="60" ry="180" opacity="0.8" />
                    <ellipse cx="200" cy="200" rx="100" ry="170" opacity="0.7" />
                    <ellipse cx="200" cy="200" rx="130" ry="140" opacity="0.6" />
                    <ellipse cx="200" cy="200" rx="150" ry="90" opacity="0.5" />
                    
                    {/* Diagonal connections */}
                    <path d="M 50 200 Q 200 100 350 200" opacity="0.4" />
                    <path d="M 50 200 Q 200 300 350 200" opacity="0.4" />
                    <path d="M 200 50 Q 300 200 200 350" opacity="0.4" />
                    <path d="M 200 50 Q 100 200 200 350" opacity="0.4" />
                    
                    {/* Inner structure */}
                    <circle cx="200" cy="200" r="180" opacity="0.3" strokeWidth="1" />
                    <circle cx="200" cy="200" r="120" opacity="0.4" strokeWidth="1" />
                    <circle cx="200" cy="200" r="60" opacity="0.5" strokeWidth="1" />
                  </g>
                  
                  {/* Highlight points */}
                  <g fill="#A78BFA">
                    <circle cx="200" cy="20" r="4" opacity="0.9" />
                    <circle cx="380" cy="200" r="4" opacity="0.9" />
                    <circle cx="200" cy="380" r="4" opacity="0.9" />
                    <circle cx="20" cy="200" r="4" opacity="0.9" />
                    <circle cx="290" cy="110" r="3" opacity="0.7" />
                    <circle cx="110" cy="290" r="3" opacity="0.7" />
                    <circle cx="290" cy="290" r="3" opacity="0.7" />
                    <circle cx="110" cy="110" r="3" opacity="0.7" />
                  </g>
                </motion.svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
