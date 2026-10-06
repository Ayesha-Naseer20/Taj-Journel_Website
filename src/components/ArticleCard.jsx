import React, { useState } from 'react';
import { 
  FileText, 
  Eye, 
  Download, 
  Share2, 
  BookOpen, 
  Quote, 
  Copy, 
  Check 
} from 'lucide-react';

/**
 * Helper to compute clean author initials.
 * Handles English, Arabic, and Urdu author names gracefully.
 */
function getAuthorInitials(name) {
  if (!name || typeof name !== 'string') return 'AU';
  
  const cleaned = name
    .replace(/^(Prof\.|Dr\.|Mr\.|Mrs\.|Ms\.|Eng\.|د\.|أ\.د\.|پروفیسر|ڈاکٹر)\s*/gi, '')
    .trim();
  
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return name.charAt(0).toUpperCase();
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

const SECTION_THEMES = {
  Arabic: {
    accentBorder: 'border-l-emerald-600',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    badgeBorder: 'border-emerald-200',
    dotColor: 'bg-emerald-500',
    titleHover: 'hover:text-emerald-700',
    avatarBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    tagBg: 'bg-emerald-50/70 text-emerald-800 border-emerald-200/70',
  },
  Urdu: {
    accentBorder: 'border-l-purple-600',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-800',
    badgeBorder: 'border-purple-200',
    dotColor: 'bg-purple-500',
    titleHover: 'hover:text-purple-700',
    avatarBg: 'bg-purple-100 text-purple-800 border-purple-200',
    tagBg: 'bg-purple-50/70 text-purple-800 border-purple-200/70',
  },
  English: {
    accentBorder: 'border-l-blue-600',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-800',
    badgeBorder: 'border-blue-200',
    dotColor: 'bg-blue-500',
    titleHover: 'hover:text-blue-700',
    avatarBg: 'bg-blue-100 text-blue-800 border-blue-200',
    tagBg: 'bg-blue-50/70 text-blue-800 border-blue-200/70',
  },
};

export default function ArticleCard({ article, onSelectArticle }) {
  const [doiCopied, setDoiCopied] = useState(false);
  const [shared, setShared] = useState(false);

  if (!article) return null;

  const isArabic = article.language === 'Arabic' || article.section === 'Arabic';
  const isUrdu = article.language === 'Urdu' || article.section === 'Urdu';
  const isRTL = isArabic || isUrdu;

  const sectionKey = article.section || article.language || 'English';
  const theme = SECTION_THEMES[sectionKey] || SECTION_THEMES.English;

  const handleCopyDoi = (e) => {
    e.stopPropagation();
    if (!article.doi) return;
    const doiUrl = article.doi.startsWith('http')
      ? article.doi
      : `https://doi.org/${article.doi}`;

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(doiUrl);
      setDoiCopied(true);
      setTimeout(() => setDoiCopied(false), 2000);
    }
  };

  const handleShare = (e) => {
    e.stopPropagation();
    const shareData = {
      title: article.title,
      text: `${article.title} - Al-Basirah Journal`,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(() => {});
    } else if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <article
      className={`bg-white rounded-xl border border-slate-200/90 border-l-4 ${theme.accentBorder} p-5 md:p-6 shadow-xs hover:shadow-academic-hover transition-all duration-200 flex flex-col justify-between`}
    >
      <div>
        {/* Top Header: Section badge, Page numbers, and Copyable DOI */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center flex-wrap gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide border ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${theme.dotColor} shrink-0`} />
              <span>{article.section || article.language} Section</span>
            </span>

            {article.pages && (
              <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                pp. {article.pages}
              </span>
            )}
          </div>

          {article.doi && (
            <button
              type="button"
              onClick={handleCopyDoi}
              title={doiCopied ? 'DOI copied!' : 'Copy DOI'}
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono text-slate-500 bg-slate-50 hover:bg-slate-100 hover:text-slate-800 border border-slate-200 transition-colors cursor-pointer"
            >
              <span className="font-semibold text-slate-400">DOI:</span>
              <span className="truncate max-w-[130px] sm:max-w-[160px]">
                {article.doi.includes('/') ? article.doi.split('/').pop() : article.doi}
              </span>
              {doiCopied ? (
                <Check className="w-3 h-3 text-emerald-600 shrink-0" />
              ) : (
                <Copy className="w-3 h-3 text-slate-400 shrink-0" />
              )}
            </button>
          )}
        </div>

        {/* Article Title */}
        <h3
          onClick={() => onSelectArticle?.(article)}
          className={`font-bold text-journal-navy ${theme.titleHover} transition-colors cursor-pointer mb-2.5 ${
            isArabic
              ? 'font-arabic text-2xl md:text-[26px] leading-[1.7] text-right'
              : isUrdu
              ? 'font-urdu text-2xl md:text-[26px] leading-[1.85] text-right'
              : 'font-serif text-lg md:text-xl leading-snug tracking-tight text-left'
          }`}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {article.title}
        </h3>

        {/* English Title Translation for Arabic / Urdu papers */}
        {isRTL && article.titleEnglish && (
          <div className="mb-3 text-left" dir="ltr">
            <p className="text-xs md:text-[13px] text-slate-500 italic font-sans leading-relaxed line-clamp-2">
              <span className="not-italic font-semibold text-slate-400 mr-1 text-[11px] uppercase tracking-wider">
                Translation:
              </span>
              "{article.titleEnglish}"
            </p>
          </div>
        )}

        {/* Authors List */}
        <div
          className={`flex flex-wrap items-center gap-2 mb-2 ${isRTL ? 'justify-end' : 'justify-start'}`}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {article.authors?.map((auth, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-1.5 py-0.5 px-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs"
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold uppercase shrink-0 border ${theme.avatarBg}`}
              >
                {getAuthorInitials(auth.name)}
              </span>
              <span className="font-semibold text-slate-800 text-xs">{auth.name}</span>
            </div>
          ))}
        </div>

        {/* Primary Author Affiliation */}
        {article.authors?.[0]?.affiliation && (
          <p
            className={`text-[11px] text-slate-400 mb-3 truncate ${isRTL ? 'text-right' : 'text-left'}`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {article.authors[0].affiliation}
          </p>
        )}

        {/* Keywords Chips */}
        {article.keywords && article.keywords.length > 0 && (
          <div
            className={`flex flex-wrap items-center gap-1.5 mb-3.5 ${isRTL ? 'justify-end' : 'justify-start'}`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {article.keywords.slice(0, 4).map((keyword, idx) => (
              <span
                key={idx}
                className={`text-[11px] px-2 py-0.5 rounded-md border font-medium ${theme.tagBg}`}
              >
                #{keyword}
              </span>
            ))}
          </div>
        )}

        {/* Abstract Preview */}
        {article.abstract && (
          <div
            onClick={() => onSelectArticle?.(article)}
            className="relative max-h-20 overflow-hidden mb-4 cursor-pointer"
            title="Click to view full abstract"
          >
            <p
              className={`text-xs md:text-sm text-slate-600 line-clamp-3 leading-relaxed ${
                isArabic
                  ? 'font-arabic text-right text-base leading-relaxed'
                  : isUrdu
                  ? 'font-urdu text-right text-base leading-relaxed'
                  : 'text-left'
              }`}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {article.abstract}
            </p>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent" />
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-slate-100 text-xs mt-auto">
        
        {/* Engagement Metrics */}
        <div className="flex items-center gap-3 text-slate-400">
          <span className="flex items-center gap-1 font-medium text-xs">
            <Eye className="w-3.5 h-3.5 text-slate-400" />
            <span>{article.views?.toLocaleString?.() || article.views || 0}</span>
          </span>
          <span className="flex items-center gap-1 font-medium text-xs">
            <Download className="w-3.5 h-3.5 text-slate-400" />
            <span>{article.downloads?.toLocaleString?.() || article.downloads || 0}</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => onSelectArticle?.(article)}
            className="px-2.5 py-1.5 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-medium text-xs transition-colors flex items-center gap-1"
          >
            <Quote className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Cite</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectArticle?.(article)}
            className="px-2.5 py-1.5 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-medium text-xs transition-colors flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5 text-slate-500" />
            <span>Abstract</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className={`p-1.5 rounded-md border transition-colors flex items-center justify-center ${
              shared
                ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
            }`}
            title={shared ? 'Link copied!' : 'Share article'}
          >
            {shared ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
          </button>

          <button
            type="button"
            onClick={() => onSelectArticle?.(article)}
            className="px-3 py-1.5 rounded-md bg-journal-navy hover:bg-journal-primary text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>PDF</span>
          </button>
        </div>

      </div>
    </article>
  );
}
