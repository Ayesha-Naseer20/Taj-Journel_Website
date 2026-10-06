import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, Menu, X, ChevronDown, Award, Globe, LogIn, UserPlus, 
  FileText, BookOpen
} from 'lucide-react';
import { journalDetails, policiesList } from '../data/journalData';

export default function Navbar({ onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
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
        className={`relative flex items-center h-full px-3 text-[13px] font-semibold transition-colors duration-200 ${
          isActive 
            ? 'text-journal-navy font-bold' 
            : 'text-slate-600 hover:text-journal-navy'
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
        className={`relative flex items-center gap-1 h-full px-3 text-[13px] font-semibold transition-colors duration-200 ${
          isActive || isOpen
            ? 'text-journal-navy font-bold' 
            : 'text-slate-600 hover:text-journal-navy'
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

  return (
    <header className={`sticky top-0 z-50 w-full transition-shadow duration-200 ${isScrolled ? 'shadow-md' : 'shadow-xs'}`}>
      
      {/* 1. Top Scholarly Utility Bar */}
      <div className="bg-[#071527] text-slate-300 text-xs py-2 px-4 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          
          {/* Recognition & Accreditation Highlights */}
          <div className="flex items-center gap-4 text-slate-300 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 text-slate-200">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>HEC Pakistan: <strong className="text-amber-300 font-semibold">Category 'Y'</strong></span>
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
              <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Indexed in <strong className="text-slate-100 font-medium">DOAJ & Crossref</strong></span>
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:inline text-slate-400 font-mono text-[11px]">
              ISSN: {journalDetails.issnOnline} (Online) • {journalDetails.issnPrint} (Print)
            </span>
          </div>

          {/* Quick Actions & Auth */}
          <div className="flex items-center gap-3 ml-auto text-xs">
            <button 
              type="button"
              onClick={onOpenSearch}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/70 transition-colors focus-ring"
              title="Search articles by title, author, keyword"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline text-[11px]">Search Journal</span>
            </button>
            <div className="h-3.5 w-px bg-slate-700 hidden sm:block"></div>
            <Link 
              to="/login" 
              className="inline-flex items-center gap-1 text-slate-300 hover:text-amber-300 font-medium transition-colors text-[11px] sm:text-xs"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Login</span>
            </Link>
            <Link 
              to="/register" 
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-journal-accent hover:bg-journal-accent-hover text-slate-950 font-bold text-[11px] sm:text-xs transition-colors shadow-xs"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Register</span>
            </Link>
          </div>

        </div>
      </div>

      {/* 2. Main Editorial Brand Header Bar */}
      <div className="bg-[#0b2239] py-4 px-4 text-white border-b border-amber-500/20 relative islamic-pattern-dark">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
          
          {/* Logo & Journal Title */}
          <Link to="/" className="flex items-center gap-4 group">
            {/* Calligraphic Seal / Logo Medallion */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-[2px] shadow-md shrink-0 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-[#071527] flex items-center justify-center border border-amber-300/30">
                <span className="font-arabic font-bold text-amber-300 text-2xl tracking-tighter leading-none select-none">
                  البصيرة
                </span>
              </div>
            </div>

            {/* Typography */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2.5">
                <h1 className="font-serif text-2xl md:text-3xl font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  Al-Basirah
                </h1>
                <span className="px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-amber-500/20 border border-amber-400/30 text-amber-300 rounded">
                  Bi-Annual
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-300 font-light tracking-wide mt-0.5">
                Department of Islamic Thought & Culture • NUML Islamabad
              </p>
            </div>
          </Link>

          {/* Quick Header CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/submissions"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wide shadow-sm hover:shadow transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Submit Paper</span>
            </Link>
          </div>

        </div>
      </div>

      {/* 3. Primary Navigation Bar */}
      <nav className={`bg-white border-b border-slate-200 transition-colors ${isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-11">
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 h-full">
              <NavLink to="/" exact={true}>Home</NavLink>

              {/* About Dropdown */}
              <div className="relative h-full" onMouseLeave={() => setActiveDropdown(null)}>
                <DropdownButton name="about" title="About" activePaths={['/about', '/editorial-board', '/contact']} />
                
                <div 
                  className={`absolute left-0 top-full w-60 bg-white rounded-b-lg shadow-xl border border-slate-200 border-t-2 border-t-amber-500 py-1.5 z-50 transition-all duration-200 origin-top ${
                    activeDropdown === 'about' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  {[
                    { to: "/about", label: "About the Journal" },
                    { to: "/editorial-board", label: "Editorial & Advisory Board" },
                    { to: "/about#history", label: "History of Al-Basirah" },
                    { to: "/about#vision", label: "Vision & Mission" },
                    { to: "/policies#privacy", label: "Privacy Statement" },
                    { to: "/contact", label: "Contact Us" }
                  ].map((item, index) => (
                    <Link 
                      key={index} 
                      to={item.to} 
                      className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-amber-50 hover:text-journal-navy transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink to="/aim-and-scope">Aim & Scope</NavLink>

              {/* Issues Dropdown */}
              <div className="relative h-full" onMouseLeave={() => setActiveDropdown(null)}>
                <DropdownButton name="issues" title="Issues" activePaths={['/issues']} />

                <div 
                  className={`absolute left-0 top-full w-56 bg-white rounded-b-lg shadow-xl border border-slate-200 border-t-2 border-t-amber-500 py-1.5 z-50 transition-all duration-200 origin-top ${
                    activeDropdown === 'issues' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <Link 
                    to="/issues#current" 
                    className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-amber-50 hover:text-journal-navy transition-colors"
                  >
                    Current Issue (Vol. 13 No. 1)
                  </Link>
                  <Link 
                    to="/issues" 
                    className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-amber-50 hover:text-journal-navy transition-colors"
                  >
                    Archives & Past Issues
                  </Link>
                </div>
              </div>


              <NavLink to="/indexed-in">Indexed In</NavLink>
              <NavLink to="/author-guidelines">Author Guidelines</NavLink>
              <NavLink to="/submissions">Submissions</NavLink>
              <NavLink to="/call-for-paper">Call for Papers</NavLink>

              {/* Policies Dropdown */}
              <div className="relative h-full" onMouseLeave={() => setActiveDropdown(null)}>
                <DropdownButton name="policies" title="Policies" activePaths={['/policies']} />

                <div 
                  className={`absolute right-0 top-full w-72 bg-white rounded-b-lg shadow-xl border border-slate-200 border-t-2 border-t-amber-500 py-1.5 z-50 max-h-96 overflow-y-auto transition-all duration-200 origin-top ${
                    activeDropdown === 'policies' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  {policiesList.map((pol) => (
                    <Link 
                      key={pol.id} 
                      to={`/policies#${pol.id}`} 
                      className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-amber-50 hover:text-journal-navy border-b border-slate-50 last:border-0 transition-colors"
                    >
                      {pol.title}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink to="/publication-ethics">Ethics</NavLink>
            </div>

            {/* Mobile Menu Toggle Header */}
            <div className="flex lg:hidden items-center justify-between w-full">
              <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">Menu</span>
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

        {/* Mobile Navigation Drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[700px] border-t border-slate-200 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-slate-50 px-4 py-3 space-y-1 text-sm font-medium">
            <div className="space-y-0.5 pb-2 border-b border-slate-200">
              <Link to="/" className="block px-3 py-2 rounded-md text-slate-800 hover:bg-amber-50 hover:text-journal-navy">Home</Link>
              <Link to="/about" className="block px-3 py-2 rounded-md text-slate-800 hover:bg-amber-50 hover:text-journal-navy">About the Journal</Link>
              <Link to="/editorial-board" className="block px-3 py-2 rounded-md text-slate-800 hover:bg-amber-50 hover:text-journal-navy">Editorial Board</Link>
              <Link to="/aim-and-scope" className="block px-3 py-2 rounded-md text-slate-800 hover:bg-amber-50 hover:text-journal-navy">Aim & Scope</Link>
            </div>
            <div className="space-y-0.5 py-2 border-b border-slate-200">
              <Link to="/issues" className="block px-3 py-2 rounded-md text-slate-800 hover:bg-amber-50 hover:text-journal-navy">Issues & Archives</Link>
              <Link to="/indexed-in" className="block px-3 py-2 rounded-md text-slate-800 hover:bg-amber-50 hover:text-journal-navy">Indexed In</Link>
              <Link to="/author-guidelines" className="block px-3 py-2 rounded-md text-slate-800 hover:bg-amber-50 hover:text-journal-navy">Author Guidelines</Link>
              <Link to="/submissions" className="block px-3 py-2 rounded-md text-slate-800 hover:bg-amber-50 hover:text-journal-navy">Submissions</Link>
            </div>
            <div className="space-y-0.5 pt-2">
              <Link to="/call-for-paper" className="block px-3 py-2 rounded-md text-slate-800 hover:bg-amber-50 hover:text-journal-navy">Call for Papers</Link>
              <Link to="/policies" className="block px-3 py-2 rounded-md text-slate-800 hover:bg-amber-50 hover:text-journal-navy">Policies</Link>
              <Link to="/publication-ethics" className="block px-3 py-2 rounded-md text-slate-800 hover:bg-amber-50 hover:text-journal-navy">Publication Ethics</Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md text-slate-800 hover:bg-amber-50 hover:text-journal-navy">Contact Us</Link>
            </div>
          </div>
        </div>

      </nav>

    </header>
  );
}
