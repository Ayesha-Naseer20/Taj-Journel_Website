import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { ShieldCheck, Award, Globe, ExternalLink } from 'lucide-react';

export default function IndexedInPage() {
  const indexings = [
    { name: "DOAJ (Directory of Open Access Journals)", type: "International Database", status: "Active Indexed", desc: "Verified open access quality peer review compliance." },
    { name: "Higher Education Commission (HEC) Pakistan", type: "National Accreditation", status: "Y Category Recognized", desc: "Official recognition by HEC Pakistan for academic appointments & research grants." },
    { name: "Crossref DOI", type: "Digital Object Identifier", status: "Active Member", desc: "Permanent DOI assigned to all published research articles." },
    { name: "Google Scholar", type: "Citation Indexing", status: "Indexed", desc: "Full text index and citation analytics tracking." },
    { name: "Tehqeeqat", type: "Pakistani Research Journals Index", status: "Indexed", desc: "National database of humanities and Islamic studies research journals." },
    { name: "BASE (Bielefeld Academic Search Engine)", type: "Search Engine", status: "Indexed", desc: "Operated by Bielefeld University Library, Germany." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-journal-navy">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Indexed In</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content (8 cols) */}
          <main className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-8">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="px-2.5 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase">
                  Global Abstracting & Indexing
                </span>
                <h1 className="font-serif text-3xl font-extrabold text-journal-navy mt-1">
                  Indexing & Academic Accreditation
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Al-Basirah is indexed in major international scholarly repositories and abstracting services.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {indexings.map((idx, i) => (
                  <div key={i} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 hover:border-amber-400 hover:shadow-sm transition-all">
                    <div className="flex justify-between items-center">
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded">
                        {idx.status}
                      </span>
                      <span className="text-[10px] text-slate-400">{idx.type}</span>
                    </div>
                    <h4 className="font-serif font-bold text-slate-900 text-base">{idx.name}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{idx.desc}</p>
                  </div>
                ))}
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
