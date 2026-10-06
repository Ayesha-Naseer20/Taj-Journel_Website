import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { journalDetails } from '../data/journalData';
import { BookOpen, ShieldCheck, Award, History, Eye, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-journal-navy">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">About the Journal</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main About Content (8 cols) */}
          <main className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-8">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="px-2.5 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase">
                  Department of Islamic Thought & Culture
                </span>
                <h1 className="font-serif text-3xl font-extrabold text-journal-navy mt-1">
                  About Al-Basirah Research Journal
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Bi-Annual International Peer-Reviewed Journal | NUML Islamabad
                </p>
              </div>

              {/* About Text */}
              <div className="text-sm text-slate-700 leading-relaxed space-y-4 font-sans">
                <p>
                  <strong>Al-Basirah (البصيرة)</strong> is a peer-reviewed research journal published bi-annually by the Department of Islamic Thought and Culture, National University of Modern Languages (NUML), Islamabad, Pakistan.
                </p>
                <p>
                  Established in June 2012, Al-Basirah is dedicated to promoting high-quality, original academic research in Islamic Studies, Contemporary Muslim Thought, Comparative Religion, Islamic Jurisprudence (Fiqh), Hermeneutics, and socio-ethical studies.
                </p>
                <p>
                  The journal is indexed in international indexing databases including DOAJ (Directory of Open Access Journals), Crossref, Google Scholar, and Tehqeeqat, and is accredited in <strong>Category 'Y' by the Higher Education Commission (HEC) of Pakistan</strong>.
                </p>
              </div>

              {/* History Section */}
              <div id="history" className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <History className="w-5 h-5 text-amber-500" />
                  <h3 className="font-serif text-xl font-bold text-journal-navy">History of Al-Basirah</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Founded with the vision to foster scholarly dialogue between traditional Islamic heritage and modern intellectual discourse, Al-Basirah has published over 25 volumes containing research papers in English, Arabic, and Urdu.
                </p>
              </div>

              {/* Vision Section */}
              <div id="vision" className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-serif text-xl font-bold text-journal-navy">Vision & Mission</h3>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed space-y-2">
                  <p><strong>Vision:</strong> To serve as a world-class academic forum for critical, analytical, and ethical Islamic scholarship that bridges contemporary global challenges with divine guidance.</p>
                  <p><strong>Mission:</strong> To uphold rigorous double-blind peer review, promote interdisciplinary research, and ensure global open-access dissemination of Islamic thought.</p>
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
