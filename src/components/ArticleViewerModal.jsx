import React, { useState } from 'react';
import { X, FileText, Download, Copy, Check, Quote, Eye, ExternalLink } from 'lucide-react';

export default function ArticleViewerModal({ article, onClose }) {
  const [activeTab, setActiveTab] = useState('abstract'); // 'abstract' | 'pdf' | 'cite'
  const [copiedCitation, setCopiedCitation] = useState(false);
  const [citationFormat, setCitationFormat] = useState('apa');

  if (!article) return null;

  const isArabic = article.language === 'Arabic';
  const isUrdu = article.language === 'Urdu';

  const apaCitation = `${article.authors.map(a => a.name).join(', ')} (${article.publishDate.split('-')[0]}). ${article.title}. Al-Basirah Journal, 13(1), ${article.pages}. https://doi.org/${article.doi}`;
  const mlaCitation = `${article.authors[0]?.name}, et al. "${article.title}." Al-Basirah, vol. 13, no. 1, 2024, pp. ${article.pages}.`;
  const bibtexCitation = `@article{albasirah_${article.id},\n  title={${article.title}},\n  author={${article.authors.map(a => a.name).join(' and ')}},\n  journal={Al-Basirah Research Journal},\n  volume={13},\n  number={1},\n  pages={${article.pages}},\n  year={2024},\n  publisher={Department of Islamic Thought and Culture, NUML}\n}`;

  const currentCitationText = citationFormat === 'apa' ? apaCitation : citationFormat === 'mla' ? mlaCitation : bibtexCitation;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(currentCitationText);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-[#0b2239] text-white p-5 flex justify-between items-start gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase">
                {article.section} Section
              </span>
              <span className="text-xs text-slate-300">Vol 13 No 1 (2024) • pp. {article.pages}</span>
            </div>
            <h2 
              className={`text-lg md:text-xl font-bold text-white leading-snug mt-1 ${
                isArabic ? 'font-arabic text-right' : isUrdu ? 'font-urdu text-right' : 'font-serif'
              }`}
              dir={isArabic || isUrdu ? 'rtl' : 'ltr'}
            >
              {article.title}
            </h2>
          </div>
          <button 
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="bg-slate-50 px-6 py-2 border-b border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-700">
          <button
            type="button"
            onClick={() => setActiveTab('abstract')}
            className={`px-3.5 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
              activeTab === 'abstract' ? 'bg-white text-journal-navy shadow-xs border border-slate-200' : 'hover:bg-slate-200/60 text-slate-600'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-amber-500" />
            <span>Abstract & Details</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('pdf')}
            className={`px-3.5 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
              activeTab === 'pdf' ? 'bg-white text-journal-navy shadow-xs border border-slate-200' : 'hover:bg-slate-200/60 text-slate-600'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-emerald-600" />
            <span>Full Text PDF</span>
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
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {activeTab === 'abstract' && (
            <div className="space-y-6">
              
              {/* Authors Section */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Authors & Affiliations</h4>
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

              {/* Abstract */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-journal-navy border-b border-slate-200 pb-1.5 mb-2.5">
                  Abstract
                </h4>
                <p 
                  className={`text-sm text-slate-700 leading-relaxed font-sans ${
                    isArabic || isUrdu ? 'text-right leading-loose font-arabic text-base' : ''
                  }`}
                  dir={isArabic || isUrdu ? 'rtl' : 'ltr'}
                >
                  {article.abstract}
                </p>
              </div>

              {/* Keywords */}
              {article.keywords && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">Keywords</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {article.keywords.map((kw, i) => (
                      <span key={i} className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-medium border border-slate-200">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Publication Metadata */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div>
                  <span className="block text-slate-500 text-[11px]">Publication Date</span>
                  <strong className="text-slate-800 font-semibold">{article.publishDate}</strong>
                </div>
                <div>
                  <span className="block text-slate-500 text-[11px]">Language</span>
                  <strong className="text-slate-800 font-semibold">{article.language}</strong>
                </div>
                <div>
                  <span className="block text-slate-500 text-[11px]">Page Range</span>
                  <strong className="text-slate-800 font-semibold">pp. {article.pages}</strong>
                </div>
                <div>
                  <span className="block text-slate-500 text-[11px]">DOI</span>
                  <strong className="text-journal-primary font-mono text-[11px] truncate block">{article.doi}</strong>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'pdf' && (
            <div className="space-y-4">
              <div className="bg-[#0b2239] text-white p-4 rounded-xl flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-7 h-7 text-amber-400" />
                  <div>
                    <h4 className="font-bold text-sm">Full Text PDF Document</h4>
                    <p className="text-xs text-slate-300">Official archived peer-reviewed version</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => alert(`Downloading PDF for "${article.title}"...`)}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full PDF</span>
                </button>
              </div>

              {/* PDF Preview Frame Mockup */}
              <div className="border border-slate-200 rounded-xl bg-slate-50 h-80 flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">PDF Reader Document Preview</h3>
                  <p className="text-xs text-slate-500 max-w-sm mt-1">
                    Integrated document viewer ready for scholarly review and citation checking.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => alert(`Opening PDF tab for ${article.title}`)}
                  className="px-4 py-2 bg-journal-navy hover:bg-journal-primary text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open Full PDF in New Window</span>
                </button>
              </div>
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

              <div className="relative bg-[#071527] text-amber-300 font-mono text-xs p-4 rounded-xl border border-slate-800 leading-relaxed overflow-x-auto">
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
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-between items-center text-xs">
          <span className="text-slate-500 font-medium">Licensed under CC BY-NC 4.0</span>
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
