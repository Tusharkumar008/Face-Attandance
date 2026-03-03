import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const days = [
  { day: 'Day 1', date: 'Oct 1, 2026' },
  { day: 'Day 2', date: 'Oct 2, 2026' },
  { day: 'Day 3', date: 'Oct 3, 2026' },
  { day: 'Day 4', date: 'Oct 4, 2026' },
  { day: 'Day 5', date: 'Oct 5, 2026' },
];

const sessions = [
  {
    time: '08:00 - 10:00 AM',
    speaker: 'Joshua Henry',
    role: 'AI Research Lead, DeepTech Labs',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    title: 'Session: Opening Keynote - The State of AI 2026',
    description: 'Kick off the event with an insightful overview of where artificial intelligence is headed. Ava will explore breakthroughs, global shifts, and what\'s next in deep learning, generative models, and AI ethics.',
  },
  {
    time: '12:00 - 14:00 PM',
    speaker: 'Leila Zhang',
    role: 'VP of Machine Learning, Google',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face',
    title: 'Session: Building Human-Centered AI Products',
    description: 'This session covers how to design AI solutions that prioritize usability, fairness, and real-world impact. Bring your laptop—hands-on UX exercises included.',
  },
  {
    time: '16:00 - 18:00 PM',
    speaker: 'Carlos Rivera',
    role: 'Founder & CEO, NeuralCore',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
    title: 'Session: AI Policy & Regulation - A Global Overview',
    description: 'Learn how nations and organizations are approaching AI governance, including frameworks for data privacy, bias mitigation, and accountability in model deployment.',
  },
  {
    time: '20:00 - 22:00 PM',
    speaker: 'Maria Gonzalez',
    role: 'Founder & CEO, SynthCore AI',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
    title: 'Session: Building a Startup with AI at the Core',
    description: 'Marco shares his journey launching an AI-first startup. Discover tips on tech stacks, team-building, funding, and scaling responsibly.',
  },
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="schedule" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            className="section-label mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Event Schedule
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            5 Days of AI Excellence
          </motion.h2>
        </motion.div>

        {/* Day Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {days.map((day, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveDay(index)}
              className={cn(
                'relative px-4 md:px-6 py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-300 overflow-hidden',
                activeDay === index
                  ? 'text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeDay === index && (
                <motion.div
                  className="absolute inset-0 bg-purple-600"
                  layoutId="activeTab"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">
                <div>{day.day}</div>
                <div className="text-xs opacity-70">{day.date}</div>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Sessions List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {sessions.map((session, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center hover:border-purple-500/30 transition-all cursor-pointer group"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 0 40px rgba(124, 58, 237, 0.2)',
                }}
              >
                {/* Time */}
                <div className="flex-shrink-0 w-full md:w-32">
                  <motion.div
                    className="text-slate-400 text-sm"
                    whileHover={{ color: '#A78BFA' }}
                  >
                    {session.time}
                  </motion.div>
                </div>

                {/* Speaker */}
                <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-48">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={session.image}
                      alt={session.speaker}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-purple-500/0 group-hover:border-purple-500/50 transition-colors"
                    />
                  </motion.div>
                  <div>
                    <div className="text-white font-medium text-sm">{session.speaker}</div>
                    <div className="text-slate-500 text-xs">{session.role}</div>
                  </div>
                </div>

                {/* Session Info */}
                <div className="flex-1">
                  <motion.h3
                    className="text-white font-semibold text-base md:text-lg mb-1 group-hover:text-purple-300 transition-colors"
                  >
                    {session.title}
                  </motion.h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {session.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
