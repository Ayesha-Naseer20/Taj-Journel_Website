import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import Sidebar from '../components/Sidebar';
import ArticleCard from '../components/ArticleCard';
import { articles, currentIssue, journalDetails } from '../data/journalData';
import { BookOpen, Calendar, ArrowRight, FileText, Download, Globe, Users, Megaphone } from 'lucide-react';

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

  const arabicArticles = articles.filter(a => a.section === 'Arabic');
  const englishArticles = articles.filter(a => a.section === 'English');
  const urduArticles = articles.filter(a => a.section === 'Urdu');

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
                Call for Papers: Vol. 14 No. 1 (2025) is now accepting submissions.
              </span>
              <span className="text-slate-600">•</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                Deadline for next issue: October 30, 2024.
              </span>
              <span className="text-slate-600">•</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                Al-Basirah is indexed in DOAJ, Crossref, and HEC Category 'Y'.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Layout Grid */}
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Main Content Column (8 cols) */}
          <main className="lg:col-span-8 space-y-10">
            
            {/* About the Journal Section */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-sm relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-journal-navy shrink-0">
                    <BookOpen className="w-6 h-6 text-journal-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-journal-navy tracking-tight">
                      About the Journal
                    </h2>
                    <p className="text-xs text-journal-primary font-bold uppercase tracking-widest mt-0.5">
                      Al-Basirah Bi-Annual International Research Journal
                    </p>
                  </div>
                </div>

                {/* Editorial Pull Quote */}
                <div className="border-l-4 border-amber-500 pl-5 py-2 bg-amber-50/40 rounded-r-lg">
                  <p className="text-base sm:text-lg font-serif text-slate-800 italic leading-relaxed">
                    "Advancing Islamic scholarship through rigorous research, multilingual dialogue, and contemporary academic excellence."
                  </p>
                </div>

                {/* Body Text */}
                <div className="text-sm text-slate-700 leading-relaxed space-y-4 font-sans">
                  <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-journal-navy first-letter:float-left first-letter:mr-3 first-letter:mt-1 clear-both">
                    <strong className="text-journal-navy">Al-Basirah</strong> is a bi-annual research journal published by the Department of Islamic Thought and Culture, National University of Modern Languages (NUML), Islamabad. 
                    (Online ISSN: <strong className="text-slate-900 font-mono text-xs">{journalDetails.issnOnline}</strong>, Print ISSN: <strong className="text-slate-900 font-mono text-xs">{journalDetails.issnPrint}</strong>). 
                    First published in June 2012, it is accredited by the Higher Education Commission (HEC) of Pakistan in the <strong>Category 'Y'</strong> and indexed globally in DOAJ.
                  </p>
                  <p>
                    The journal provides an open-access forum for scholars, researchers, and domain experts to publish original research in <strong className="text-journal-navy">English, Arabic, and Urdu</strong>. It covers Islamic jurisprudence, contemporary socio-legal issues, comparative religions, hermeneutics, and ethical philosophy, adhering to double-blind peer review standards.
                  </p>
                </div>

                {/* Badges Row */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  <span className="px-3 py-1 bg-slate-50 text-slate-700 rounded-full text-xs font-semibold border border-slate-200">
                    Bi-Annual (June & Dec)
                  </span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-semibold border border-amber-200">
                    HEC Category 'Y'
                  </span>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold border border-emerald-200">
                    DOAJ & Crossref
                  </span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-800 rounded-full text-xs font-semibold border border-purple-200">
                    Multi-lingual (EN / AR / UR)
                  </span>
                </div>

              </div>
            </section>

            {/* Quick Stats Row */}
            <section className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <StatCounter icon={FileText} value="450" label="Articles" delay="0.1s" />
              <StatCounter icon={Download} value="12" suffix="k+" label="Downloads" delay="0.2s" />
              <StatCounter icon={Globe} value="45" label="Countries" delay="0.3s" />
              <StatCounter icon={Users} value="120" label="Reviewers" delay="0.4s" />
            </section>

            {/* Current Issue Showcase */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-sm space-y-8">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-slate-100 pb-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-100 text-amber-900 rounded-full mb-2 text-xs font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    Current Issue
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-journal-navy">
                    Vol. 13 No. 1 (2024)
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 flex items-center gap-1.5 mt-1">
                    <Calendar className="w-4 h-4 text-journal-primary" />
                    <span>Published: {currentIssue.publishedDate} (January - June 2024)</span>
                  </p>
                </div>
              </div>

              {/* Section Filter Pills */}
              <div className="flex items-center justify-center sm:justify-start">
                <div className="inline-flex p-1 bg-slate-100 rounded-lg border border-slate-200/80 gap-1 text-xs font-semibold">
                  {['All', 'Arabic', 'English', 'Urdu'].map(tab => (
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
                {(selectedTab === 'All' || selectedTab === 'Arabic') && (
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
                {(selectedTab === 'All' || selectedTab === 'English') && (
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
                {(selectedTab === 'All' || selectedTab === 'Urdu') && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-purple-100">
                      <h3 className="font-serif font-bold text-lg text-purple-950 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                        Urdu Section / شعبہ اردو
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
                  <span>View All Past Issues & Archives</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </section>

          </main>

          {/* Right Sidebar Column (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-16">
              <Sidebar />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
