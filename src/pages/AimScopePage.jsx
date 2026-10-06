import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Target, CheckCircle2, Globe, BookOpen } from 'lucide-react';

export default function AimScopePage() {
  const scopeItems = [
    "Qur'anic Exegesis (Tafsir) and Sciences of the Qur'an",
    "Hadith Literature, Hermeneutics, and Historical Criticism",
    "Islamic Jurisprudence (Fiqh), Usul al-Fiqh, and Contemporary Ijtihad",
    "Islamic Economics, Banking, and Cyber Finance",
    "Comparative Religion, Inter-faith Dialogue, and World Civilizations",
    "Islamic Psychology, Tazkiyah, and Mental Health Models",
    "Contemporary Intellectual Challenges, Atheism, and Post-Modernism",
    "Islamic Philosophy, Kalam, and Mysticism (Sufism)",
    "Women's Rights, Gender Studies, and Family Law in Islam"
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-journal-navy">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Aim and Scope</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content (8 cols) */}
          <main className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-8">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="px-2.5 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase">
                  Academic Focus
                </span>
                <h1 className="font-serif text-3xl font-extrabold text-journal-navy mt-1">
                  Aim and Scope of Al-Basirah
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Scope guidelines for research manuscripts submitted to Al-Basirah Journal.
                </p>
              </div>

              {/* Aim Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-amber-500" />
                  <h3 className="font-serif text-xl font-bold text-journal-navy">Journal Aims</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-sans">
                  The primary aim of <strong>Al-Basirah</strong> is to provide a peer-reviewed academic platform for original research that investigates contemporary global issues through the lens of classical and modern Islamic scholarship. The journal encourages analytical, critical, and comparative methodologies that contribute to the development of human knowledge.
                </p>
              </div>

              {/* Scope List */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="font-serif text-xl font-bold text-journal-navy">Key Areas of Interest</h3>
                <div className="grid grid-cols-1 gap-3">
                  {scopeItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
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
