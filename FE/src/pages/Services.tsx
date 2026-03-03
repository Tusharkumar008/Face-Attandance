import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mic2, 
  Users, 
  Video, 
  Lightbulb, 
  Network, 
  Trophy,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import PageTransition from '@/components/PageTransition';
import GradientButton from '@/components/GradientButton';

const services = [
  {
    icon: Mic2,
    title: 'Keynote Speaking',
    description: 'World-class speakers sharing cutting-edge insights and visionary perspectives on AI and technology.',
    features: ['Industry leaders', 'Research pioneers', 'Thought-provoking talks'],
  },
  {
    icon: Users,
    title: 'Workshops & Training',
    description: 'Hands-on sessions designed to build practical skills in AI, machine learning, and data science.',
    features: ['Expert instructors', 'Practical exercises', 'Certification programs'],
  },
  {
    icon: Video,
    title: 'Virtual Events',
    description: 'Immersive online experiences connecting global audiences with live streaming and interactive features.',
    features: ['HD streaming', 'Live Q&A', 'On-demand access'],
  },
  {
    icon: Lightbulb,
    title: 'Startup Showcase',
    description: 'Platform for emerging AI startups to present innovations and connect with investors.',
    features: ['Pitch competitions', 'Investor meetings', 'Demo sessions'],
  },
  {
    icon: Network,
    title: 'Networking Events',
    description: 'Curated networking opportunities to build meaningful professional connections.',
    features: ['Matchmaking', 'Private dinners', 'Social events'],
  },
  {
    icon: Trophy,
    title: 'AI Awards',
    description: 'Annual awards recognizing excellence and innovation in artificial intelligence.',
    features: ['Industry recognition', 'Media coverage', 'Prestigious ceremony'],
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We understand your goals and tailor our services to meet your specific needs.',
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Our team creates a comprehensive plan covering all aspects of your event.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'We deliver world-class events with attention to every detail.',
  },
  {
    number: '04',
    title: 'Follow-up',
    description: 'Post-event support including analytics, recordings, and relationship building.',
  },
];

const detailedServices = [
  {
    title: 'Conference Organization',
    description: 'End-to-end event management from planning to execution. We handle logistics, marketing, speaker coordination, and attendee management.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
  },
  {
    title: 'Corporate Training',
    description: 'Customized AI training programs for enterprises. Upskill your team with courses designed by industry experts.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop',
  },
  {
    title: 'Consulting Services',
    description: 'Strategic AI consulting to help organizations navigate the AI landscape and implement effective solutions.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
  },
];

export default function Services() {
  const servicesRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const detailedRef = useRef<HTMLElement>(null);

  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const processInView = useInView(processRef, { once: true, margin: '-100px' });
  const detailedInView = useInView(detailedRef, { once: true, margin: '-100px' });

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-900">
        <PageHero
          label="Our Services"
          title="What We Offer"
          subtitle="Comprehensive solutions for AI events, training, and community building."
        />

        {/* Services Grid */}
        <section ref={servicesRef} className="relative py-20 md:py-32 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={servicesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group glass rounded-2xl p-8 border border-white/5 hover:border-purple-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-purple-600/20 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <service.icon className="w-7 h-7 text-purple-400" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section ref={processRef} className="relative py-20 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-slate-900 to-slate-900"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label mb-4 block">Our Process</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                How We <span className="gradient-text">Work</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <div className="glass rounded-2xl p-6 border border-white/5 h-full">
                    <span className="text-5xl font-bold text-purple-600/30 block mb-4">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Arrow */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10"
                      initial={{ opacity: 0, x: -10 }}
                      animate={processInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                    >
                      <ArrowRight className="w-6 h-6 text-purple-600" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section ref={detailedRef} className="relative py-20 md:py-32 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={detailedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label mb-4 block">Detailed Services</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Enterprise <span className="gradient-text">Solutions</span>
              </h2>
            </motion.div>

            <div className="space-y-20">
              {detailedServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 60 }}
                  animate={detailedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  {/* Image */}
                  <motion.div
                    className={`relative rounded-2xl overflow-hidden ${
                      index % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-purple-600/20 rounded-2xl blur-2xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <div className="relative rounded-2xl overflow-hidden border border-white/10">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <GradientButton variant="primary">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </GradientButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-950/20 to-slate-900"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                Let us help you create an unforgettable AI event experience. Contact us today to discuss your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton variant="primary" size="lg">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </GradientButton>
                <GradientButton variant="outline" size="lg">
                  View Pricing
                </GradientButton>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
