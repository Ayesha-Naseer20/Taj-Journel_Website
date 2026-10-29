import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { BookOpen, Brain, Layers, Target, Search, FileText, Users, ShieldCheck, ArrowRight } from 'lucide-react';

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
          <main className="lg:col-span-8 space-y-8">

            {/* ─── Hero Header Card ─── */}
            <div className="bg-gradient-to-br from-journal-navy via-slate-900 to-journal-dark text-white rounded-2xl p-8 md:p-10 border border-amber-500/20 shadow-lg relative overflow-hidden">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)' }}></div>
              
              <div className="relative z-10 space-y-4">
                <div>
                  <span className="px-3 py-1 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase tracking-wider">
                    About the Journal
                  </span>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                  Taj Journal of Religion <br className="hidden sm:block" />and Psychology
                </h1>
                <p className="text-sm text-amber-300 font-semibold tracking-wide">
                  An International, Peer-Reviewed, Multidisciplinary Research Journal
                </p>
                <p className="text-xs text-slate-300 font-medium">
                  Published by <strong className="text-white">Taj Islamic Research Center (TIRC)</strong>
                </p>
                <div className="pt-2">
                  <p className="text-sm text-slate-200 leading-relaxed max-w-2xl italic border-l-2 border-amber-400 pl-4">
                    Advancing Scholarship at the Intersection of Religion, Psychology, and Human Well-being
                  </p>
                </div>
              </div>
            </div>

            {/* ─── Main About Description ─── */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-6">
              
              <div className="text-sm text-slate-700 leading-relaxed space-y-4 font-sans">
                <p>
                  <strong className="text-journal-navy">Taj Journal of Religion and Psychology (TJRP)</strong> is an international, peer-reviewed, multidisciplinary research journal dedicated to advancing scholarly inquiry into Religion, Islamic Studies, Psychology, and their interdisciplinary connections.
                </p>
                <p>
                  TJRP provides a global platform for researchers to explore the ways in which religious beliefs, spirituality, psychological processes, human behavior, ethics, identity, culture, and contemporary social realities shape individual and collective human experience.
                </p>
                <p>
                  The journal welcomes rigorous theoretical, empirical, conceptual, qualitative, quantitative, comparative, historical, and interdisciplinary research from scholars across diverse academic and intellectual traditions.
                </p>
              </div>
            </div>

            {/* ─── Our Core Areas ─── */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <h2 className="font-serif text-2xl font-extrabold text-journal-navy">Our Core Areas</h2>
              </div>

              <div className="grid grid-cols-1 gap-5">

                {/* Area 1: Religion & Islamic Studies */}
                <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-900">Religion & Islamic Studies</h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed pl-[52px]">
                    Research in Religious Studies, Comparative Religion, Qur'anic and Hadith Studies, Seerah, Islamic History and Civilization, Islamic Thought, Philosophy, Jurisprudence, Ethics, and contemporary religious issues.
                  </p>
                </div>

                {/* Area 2: Psychology */}
                <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-200 space-y-2 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      <Brain className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-900">Psychology</h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed pl-[52px]">
                    Research in General and Applied Psychology, Social and Behavioral Psychology, Cognitive and Developmental Psychology, Clinical and Counseling Psychology, Health Psychology, Positive Psychology, and Psychological Well-being.
                  </p>
                </div>

                {/* Area 3: Interdisciplinary */}
                <div className="p-5 rounded-xl bg-purple-50/60 border border-purple-200 space-y-2 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center flex-shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-900">Interdisciplinary Religion & Psychology</h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed pl-[52px]">
                    Research exploring the relationship between religion, spirituality, psychological well-being, religious coping, resilience, mental health, human behavior, psychological development, and contemporary society.
                  </p>
                </div>

              </div>
            </div>

            {/* ─── Our Mission ─── */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center">
                  <Target className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="font-serif text-2xl font-extrabold text-journal-navy">Our Mission</h2>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-sans">
                TJRP seeks to foster rigorous, ethical, innovative, and interdisciplinary scholarship that contributes to a deeper understanding of religion and psychology and their significance for human well-being and society.
              </p>
            </div>

            {/* ─── Explore TJRP ─── */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="font-serif text-2xl font-extrabold text-journal-navy">Explore TJRP</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Discover Research */}
                <Link to="/issues" className="group p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-amber-400 hover:bg-amber-50/40 hover:shadow-md transition-all duration-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-journal-navy text-white flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Search className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-journal-navy">Discover Research</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Explore scholarly contributions addressing religion, psychology, human behavior, spirituality, well-being, and contemporary challenges.
                  </p>
                </Link>

                {/* Submit Your Research */}
                <Link to="/submissions" className="group p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-amber-400 hover:bg-amber-50/40 hover:shadow-md transition-all duration-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-journal-navy text-white flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-journal-navy">Submit Your Research</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    TJRP welcomes original scholarly contributions from researchers and academics worldwide.
                  </p>
                </Link>

                {/* Meet Our Editorial Team */}
                <Link to="/editorial-board" className="group p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-amber-400 hover:bg-amber-50/40 hover:shadow-md transition-all duration-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-journal-navy text-white flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Users className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-journal-navy">Meet Our Editorial Team</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Learn about the scholars and researchers contributing to the academic direction and quality of TJRP.
                  </p>
                </Link>

                {/* Read Our Policies */}
                <Link to="/policies" className="group p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-amber-400 hover:bg-amber-50/40 hover:shadow-md transition-all duration-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-journal-navy text-white flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-journal-navy">Read Our Policies</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Explore our peer-review, publication ethics, research integrity, and editorial policies.
                  </p>
                </Link>

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
