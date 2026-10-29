import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, LogIn, UserPlus, FileText } from 'lucide-react';
import { policiesList } from '../data/journalData';

export default function Navbar({ onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const NavLink = ({ to, exact = true, children }) => {
    const isActive = exact ? location.pathname === to : location.pathname.startsWith(to);
    return (
      <Link
        to={to}
        className={`relative flex items-center h-full px-1.5 xl:px-2 2xl:px-3 text-[12.5px] xl:text-[13px] font-semibold whitespace-nowrap transition-colors duration-200 ${
          isActive ? 'text-journal-navy font-bold' : 'text-slate-600 hover:text-journal-navy'
        }`}
      >
        <span>{children}</span>
        <span
          className={`absolute bottom-0 left-2 right-2 h-[2px] bg-journal-accent rounded-full transition-transform duration-200 ${
            isActive ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
          }`}
        />
      </Link>
    );
  };

  const DropdownButton = ({ name, title, activePaths = [] }) => {
    const isActive = activePaths.some(path => location.pathname.startsWith(path));
    const isOpen = activeDropdown === name;
    return (
      <button
        type="button"
        onClick={() => toggleDropdown(name)}
        onMouseEnter={() => setActiveDropdown(name)}
        className={`relative flex items-center gap-1 h-full px-1.5 xl:px-2 2xl:px-3 text-[12.5px] xl:text-[13px] font-semibold whitespace-nowrap transition-colors duration-200 ${
          isActive || isOpen ? 'text-journal-navy font-bold' : 'text-slate-600 hover:text-journal-navy'
        }`}
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-journal-accent' : 'text-slate-400'
          }`}
        />
        <span
          className={`absolute bottom-0 left-2 right-2 h-[2px] bg-journal-accent rounded-full transition-transform duration-200 ${
            isActive ? 'scale-x-100' : 'scale-x-0'
          }`}
        />
      </button>
    );
  };

  const DropdownPanel = ({ name, width = 'w-60', align = 'left-0', children }) => (
    <div
      className={`absolute ${align} top-full ${width} bg-white rounded-b-lg shadow-xl border border-slate-200 border-t-2 border-t-amber-500 py-1.5 z-50 max-h-96 overflow-y-auto transition-all duration-200 origin-top ${
        activeDropdown === name ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
      }`}
    >
      {children}
    </div>
  );

  const dropdownItem = "block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-amber-50 hover:text-journal-navy border-b border-slate-50 last:border-0 transition-colors";
  const mobileItem = "block px-3 py-2 rounded-md text-slate-800 hover:bg-amber-50 hover:text-journal-navy";

  return (
    <header className={`sticky top-0 z-50 w-full transition-shadow duration-200 ${isScrolled ? 'shadow-md' : 'shadow-xs'}`}>

      {/* 1. Brand Header */}
      <div className="bg-[#0b2239] py-4 px-4 text-white border-b border-amber-500/20 relative islamic-pattern-dark">
        <div className="max-w-7xl mx-auto flex items-center relative z-10">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-[2px] shadow-md shrink-0 transition-transform duration-300 group-hover:scale-105 overflow-hidden">
              <div className="w-full h-full rounded-full bg-[#071527] flex items-center justify-center overflow-hidden">
                <img
                  src="/images/tirc-logo.jpg"
                  alt="Taj Islamic Research Center Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2.5">
                <h1 className="font-serif text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  Taj Journal of Religion & Psychology
                </h1>
                <span className="px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-amber-500/20 border border-amber-400/30 text-amber-300 rounded hidden sm:inline-block">
                  TJRP
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-300 font-light tracking-wide mt-0.5">
                Published by Taj Islamic Research Center (TIRC)
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* 2. Primary Navigation Bar */}
      <nav className={`border-b border-slate-200 transition-colors ${isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between gap-3 h-11">

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center h-full">
              <NavLink to="/">Home</NavLink>

              {/* About */}
              <div className="relative h-full" onMouseLeave={() => setActiveDropdown(null)}>
                <DropdownButton name="about" title="About" activePaths={['/about', '/editorial-board', '/contact']} />
                <DropdownPanel name="about">
                  {[
                    { to: "/about", label: "About the Journal" },
                    { to: "/editorial-board", label: "Editorial & Advisory Board" },
                    { to: "/about#history", label: "History of TJRP" },
                    { to: "/about#vision", label: "Vision & Mission" },
                    { to: "/policies#privacy", label: "Privacy Statement" },
                    { to: "/contact", label: "Contact Us" }
                  ].map(item => (
                    <Link key={item.to} to={item.to} className={dropdownItem}>{item.label}</Link>
                  ))}
                </DropdownPanel>
              </div>

              <NavLink to="/aim-and-scope">Aim & Scope</NavLink>

              {/* Issues */}
              <div className="relative h-full" onMouseLeave={() => setActiveDropdown(null)}>
                <DropdownButton name="issues" title="Issues" activePaths={['/current-issue', '/issues']} />
                <DropdownPanel name="issues" width="w-56">
                  <Link to="/current-issue" className={dropdownItem}>Current Issue</Link>
                  <Link to="/issues" className={dropdownItem}>Issues & Archives</Link>
                </DropdownPanel>
              </div>

              <NavLink to="/indexed-in">Indexed In</NavLink>
              <NavLink to="/author-guidelines">Author Guidelines</NavLink>
              <NavLink to="/submissions">Submissions</NavLink>
              <NavLink to="/call-for-paper">Call for Papers</NavLink>

              {/* Policies */}
              <div className="relative h-full" onMouseLeave={() => setActiveDropdown(null)}>
                <DropdownButton name="policies" title="Policies" activePaths={['/policies']} />
                <DropdownPanel name="policies" width="w-72" align="right-0">
                  {policiesList.map(pol => (
                    <Link key={pol.id} to={`/policies#${pol.id}`} className={dropdownItem}>{pol.title}</Link>
                  ))}
                </DropdownPanel>
              </div>

              <NavLink to="/publication-ethics">Ethics</NavLink>
            </div>

            {/* Desktop Search Bar */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="hidden lg:inline-flex items-center gap-2 shrink-0 p-2 xl:px-3 xl:py-1.5 xl:w-60 2xl:w-80 rounded-md bg-slate-50 hover:bg-white text-slate-400 border border-slate-300 hover:border-journal-navy/40 text-xs transition-colors text-left"
              title="Search articles by title, author, journal or year"
              aria-label="Search Journal"
            >
              <Search className="w-3.5 h-3.5 text-journal-accent shrink-0" />
              <span className="hidden xl:inline truncate">Search articles, authors, journals...</span>
            </button>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center justify-between w-full">
              <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">Menu</span>
              <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={onOpenSearch}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-slate-50 text-slate-400 border border-slate-300 text-xs"
                aria-label="Search Journal"
              >
                <Search className="w-3.5 h-3.5 text-journal-accent" />
                <span>Search</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5" />}
              </button>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[700px] border-t border-slate-200 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-slate-50 px-4 py-3 space-y-1 text-sm font-medium">
            <div className="space-y-0.5 pb-2 border-b border-slate-200">
              <Link to="/" className={mobileItem}>Home</Link>
              <Link to="/about" className={mobileItem}>About the Journal</Link>
              <Link to="/editorial-board" className={mobileItem}>Editorial Board</Link>
              <Link to="/aim-and-scope" className={mobileItem}>Aim & Scope</Link>
            </div>
            <div className="space-y-0.5 py-2 border-b border-slate-200">
              <Link to="/current-issue" className={mobileItem}>Current Issue</Link>
              <Link to="/issues" className={mobileItem}>Issues & Archives</Link>
              <Link to="/indexed-in" className={mobileItem}>Indexed In</Link>
              <Link to="/author-guidelines" className={mobileItem}>Author Guidelines</Link>
              <Link to="/submissions" className={mobileItem}>Submissions</Link>
            </div>
            <div className="space-y-0.5 pt-2">
              <Link to="/call-for-paper" className={mobileItem}>Call for Papers</Link>
              <Link to="/policies" className={mobileItem}>Policies</Link>
              <Link to="/publication-ethics" className={mobileItem}>Publication Ethics</Link>
              <Link to="/contact" className={mobileItem}>Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. Login & Register Bar */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-end gap-2">
          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-slate-100 text-journal-navy border border-slate-300 hover:border-journal-navy font-bold text-xs transition-colors shadow-xs shrink-0"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Login</span>
          </Link>
          <Link
            to="/register"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-journal-accent hover:bg-journal-accent-hover text-slate-950 font-bold text-xs transition-colors shadow-xs shrink-0"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Register</span>
          </Link>
        </div>
      </div>

      {/* Floating Submit Paper Button (hidden on the Submissions page itself) */}
      {location.pathname !== '/submissions' && (
        <Link
          to="/submissions"
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl ring-2 ring-white/70 transition-all hover:-translate-y-0.5"
          aria-label="Submit Paper"
        >
          <FileText className="w-4 h-4" />
          <span>Submit Paper</span>
        </Link>
      )}

    </header>
  );
}
