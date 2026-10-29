import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import Sidebar from '../components/Sidebar';
import ArticleCard from '../components/ArticleCard';
import { currentArticles, currentIssue, journalDetails, publicationStats } from '../data/journalData';
import { 
  BookOpen, Calendar, ArrowRight, FileText, Download, Globe, 
  Users, Megaphone, ShieldCheck, Target, Brain, Layers, 
  CheckCircle2, Award, Sparkles, Scale 
} from 'lucide-react';

const StatCounter = ({ icon: Icon, value, label, suffix = "+", delay = "0s" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (isNaN(end) || start === end) return;
    
    const totalMilSecDur = 1600;
    const incrementTime = Math.max(16, (totalMilSecDur / end) * 2);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 20);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div 
      className="flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-xs border border-slate-200/90 transition-all hover:shadow-md hover:border-slate-300"
      style={{ animationDelay: delay }}
    >
      <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-journal-primary mb-3">
        <Icon className="w-5 h-5" />
      </div>
      <h4 className="text-2xl sm:text-3xl font-extrabold text-journal-navy mb-0.5 flex items-center tracking-tight">
        {count}
        <span className="text-journal-accent ml-0.5">{suffix}</span>
      </h4>
      <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider text-center">{label}</p>
    </div>
  );
};

