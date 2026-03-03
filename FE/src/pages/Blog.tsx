import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import PageHero from '@/components/PageHero';
import PageTransition from '@/components/PageTransition';

const categories = ['All', 'AI Trends', 'Technology', 'Events', 'Industry', 'Research'];

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Generative AI in 2026',
    excerpt: 'Explore how generative AI is reshaping creative industries, from content creation to software development, and what to expect in the coming years.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    category: 'AI Trends',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Building Ethical AI Systems',
    excerpt: 'Learn about the frameworks and best practices for developing AI systems that prioritize fairness, transparency, and accountability.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop',
    category: 'Research',
    date: 'Jan 12, 2026',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'AI Summit 2026: What to Expect',
    excerpt: 'Get an exclusive preview of the biggest AI conference of the year, featuring keynote speakers, workshops, and networking opportunities.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
    category: 'Events',
    date: 'Jan 10, 2026',
    readTime: '4 min read',
  },
  {
    id: 4,
    title: 'Machine Learning in Healthcare',
    excerpt: 'Discover how ML algorithms are revolutionizing medical diagnosis, drug discovery, and patient care across the globe.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    category: 'Industry',
    date: 'Jan 8, 2026',
    readTime: '6 min read',
  },
  {
    id: 5,
    title: 'The Rise of Autonomous Systems',
    excerpt: 'From self-driving cars to intelligent robots, explore the technologies powering the next generation of autonomous systems.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop',
    category: 'Technology',
    date: 'Jan 5, 2026',
    readTime: '7 min read',
  },
  {
    id: 6,
    title: 'Natural Language Processing Breakthroughs',
    excerpt: 'Recent advances in NLP are enabling more natural human-computer interactions. Here is what developers need to know.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop',
    category: 'AI Trends',
    date: 'Jan 3, 2026',
    readTime: '5 min read',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  }),
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-900">
        <PageHero
          label="Our Blog"
          title="Latest Insights"
          subtitle="Stay updated with the latest trends, research, and insights in artificial intelligence and machine learning."
        />

        {/* Filter & Search Section */}
        <section ref={sectionRef} className="relative py-12 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </motion.div>

            {/* Blog Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-300"
                    whileHover={{ y: -10 }}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent"></div>
                      
                      {/* Category Badge */}
                      <span className="absolute top-4 left-4 px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-slate-400 text-sm mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Read More */}
                      <motion.a
                        href="#"
                        className="inline-flex items-center gap-2 text-purple-400 font-medium text-sm hover:text-purple-300 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            <motion.div
              className="flex justify-center gap-2 mt-12"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {[1, 2, 3].map((page) => (
                <motion.button
                  key={page}
                  className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                    page === 1
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {page}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
