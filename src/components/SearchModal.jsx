import React, { useState } from 'react';
import { Search, X, Filter, User } from 'lucide-react';
import { articles } from '../data/journalData';

export default function SearchModal({ isOpen, onClose, onSelectArticle }) {
  const [query, setQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  if (!isOpen) return null;

  const filteredArticles = articles.filter(art => {
    const matchesQuery = query === '' || 
      art.title.toLowerCase().includes(query.toLowerCase()) ||
      (art.titleEnglish && art.titleEnglish.toLowerCase().includes(query.toLowerCase())) ||
      art.abstract.toLowerCase().includes(query.toLowerCase()) ||
      art.authors.some(a => a.name.toLowerCase().includes(query.toLowerCase()));

    const matchesLang = selectedLanguage === 'All' || art.language === selectedLanguage;

    return matchesQuery && matchesLang;
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-start justify-center p-4 pt-16 overflow-y-auto animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 bg-[#0b2239] border-b border-slate-800 text-white flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, author name, keyword, or abstract..."
            className="w-full bg-slate-900/80 border border-slate-700 text-white placeholder-slate-400 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            autoFocus
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-slate-50 px-5 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500 font-medium">Filter:</span>
            {['All', 'English', 'Arabic', 'Urdu'].map(lang => (
              <button
                key={lang}
                type="button"
                onClick={() => setSelectedLanguage(lang)}
                className={`px-2.5 py-1 rounded-md transition-colors text-xs font-semibold ${
                  selectedLanguage === lang 
                    ? 'bg-journal-navy text-white shadow-xs' 
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <span className="text-slate-400 text-xs">{filteredArticles.length} results</span>
        </div>

        {/* Search Results List */}
        <div className="p-5 overflow-y-auto space-y-3 flex-1">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <Search className="w-10 h-10 mx-auto text-slate-300" />
              <p className="font-semibold text-sm text-slate-600">No research articles match your search criteria.</p>
              <p className="text-xs text-slate-400">Try keywords like "Emotional Intelligence", "حقوق", or "فقه".</p>
            </div>
          ) : (
            filteredArticles.map(article => (
              <div
                key={article.id}
                onClick={() => {
                  onSelectArticle(article);
                  onClose();
                }}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-400/80 hover:shadow-xs transition-all cursor-pointer space-y-1.5"
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-amber-700 uppercase tracking-wider text-[11px]">{article.section} Section</span>
                  <span className="text-slate-400 text-[11px]">pp. {article.pages}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm hover:text-journal-navy transition-colors">
                  {article.title}
                </h4>
                <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-0.5">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>{article.authors.map(a => a.name).join(', ')}</span>
                </p>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
