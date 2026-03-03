import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './sections/Header';
import Footer from './sections/Footer';

// Landing Page Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Marquee from './sections/Marquee';
import WhyAttend from './sections/WhyAttend';
import Quote from './sections/Quote';
import Speakers from './sections/Speakers';
import Partners from './sections/Partners';
import Schedule from './sections/Schedule';
import Tickets from './sections/Tickets';
import Venue from './sections/Venue';
import FAQ from './sections/FAQ';
import Newsletter from './sections/Newsletter';

// New Pages
import Blog from './pages/Blog';
import AboutPage from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

gsap.registerPlugin(ScrollTrigger);

// Landing Page Component
function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <Marquee />
      <WhyAttend />
      <Quote />
      <Speakers />
      <Partners />
      <Schedule />
      <Tickets />
      <Venue />
      <FAQ />
      <Newsletter />
    </>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Refresh ScrollTrigger on route change
    ScrollTrigger.refresh();
  }, [pathname]);
  
  return null;
}

function App() {
  useEffect(() => {
    // Initialize smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
