import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { editorialBoard } from '../data/journalData';
import { Mail, Award, BookOpen, User } from 'lucide-react';

export default function EditorialBoardPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-journal-navy">Home</Link>
          <span>/</span>
          <Link to="/about" className="hover:text-journal-navy">About</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Editorial & Advisory Board</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Board Directory Column (8 cols) */}
          <main className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-8">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="px-2.5 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase">
                  Academic Governance
                </span>
                <h1 className="font-serif text-3xl font-extrabold text-journal-navy mt-1">
                  Editorial & Advisory Board
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Distinguished Islamic scholars, university professors, and domain experts overseeing double-blind peer review and editorial integrity.
                </p>
              </div>

              {/* Board Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {editorialBoard.map((member, index) => (
                  <div 
                    key={index}
                    className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all space-y-3"
                  >
                    <div className="flex items-center gap-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-amber-400 shadow-sm flex-shrink-0" 
                      />
                      <div>
                        <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-900 rounded uppercase">
                          {member.role}
                        </span>
                        <h3 className="font-serif font-bold text-base text-slate-900 mt-0.5">
                          {member.name}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">
                          {member.affiliation}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200 text-xs space-y-1 text-slate-600">
                      <p>
                        <strong className="text-slate-800">Specialization:</strong> {member.specialization}
                      </p>
                      <p className="flex items-center gap-1.5 text-journal-primary font-medium">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <span>{member.email}</span>
                      </p>
                    </div>
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
