import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, ShieldCheck, CheckCircle2, FileText, CreditCard, 
  Copy, Check, DollarSign, HelpCircle, Users, Bookmark,
  Globe, Building, ArrowRight, Activity
} from 'lucide-react';
import { journalDetails } from '../data/journalData';

export default function Sidebar() {
  const [copiedBank, setCopiedBank] = useState(false);
  const [activeFeeTab, setActiveFeeTab] = useState('inland');

  const handleCopyBank = () => {
    navigator.clipboard.writeText(
      `Account Title: ${journalDetails.bankAccount.title}\nAccount No: ${journalDetails.bankAccount.accountNo}\nBank: ${journalDetails.bankAccount.bankName}\nBranch: ${journalDetails.bankAccount.branch}\nIBAN: ${journalDetails.bankAccount.iban}`
    );
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2200);
  };

  return (
    <aside className="space-y-5 font-sans">

      {/* 1. HEC Category Accreditation Widget */}
      <div className="bg-[#0b2239] text-white rounded-xl p-5 border border-amber-500/20 shadow-xs relative overflow-hidden">
        <div className="flex items-center gap-3.5 mb-3">
          <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider font-bold text-amber-400">HEC Recognition</span>
            <h3 className="font-extrabold text-lg text-white leading-tight">Category 'Y'</h3>
          </div>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          Recognized by the Higher Education Commission (HEC) Pakistan for quality academic research standards.
        </p>
        <div className="flex items-center justify-between text-xs font-semibold text-slate-200 bg-slate-900/60 rounded-lg p-2.5 border border-white/5">
          <span className="text-[11px] text-slate-400">Verification Status</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Verified
          </span>
        </div>
      </div>

      {/* 2. Indexing Badges */}
      <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs">
        <h3 className="font-bold text-xs text-journal-navy uppercase tracking-wider border-b border-slate-100 pb-2.5 mb-3 flex items-center justify-between">
          <span>Indexed & Abstracted</span>
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
        </h3>
        
        {/* DOAJ Featured Card */}
        <div className="p-3 bg-amber-50/60 border border-amber-200/60 rounded-lg flex items-center justify-between mb-3">
          <div>
            <span className="text-[10px] text-amber-800 font-bold uppercase tracking-wider block">Indexed In</span>
            <p className="font-serif text-2xl font-black text-amber-950 tracking-tight">DOAJ</p>
            <p className="text-[10px] text-slate-500 font-medium">Directory of Open Access Journals</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span className="px-2 py-0.5 text-[9px] font-bold bg-emerald-100 text-emerald-800 rounded">Verified</span>
          </div>
        </div>

        {/* Other Indexing badges */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          {['Google Scholar', 'Crossref DOI', 'Tehqeeqat', 'BASE Search'].map((idx) => (
            <div key={idx} className="p-2 border border-slate-200/80 rounded-lg bg-slate-50 font-medium text-slate-700 text-center flex items-center justify-center gap-1.5 text-[11px]">
              <Globe className="w-3 h-3 text-slate-400" />
              <span>{idx}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Paper Submission Call to Action */}
      <div className="bg-white rounded-xl p-5 border border-amber-300/80 shadow-xs relative">
        <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-amber-100 text-amber-900 rounded mb-2">
          Submissions Open
        </span>
        <h3 className="font-serif text-xl font-bold text-slate-900 mb-1.5">Submit Your Manuscript</h3>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          Submit your research paper for the upcoming Vol. 13 No. 2 (December 2024) issue.
        </p>
        <Link
          to="/submissions"
          className="flex items-center justify-center w-full py-2.5 px-4 rounded-lg bg-journal-navy hover:bg-journal-primary text-white font-bold text-xs shadow-xs transition-colors"
        >
          <FileText className="w-4 h-4 mr-1.5 text-amber-400" />
          <span>Submit Online Now</span>
        </Link>
      </div>

      {/* 4. Journal Information Box */}
      <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs">
        <h3 className="font-bold text-xs text-journal-navy uppercase tracking-wider border-b border-slate-100 pb-2.5 mb-3 flex items-center gap-2">
          <Activity className="w-4 h-4 text-journal-primary" />
          <span>Journal Information</span>
        </h3>
        <div className="text-xs border border-slate-100 rounded-lg overflow-hidden">
          {[
            { label: 'Editor', value: journalDetails.editorInChief },
            { label: 'Managing Editor', value: journalDetails.managingEditor },
            { label: 'Research Assistant', value: journalDetails.researchAssistant },
            { label: 'Frequency', value: journalDetails.publicationFrequency, highlight: true },
            { label: 'Full Title', value: journalDetails.title },
            { label: 'ISSN Online', value: journalDetails.issnOnline },
            { label: 'ISSN Print', value: journalDetails.issnPrint },
            { label: 'Area', value: 'Islamic Studies & Thought' },
          ].map((item, idx) => (
            <div key={idx} className={`flex justify-between items-center p-2.5 ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'} border-b border-slate-50 last:border-0`}>
              <span className="text-slate-500 font-medium">{item.label}</span>
              <span className={`font-semibold text-right max-w-[150px] truncate ${item.highlight ? 'text-journal-primary font-bold' : 'text-slate-800'}`}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Fee Structure Box */}
      <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs">
        <h3 className="font-bold text-xs text-journal-navy uppercase tracking-wider border-b border-slate-100 pb-2.5 mb-3 flex items-center justify-between">
          <span>Fee Structure</span>
          <CreditCard className="w-4 h-4 text-journal-primary" />
        </h3>
        
        {/* Fee Tabs */}
        <div className="flex bg-slate-100 p-1 rounded-lg mb-3">
          <button 
            type="button"
            onClick={() => setActiveFeeTab('inland')}
            className={`flex-1 text-xs font-bold py-1.5 rounded-md transition-colors ${
              activeFeeTab === 'inland' ? 'bg-white text-journal-navy shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Inland Authors
          </button>
          <button 
            type="button"
            onClick={() => setActiveFeeTab('foreign')}
            className={`flex-1 text-xs font-bold py-1.5 rounded-md transition-colors ${
              activeFeeTab === 'foreign' ? 'bg-white text-journal-navy shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Foreign Authors
          </button>
        </div>

        <div className="space-y-3">
          {activeFeeTab === 'inland' ? (
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-medium">Stage 1 (Initial Review):</span>
                <span className="font-bold text-slate-900">Rs. {journalDetails.feeStructure.inland.stage1.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-medium">Stage 2 (Publication):</span>
                <span className="font-bold text-slate-900">Rs. {journalDetails.feeStructure.inland.stage2.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-200 mt-1">
                <span className="font-bold text-slate-900 uppercase tracking-wider text-[10px]">Total Publication Fee</span>
                <span className="font-extrabold text-base text-journal-primary">
                  Rs. {journalDetails.feeStructure.inland.total.toLocaleString()}
                </span>
              </div>
            </div>
          ) : (
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-medium">Foreign Authors Total:</span>
                <span className="font-extrabold text-xl text-journal-primary flex items-center">
                  <DollarSign className="w-4 h-4" />
                  {journalDetails.feeStructure.foreign.total} USD
                </span>
              </div>
            </div>
          )}

          <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/70">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-[11px] text-amber-900 leading-relaxed font-medium">
              Fee paid at any stage is strictly non-refundable.
            </p>
          </div>
        </div>
      </div>

      {/* 6. Bank Account Details Box */}
      <div className="bg-[#0b2239] text-white rounded-xl p-5 border border-slate-800 shadow-xs">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-xs uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Building className="w-4 h-4" />
            <span>Bank Account</span>
          </h3>
          <button
            type="button"
            onClick={handleCopyBank}
            className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
          >
            {copiedBank ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copiedBank ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        <div className="space-y-2 text-xs text-slate-300">
          <div className="bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Account Title</span>
            <strong className="text-white font-medium">{journalDetails.bankAccount.title}</strong>
          </div>
          <div className="bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Account No</span>
            <strong className="text-amber-400 font-mono text-sm tracking-wide">{journalDetails.bankAccount.accountNo}</strong>
          </div>
          <div className="bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Bank & Branch</span>
            <span className="text-slate-200">{journalDetails.bankAccount.bankName}, {journalDetails.bankAccount.branch}</span>
          </div>
        </div>
      </div>

      {/* 7. Information Links */}
      <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs">
        <h3 className="font-bold text-xs text-journal-navy uppercase tracking-wider border-b border-slate-100 pb-2.5 mb-2">
          Information For
        </h3>
        <div className="space-y-1 text-xs font-semibold">
          {[
            { to: '/author-guidelines#readers', icon: Users, text: 'For Readers' },
            { to: '/author-guidelines', icon: FileText, text: 'For Authors' },
            { to: '/author-guidelines#librarians', icon: Bookmark, text: 'For Librarians' },
          ].map((link, idx) => (
            <Link 
              key={idx} 
              to={link.to} 
              className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-journal-navy transition-colors"
            >
              <span className="flex items-center gap-2">
                <link.icon className="w-4 h-4 text-slate-400" />
                <span>{link.text}</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
            </Link>
          ))}
        </div>
      </div>

      {/* 8. Visitors Geo Flag Widget */}
      <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs">
        <h3 className="font-bold text-xs text-journal-navy uppercase tracking-wider border-b border-slate-100 pb-2.5 mb-3 flex justify-between items-center">
          <span>Visitors Overview</span>
          <Globe className="w-4 h-4 text-slate-400" />
        </h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {[
            { flag: '🇵🇰', country: 'Pakistan', count: '41,270' },
            { flag: '🇸🇦', country: 'Saudi Arabia', count: '8,215' },
            { flag: '🇺🇸', country: 'USA', count: '5,980' },
            { flag: '🇬🇧', country: 'UK', count: '3,450' },
            { flag: '🇪🇬', country: 'Egypt', count: '2,910' },
            { flag: '🇲🇾', country: 'Malaysia', count: '2,140' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col bg-slate-50 p-2 rounded-lg border border-slate-100">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span>{item.flag}</span>
                <span className="text-[11px] text-slate-500 font-medium truncate">{item.country}</span>
              </div>
              <strong className="text-slate-800 font-bold tabular-nums pl-1 text-[11px]">{item.count}</strong>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-2.5 border-t border-slate-100 text-center">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-center gap-1">
            <Activity className="w-3 h-3 text-journal-primary" />
            <span>Total Views:</span>
            <span className="text-journal-navy font-black ml-1">67,410</span>
          </p>
        </div>
      </div>

    </aside>
  );
}
