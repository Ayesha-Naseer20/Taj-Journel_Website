import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ArticleCard from '../components/ArticleCard';
import { articles, currentIssue, archivesList } from '../data/journalData';
import { BookOpen, Calendar, Download, FileText, ChevronRight } from 'lucide-react';

export default function IssuesPage({ onSelectArticle }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-journal-navy">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Issues & Archives</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Issues Column (8 cols) */}
          <main className="lg:col-span-8 space-y-10">
            
            {/* Current Issue Container */}
            <div id="current" className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="px-2.5 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase">
                  Latest Issue
                </span>
                <h1 className="font-serif text-3xl font-extrabold text-journal-navy mt-1">
                  Vol. 13 No. 1 (2024): Al Basirah Vol 13, Issue 1
                </h1>
                <p className="text-xs text-slate-500 flex items-center gap-2 mt-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  <span>Published Date: {currentIssue.publishedDate} (January to June 2024)</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                {currentIssue.description}
              </p>

              {/* Table of Contents */}
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-xl text-journal-navy border-b border-slate-200 pb-2">
                  Table of Contents
                </h3>

                <div className="space-y-4">
                  {articles.map(article => (
                    <ArticleCard key={article.id} article={article} onSelectArticle={onSelectArticle} />
                  ))}
                </div>
              </div>

            </div>


            {/* Archives Section */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="font-serif text-2xl font-extrabold text-journal-navy">
                  Archives & Past Volumes (2012 - 2023)
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Browse previous bi-annual volumes and full text PDF archives of Al-Basirah journal.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {archivesList.map((arc, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-900 rounded uppercase">
                        Vol {arc.volume} • Issue {arc.issue}
                      </span>
                      <span className="text-xs font-bold text-slate-500">{arc.year}</span>
                    </div>

                    <h4 className="font-serif font-bold text-base text-slate-900">
                      Al-Basirah Vol. {arc.volume} No. {arc.issue} ({arc.period})
                    </h4>
                    
                    <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-200">
                      <span className="text-slate-500">{arc.count} Research Papers</span>
                      <a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); alert(`Downloading Issue Vol. ${arc.volume} No. ${arc.issue} archive...`); }}
                        className="text-journal-primary font-bold hover:underline flex items-center gap-1"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Full Issue</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </main>

          {/* Right Sidebar */}
          <div className="lg:col-span-4">
            <Sidebar />
          </div>

        </div>

      </div>
    </div>
  );
}
