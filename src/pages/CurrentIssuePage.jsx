import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ArticleCard from '../components/ArticleCard';
import { currentIssue, currentArticles } from '../data/journalData';
import { Calendar, ArrowRight } from 'lucide-react';

const SECTIONS = [
  { key: 'English', label: 'English Section', dot: 'bg-blue-600', text: 'text-blue-950', border: 'border-blue-100' },
  { key: 'Urdu', label: 'Urdu Section / شعبہ اردو', dot: 'bg-purple-600', text: 'text-purple-950', border: 'border-purple-100' },
  { key: 'Arabic', label: 'Arabic Section / قسم اللغة العربية', dot: 'bg-emerald-600', text: 'text-emerald-950', border: 'border-emerald-100' },
];

export default function CurrentIssuePage({ onSelectArticle }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-journal-navy">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Current Issue</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          <main className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-6">

              <div className="border-b border-slate-100 pb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-950/60 animate-pulse" />
                  Current Issue
                </span>
                <h1 className="font-serif text-3xl font-extrabold text-journal-navy mt-1">
                  {currentIssue.title}
                </h1>
                <p className="text-xs text-slate-500 flex items-center gap-2 mt-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  <span>{currentIssue.count} research papers • {currentIssue.year}</span>
                </p>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                {currentIssue.description}
              </p>

              {/* Table of Contents, grouped by language section */}
              <div className="space-y-8">
                <h3 className="font-serif font-bold text-xl text-journal-navy border-b border-slate-200 pb-2">
                  Table of Contents
                </h3>

                {SECTIONS.map(sec => {
                  const list = currentArticles.filter(a => a.section === sec.key);
                  if (list.length === 0) return null;
                  return (
                    <div key={sec.key} className="space-y-4">
                      <div className={`flex items-center justify-between py-2 border-b ${sec.border}`}>
                        <h4 className={`font-serif font-bold text-lg ${sec.text} flex items-center gap-2`}>
                          <span className={`w-2.5 h-2.5 rounded-full ${sec.dot}`} />
                          {sec.label}
                        </h4>
                        <span className="text-xs font-bold text-slate-600 bg-slate-50 px-2.5 py-0.5 rounded border border-slate-200">
                          {list.length} {list.length === 1 ? 'Paper' : 'Papers'}
                        </span>
                      </div>
                      {list.map(article => (
                        <ArticleCard key={article.id} article={article} onSelectArticle={onSelectArticle} />
                      ))}
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-slate-100 flex justify-center">
                <Link
                  to="/issues"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-journal-navy hover:bg-journal-primary text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
                >
                  <span>Browse Issues & Archives</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </main>

          <div className="lg:col-span-4">
            <Sidebar />
          </div>

        </div>
      </div>
    </div>
  );
}
