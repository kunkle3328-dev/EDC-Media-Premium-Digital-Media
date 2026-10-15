import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EdcLogo } from './EdcLogo.tsx';
import { SERVICES_DATA, BRAND_CONFIG } from '../data/brandConfig.ts';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Video,
  Share2,
  Palette,
  Code,
  TrendingUp,
  Cpu,
  Layers
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Video,
  Share2,
  Palette,
  Code,
  TrendingUp,
  Cpu,
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click for services dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070B]/90 backdrop-blur-md border-b border-[#1D3045] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#05070B]/95 to-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#008CFF] rounded-lg p-1 transition-transform"
            aria-label="EDC Media Home"
          >
            <EdcLogo variant="chrome" size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium" aria-label="Main Navigation">
            <Link
              to="/"
              className={`transition-colors py-1 relative ${
                isActive('/') && location.pathname === '/'
                  ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#008CFF] after:shadow-[0_0_8px_#008CFF]'
                  : 'text-[#A7B3C3] hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center gap-1.5 transition-colors py-1 cursor-pointer focus:outline-none ${
                  isActive('/services')
                    ? 'text-white font-semibold'
                    : 'text-[#A7B3C3] hover:text-white'
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#008CFF]' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-full -left-20 w-[540px] mt-2 p-4 bg-[#0A1019] border border-[#1D3045] rounded-xl shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 z-50"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1D3045]">
                    <span className="text-xs font-semibold tracking-wider text-[#A7B3C3] uppercase">
                      Capabilities & Solutions
                    </span>
                    <Link
                      to="/services"
                      className="text-xs text-[#008CFF] hover:text-[#19B5FF] font-medium flex items-center gap-1"
                    >
                      <span>View All Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {SERVICES_DATA.map((service) => {
                      const IconComponent = iconMap[service.iconName] || Layers;
                      return (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#0D1521] border border-transparent hover:border-[#1D3045] transition-all group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#05070B] border border-[#1D3045] group-hover:border-[#008CFF] group-hover:bg-[#008CFF]/10 flex items-center justify-center shrink-0 transition-colors">
                            <IconComponent className="w-4 h-4 text-[#008CFF] group-hover:text-[#19B5FF]" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white group-hover:text-[#19B5FF] transition-colors leading-snug">
                              {service.title}
                            </div>
                            <div className="text-xs text-[#A7B3C3] line-clamp-1 mt-0.5">
                              {service.badge}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#1D3045] bg-[#05070B]/50 p-2.5 rounded-lg flex items-center justify-between">
                    <span className="text-xs text-[#A7B3C3]">
                      Need a tailored multi-discipline package?
                    </span>
                    <Link
                      to="/contact"
                      className="text-xs text-white bg-[#008CFF] hover:bg-[#19B5FF] px-2.5 py-1 rounded font-medium transition-colors"
                    >
                      Custom Quote
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/portfolio"
              className={`transition-colors py-1 relative ${
                isActive('/portfolio')
                  ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#008CFF] after:shadow-[0_0_8px_#008CFF]'
                  : 'text-[#A7B3C3] hover:text-white'
              }`}
            >
              Portfolio
            </Link>

            <Link
              to="/about"
              className={`transition-colors py-1 relative ${
                isActive('/about')
                  ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#008CFF] after:shadow-[0_0_8px_#008CFF]'
                  : 'text-[#A7B3C3] hover:text-white'
              }`}
            >
              About
            </Link>

            <Link
              to="/pricing"
              className={`transition-colors py-1 relative ${
                isActive('/pricing')
                  ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#008CFF] after:shadow-[0_0_8px_#008CFF]'
                  : 'text-[#A7B3C3] hover:text-white'
              }`}
            >
              Pricing
            </Link>

            <Link
              to="/contact"
              className={`transition-colors py-1 relative ${
                isActive('/contact')
                  ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#008CFF] after:shadow-[0_0_8px_#008CFF]'
                  : 'text-[#A7B3C3] hover:text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Consultation CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#008CFF] hover:bg-[#19B5FF] transition-all duration-200 shadow-[0_0_20px_rgba(0,140,255,0.4)] hover:shadow-[0_0_30px_rgba(25,181,255,0.6)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008CFF] focus:ring-offset-[#05070B] group"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#008CFF] rounded-md hover:bg-[#19B5FF] transition-colors"
            >
              Consult
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#A7B3C3] hover:text-white hover:bg-[#0A1019] border border-[#1D3045] focus:outline-none focus:ring-2 focus:ring-[#008CFF]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#05070B] border-b border-[#1D3045] overflow-y-auto px-4 py-6 z-40">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`text-lg font-medium py-2 px-3 rounded-lg ${
                location.pathname === '/' ? 'bg-[#0D1521] text-[#008CFF]' : 'text-white'
              }`}
            >
              Home
            </Link>

            <div className="py-2 px-3">
              <div className="text-xs font-bold tracking-wider text-[#A7B3C3] uppercase mb-2">
                Services
              </div>
              <div className="grid grid-cols-1 gap-2 pl-2 border-l border-[#1D3045]">
                <Link
                  to="/services"
                  className="text-sm font-semibold text-[#008CFF] py-1 hover:text-[#19B5FF]"
                >
                  All Services Overview →
                </Link>
                {SERVICES_DATA.map((s) => (
                  <Link
                    key={s.id}
                    to={`/services/${s.slug}`}
                    className="text-sm text-[#A7B3C3] hover:text-white py-1"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/portfolio"
              className={`text-lg font-medium py-2 px-3 rounded-lg ${
                isActive('/portfolio') ? 'bg-[#0D1521] text-[#008CFF]' : 'text-white'
              }`}
            >
              Portfolio
            </Link>

            <Link
              to="/about"
              className={`text-lg font-medium py-2 px-3 rounded-lg ${
                isActive('/about') ? 'bg-[#0D1521] text-[#008CFF]' : 'text-white'
              }`}
            >
              About EDC Media
            </Link>

            <Link
              to="/pricing"
              className={`text-lg font-medium py-2 px-3 rounded-lg ${
                isActive('/pricing') ? 'bg-[#0D1521] text-[#008CFF]' : 'text-white'
              }`}
            >
              Pricing & Packages
            </Link>

            <Link
              to="/contact"
              className={`text-lg font-medium py-2 px-3 rounded-lg ${
                isActive('/contact') ? 'bg-[#0D1521] text-[#008CFF]' : 'text-white'
              }`}
            >
              Contact & Inquiries
            </Link>

            <div className="pt-4 border-t border-[#1D3045]">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#008CFF] hover:bg-[#19B5FF] text-white font-bold text-center shadow-lg transition-colors"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="mt-3 text-center">
                <span className="text-xs text-[#A7B3C3]">Official Inquiry Line: </span>
                <a
                  href={`mailto:${BRAND_CONFIG.contactEmail}`}
                  className="text-xs text-[#008CFF] hover:underline"
                >
                  {BRAND_CONFIG.contactEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
