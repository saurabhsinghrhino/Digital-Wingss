import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const navCapsuleRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const linksContainerRef = useRef(null);
  const location = useLocation();
  const { theme } = useTheme();

  // Scroll listener to toggle capsule floating state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Morph navigation container into capsule on scroll using GSAP (theme aware)
  useEffect(() => {
    const capsule = navCapsuleRef.current;
    if (!capsule) return;

    const isDark = theme === "dark";

    if (isScrolled) {
      gsap.to(capsule, {
        y: 8,
        scale: 0.97,
        backgroundColor: isDark
          ? "rgba(10, 25, 47, 0.92)"
          : "rgba(255, 255, 255, 0.92)",
        borderRadius: "9999px",
        borderWidth: "1px",
        borderColor: isDark
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(10, 25, 47, 0.08)",
        boxShadow: isDark
          ? "0 20px 40px -15px rgba(0, 0, 0, 0.5)"
          : "0 20px 40px -15px rgba(10, 25, 47, 0.06)",
        paddingLeft: "32px",
        paddingRight: "32px",
        paddingTop: "12px",
        paddingBottom: "12px",
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(capsule, {
        y: 0,
        scale: 1,
        backgroundColor: "transparent",
        borderRadius: "0px",
        borderWidth: "0px",
        borderColor: "transparent",
        boxShadow: "none",
        paddingLeft: "0px",
        paddingRight: "0px",
        paddingTop: "16px",
        paddingBottom: "16px",
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }, [isScrolled, theme]);

  // Close mobile menu on route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // GSAP animation for mobile navigation drawer
  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (isMobileMenuOpen) {
      // Open State
      gsap.killTweensOf(menu);
      const links = linksContainerRef.current?.querySelectorAll(".mobile-link");
      if (links) gsap.killTweensOf(links);

      // Disable body and Lenis scrolling
      document.body.style.overflow = "hidden";
      if (window.lenis) window.lenis.stop();

      gsap.fromTo(
        menu,
        { y: -10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        },
      );

      if (links && links.length > 0) {
        gsap.fromTo(
          links,
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.out",
            delay: 0.08,
          },
        );
      }
    } else {
      // Closed State
      gsap.killTweensOf(menu);

      // Restore body and Lenis scrolling
      document.body.style.overflow = "";
      if (window.lenis) window.lenis.start();

      gsap.to(menu, {
        y: -10,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      });
    }

    return () => {
      document.body.style.overflow = "";
      if (window.lenis) window.lenis.start();
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-40 bg-transparent flex justify-center py-3 px-6 pointer-events-none transition-all duration-300"
      >
        <div
          ref={navCapsuleRef}
          className="pointer-events-auto w-full max-w-7xl mx-auto flex items-center justify-between py-4 transition-all duration-300 backdrop-blur-md"
        >
          {/* Logo Section (Official Image) */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src="/logo.png"
              alt="DigitalWings Official Logo"
              className="h-[60px] w-auto object-contain rounded-full transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-9">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                    isActive
                      ? "text-brand-blue"
                      : "text-navy-medium dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-blue"
                  } group`
                }
              >
                {link.name}
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </nav>

          {/* Right Desktop Actions (ThemeToggle + CTA Button) */}
          <div className="hidden lg:flex items-center space-x-4 shrink-0">
            <ThemeToggle />
            <Link
              to="/contact"
              className="group inline-flex items-center space-x-2 px-5 py-3 bg-navy-medium dark:bg-brand-blue text-white hover:bg-brand-blue dark:hover:bg-sky-400 rounded-none text-[10px] font-extrabold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md border border-navy-medium dark:border-brand-blue"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Right Actions (ThemeToggle + Hamburger Toggle) */}
          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeToggle className="w-9 h-9" />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center text-navy-medium dark:text-slate-100 hover:text-brand-blue transition-colors focus:outline-none shrink-0"
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        ref={mobileMenuRef}
        id="mobile-navigation"
        className={`fixed inset-0 w-full h-screen bg-white dark:bg-navy-dark text-navy-medium dark:text-slate-100 z-30 lg:hidden flex flex-col justify-center px-8 md:px-16 ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={(e) => {
          // Close menu if user clicks outside the links container on the drawer background
          if (e.target === e.currentTarget) {
            setIsMobileMenuOpen(false);
          }
        }}
      >
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

        <div
          className="relative z-10 flex flex-col space-y-8"
          ref={linksContainerRef}
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest text-brand-blue font-extrabold">
              Menu
            </span>
          </div>
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `mobile-link text-3xl md:text-4xl font-black uppercase tracking-tight transition-colors inline-block ${
                    isActive
                      ? "text-brand-blue"
                      : "text-navy-medium dark:text-slate-100 hover:text-brand-blue dark:hover:text-brand-blue"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <hr className="border-navy-medium/10 dark:border-white/10 my-4" />

          <div className="mobile-link flex flex-col space-y-4">
            <Link
              to="/contact"
              className="inline-flex justify-center items-center space-x-2 px-8 py-3.5 bg-navy-medium dark:bg-brand-blue text-white hover:bg-brand-blue dark:hover:bg-sky-400 text-xs font-bold uppercase tracking-widest transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 text-center mt-2">
              <span>officiallydigitalwings@gmail.com | +91 73792 97720</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
