import { useRef } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';

const tickets = [
  {
    name: 'Standard',
    price: 299,
    date: 'October 1 to 5 - 10:00 AM',
    features: [
      'Access to keynotes and sessions.',
      'Admission to exhibitions and demos.',
      'Networking opportunities.',
      'Digital materials and session recordings.',
    ],
    color: 'purple',
  },
  {
    name: 'VIP',
    price: 699,
    date: 'October 1 to 5 - 10:00 AM',
    features: [
      'All Standard benefits.',
      'VIP lounge access and exclusive events.',
      'Front-row seating and priority workshop access.',
      'VIP swag bag and exclusive content.',
    ],
    color: 'purple',
  },
  {
    name: 'Full Access',
    price: 1199,
    date: 'October 1 to 5 - 10:00 AM',
    features: [
      'All VIP benefits.',
      'Access to all workshops and breakout sessions.',
      'Personalized session scheduling.',
      'Speaker meet-and-greet and after-party access.',
    ],
    color: 'red',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.9,
      ease: 'easeOut' as const,
    },
  }),
};

export default function Tickets() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="tickets" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden bg-slate-900">
      {/* Background with geometric pattern */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&h=1080&fit=crop"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"></div>
        {/* Geometric overlay */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(124, 58, 237, 0.1) 40%, rgba(124, 58, 237, 0.1) 60%, transparent 60%)`,
            backgroundSize: '100px 100px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
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
          className="text-center mb-16"
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
            Ticket Options
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Choose Your Pass
          </motion.h2>
          <motion.p
            className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Select the perfect ticket for your needs and gain access to exclusive sessions, workshops, and more.
          </motion.p>
        </motion.div>

        {/* Ticket Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8" style={{ perspective: '1000px' }}>
          {tickets.map((ticket, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                ticket.color === 'red' ? 'ticket-card-red' : 'ticket-card'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ 
                y: -20, 
                rotateY: ticket.color === 'red' ? -5 : 5,
                boxShadow: ticket.color === 'red' 
                  ? '0 25px 50px rgba(239, 68, 68, 0.3)' 
                  : '0 25px 50px rgba(124, 58, 237, 0.3)',
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Ticket Header */}
              <div className="relative p-6 pb-4">
                {/* Logo and barcode decoration */}
                <div className="flex justify-between items-start mb-6">
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 2L2 30H30L16 2Z"
                        fill={ticket.color === 'red' ? '#EF4444' : '#7C3AED'}
                        stroke="white"
                        strokeWidth="1"
                      />
                    </svg>
                    <span className="text-white font-bold">Aivent</span>
                  </motion.div>
                  {/* Barcode decoration */}
                  <div className="w-16 h-8 barcode opacity-50"></div>
                </div>

                {/* Price */}
                <motion.div
                  className="mb-2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                >
                  <span className="text-white/60 text-sm">$</span>
                  <motion.span
                    className="text-4xl md:text-5xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.6, duration: 0.5 }}
                  >
                    {ticket.price}
                  </motion.span>
                </motion.div>

                {/* Ticket Name */}
                <motion.h3
                  className="text-2xl font-bold text-white mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
                >
                  {ticket.name}
                </motion.h3>
                <p className="text-white/60 text-sm">{ticket.date}</p>
              </div>

              {/* Dashed line */}
              <div className="relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-slate-900 rounded-r-full"></div>
                <div className="border-t-2 border-dashed border-white/20 mx-4"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-slate-900 rounded-l-full"></div>
              </div>

              {/* Features */}
              <div className="p-6 pt-4">
                <ul className="space-y-3 mb-6">
                  {ticket.features.map((feature, fIndex) => (
                    <motion.li
                      key={fIndex}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + fIndex * 0.1 + 0.6, duration: 0.4 }}
                    >
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        ticket.color === 'red' ? 'text-red-400' : 'text-purple-400'
                      }`} />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className={`w-full font-semibold py-6 ${
                      ticket.color === 'red'
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    BUY TICKET
                  </Button>
                </motion.div>
              </div>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
