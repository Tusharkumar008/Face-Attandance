import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Venue() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="venue" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
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
            Event Location
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Location & Venue
          </motion.h2>
          <motion.p
            className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Join us in the heart of innovation at San Francisco Tech Pavilion—surrounded by top hotels, transit, and culture.
          </motion.p>
        </motion.div>

        {/* Venue Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=450&fit=crop"
              alt="Venue Exterior"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <motion.div
              className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-2xl transition-colors"
            />
          </motion.div>
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=450&fit=crop"
              alt="Venue Interior"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <motion.div
              className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-2xl transition-colors"
            />
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {/* Address */}
          <motion.div
            className="flex items-center gap-4 justify-center md:justify-start"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center flex-shrink-0"
              whileHover={{ backgroundColor: 'rgba(124, 58, 237, 0.4)', scale: 1.1 }}
            >
              <MapPin className="w-6 h-6 text-purple-500" />
            </motion.div>
            <div>
              <h4 className="text-white font-semibold mb-1">Address</h4>
              <p className="text-slate-400 text-sm">121 AI Blvd, San Francisco<br />CA 94107</p>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="flex items-center gap-4 justify-center md:justify-start"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center flex-shrink-0"
              whileHover={{ backgroundColor: 'rgba(124, 58, 237, 0.4)', scale: 1.1 }}
            >
              <Phone className="w-6 h-6 text-purple-500" />
            </motion.div>
            <div>
              <h4 className="text-white font-semibold mb-1">Phone</h4>
              <p className="text-slate-400 text-sm">Call: +1 123 456 789</p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex items-center gap-4 justify-center md:justify-start"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center flex-shrink-0"
              whileHover={{ backgroundColor: 'rgba(124, 58, 237, 0.4)', scale: 1.1 }}
            >
              <Mail className="w-6 h-6 text-purple-500" />
            </motion.div>
            <div>
              <h4 className="text-white font-semibold mb-1">Email</h4>
              <p className="text-slate-400 text-sm">contact@aivent.com</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
