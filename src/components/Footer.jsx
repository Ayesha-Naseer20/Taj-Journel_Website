import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#071527] text-slate-300 pt-12 pb-6 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Journal Overview & Institution */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center">
                <span className="font-arabic font-bold text-amber-300 text-lg">البصيرة</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white tracking-tight">Al-Basirah</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bi-Annual International Peer-Reviewed Research Journal published by the Department of Islamic Thought and Culture, National University of Modern Languages (NUML), Islamabad.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs font-semibold text-amber-400">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>HEC Accredited • Category 'Y'</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About the Journal</Link></li>
              <li><Link to="/editorial-board" className="hover:text-amber-400 transition-colors">Editorial & Advisory Board</Link></li>
              <li><Link to="/aim-and-scope" className="hover:text-amber-400 transition-colors">Aim and Scope</Link></li>
              <li><Link to="/issues" className="hover:text-amber-400 transition-colors">Current Issue & Archives</Link></li>
              <li><Link to="/submissions" className="hover:text-amber-400 transition-colors">Paper Submissions</Link></li>
              <li><Link to="/call-for-paper" className="hover:text-amber-400 transition-colors">Call for Papers 2024</Link></li>
            </ul>
          </div>

          {/* Column 3: Journal Policies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              Policies & Ethics
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/policies#plagiarism" className="hover:text-amber-400 transition-colors">Plagiarism Policy (&lt; 19%)</Link></li>
              <li><Link to="/policies#review" className="hover:text-amber-400 transition-colors">Double-Blind Peer Review</Link></li>
              <li><Link to="/policies#open-access" className="hover:text-amber-400 transition-colors">Open Access Statement</Link></li>
              <li><Link to="/publication-ethics" className="hover:text-amber-400 transition-colors">Publication Ethics & COPE</Link></li>
              <li><Link to="/policies#publication-fees" className="hover:text-amber-400 transition-colors">Publication Fees & Waivers</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Editorial Office</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              Editorial Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Department of Islamic Thought & Culture, NUML, Sector H-9, Islamabad, Pakistan.</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>editor.albasirah@numl.edu.pk</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+92 (51) 9265100 Ext. 2210</span>
              </p>
            </div>
          </div>

        </div>

        {/* Licensing & OJS / PKP Footer Note */}
        <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-xs text-slate-400">
          
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800 text-[10px] font-bold text-slate-300">
                CC BY-NC 4.0
              </span>
              <p className="text-slate-300 font-semibold text-xs">Creative Commons Licensing</p>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Al-Basirah is licensed under a <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)</a>.
            </p>
          </div>

          {/* OJS / PKP Credit Badge */}
          <div className="md:text-right space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-slate-300">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-medium">Platform & workflow by <strong>OJS / PKP</strong></span>
            </div>
            <p className="text-[10px] text-slate-500">
              Open Journal Systems • Public Knowledge Project
            </p>
          </div>

        </div>

        <div className="text-center pt-4 border-t border-slate-900 text-[11px] text-slate-500">
          © {new Date().getFullYear()} Al-Basirah Research Journal, NUML Islamabad. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
