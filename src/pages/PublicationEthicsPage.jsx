import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { ShieldCheck, CheckCircle2, AlertTriangle, Scale, BookOpen, Users } from 'lucide-react';

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
                  COPE & Research Integrity Standards
                </span>
                <h1 className="font-serif text-3xl font-extrabold text-journal-navy mt-1">
                  Publication Ethics & Malpractice Statement
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Ethical guidelines for authors, reviewers, and editors enforced by Taj Journal of Religion and Psychology (TJRP).
                </p>
              </div>

              <div className="space-y-6 text-sm text-slate-700 leading-relaxed font-sans">
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <strong className="block font-bold">Research Integrity & Anti-Plagiarism Policy</strong>
                  <p>All manuscripts submitted to TJRP undergo similarity-detection analysis and editorial evaluation. Plagiarism, duplicate submission, data fabrication, and falsification are strictly prohibited.</p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif font-bold text-xl text-journal-navy border-b border-slate-200 pb-1.5 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    <span>Duties of Authors</span>
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-xs text-slate-700">
                    <li><strong>Originality and reporting standards:</strong> Authors must present an accurate account of original research and an objective discussion of its significance.</li>
                    <li><strong>Multiple or redundant publications:</strong> Authors must not publish manuscripts describing essentially the same research in more than one journal concurrently.</li>
                    <li><strong>Acknowledgement of sources:</strong> Proper citation and attribution of the work of others is mandatory.</li>
                    <li><strong>Authorship:</strong> Authorship should be limited to those who have made a significant intellectual contribution to the research and approved the final submission.</li>
                    <li><strong>Human subjects & sensitive topics:</strong> Authors must provide appropriate informed consent, institutional review approval, and privacy protections when researching religion and psychological well-being.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif font-bold text-xl text-journal-navy border-b border-slate-200 pb-1.5 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>Duties of Reviewers</span>
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-xs text-slate-700">
                    <li><strong>Confidentiality:</strong> Any manuscripts received for review must be treated as confidential documents.</li>
                    <li><strong>Standards of objectivity:</strong> Reviews must be conducted objectively with clear supporting arguments and free from personal bias.</li>
                    <li><strong>Disclosure of conflicts:</strong> Reviewers must disclose any financial or personal conflict of interest and decline assignments where impartiality cannot be maintained.</li>
                    <li><strong>Promptness:</strong> Any reviewer who feels unqualified or unable to complete the review in the agreed timeframe should notify the editor immediately.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif font-bold text-xl text-journal-navy border-b border-slate-200 pb-1.5 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-emerald-600" />
                    <span>Duties of Editors</span>
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-xs text-slate-700">
                    <li><strong>Editorial independence:</strong> Editorial decisions are based purely on scholarly merit, without regard to author background, nationality, or commercial interests.</li>
                    <li><strong>Fair double-blind review:</strong> Editors ensure fair, double-blind peer review and protect the confidentiality of all submitted manuscripts.</li>
                    <li><strong>Post-publication integrity:</strong> Editors take appropriate corrective actions including publishing corrections, retractions, or expressions of concern when necessary.</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    to="/policies"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-journal-primary hover:text-amber-600 transition-colors"
                  >
                    <span>View All 16 Complete Journal Policies</span>
                    <span>&rarr;</span>
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
