import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Megaphone, Calendar, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CallForPaperPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-journal-navy">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Call for Papers</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Call for Paper Column (8 cols) */}
          <main className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-8">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="px-2.5 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase">
                  Upcoming Vol. 13 No. 2 (December 2024)
                </span>
                <h1 className="font-serif text-3xl font-extrabold text-journal-navy mt-1">
                  Call for Research Papers 2024
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Inviting original research manuscripts in English, Arabic, and Urdu.
                </p>
              </div>

              {/* Call Details Banner */}
              <div className="bg-gradient-to-r from-journal-navy to-slate-900 text-white p-6 rounded-2xl border border-amber-500/30 space-y-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white">Theme: Contemporary Islamic Thought & Social Ethics</h3>
                    <span className="text-xs text-amber-300">Bi-Annual Issue • Vol. 13 No. 2</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="bg-slate-800/90 p-3 rounded-lg border border-slate-700">
                    <span className="block text-slate-400">Submission Deadline</span>
                    <strong className="text-amber-400 font-bold text-sm">October 31, 2024</strong>
                  </div>
                  <div className="bg-slate-800/90 p-3 rounded-lg border border-slate-700">
                    <span className="block text-slate-400">Peer Review Period</span>
                    <strong className="text-white font-bold text-sm">4 - 6 Weeks</strong>
                  </div>
                  <div className="bg-slate-800/90 p-3 rounded-lg border border-slate-700">
                    <span className="block text-slate-400">Publication Date</span>
                    <strong className="text-emerald-400 font-bold text-sm">December 31, 2024</strong>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/submissions"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow hover:from-amber-400 hover:to-amber-500 transition-all"
                  >
                    <span>Submit Your Paper Online</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                <h3 className="font-serif font-bold text-xl text-journal-navy">Submission Instructions</h3>
                <ul className="list-disc pl-5 space-y-2 text-xs text-slate-700">
                  <li>Papers must be original, unpublished, and not under peer review elsewhere.</li>
                  <li>Manuscripts should be between 4,000 and 8,000 words including references and abstract.</li>
                  <li>Similarity index in Turnitin must be strictly under 19%.</li>
                  <li>Inland author fee: Rs. 12,000 | Foreign author fee: $150 USD.</li>
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
