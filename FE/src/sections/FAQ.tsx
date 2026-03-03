import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is the AI Summit 2026?',
    answer: 'AI Summit 2026 is a premier global conference bringing together AI researchers, developers, industry leaders, and enthusiasts to explore the latest advancements in artificial intelligence, machine learning, and related technologies.',
  },
  {
    question: 'When and where will the event be held?',
    answer: 'The event will be held from October 1-5, 2026, at the San Francisco Tech Pavilion, located at 121 AI Blvd, San Francisco, CA 94107.',
  },
  {
    question: 'How can I register for the event?',
    answer: 'You can register for the event by clicking the "BUY TICKETS" button on our website. We offer Standard, VIP, and Full Access passes to suit different needs and budgets.',
  },
  {
    question: 'What ticket options are available?',
    answer: 'We offer three ticket tiers: Standard ($299) for basic access, VIP ($699) with exclusive lounge access and priority seating, and Full Access ($1199) including all workshops and speaker meet-and-greets.',
  },
  {
    question: 'Can I transfer my ticket to someone else?',
    answer: 'Yes, tickets can be transferred to another attendee up to 14 days before the event. Please contact our support team at contact@aivent.com to process the transfer.',
  },
  {
    question: 'Will there be virtual participation?',
    answer: 'Yes, we offer virtual attendance options for select sessions. Virtual pass holders will have access to live streams of keynotes and panel discussions, as well as on-demand recordings.',
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="faq" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              className="section-label mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Everything You Need to Know
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Frequently Asked<br />
              <span className="gradient-text">Questions</span>
            </motion.h2>
          </motion.div>

          {/* Right - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-b border-white/10 overflow-hidden"
                  >
                    <AccordionTrigger className="text-white hover:text-purple-300 text-left py-4 text-base md:text-lg font-medium transition-colors hover:no-underline group">
                      <motion.span
                        className="flex-1"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {faq.question}
                      </motion.span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 pb-4 leading-relaxed">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {faq.answer}
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
