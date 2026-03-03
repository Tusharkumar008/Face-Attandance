import { motion } from 'framer-motion';

const topTexts = [
  'Cognitive Shift',
  'Next Intelligence',
  'Future Now',
  'Empowering Innovation',
  'Smarter Tomorrow',
  'Think Forward',
];

const bottomTexts = [
  'Think Forward',
  'Cognitive Shift',
  'Next Intelligence',
  'Future Now',
  'Empowering Innovation',
  'Smarter Tomorrow',
];

export default function Marquee() {
  return (
    <section className="relative py-8 overflow-hidden bg-slate-900">
      {/* Top diagonal strip */}
      <motion.div
        className="relative py-4 mb-2 overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, #7C3AED 0%, #6D28D9 50%, #5B21B6 100%)',
          transform: 'rotate(-3deg) scale(1.1)',
        }}
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...topTexts, ...topTexts, ...topTexts, ...topTexts].map((text, index) => (
            <span
              key={index}
              className="text-xl md:text-2xl font-bold text-white/90 mx-8 flex items-center gap-8"
            >
              {text}
              <span className="text-white/50">/</span>
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom diagonal strip */}
      <motion.div
        className="relative py-4 overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, #5B21B6 0%, #6D28D9 50%, #7C3AED 100%)',
          transform: 'rotate(-3deg) scale(1.1)',
        }}
        initial={{ x: '100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...bottomTexts, ...bottomTexts, ...bottomTexts, ...bottomTexts].map((text, index) => (
            <span
              key={index}
              className="text-xl md:text-2xl font-bold text-white/90 mx-8 flex items-center gap-8"
            >
              {text}
              <span className="text-white/50">/</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
