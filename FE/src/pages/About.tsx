import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Target, Eye, Users, Award, Globe, Zap } from 'lucide-react';
import PageHero from '@/components/PageHero';
import PageTransition from '@/components/PageTransition';
import AnimatedCard from '@/components/AnimatedCard';

const stats = [
  { value: 50000, suffix: '+', label: 'Attendees', icon: Users },
  { value: 200, suffix: '+', label: 'Speakers', icon: Award },
  { value: 50, suffix: '+', label: 'Countries', icon: Globe },
  { value: 100, suffix: '+', label: 'Partners', icon: Zap },
];

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Michael Roberts',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Emily Watson',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face',
  },
];

const timeline = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'AI Summit was founded with a vision to bring together the global AI community.',
  },
  {
    year: '2021',
    title: 'First Virtual Event',
    description: 'Successfully hosted our first virtual conference with 10,000+ attendees.',
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Expanded to multiple continents with regional events in Europe and Asia.',
  },
  {
    year: '2023',
    title: 'Industry Recognition',
    description: 'Named as one of the top 10 tech conferences worldwide.',
  },
  {
    year: '2024',
    title: 'Hybrid Events',
    description: 'Launched hybrid event format combining in-person and virtual experiences.',
  },
  {
    year: '2025',
    title: '50,000+ Community',
    description: 'Reached milestone of 50,000 active community members.',
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  useEffect(() => {
    return rounded.on('change', (v) => setDisplayValue(v));
  }, [rounded]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
}

export default function About() {
  const storyRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);

  const storyInView = useInView(storyRef, { once: true, margin: '-100px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });
  const teamInView = useInView(teamRef, { once: true, margin: '-100px' });
  const timelineInView = useInView(timelineRef, { once: true, margin: '-100px' });

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-900">
        <PageHero
          label="About Us"
          title="Our Story"
          subtitle="We are on a mission to accelerate the adoption of artificial intelligence and foster a global community of innovators."
        />

        {/* Story Section */}
        <section ref={storyRef} className="relative py-20 md:py-32 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left - Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <span className="section-label mb-4 block">Who We Are</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Pioneering the Future of <span className="gradient-text">AI Events</span>
                </h2>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                  AI Summit was born from a simple belief: the future of technology should be accessible to everyone. 
                  Since our founding, we have grown from a small gathering of enthusiasts to one of the world&apos;s 
                  premier AI conferences.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Our mission is to democratize AI knowledge, foster meaningful connections, and accelerate 
                  innovation across industries. We bring together researchers, developers, entrepreneurs, and 
                  thought leaders to share insights and shape the future of artificial intelligence.
                </p>
              </motion.div>

              {/* Right - Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              >
                <motion.div
                  className="absolute inset-0 bg-purple-600/20 rounded-2xl blur-3xl"
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
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
                    alt="AI Summit Team"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="relative py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedCard
                className="glass rounded-2xl p-8 border border-white/5"
                delay={0}
              >
                <div className="w-14 h-14 rounded-xl bg-purple-600/20 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-slate-400 leading-relaxed">
                  To accelerate the adoption of artificial intelligence by creating a platform 
                  where knowledge is shared, connections are made, and innovation is fostered. 
                  We believe AI should be accessible, ethical, and beneficial to all of humanity.
                </p>
              </AnimatedCard>

              <AnimatedCard
                className="glass rounded-2xl p-8 border border-white/5"
                delay={0.2}
              >
                <div className="w-14 h-14 rounded-xl bg-purple-600/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-slate-400 leading-relaxed">
                  To become the world&apos;s most influential AI community, driving the conversation 
                  around responsible AI development and deployment. We envision a future where 
                  AI enhances human potential and solves global challenges.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="relative py-20 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-slate-900 to-slate-900"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 40 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-purple-600/20 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={teamRef} className="relative py-20 md:py-32 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label mb-4 block">Our Team</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Meet the <span className="gradient-text">Visionaries</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="group relative"
                  initial={{ opacity: 0, y: 40 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-slate-400">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section ref={timelineRef} className="relative py-20 md:py-32 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label mb-4 block">Our Journey</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                The <span className="gradient-text">Timeline</span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Center Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 via-purple-600/50 to-transparent hidden lg:block"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="glass rounded-2xl p-6 border border-white/5 inline-block">
                        <span className="text-purple-400 font-bold text-lg mb-2 block">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-400">{item.description}</p>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <motion.div
                      className="w-4 h-4 rounded-full bg-purple-600 border-4 border-slate-900 z-10 hidden lg:block"
                      whileHover={{ scale: 1.5 }}
                    />

                    {/* Spacer */}
                    <div className="flex-1 hidden lg:block"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
