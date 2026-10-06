import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-journal-navy">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Contact Us</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Contact Form Column (8 cols) */}
          <main className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-8">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="px-2.5 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase">
                  Editorial Secretariat
                </span>
                <h1 className="font-serif text-3xl font-extrabold text-journal-navy mt-1">
                  Contact Al-Basirah Editorial Office
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Department of Islamic Thought & Culture, NUML Islamabad.
                </p>
              </div>

              {/* Office Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <MapPin className="w-5 h-5 text-amber-500 mb-1" />
                  <strong className="block text-slate-800 font-semibold">Address</strong>
                  <p className="text-slate-600">NUML, Sector H-9, Islamabad, Pakistan</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <Mail className="w-5 h-5 text-journal-primary mb-1" />
                  <strong className="block text-slate-800 font-semibold">Official Email</strong>
                  <p className="text-slate-600">editor.albasirah@numl.edu.pk</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <Phone className="w-5 h-5 text-emerald-600 mb-1" />
                  <strong className="block text-slate-800 font-semibold">Phone Contact</strong>
                  <p className="text-slate-600">+92 (51) 9265100 Ext. 2210</p>
                </div>
              </div>

              {/* Interactive Contact Form */}
              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-emerald-900">Message Sent Successfully!</h3>
                  <p className="text-xs text-emerald-700">Thank you for contacting Al-Basirah. Our editorial secretary will respond within 24-48 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  <h3 className="font-serif font-bold text-lg text-journal-navy">Send Inquiry to Editorial Board</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800"
                        placeholder="Dr. / Prof. / Mr."
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800"
                        placeholder="your.email@university.edu"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800"
                      placeholder="e.g. Paper Status Inquiry / Fee Inquiry"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700">Message *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800"
                      placeholder="Enter details of your query..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-lg bg-journal-navy hover:bg-journal-primary text-white font-bold text-xs shadow transition-colors flex items-center gap-2"
                  >
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

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
