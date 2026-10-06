import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { policiesList } from '../data/journalData';
import { ShieldCheck, CheckCircle2, ChevronRight, FileText } from 'lucide-react';

export default function PoliciesPage() {
  const location = useLocation();
  const [activePolicyId, setActivePolicyId] = useState(policiesList[0].id);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && policiesList.some(p => p.id === hash)) {
      setActivePolicyId(hash);
    }
  }, [location.hash]);

  const activePolicy = policiesList.find(p => p.id === activePolicyId) || policiesList[0];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-journal-navy">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Al-Basirah Policies</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Policies Container (8 cols) */}
          <main className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="px-2.5 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase">
                  Editorial Governance
                </span>
                <h1 className="font-serif text-3xl font-extrabold text-journal-navy mt-1">
                  Journal Policies & Transparency Guidelines
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Al-Basirah operates strictly under COPE (Committee on Publication Ethics) principles and HEC Pakistan guidelines.
                </p>
              </div>

              {/* Policy Tabs */}
              <div className="flex flex-wrap gap-1.5 border-b border-slate-200 pb-3">
                {policiesList.map(pol => (
                  <button
                    key={pol.id}
                    onClick={() => setActivePolicyId(pol.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activePolicyId === pol.id 
                        ? 'bg-journal-navy text-white shadow-sm' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {pol.title}
                  </button>
                ))}
              </div>

              {/* Active Policy Content Body */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-journal-navy">{activePolicy.title}</h2>
                    <span className="text-xs text-slate-400">Official Policy Document • Al-Basirah Journal</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed font-sans whitespace-pre-line">
                  {activePolicy.content}
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <strong className="block font-bold">Editorial Board Commitment:</strong>
                  <p>
                    All authors, reviewers, and editors are bound by these guidelines. Violations of publication ethics or plagiarism policies will be handled according to COPE misconduct procedures.
                  </p>
                </div>
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