export default function HomePage({ onSelectArticle }) {
  const [selectedTab, setSelectedTab] = useState('All');

  const arabicArticles = currentArticles.filter(a => a.section === 'Arabic');
  const englishArticles = currentArticles.filter(a => a.section === 'English');
  const urduArticles = currentArticles.filter(a => a.section === 'Urdu');
  const sectionTabs = ['All', ...['Arabic', 'English', 'Urdu'].filter(sec => currentArticles.some(a => a.section === sec))];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      
      {/* 1. Hero Banner */}
      <HeroBanner />

      {/* 2. Announcement Ticker Bar */}
      <div className="bg-[#0b2239] text-white py-2 overflow-hidden border-y border-amber-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 flex items-center">
          <div className="flex items-center gap-2 pr-4 border-r border-slate-700 bg-[#0b2239] z-10 shrink-0">
            <Megaphone className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">Announcements</span>
          </div>
          
          <div className="flex-1 overflow-hidden relative pl-4">
            <div className="flex items-center text-xs text-slate-300 gap-8 whitespace-nowrap overflow-x-auto scrollbar-none py-0.5">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                Call for Papers: submissions are open for the upcoming issue of TJRP.
              </span>
              <span className="text-slate-600">•</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                Deadline for next issue: October 30, 2024.
              </span>
              <span className="text-slate-600">•</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                Published by Taj Islamic Research Center (TIRC).
              </span>
              <span className="text-slate-600">•</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                Double-blind peer-reviewed & open-access under CC BY 4.0 license.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Official Logos & Institutional Trust Bar */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-6 md:gap-8">
            
            {/* Publisher: Taj Islamic Research Center */}
            <div className="flex items-center gap-3">
              <img 
                src="/images/tirc-logo.jpg" 
                alt="Taj Islamic Research Center Logo" 
                className="w-12 h-12 rounded-full object-cover border border-amber-400/40 shadow-xs"
              />
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Published By</span>
                <p className="font-serif font-extrabold text-sm sm:text-base text-journal-navy leading-tight">
                  Taj Islamic Research Center
                </p>
                <span className="text-[11px] text-amber-700 font-medium">TIRC • Gujranwala</span>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

            {/* HEC Accreditation */}
            <div className="flex items-center gap-3">
              <img 
                src="/images/hec-logo.png" 
                alt="HEC Logo" 
                className="h-11 w-auto object-contain"
              />
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Accreditation</span>
                <p className="font-serif font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                  HEC Recognition
                </p>
                <span className="text-[11px] font-semibold text-amber-700">In Process</span>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-200 hidden md:block"></div>

            {/* DOAJ Indexing */}
            <div className="flex items-center gap-3">
              <img 
                src="/images/doaj-logo.png" 
                alt="DOAJ Logo" 
                className="h-9 w-auto object-contain"
              />
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Indexing</span>
                <p className="font-serif font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                  DOAJ Indexing
                </p>
                <span className="text-[11px] font-semibold text-amber-700">In Process</span>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-200 hidden lg:block"></div>

            {/* Crossref & COPE Standards */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                <Globe className="w-5 h-5 text-journal-primary" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Standards</span>
                <p className="font-serif font-bold text-xs text-slate-900 leading-tight">
                  Crossref & COPE
                </p>
                <span className="text-[11px] font-semibold text-slate-600">DOI & Research Integrity</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 4. Welcome & Community Showcase (Featuring Welcome Workshop Image) */}
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-academic overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Image Column (7 cols) */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <img 
                  src="/images/welcome-workshop.jpg" 
                  alt="Scholars and Editorial Workshop at Taj Islamic Research Center" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase tracking-wider">
                    Editorial Community
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-100 mt-1">
                    Scholars, Editorial Board & Workshop Attendees at Taj Islamic Research Center (TIRC)
                  </p>
                </div>
              </div>
            </div>

            {/* Text Welcome Column (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-4">
              <span className="px-2.5 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-900 rounded-full uppercase tracking-wider">
                Welcome Message
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-journal-navy leading-tight">
                Advancing Scholarly Dialogue on Religion & Psychology
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Welcome to the <strong className="text-journal-navy">Taj Journal of Religion and Psychology (TJRP)</strong>, published by the <strong className="text-journal-navy">Taj Islamic Research Center (TIRC)</strong>. We bring together scholars, researchers, and intellectuals to examine the profound connections between religious thought, psychological sciences, and human flourishing.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-journal-navy text-white text-xs font-bold hover:bg-journal-primary transition-colors"
                >
                  <span>Learn About TJRP</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/submissions"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 transition-colors shadow-xs"
                >
                  <span>Submit Manuscript</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 5. Main Layout Grid */}
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Main Content Column (8 cols) */}
          <main className="lg:col-span-8 space-y-10">
            
            {/* ─── ABOUT THE JOURNAL SECTION ─── */}
            <section className="bg-white rounded-2xl p-4 sm:p-8 md:p-10 border border-slate-200/90 shadow-academic space-y-8">
              <div className="space-y-6">
                
                {/* Section Header */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-journal-navy shrink-0 shadow-xs">
                    <BookOpen className="w-6 h-6 text-journal-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-journal-navy tracking-tight">
                      About the Journal
                    </h2>
                    <p className="text-xs text-journal-primary font-bold uppercase tracking-widest mt-0.5">
                      Taj Journal of Religion and Psychology (TJRP)
                    </p>
                  </div>
                </div>

                {/* Editorial Pull Quote */}
                <div className="border-l-4 border-amber-500 pl-5 py-3 bg-amber-50/50 rounded-r-lg">
                  <p className="text-base sm:text-lg font-serif text-slate-800 italic leading-relaxed">
                    "Advancing Scholarship at the Intersection of Religion, Psychology, and Human Well-being"
                  </p>
                  <span className="text-xs text-amber-900 font-semibold mt-1 block">
                    Published by Taj Islamic Research Center (TIRC) • An International, Peer-Reviewed, Multidisciplinary Research Journal
                  </span>
                </div>

                {/* Body Text */}
                <div className="text-sm text-slate-700 leading-relaxed space-y-4 font-sans">
                  <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-journal-navy first-letter:float-left first-letter:mr-3 first-letter:mt-1 clear-both">
                    <strong className="text-journal-navy">Taj Journal of Religion and Psychology (TJRP)</strong> is an international, peer-reviewed, multidisciplinary research journal dedicated to advancing scholarly inquiry into Religion, Islamic Studies, Psychology, and their interdisciplinary connections.
                  </p>
                  <p>
                    TJRP provides a global platform for researchers to explore the ways in which religious beliefs, spirituality, psychological processes, human behavior, ethics, identity, culture, and contemporary social realities shape individual and collective human experience.
                  </p>
                  <p>
                    The journal welcomes rigorous theoretical, empirical, conceptual, qualitative, quantitative, comparative, historical, and interdisciplinary research from scholars across diverse academic and intellectual traditions.
                  </p>
                </div>

                {/* ─── OUR CORE AREAS ─── */}
                <div className="pt-2 space-y-4">
                  <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
                    <h3 className="font-serif font-bold text-xl text-journal-navy flex items-center gap-2">
                      <Target className="w-5 h-5 text-amber-500" />
                      <span>Our Core Areas</span>
                    </h3>
                    <span className="text-xs text-slate-400 font-medium">3 Specialized Fields</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    
                    {/* Area 1: Religion & Islamic Studies */}
                    <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/90 space-y-2 hover:shadow-sm transition-all">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white uppercase">Section A</span>
                        <BookOpen className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h4 className="font-serif font-bold text-slate-900 text-sm">Religion & Islamic Studies</h4>
                      <p className="text-slate-600 leading-relaxed font-sans">
                        Research in Religious Studies, Comparative Religion, Qur’anic and Hadith Studies, Seerah, Islamic History and Civilization, Islamic Thought, Philosophy, Jurisprudence, Ethics, and contemporary religious issues.
                      </p>
                    </div>

                    {/* Area 2: Psychology */}
                    <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/90 space-y-2 hover:shadow-sm transition-all">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white uppercase">Section B</span>
                        <Brain className="w-4 h-4 text-blue-600" />
                      </div>
                      <h4 className="font-serif font-bold text-slate-900 text-sm">Psychology</h4>
                      <p className="text-slate-600 leading-relaxed font-sans">
                        Research in General and Applied Psychology, Social and Behavioral Psychology, Cognitive and Developmental Psychology, Clinical and Counseling Psychology, Health Psychology, Positive Psychology, and Psychological Well-being.
                      </p>
                    </div>

                    {/* Area 3: Interdisciplinary */}
                    <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200/90 space-y-2 hover:shadow-sm transition-all">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-600 text-white uppercase">Section C</span>
                        <Layers className="w-4 h-4 text-purple-600" />
                      </div>
                      <h4 className="font-serif font-bold text-slate-900 text-sm">Interdisciplinary Studies</h4>
                      <p className="text-slate-600 leading-relaxed font-sans">
                        Research exploring the relationship between religion, spirituality, psychological well-being, religious coping, resilience, mental health, human behavior, psychological development, and contemporary society.
                      </p>
                    </div>

                  </div>
                </div>

                {/* ─── OUR MISSION ─── */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span className="font-bold text-journal-navy uppercase tracking-wider text-xs">Our Mission</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    TJRP seeks to foster rigorous, ethical, innovative, and interdisciplinary scholarship that contributes to a deeper understanding of religion and psychology and their significance for human well-being and society.
                  </p>
                </div>

                {/* ─── EXPLORE TJRP ─── */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-serif font-bold text-lg text-journal-navy border-b border-slate-100 pb-2">
                    Explore TJRP
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    
                    {/* Discover Research */}
                    <Link 
                      to="/issues" 
                      className="group p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-amber-50/50 hover:border-amber-300 transition-all space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-900 group-hover:text-journal-navy text-sm">Discover Research</h4>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-slate-500 leading-relaxed">
                        Explore scholarly contributions addressing religion, psychology, human behavior, spirituality, well-being, and contemporary challenges.
                      </p>
                    </Link>

                    {/* Submit Your Research */}
                    <Link 
                      to="/submissions" 
                      className="group p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-amber-50/50 hover:border-amber-300 transition-all space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-900 group-hover:text-journal-navy text-sm">Submit Your Research</h4>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-slate-500 leading-relaxed">
                        TJRP welcomes original scholarly contributions from researchers and academics worldwide.
                      </p>
                    </Link>

                    {/* Meet Our Editorial Team */}
                    <Link 
                      to="/editorial-board" 
                      className="group p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-amber-50/50 hover:border-amber-300 transition-all space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-900 group-hover:text-journal-navy text-sm">Meet Our Editorial Team</h4>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-slate-500 leading-relaxed">
                        Learn about the scholars and researchers contributing to the academic direction and quality of TJRP.
                      </p>
                    </Link>

                    {/* Read Our Policies */}
                    <Link 
                      to="/policies" 
                      className="group p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-amber-50/50 hover:border-amber-300 transition-all space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-900 group-hover:text-journal-navy text-sm">Read Our Policies</h4>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-slate-500 leading-relaxed">
                        Explore our peer-review, publication ethics, research integrity, and editorial policies.
                      </p>
                    </Link>

                  </div>
                </div>

              </div>
            </section>

            {/* ─── POLICIES & ETHICAL STANDARDS HIGHLIGHT BANNER ─── */}
            <section className="bg-gradient-to-r from-slate-900 via-journal-navy to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-amber-500/20 shadow-lg space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">Publishing Standards</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">16 Comprehensive Journal Policies</h3>
                </div>
                <Link
                  to="/policies"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors shrink-0 shadow-xs"
                >
                  Explore All 16 Policies &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <strong className="text-amber-300 block mb-1">Double-Blind Review</strong>
                  <p className="text-[11px] text-slate-300">Independent expert peer review for all manuscripts.</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <strong className="text-emerald-300 block mb-1">Anti-Plagiarism</strong>
                  <p className="text-[11px] text-slate-300">Strict Turnitin screening with zero tolerance for misconduct.</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <strong className="text-blue-300 block mb-1">AI Usage Disclosure</strong>
                  <p className="text-[11px] text-slate-300">Mandatory AI disclosure; AI prohibited from authorship.</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <strong className="text-purple-300 block mb-1">CC BY 4.0 Open Access</strong>
                  <p className="text-[11px] text-slate-300">Unrestricted digital access with full author credit.</p>
                </div>
              </div>
            </section>

            {/* ─── QUICK STATS ROW ─── */}
            <section className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <StatCounter icon={FileText} value={publicationStats.total} suffix="" label="Research Papers" delay="0.1s" />
              <StatCounter icon={Award} value={publicationStats.hecY} suffix="" label='HEC "Y" Category' delay="0.2s" />
              <StatCounter icon={BookOpen} value={publicationStats.journals} suffix="" label="Journals" delay="0.3s" />
              <StatCounter icon={Calendar} value={publicationStats.years} suffix="" label="Years of Research" delay="0.4s" />
            </section>

            {/* ─── CURRENT ISSUE SHOWCASE ─── */}
            <section className="bg-white rounded-2xl p-4 sm:p-8 md:p-10 border border-slate-200/90 shadow-academic space-y-8">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-slate-100 pb-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-100 text-amber-900 rounded-full mb-2 text-xs font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    Current Issue
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-journal-navy">
                    {currentIssue.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 flex items-center gap-1.5 mt-1">
                    <Calendar className="w-4 h-4 text-journal-primary" />
                    <span>{currentIssue.count} research papers published in HEC-recognized journals in {currentIssue.year}</span>
                  </p>
                </div>
              </div>

              {/* Section Filter Pills */}
              <div className="flex items-center justify-center sm:justify-start">
                <div className="inline-flex p-1 bg-slate-100 rounded-lg border border-slate-200/80 gap-1 text-xs font-semibold">
                  {sectionTabs.map(tab => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setSelectedTab(tab)}
                      className={`px-4 py-1.5 rounded-md transition-colors ${
                        selectedTab === tab
                          ? 'bg-journal-navy text-white font-bold shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      }`}
                    >
                      {tab === 'All' ? 'All Sections' : `${tab} Section`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categorized Articles Display */}
              <div className="space-y-8 pt-2">
                
                {/* Arabic Section */}
                {arabicArticles.length > 0 && (selectedTab === 'All' || selectedTab === 'Arabic') && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-emerald-100">
                      <h3 className="font-serif font-bold text-lg text-emerald-950 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                        Arabic Section / قسم اللغة العربية
                      </h3>
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                        {arabicArticles.length} Papers
                      </span>
                    </div>
                    <div className="space-y-4">
                      {arabicArticles.map(article => (
                        <ArticleCard key={article.id} article={article} onSelectArticle={onSelectArticle} />
                      ))}
                    </div>
                  </div>
                )}

                {/* English Section */}
                {englishArticles.length > 0 && (selectedTab === 'All' || selectedTab === 'English') && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-blue-100">
                      <h3 className="font-serif font-bold text-lg text-blue-950 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                        English Section
                      </h3>
                      <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                        {englishArticles.length} Papers
                      </span>
                    </div>
                    <div className="space-y-4">
                      {englishArticles.map(article => (
                        <ArticleCard key={article.id} article={article} onSelectArticle={onSelectArticle} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Urdu Section */}
                {urduArticles.length > 0 && (selectedTab === 'All' || selectedTab === 'Urdu') && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-purple-100">
                      <h3 className="font-serif font-bold text-lg text-purple-950 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                        <span>Urdu Section / </span>
                        <span className="font-urdu text-xl text-purple-900 leading-none">شعبہ اردو</span>
                      </h3>
                      <span className="text-xs font-bold text-purple-800 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">
                        {urduArticles.length} Papers
                      </span>
                    </div>
                    <div className="space-y-4">
                      {urduArticles.map(article => (
                        <ArticleCard key={article.id} article={article} onSelectArticle={onSelectArticle} />
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* View Past Issues CTA */}
              <div className="pt-6 border-t border-slate-100 flex justify-center">
                <Link
                  to="/issues"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-journal-navy hover:bg-journal-primary text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
                >
                  <span>View All Issues & Archives</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </section>

          </main>

          {/* Right Sidebar Column (4 cols) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <Sidebar />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
