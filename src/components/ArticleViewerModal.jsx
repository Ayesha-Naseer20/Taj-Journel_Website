import React, { useState, useEffect } from 'react';
import { X, FileText, Copy, Check, Quote, ExternalLink, Library } from 'lucide-react';
import { leadAuthor } from '../data/journalData';

export default function ArticleViewerModal({ article, onClose }) {
  const [activeTab, setActiveTab] = useState('details'); // 'details' | 'cite'
  const [copiedCitation, setCopiedCitation] = useState(false);
  const [citationFormat, setCitationFormat] = useState('apa');

  // Open the tab the card asked for (the "Cite" button opens the citation tab)
  useEffect(() => {
    if (article) setActiveTab(article._openTab === 'cite' ? 'cite' : 'details');
  }, [article]);

  if (!article) return null;

  const isArabic = article.language === 'Arabic';
  const isUrdu = article.language === 'Urdu';
  const isRTL = isArabic || isUrdu;

  // Non-English papers are cited with the English translation in brackets
  const citeTitle = isRTL && article.titleEnglish
    ? `${article.title} [${article.titleEnglish}]`
    : article.title;

  const volIssue = `${article.volume ?? ''}${article.issue != null ? `(${article.issue})` : ''}`;
  const authorNames = article.authors.map(a => a.name);

  const apaCitation = `${leadAuthor.citeName} (${article.year}). ${citeTitle}. ${article.journal}, ${volIssue}.${article.url ? ` ${article.url}` : ''}`;
  const mlaCitation = `${leadAuthor.citeNameFull}. "${citeTitle}." ${article.journal}, vol. ${article.volume}, no. ${article.issue}, ${article.year}.`;
  const bibtexCitation = `@article{${article.id.replace(/-/g, '_')},\n  title={${citeTitle}},\n  author={${authorNames.join(' and ')}},\n  journal={${article.journal}},\n  volume={${article.volume}},\n  number={${article.issue}},\n  year={${article.year}},\n  url={${article.url || ''}}\n}`;

  const currentCitationText = citationFormat === 'apa' ? apaCitation : citationFormat === 'mla' ? mlaCitation : bibtexCitation;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(currentCitationText);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2200);
  };

  const meta = [
    { label: 'Journal', value: article.journal },
    { label: 'Volume / Issue', value: `Vol. ${article.volume}, No. ${article.issue}` },
    { label: 'Year', value: article.year },
    { label: 'HEC Category', value: article.hecCategory ? `"${article.hecCategory}" Category` : '—' },
    { label: 'Language', value: article.language },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 flex flex-col max-h-[90vh]">

        {/* Modal Header */}
        <div className="bg-[#0b2239] text-white p-5 flex justify-between items-start gap-4">
          <div className="space-y-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase">
                {article.section} Section
              </span>
              <span className="text-xs text-slate-300">
                {article.journal} • Vol. {article.volume}, No. {article.issue} ({article.year})
              </span>
            </div>
            <h2
              className={`text-lg md:text-xl font-bold text-white leading-snug mt-1 ${
                isUrdu ? 'font-urdu text-2xl md:text-3xl leading-[2.1] text-right' : isArabic ? 'font-arabic text-right' : 'font-serif'
              }`}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {article.title}
            </h2>
            {isRTL && article.titleEnglish && (
              <p className="text-xs md:text-sm text-slate-300 italic">{article.titleEnglish}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
            aria-label="Close article details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="bg-slate-50 px-6 py-2 border-b border-slate-200 flex flex-wrap items-center gap-2 text-xs font-bold text-slate-700">
          <button
            type="button"
            onClick={() => setActiveTab('details')}
            className={`px-3.5 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
              activeTab === 'details' ? 'bg-white text-journal-navy shadow-xs border border-slate-200' : 'hover:bg-slate-200/60 text-slate-600'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-amber-500" />
            <span>Paper Details</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('cite')}
            className={`px-3.5 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
              activeTab === 'cite' ? 'bg-white text-journal-navy shadow-xs border border-slate-200' : 'hover:bg-slate-200/60 text-slate-600'
            }`}
          >
            <Quote className="w-3.5 h-3.5 text-blue-600" />
            <span>Export Citation</span>
          </button>
          {article.url && (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto px-3.5 py-1.5 rounded-md bg-journal-navy hover:bg-journal-primary text-white transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              <span>Read Full Paper</span>
            </a>
          )}
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">

          {activeTab === 'details' && (
            <div className="space-y-6">

              {/* Author */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Author & Affiliation</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {article.authors.map((author, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <strong className="text-xs font-semibold text-slate-900 block">{author.name}</strong>
                        <span className="text-[11px] text-slate-500">{author.affiliation}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Abstract (shown only if one has been added to the data) */}
              {article.abstract && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-journal-navy border-b border-slate-200 pb-1.5 mb-2.5">
                    Abstract
                  </h4>
                  <p
                    className={`text-sm text-slate-700 leading-relaxed font-sans ${
                      isUrdu ? 'font-urdu text-right text-lg md:text-xl leading-[2.3]' : isArabic ? 'text-right leading-loose font-arabic text-base' : ''
                    }`}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    {article.abstract}
                  </p>
                </div>
              )}

              {/* Publication details */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-journal-navy border-b border-slate-200 pb-1.5 mb-2.5 flex items-center gap-1.5">
                  <Library className="w-3.5 h-3.5 text-journal-primary" />
                  Publication Details
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
                  {meta.map(m => (
                    <div key={m.label}>
                      <span className="block text-slate-500 text-[11px]">{m.label}</span>
                      <strong className="text-slate-800 font-semibold">{m.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link to original */}
              {article.url && (
                <div className="bg-[#0b2239] text-white p-4 rounded-xl flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <FileText className="w-7 h-7 text-amber-400 shrink-0" />
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm">Full Text</h4>
                      <p className="text-xs text-slate-300">Read this paper on the {article.journal} website.</p>
                    </div>
                  </div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Paper</span>
                  </a>
                </div>
              )}

            </div>
          )}

          {activeTab === 'cite' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Citation Style</h4>
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-semibold">
                  {['apa', 'mla', 'bibtex'].map(fmt => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setCitationFormat(fmt)}
                      className={`px-3 py-1 rounded-md transition-colors uppercase text-[11px] ${
                        citationFormat === fmt ? 'bg-white text-journal-navy shadow-xs font-bold' : 'text-slate-600'
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative bg-[#071527] text-amber-300 font-mono text-xs p-4 pr-24 rounded-xl border border-slate-800 leading-relaxed overflow-x-auto">
                <pre className="whitespace-pre-wrap">{currentCitationText}</pre>
                <button
                  type="button"
                  onClick={handleCopyCitation}
                  className="absolute top-3 right-3 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded text-xs font-sans font-bold flex items-center gap-1 border border-slate-700"
                >
                  {copiedCitation ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCitation ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-between items-center gap-3 text-xs">
          <span className="text-slate-500 font-medium">Originally published in {article.journal}</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
