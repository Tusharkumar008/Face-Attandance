import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  ChevronDown,
  MessageSquare,
  Headphones,
  Globe
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import PageTransition from '@/components/PageTransition';
import GradientButton from '@/components/GradientButton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'contact@aivent.com',
    description: 'We will respond within 24 hours',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+1 (555) 123-4567',
    description: 'Mon-Fri from 9am to 6pm',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '121 AI Blvd, San Francisco',
    description: 'CA 94107, United States',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon - Fri: 9AM - 6PM',
    description: 'Weekend: Closed',
  },
];

const faqs = [
  {
    question: 'How can I register for AI Summit 2026?',
    answer: 'You can register for AI Summit 2026 by visiting our Tickets page and selecting the pass that best suits your needs. Early bird discounts are available until March 31, 2026.',
  },
  {
    question: 'What are the different ticket options?',
    answer: 'We offer three ticket tiers: Standard ($299) for basic access to keynotes and sessions, VIP ($699) with exclusive lounge access and priority seating, and Full Access ($1199) including all workshops and speaker meet-and-greets.',
  },
  {
    question: 'Can I get a refund if I cannot attend?',
    answer: 'Yes, we offer full refunds up to 30 days before the event. Between 30-14 days, you can receive a 50% refund or transfer your ticket to another attendee. Within 14 days, tickets are non-refundable but transferable.',
  },
  {
    question: 'Is there a virtual attendance option?',
    answer: 'Absolutely! We offer virtual passes that provide live streaming access to all keynotes and selected sessions, plus on-demand recordings for 30 days after the event.',
  },
  {
    question: 'How can I become a speaker or sponsor?',
    answer: 'We are always looking for industry leaders and innovative companies to partner with. Please fill out the contact form selecting "Speaking Opportunity" or "Sponsorship Inquiry" and our team will get back to you.',
  },
  {
    question: 'Do you offer group discounts?',
    answer: 'Yes! We offer special rates for groups of 5 or more attendees. Contact our sales team for custom pricing and corporate packages.',
  },
];

const supportChannels = [
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with our support team in real-time',
    action: 'Start Chat',
  },
  {
    icon: Headphones,
    title: 'Phone Support',
    description: 'Speak directly with our team',
    action: 'Call Now',
  },
  {
    icon: Globe,
    title: 'Community Forum',
    description: 'Join discussions with other attendees',
    action: 'Join Forum',
  },
];

export default function Contact() {
  const formRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);

  const formInView = useInView(formRef, { once: true, margin: '-100px' });
  const infoInView = useInView(infoRef, { once: true, margin: '-100px' });
  const faqInView = useInView(faqRef, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-900">
        <PageHero
          label="Contact Us"
          title="Get in Touch"
          subtitle="Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible."
        />

        {/* Contact Info Cards */}
        <section ref={infoRef} className="relative py-16 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 40 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="glass rounded-2xl p-6 border border-white/5 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={infoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, borderColor: 'rgba(124, 58, 237, 0.3)' }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-purple-600/20 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <info.icon className="w-7 h-7 text-purple-400" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                  <p className="text-white font-medium mb-1">{info.content}</p>
                  <p className="text-slate-400 text-sm">{info.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section ref={formRef} className="relative py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <span className="section-label mb-4 block">Send a Message</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Let&apos;s Start a <span className="gradient-text">Conversation</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <label className="block text-white font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <label className="block text-white font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="john@example.com"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <label className="block text-white font-medium mb-2">Subject</label>
                    <div className="relative">
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:outline-none focus:border-purple-500 transition-colors appearance-none"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="tickets">Ticket Questions</option>
                        <option value="speaking">Speaking Opportunity</option>
                        <option value="sponsorship">Sponsorship Inquiry</option>
                        <option value="press">Press & Media</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="How can we help you?"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <GradientButton variant="primary" size="lg" type="submit">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </GradientButton>
                  </motion.div>
                </form>
              </motion.div>

              {/* Map */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              >
                <span className="section-label mb-4 block">Our Location</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Visit Our <span className="gradient-text">Office</span>
                </h2>

                <div className="relative rounded-2xl overflow-hidden border border-white/10 h-[400px] lg:h-[500px]">
                  {/* Map placeholder - in production, use Google Maps or similar */}
                  <div className="absolute inset-0 bg-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop"
                      alt="Map Location"
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="glass rounded-2xl p-6 text-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={formInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                        <p className="text-white font-bold">AI Summit HQ</p>
                        <p className="text-slate-400 text-sm">121 AI Blvd, San Francisco</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="relative py-16 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-950/10 to-slate-900"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label mb-4 block">More Ways to Connect</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Additional <span className="gradient-text">Support</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  className="glass rounded-2xl p-6 border border-white/5 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, borderColor: 'rgba(124, 58, 237, 0.3)' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{channel.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{channel.description}</p>
                  <motion.button
                    className="text-purple-400 font-medium text-sm hover:text-purple-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {channel.action} →
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="relative py-20 bg-slate-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label mb-4 block">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={faqInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="border-b border-white/10 overflow-hidden"
                    >
                      <AccordionTrigger className="text-white hover:text-purple-300 text-left py-4 text-base font-medium transition-colors hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-400 pb-4 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
