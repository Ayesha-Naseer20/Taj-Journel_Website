import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { policiesList } from '../data/journalData';
import { 
  ShieldCheck, CheckCircle2, ChevronDown, ChevronUp, Search, 
  FileText, BookOpen, Scale, Lock, Globe, Sparkles, Check, 
  Copy, Layers, ExternalLink, ArrowRight, X, AlertCircle
} from 'lucide-react';

export default function PoliciesPage() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedPolicyIds, setExpandedPolicyIds] = useState(new Set(['transparency', 'plagiarism']));
  const [copiedId, setCopiedId] = useState(null);

  // Metadata mapping for categories and brief summaries
  const policyMetadata = {
    'transparency': { category: 'Editorial Governance', num: '01', summary: 'Commitment to editorial independence, transparency, and COPE-aligned governance.' },
    'publishing': { category: 'Editorial Governance', num: '02', summary: 'Originality requirements, initial editorial evaluation, and scholarly contribution.' },
    'plagiarism': { category: 'Ethics & Integrity', num: '03', summary: 'Zero-tolerance policy on plagiarism, similarity detection, and academic misconduct.' },
    'copyright': { category: 'Open Access & Rights', num: '04', summary: 'Author rights retention, open access dissemination, and legitimate educational reuse.' },
    'licensing': { category: 'Open Access & Rights', num: '05', summary: 'Creative Commons Attribution 4.0 International (CC BY 4.0) licensing terms.' },
    'review': { category: 'Peer Review & Authorship', num: '06', summary: 'Rigorous double-blind peer-review workflow, expert evaluation, and decisions.' },
    'research-integrity': { category: 'Editorial Governance', num: '07', summary: 'Honest data reporting, methodological disclosure, and verified indexing status.' },
    'open-access': { category: 'Open Access & Rights', num: '08', summary: 'Barrier-free scholarly access for researchers, students, and institutions globally.' },
    'repository': { category: 'Open Access & Rights', num: '09', summary: 'Long-term digital preservation, self-archiving, and institutional repository deposits.' },
    'ethical': { category: 'Ethics & Integrity', num: '10', summary: 'Informed consent, human subject safeguards, sensitive religious/psychological topics.' },
    'publication-fees': { category: 'Open Access & Rights', num: '11', summary: 'Upfront fee transparency, non-mandatory charges, and independent fee waivers.' },
    'ai-policy': { category: 'Ethics & Integrity', num: '12', summary: 'Accountable use of AI tools, mandatory disclosure, and strict authorship exclusion.' },
    'authorship': { category: 'Peer Review & Authorship', num: '13', summary: 'Substantial intellectual contribution criteria, approval, and conflict prevention.' },
    'conflict-of-interest': { category: 'Ethics & Integrity', num: '14', summary: 'Mandatory declaration of financial, personal, or institutional affiliations.' },
    'corrections-retractions': { category: 'Editorial Governance', num: '15', summary: 'Post-publication corrections, formal retractions, and expressions of concern.' },
    'complaints-appeals': { category: 'Editorial Governance', num: '16', summary: 'Fair editorial appeals mechanism and independent misconduct investigation.' },
  };

  const categories = [
    'All',
    'Editorial Governance',
    'Ethics & Integrity',
    'Peer Review & Authorship',
    'Open Access & Rights'
  ];

  // Auto-expand and scroll to policy if hash is provided
  useEffect(() => {
    const rawHash = location.hash.replace('#', '');
    const hash = rawHash === 'privacy' ? 'transparency' : rawHash;
    if (hash && policiesList.some(p => p.id === hash)) {
      setExpandedPolicyIds(prev => new Set([...prev, hash]));
      setTimeout(() => {
        const el = document.getElementById(`policy-${hash}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    }
  }, [location.hash]);

  const togglePolicy = (id) => {
    setExpandedPolicyIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleExpandAll = () => {
    setExpandedPolicyIds(new Set(policiesList.map(p => p.id)));
  };

  const handleCollapseAll = () => {
    setExpandedPolicyIds(new Set());
  };

  const handleCopyLink = (id, e) => {
    e.stopPropagation();
    const url = `${window.location.origin}/policies#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredPolicies = useMemo(() => {
    return policiesList.filter(pol => {
      const meta = policyMetadata[pol.id] || { category: 'Editorial Governance' };
      const matchesCategory = selectedCategory === 'All' || meta.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        pol.title.toLowerCase().includes(q) || 
        pol.content.toLowerCase().includes(q) ||
        meta.summary.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const getCategoryBadgeColor = (category) => {
    switch (category) {
      case 'Ethics & Integrity':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Peer Review & Authorship':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'Open Access & Rights':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      default:
        return 'bg-purple-50 text-purple-800 border-purple-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-journal-navy">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Editorial & Journal Policies</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Policies Container (8 cols) */}
          <main className="lg:col-span-8 space-y-6">

            {/* ─── Hero Overview Card ─── */}
            <div className="bg-gradient-to-br from-journal-navy via-slate-900 to-journal-dark text-white rounded-2xl p-6 md:p-8 border border-amber-500/20 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>COPE Aligned • 16 Active Policies</span>
                </div>

                <h1 className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight">
                  Journal Policies & Research Integrity
                </h1>
                
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  <strong>Taj Journal of Religion and Psychology (TJRP)</strong> is committed to the highest standards of research ethics, academic transparency, blind peer review, and open-access scholarship.
                </p>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 backdrop-blur-sm">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Access Model</span>
                    <strong className="text-xs font-bold text-amber-300">Open Access (CC BY)</strong>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 backdrop-blur-sm">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Peer Review</span>
                    <strong className="text-xs font-bold text-slate-100">Double-Blind</strong>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 backdrop-blur-sm">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Plagiarism</span>
                    <strong className="text-xs font-bold text-emerald-400">Strict Screening</strong>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 backdrop-blur-sm">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">AI Policy</span>
                    <strong className="text-xs font-bold text-blue-300">Mandatory Disclosure</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Search & Category Filter Toolbar ─── */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-academic space-y-4">
              
              {/* Search Input Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search policies by keyword (e.g., plagiarism, AI, fee, peer review, ethics)..."
                  className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Category Pills & Action Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  {categories.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          isSelected
                            ? 'bg-journal-navy text-white shadow-sm'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <button
                    onClick={handleExpandAll}
                    className="text-journal-primary hover:text-amber-600 font-bold transition-colors"
                  >
                    Expand All
                  </button>
                  <span className="text-slate-300">|</span>
                  <button
                    onClick={handleCollapseAll}
                    className="text-slate-500 hover:text-slate-800 font-medium transition-colors"
                  >
                    Collapse All
                  </button>
                </div>
              </div>

              {/* Active Search & Count Status */}
              <div className="flex justify-between items-center text-xs text-slate-500 pt-1 border-t border-slate-100">
                <span>Showing <strong>{filteredPolicies.length}</strong> of {policiesList.length} policies</span>
                {searchQuery && (
                  <span className="text-amber-700 font-medium">Filtering by "{searchQuery}"</span>
                )}
              </div>
            </div>

            {/* ─── Interactive Policy Cards (Accordion Style) ─── */}
            <div className="space-y-4">
              {filteredPolicies.length === 0 ? (
                <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 space-y-3">
                  <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
                  <h3 className="font-bold text-slate-800 text-base">No matching policies found</h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    No policy matches your search query "{searchQuery}". Try searching for another term or click below to clear filters.
                  </p>
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="px-4 py-2 bg-journal-navy text-white text-xs font-bold rounded-lg hover:bg-journal-primary transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                filteredPolicies.map((pol) => {
                  const meta = policyMetadata[pol.id] || { category: 'Editorial Governance', num: '•', summary: '' };
                  const isExpanded = expandedPolicyIds.has(pol.id);

                  return (
                    <div
                      key={pol.id}
                      id={`policy-${pol.id}`}
                      className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isExpanded 
                          ? 'border-amber-400 shadow-academic-hover ring-1 ring-amber-400/20' 
                          : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                      }`}
                    >
                      {/* Policy Card Header / Clickable Toggle */}
                      <div
                        onClick={() => togglePolicy(pol.id)}
                        className="p-5 sm:p-6 cursor-pointer flex items-start justify-between gap-4 select-none hover:bg-slate-50/70 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          {/* Number Badge */}
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs flex-shrink-0 transition-colors ${
                            isExpanded
                              ? 'bg-journal-navy text-amber-400 shadow-sm'
                              : 'bg-slate-100 text-slate-600'
                          }`}>
                            {meta.num}
                          </div>

                          <div className="space-y-1.5">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider ${getCategoryBadgeColor(meta.category)}`}>
                                {meta.category}
                              </span>
                            </div>

                            <h3 className="font-serif font-bold text-lg sm:text-xl text-journal-navy hover:text-amber-600 transition-colors">
                              {pol.title.replace(/^\d+\.\s*/, '')}
                            </h3>

                            <p className="text-xs text-slate-500 leading-relaxed font-sans">
                              {meta.summary}
                            </p>
                          </div>
                        </div>

                        {/* Right Toggle Icon & Quick Link Action */}
                        <div className="flex items-center gap-2 flex-shrink-0 pt-1">
                          <button
                            title="Copy link to this policy"
                            onClick={(e) => handleCopyLink(pol.id, e)}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                          >
                            {copiedId === pol.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>

                          <div className={`p-1.5 rounded-lg transition-transform duration-300 ${
                            isExpanded ? 'bg-amber-100 text-amber-800 rotate-180' : 'bg-slate-100 text-slate-600'
                          }`}>
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Expanded Policy Content */}
                      {isExpanded && (
                        <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-4 animate-fadeIn">
                          
                          {/* Formatted Text Content */}
                          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans whitespace-pre-line">
                            {pol.content}
                          </div>

                          {/* Footer action bar */}
                          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-500">
                            <span className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span>Official Editorial Standard of TJRP</span>
                            </span>

                            <button
                              onClick={(e) => handleCopyLink(pol.id, e)}
                              className="text-journal-primary hover:text-amber-600 font-semibold flex items-center gap-1"
                            >
                              <Copy className="w-3.5 h-3.5" />
                              <span>{copiedId === pol.id ? 'Direct link copied!' : 'Share policy link'}</span>
                            </button>
                          </div>

                        </div>
                      )}

                    </div>
                  );
                })
              )}
            </div>

            {/* ─── Bottom Commitment Banner ─── */}
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-amber-950">
                <ShieldCheck className="w-5 h-5 text-amber-700" />
                <span>Publication Integrity Commitment</span>
              </div>
              <p className="leading-relaxed text-slate-700">
                All authors, editors, and reviewers are bound by these guidelines. The Taj Islamic Research Center (TIRC) and the TJRP Editorial Board periodically audit publishing practices to ensure adherence to international scholarly conventions, ethical standards, and research transparency.
              </p>
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
