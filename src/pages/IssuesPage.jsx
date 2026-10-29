import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { currentIssue, archivesList, publicationStats } from '../data/journalData';
import { Calendar, ArrowRight, ExternalLink, BookOpen, Archive } from 'lucide-react';

function ArchiveRow({ article, onSelectArticle }) {
  const isRTL = article.language === 'Urdu' || article.language === 'Arabic';
  return (
    <div className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-sm transition-all space-y-2">
      <div className="flex flex-wrap items-center gap-2 text-[11px]">
        <span className="px-2 py-0.5 rounded-full font-bold bg-slate-100 text-slate-700 border border-slate-200">
          {article.section}
        </span>
        {article.hecCategory && (
          <span className="px-2 py-0.5 rounded font-bold bg-amber-50 text-amber-800 border border-amber-200">
            HEC "{article.hecCategory}"
          </span>
        )}
        <span className="text-slate-500">
          {article.journal} • Vol. {article.volume}, No. {article.issue}
        </span>
      </div>

      <h4
        onClick={() => onSelectArticle?.(article)}
        className={`font-bold text-journal-navy hover:text-journal-primary cursor-pointer transition-colors ${
          isRTL ? 'font-urdu text-xl leading-[2] text-right' : 'font-serif text-base leading-snug'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {article.title}
      </h4>
      {isRTL && article.titleEnglish && (
        <p className="text-xs text-slate-500 italic">{article.titleEnglish}</p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
        <span className="text-slate-500">{article.authors.map(a => a.name).join(', ')}</span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => onSelectArticle?.(article)}
            className="px-2.5 py-1 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-medium flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5 text-slate-500" />
            <span>Details</span>
          </button>
          {article.url && (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-md bg-journal-navy hover:bg-journal-primary text-white font-bold flex items-center gap-1"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              <span>Read Paper</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function IssuesPage({ onSelectArticle }) {
  const oldest = archivesList[archivesList.length - 1]?.year;
  const newest = archivesList[0]?.year;

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

          <main className="lg:col-span-8 space-y-8">

            {/* Page header */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-5">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase">
                  <Archive className="w-3 h-3" />
                  Issues & Archives
                </span>
                <h1 className="font-serif text-3xl font-extrabold text-journal-navy mt-1">
                  Research Archive ({oldest} – {newest})
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  {publicationStats.total} research papers in {publicationStats.journals} HEC-recognized journals, arranged by year. Each paper links to the journal where it was originally published.
                </p>
              </div>

              {/* Current issue highlight */}
              <Link
                to="/current-issue"
                className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-[#0b2239] text-white border border-amber-500/30 hover:border-amber-400 transition-colors group"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    Current Issue
                  </span>
                  <p className="font-serif font-bold text-lg">{currentIssue.title}</p>
                  <p className="text-xs text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    {currentIssue.count} research papers
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 group-hover:bg-amber-400 text-slate-950 font-bold text-xs">
                  View Current Issue
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              {/* Jump to year */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-slate-500">Jump to year:</span>
                {archivesList.map(arc => (
                  <a
                    key={arc.year}
                    href={`#year-${arc.year}`}
                    className="px-3 py-1 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 border border-slate-200 font-bold transition-colors"
                  >
                    {arc.year} <span className="font-medium text-slate-400">({arc.count})</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Archive by year */}
            {archivesList.map(arc => (
              <section
                key={arc.year}
                id={`year-${arc.year}`}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-4 scroll-mt-28"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h2 className="font-serif text-2xl font-extrabold text-journal-navy flex items-center gap-2">
                    {arc.year}
                    {arc.year === currentIssue.year && (
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-900 rounded uppercase tracking-wider font-sans">
                        Current
                      </span>
                    )}
                  </h2>
                  <span className="text-xs font-bold text-slate-500">
                    {arc.count} {arc.count === 1 ? 'Paper' : 'Papers'}
                  </span>
                </div>
                <div className="space-y-3">
                  {arc.articles.map(article => (
                    <ArchiveRow key={article.id} article={article} onSelectArticle={onSelectArticle} />
                  ))}
                </div>
              </section>
            ))}

          </main>

          <div className="lg:col-span-4">
            <Sidebar />
          </div>

        </div>
      </div>
    </div>
  );
}
