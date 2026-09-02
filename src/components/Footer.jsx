import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-medium text-white pt-20 pb-8 relative overflow-hidden">
      {/* Decorative Ice-blue Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="flex flex-col space-y-6">
            <Link to="/" className="flex items-center shrink-0">
              <div className="bg-white p-2 rounded-sm inline-block shadow-sm">
                <img
                  src="/logo.png"
                  alt="DigitalWings Official Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              We combine engineering, design, and conversion-focused growth
              marketing under one roof to build digital products that move
              businesses forward.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.instagram.com/digital___wings?igsh=MWdkcmlxb21yMHdvdw=="
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-blue flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.facebook.com/share/17q6xoRtki/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-blue flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-blue flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-brand-blue mb-6">
              Navigation
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-brand-blue transition-colors duration-200 flex items-center"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-brand-blue transition-colors duration-200 flex items-center"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-brand-blue transition-colors duration-200 flex items-center"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-brand-blue transition-colors duration-200 flex items-center"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand-blue transition-colors duration-200 flex items-center"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Quick Directory */}
          <div>
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-brand-blue mb-6">
              Services
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <Link
                  to="/services/web-development"
                  className="hover:text-brand-blue transition-colors duration-200"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/app-development"
                  className="hover:text-brand-blue transition-colors duration-200"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/seo"
                  className="hover:text-brand-blue transition-colors duration-200"
                >
                  Search Engine Optimisation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/social-media-marketing"
                  className="hover:text-brand-blue transition-colors duration-200"
                >
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/meta-ads"
                  className="hover:text-brand-blue transition-colors duration-200"
                >
                  Meta Ads
                </Link>
              </li>
              <li>
                <Link
                  to="/services/promotional-videos"
                  className="hover:text-brand-blue transition-colors duration-200"
                >
                  Promotional Videos & SMM
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-brand-blue">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <a
                  href="mailto:officiallydigitalwings@gmail.com"
                  className="hover:text-brand-blue transition-colors duration-200"
                >
                  officiallydigitalwings@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <a
                  href="tel:+917379297720"
                  className="hover:text-brand-blue transition-colors duration-200"
                >
                  +91 73792 97720
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <span>
                  Sushant Golf-City, Near LuLu Mall, Lucknow, UP, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© {currentYear} DigitalWings. All Rights Reserved.</p>
          </div>
          <div className="flex items-center space-x-1">
            <span>Designed & Built with Purpose.</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block animate-pulse"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
