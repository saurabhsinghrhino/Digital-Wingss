import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard cubic/exponential ease
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    window.lenis = lenis;

    // Update ScrollTrigger whenever Lenis scrolls
    lenis.on("scroll", ScrollTrigger.update);

    // Feed Lenis RAF callback into GSAP's ticker
    const rafCallback = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafCallback);

    // Disable GSAP lag smoothing to keep scrolling animations fully synced
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      window.lenis = null;
      gsap.ticker.remove(rafCallback);
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />

        <div className="flex flex-col min-h-screen bg-white text-slate-900 dark:bg-navy-dark dark:text-slate-100 selection:bg-sky-100 selection:text-slate-900 transition-colors duration-300">
          <Navbar />

          {/* Main Content Area */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetails />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
