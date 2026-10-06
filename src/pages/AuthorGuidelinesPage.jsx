import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { FileText, Download, CheckCircle2, DollarSign } from 'lucide-react';

export default function AuthorGuidelinesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-journal-navy">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Author Guidelines</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Guidelines Content (8 cols) */}
          <main className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-8">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="px-2.5 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase">
                  Submission Standards
                </span>
                <h1 className="font-serif text-3xl font-extrabold text-journal-navy mt-1">
                  Author Guidelines & Manuscript Formatting
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Comprehensive instructions for preparing research papers for submission to Al-Basirah.
                </p>
              </div>

              <div className="space-y-6 text-sm text-slate-700 leading-relaxed font-sans">
                
                <div className="space-y-3">
                  <h3 className="font-serif font-bold text-xl text-journal-navy border-b border-slate-200 pb-1.5">Manuscript Structure</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
                    <li><strong>Title Page:</strong> Concise title, author names, affiliations, ORCID iDs, and corresponding author email.</li>
                    <li><strong>Abstract:</strong> 150 - 250 words outlining objective, methodology, key findings, and implications.</li>
                    <li><strong>Keywords:</strong> 4 to 6 relevant keywords.</li>
                    <li><strong>Main Text:</strong> Introduction, Literature Review, Methodology, Analysis/Discussion, Conclusion, and References.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif font-bold text-xl text-journal-navy border-b border-slate-200 pb-1.5">Language & Typography</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="block text-slate-800 font-bold mb-1">English Articles</strong>
                      <p className="text-slate-600">Font: Times New Roman, 12pt, 1.5 line spacing. References in APA 7th Edition.</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="block text-slate-800 font-bold mb-1">Arabic Articles</strong>
                      <p className="text-slate-600">Font: Sakkal Majalla / Traditional Arabic, 14pt. Standard Arabic diacritics where necessary.</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="block text-slate-800 font-bold mb-1">Urdu Articles</strong>
                      <p className="text-slate-600">Font: Jameel Noori Nastaleeq / Noto Nastaliq, 14pt, 1.5 line spacing.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to="/submissions"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-journal-navy hover:bg-journal-primary text-white font-bold text-xs shadow transition-colors"
                  >
                    <span>Proceed to Manuscript Submission Portal</span>
                  </Link>
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
