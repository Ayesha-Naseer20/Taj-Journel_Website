import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';
import { journalDetails, currentIssue } from '../data/journalData';

export default function HeroBanner() {
  return (
    <div className="relative bg-[#071527] text-white py-14 lg:py-20 border-b border-amber-500/20 islamic-pattern-dark overflow-hidden">
      
      {/* Subtle Ambient Light Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Information (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-300 text-xs font-medium shadow-xs">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>HEC Recognized Journal • Category 'Y'</span>
              <span className="w-1 h-1 rounded-full bg-amber-400/60"></span>
              <span className="text-slate-200">DOAJ & Crossref Indexed</span>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 block">
                Bi-Annual International Research Journal
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                AL-BASIRAH <span className="font-arabic font-normal text-amber-400 text-4xl sm:text-5xl lg:text-6xl inline-block ml-1">البصيرة</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              Published by the <strong className="text-white font-medium">Department of Islamic Thought and Culture</strong>, 
              National University of Modern Languages (NUML), Islamabad. Dedicated to advancing high-impact peer-reviewed 
              research in Islamic jurisprudence, contemporary thought, comparative religion, and socio-ethical studies in English, Arabic, and Urdu.
            </p>

            {/* Metrics Row (4 Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 shadow-xs">
                <span className="block text-[11px] text-slate-400 uppercase tracking-wider font-medium mb-0.5">Frequency</span>
                <span className="text-xs sm:text-sm font-bold text-amber-300">Bi-Annual</span>
              </div>
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 shadow-xs">
                <span className="block text-[11px] text-slate-400 uppercase tracking-wider font-medium mb-0.5">Online ISSN</span>
                <span className="text-xs sm:text-sm font-bold text-slate-100 font-mono">{journalDetails.issnOnline}</span>
              </div>
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 shadow-xs">
                <span className="block text-[11px] text-slate-400 uppercase tracking-wider font-medium mb-0.5">Print ISSN</span>
                <span className="text-xs sm:text-sm font-bold text-slate-100 font-mono">{journalDetails.issnPrint}</span>
              </div>
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 shadow-xs">
                <span className="block text-[11px] text-slate-400 uppercase tracking-wider font-medium mb-0.5">Peer Review</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400">Double-Blind</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/submissions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-colors group"
              >
                <FileText className="w-4 h-4" />
                <span>Submit Manuscript Online</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/issues"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-colors"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Browse Current Issue</span>
              </Link>
            </div>

          </div>

          {/* Current Issue Cover Card Highlight (4 cols) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-xs bg-slate-900/90 border border-slate-800/90 rounded-2xl p-5 shadow-2xl relative group">
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  Latest Issue
                </span>
                <span className="text-[11px] text-slate-400 font-medium px-2 py-0.5 bg-slate-800 rounded">
                  {currentIssue.period}
                </span>
              </div>

              {/* Cover Image */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-lg border border-slate-800 bg-slate-950 mb-4 group-hover:border-amber-500/40 transition-colors">
                <img 
                  src={currentIssue.coverImage} 
                  alt="Al-Basirah Vol 13 Cover" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <span className="inline-block px-2 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase tracking-wider mb-1.5">
                    Vol 13 • No 1
                  </span>
                  <p className="text-xs font-semibold leading-tight text-white/95">
                    Al-Basirah Vol. 13, Issue 1 (2024)
                  </p>
                  <p className="text-[11px] text-amber-200/80 mt-0.5">
                    Published: {currentIssue.publishedDate}
                  </p>
                </div>
              </div>

              <Link 
                to="/issues#current"
                className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-500/40 text-amber-300 font-semibold text-xs text-center block transition-colors"
              >
                View Table of Contents (8 Articles)
              </Link>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
