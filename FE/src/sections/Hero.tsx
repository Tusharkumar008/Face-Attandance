import { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 241,
    hours: 19,
    minutes: 35,
    seconds: 49,
  });

  const heroRef = useRef<HTMLElement>(null);
  const sphereRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;

      sphereRefs.current.forEach((sphere, index) => {
        if (sphere) {
          const factor = (index + 1) * 0.5;
          gsap.to(sphere, {
            x: moveX * factor,
            y: moveY * factor,
            duration: 0.5,
            ease: 'power2.out',
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Animated background spheres */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={(el) => { if (el) sphereRefs.current[0] = el; }}
          className="absolute top-20 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"
        />
        <div
          ref={(el) => { if (el) sphereRefs.current[1] = el; }}
          className="absolute top-40 right-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"
        />
        <div
          ref={(el) => { if (el) sphereRefs.current[2] = el; }}
          className="absolute bottom-40 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
        <div
          ref={(el) => { if (el) sphereRefs.current[3] = el; }}
          className="absolute bottom-20 right-1/4 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl"
        />
      </div>

      {/* Background with hexagonal pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-slate-900 to-slate-900">
        {/* Animated hexagonal overlay */}
        <div className="absolute inset-0 hex-pattern opacity-60"></div>
        
        {/* Grid overlay with animation */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tagline */}
        <motion.p 
          className="text-sm md:text-base text-purple-300 font-medium tracking-wider mb-4"
          variants={itemVariants}
        >
          The Future of Intelligence
        </motion.p>

        {/* Main Title */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold gradient-text mb-6"
          variants={titleVariants}
        >
          AI SUMMIT 2026
        </motion.h1>

        {/* Event Details */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8 text-slate-300"
          variants={itemVariants}
        >
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, color: '#A78BFA' }}
            transition={{ duration: 0.2 }}
          >
            <Calendar className="w-5 h-5 text-purple-400" />
            <span className="text-sm md:text-base">October 1-5, 2026</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, color: '#A78BFA' }}
            transition={{ duration: 0.2 }}
          >
            <MapPin className="w-5 h-5 text-purple-400" />
            <span className="text-sm md:text-base">San Francisco, CA</span>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all"
              onClick={() => scrollToSection('tickets')}
            >
              GET TICKETS
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-lg backdrop-blur-sm"
              onClick={() => scrollToSection('schedule')}
            >
              VIEW SCHEDULE
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Countdown Timer Bar */}
      <motion.div
        className="relative z-10 mt-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <motion.div 
            className="glass rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8"
            whileHover={{ boxShadow: '0 0 40px rgba(124, 58, 237, 0.2)' }}
            transition={{ duration: 0.3 }}
          >
            {/* Left side - CTA */}
            <div className="text-center md:text-left">
              <motion.h3 
                className="text-xl md:text-2xl font-bold text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                Hurry Up!
              </motion.h3>
              <motion.p 
                className="text-slate-400 text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                Book Your Seat Now
              </motion.p>
            </div>

            {/* Countdown */}
            <div className="flex items-center gap-4 md:gap-8">
              {[
                { value: timeLeft.days, label: 'Days', pad: 3 },
                { value: timeLeft.hours, label: 'Hours', pad: 2 },
                { value: timeLeft.minutes, label: 'Minutes', pad: 2 },
                { value: timeLeft.seconds, label: 'Seconds', pad: 2 },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="text-2xl md:text-4xl font-bold text-white countdown-number"
                    key={item.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(item.value).padStart(item.pad, '0')}
                  </motion.div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Location */}
            <motion.div
              className="flex items-center gap-3 text-center md:text-right"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="w-8 h-8 text-purple-500" />
              </motion.div>
              <div>
                <p className="text-white text-sm">121 AI Blvd,</p>
                <p className="text-slate-400 text-sm">San Francisco BCA 94107</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-purple-400 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
