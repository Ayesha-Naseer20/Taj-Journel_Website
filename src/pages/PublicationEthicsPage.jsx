import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { ShieldCheck, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function PublicationEthicsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-journal-navy">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Publication Ethics</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Ethics Content (8 cols) */}
          <main className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-8">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="px-2.5 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase">
                  COPE Standards Compliance
                </span>
                <h1 className="font-serif text-3xl font-extrabold text-journal-navy mt-1">
                  Publication Ethics & Malpractice Statement
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Ethical guidelines for authors, reviewers, and editors enforced by Al-Basirah.
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-sans">
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <strong className="block font-bold">Zero Tolerance Plagiarism Policy</strong>
                  <p>All manuscripts submitted to Al-Basirah undergo Turnitin plagiarism verification. Similarity must not exceed 19% overall and 5% from a single source.</p>
                </div>

                <h3 className="font-serif font-bold text-xl text-journal-navy border-b border-slate-200 pb-1.5">Duties of Authors</h3>
                <ul className="list-disc pl-5 space-y-2 text-xs text-slate-700">
                  <li>Originality and reporting standards: Authors must present an accurate account of original research.</li>
                  <li>Multiple or redundant publications: Authors must not publish manuscripts describing essentially the same research in more than one journal.</li>
                  <li>Acknowledgement of sources: Proper citation of work by others is mandatory.</li>
                  <li>Authorship of the paper: Authorship should be limited to those who have made a significant contribution to the study.</li>
                </ul>

                <h3 className="font-serif font-bold text-xl text-journal-navy border-b border-slate-200 pb-1.5">Duties of Reviewers</h3>
                <ul className="list-disc pl-5 space-y-2 text-xs text-slate-700">
                  <li>Confidentiality: Any manuscripts received for review must be treated as confidential documents.</li>
                  <li>Standards of objectivity: Reviews should be conducted objectively with clear supporting arguments.</li>
                  <li>Promptness: Any reviewer who feels unqualified to review should notify the editor immediately.</li>
                </ul>

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
