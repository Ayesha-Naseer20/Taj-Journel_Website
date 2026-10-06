import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { journalDetails } from '../data/journalData';
import { FileText, Upload, CheckCircle2, User, DollarSign, Download, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';

export default function SubmissionsPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    section: 'English',
    abstract: '',
    keywords: '',
    authorName: '',
    authorEmail: '',
    authorAffiliation: '',
    authorOrcid: '',
    fileName: '',
    agreedChecklist: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, fileName: e.target.files[0].name }));
    }
  };

  const handleNext = () => {
    if (step === 1 && (!formData.title || !formData.abstract)) {
      alert('Please fill in manuscript title and abstract.');
      return;
    }
    if (step === 2 && (!formData.authorName || !formData.authorEmail || !formData.authorAffiliation)) {
      alert('Please fill in primary author details.');
      return;
    }
    if (step === 3 && !formData.fileName) {
      alert('Please upload your manuscript file (PDF or DOCX).');
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreedChecklist) {
      alert('You must confirm compliance with the submission checklist.');
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
          <span className="text-slate-800 font-semibold">Manuscript Submissions</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Submissions Column (8 cols) */}
          <main className="lg:col-span-8 space-y-8">
            
            {/* Header info */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="px-2.5 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase">
                  OJS Manuscript Submission Portal
                </span>
                <h1 className="font-serif text-3xl font-extrabold text-journal-navy mt-1">
                  Submit Paper to Al-Basirah
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Double-blind peer-reviewed submission wizard. Submissions welcomed in English, Arabic, and Urdu.
                </p>
              </div>

              {/* Quick Template Download & Fee Callout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 space-y-2">
                  <h4 className="font-bold text-xs uppercase text-blue-900 flex items-center gap-1">
                    <Download className="w-4 h-4 text-blue-700" />
                    <span>Download Paper Template</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    Use our official Word / LaTeX manuscript formatting templates before submitting.
                  </p>
                  <button 
                    onClick={() => alert('Downloading Al-Basirah Manuscript Template (.docx)...')}
                    className="px-3 py-1.5 bg-journal-primary text-white text-xs font-bold rounded-lg hover:bg-journal-navy transition-colors inline-block"
                  >
                    Download Template (.docx)
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 space-y-2">
                  <h4 className="font-bold text-xs uppercase text-amber-900 flex items-center gap-1">
                    <DollarSign className="w-4 h-4 text-amber-700" />
                    <span>Publication Fee Notice</span>
                  </h4>
                  <p className="text-xs text-slate-700">
                    Inland Authors: <strong>Rs. 12,000</strong> (Stage 1: Rs. 7,000 + Stage 2: Rs. 5,000). Foreign Authors: <strong>$150 USD</strong>.
                  </p>
                  <span className="text-[10px] text-amber-800 font-semibold block">* Non-refundable fee</span>
                </div>
              </div>


              {/* Interactive Multi-step Submission Wizard */}
              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-serif font-extrabold text-emerald-950">
                    Manuscript Submitted Successfully!
                  </h3>
                  <p className="text-xs text-emerald-800 max-w-lg mx-auto leading-relaxed">
                    Your manuscript <strong>"{formData.title}"</strong> has been assigned Tracking ID: <strong className="font-mono text-slate-900">ALB-2024-{Math.floor(1000 + Math.random() * 9000)}</strong>. 
                    An official acknowledgment email with tracking details has been sent to <strong>{formData.authorEmail}</strong>.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => { setSubmitted(false); setStep(1); }}
                      className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow transition-colors"
                    >
                      Submit Another Paper
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 pt-4 border-t border-slate-100">
                  
                  {/* Step Progress Bar */}
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <div className={`flex items-center gap-2 ${step >= 1 ? 'text-amber-600' : ''}`}>
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-amber-500 text-slate-950' : 'bg-slate-200'}`}>1</span>
                      <span className="hidden sm:inline">Metadata</span>
                    </div>
                    <div className="h-0.5 flex-1 mx-2 bg-slate-200">
                      <div className={`h-full bg-amber-500 transition-all ${step >= 2 ? 'w-full' : 'w-0'}`}></div>
                    </div>

                    <div className={`flex items-center gap-2 ${step >= 2 ? 'text-amber-600' : ''}`}>
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-amber-500 text-slate-950' : 'bg-slate-200'}`}>2</span>
                      <span className="hidden sm:inline">Authors</span>
                    </div>
                    <div className="h-0.5 flex-1 mx-2 bg-slate-200">
                      <div className={`h-full bg-amber-500 transition-all ${step >= 3 ? 'w-full' : 'w-0'}`}></div>
                    </div>

                    <div className={`flex items-center gap-2 ${step >= 3 ? 'text-amber-600' : ''}`}>
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-amber-500 text-slate-950' : 'bg-slate-200'}`}>3</span>
                      <span className="hidden sm:inline">Upload</span>
                    </div>
                    <div className="h-0.5 flex-1 mx-2 bg-slate-200">
                      <div className={`h-full bg-amber-500 transition-all ${step >= 4 ? 'w-full' : 'w-0'}`}></div>
                    </div>

                    <div className={`flex items-center gap-2 ${step >= 4 ? 'text-amber-600' : ''}`}>
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-amber-500 text-slate-950' : 'bg-slate-200'}`}>4</span>
                      <span className="hidden sm:inline">Confirm</span>
                    </div>
                  </div>

                  {/* Step 1: Metadata */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <h3 className="font-serif font-bold text-lg text-journal-navy">Step 1: Manuscript Metadata</h3>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700">Journal Section *</label>
                        <select
                          name="section"
                          value={formData.section}
                          onChange={handleChange}
                          className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800"
                        >
                          <option value="English">English Section</option>
                          <option value="Arabic">Arabic Section (قسم اللغة العربية)</option>
                          <option value="Urdu">Urdu Section (شعبہ اردو)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700">Manuscript Title *</label>
                        <input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          placeholder="Full title of your research paper"
                          className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700">Abstract (150-250 words) *</label>
                        <textarea
                          name="abstract"
                          rows={5}
                          value={formData.abstract}
                          onChange={handleChange}
                          placeholder="Summarize research background, methodology, key findings, and conclusion..."
                          className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800"
                        ></textarea>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700">Keywords (Comma separated)</label>
                        <input
                          type="text"
                          name="keywords"
                          value={formData.keywords}
                          onChange={handleChange}
                          placeholder="e.g. Islamic Law, Tazkiyah, Social Justice, Hermeneutics"
                          className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Authors */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <h3 className="font-serif font-bold text-lg text-journal-navy">Step 2: Primary Author Information</h3>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700">Author Full Name *</label>
                        <input
                          type="text"
                          name="authorName"
                          value={formData.authorName}
                          onChange={handleChange}
                          placeholder="e.g. Dr. Syed Muhammad Ali"
                          className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700">Email Address *</label>
                        <input
                          type="email"
                          name="authorEmail"
                          value={formData.authorEmail}
                          onChange={handleChange}
                          placeholder="author@university.edu.pk"
                          className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700">Institutional Affiliation *</label>
                        <input
                          type="text"
                          name="authorAffiliation"
                          value={formData.authorAffiliation}
                          onChange={handleChange}
                          placeholder="Department & University Name"
                          className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700">ORCID iD (Optional)</label>
                        <input
                          type="text"
                          name="authorOrcid"
                          value={formData.authorOrcid}
                          onChange={handleChange}
                          placeholder="https://orcid.org/0000-0002-XXXX-XXXX"
                          className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Upload File */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <h3 className="font-serif font-bold text-lg text-journal-navy">Step 3: Upload Manuscript File</h3>

                      <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center space-y-3 bg-slate-50 hover:bg-slate-100/80 transition-colors">
                        <Upload className="w-12 h-12 text-amber-500 mx-auto" />
                        <div>
                          <p className="text-sm font-bold text-slate-800">Drag & drop your manuscript file here</p>
                          <p className="text-xs text-slate-500 mt-0.5">Supported formats: .DOCX, .DOC, .PDF (Max 25 MB)</p>
                        </div>

                        <label className="inline-block px-5 py-2.5 bg-journal-navy hover:bg-journal-primary text-white text-xs font-bold rounded-lg cursor-pointer transition-colors shadow">
                          <span>Choose File</span>
                          <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" className="hidden" />
                        </label>

                        {formData.fileName && (
                          <div className="p-3 bg-emerald-100 text-emerald-900 rounded-lg text-xs font-bold inline-flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Selected File: {formData.fileName}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Confirmation */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <h3 className="font-serif font-bold text-lg text-journal-navy">Step 4: Submission Confirmation</h3>

                      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs space-y-2">
                        <p><strong>Title:</strong> {formData.title}</p>
                        <p><strong>Section:</strong> {formData.section} Section</p>
                        <p><strong>Author:</strong> {formData.authorName} ({formData.authorEmail})</p>
                        <p><strong>Affiliation:</strong> {formData.authorAffiliation}</p>
                        <p><strong>Manuscript File:</strong> {formData.fileName}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                        <div className="flex items-start gap-2">
                          <input
                            type="checkbox"
                            id="agreedChecklist"
                            name="agreedChecklist"
                            checked={formData.agreedChecklist}
                            onChange={handleChange}
                            className="mt-0.5 w-4 h-4 rounded text-journal-primary focus:ring-amber-500 border-slate-300"
                          />
                          <label htmlFor="agreedChecklist" className="text-xs text-slate-800 leading-snug cursor-pointer font-medium">
                            I confirm that this manuscript is original, has not been published elsewhere, Turnitin similarity is below 19%, and I agree to the fee structure (Rs. 12,000 / $150 USD).
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Wizard Control Buttons */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep(prev => prev - 1)}
                        className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Previous Step</span>
                      </button>
                    ) : <div></div>}

                    {step < 4 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-5 py-2.5 rounded-lg bg-journal-navy hover:bg-journal-primary text-white font-bold text-xs flex items-center gap-1.5 shadow transition-colors"
                      >
                        <span>Next Step</span>
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleFinalSubmit}
                        className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg transition-colors flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Confirm & Submit Manuscript</span>
                      </button>
                    )}
                  </div>

                </div>
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
