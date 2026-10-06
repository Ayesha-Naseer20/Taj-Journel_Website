import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { UserPlus, CheckCircle2 } from 'lucide-react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    givenName: '',
    familyName: '',
    affiliation: '',
    country: 'Pakistan',
    email: '',
    username: '',
    password: '',
    repeatPassword: '',
    agreePrivacy: false,
    agreeNotifications: false,
    agreeReviewer: false,
  });

  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const countries = [
    "Pakistan", "Saudi Arabia", "United States", "United Kingdom", 
    "Egypt", "Malaysia", "Turkey", "United Arab Emirates", 
    "Qatar", "Canada", "Australia", "Germany", "Indonesia", "India", "Jordan"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.givenName || !formData.affiliation || !formData.email || !formData.username || !formData.password) {
      alert('Please fill in all required fields marked with *');
      return;
    }
    if (formData.password !== formData.repeatPassword) {
      alert('Password and Repeat password do not match.');
      return;
    }
    if (!formData.agreePrivacy) {
      alert('You must agree to the privacy statement to register.');
      return;
    }

    setIsRegistered(true);
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-journal-navy">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Register</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Registration Form Column (8 cols) */}
          <main className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 md:p-10 border border-slate-200 shadow-academic space-y-8">
              
              <div className="border-b border-slate-100 pb-4">
                <h1 className="font-serif text-3xl font-extrabold text-journal-navy">Register</h1>
                <p className="text-xs text-slate-500 mt-1">
                  Required fields are marked with an asterisk (<span className="text-red-500 font-bold">*</span>)
                </p>
              </div>

              {isRegistered ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-bold text-emerald-900">Registration Complete!</h3>
                  <p className="text-xs text-emerald-700">
                    Your account has been created successfully. Redirecting you to the Login page...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
                  
                  {/* Profile Section */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-base text-journal-navy border-b border-slate-200 pb-1.5">
                      Profile
                    </h3>

                    {/* Given Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Given Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="givenName"
                        value={formData.givenName}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                        placeholder="e.g. Dr. Muhammad"
                      />
                    </div>

                    {/* Family Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Family Name
                      </label>
                      <input
                        type="text"
                        name="familyName"
                        value={formData.familyName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                        placeholder="e.g. Al-Hashimi"
                      />
                    </div>

                    {/* Affiliation */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Affiliation <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="affiliation"
                        value={formData.affiliation}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                        placeholder="e.g. National University of Modern Languages (NUML), Islamabad"
                      />
                    </div>

                    {/* Country */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                      >
                        {countries.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Login Credentials Section */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-base text-journal-navy border-b border-slate-200 pb-1.5">
                      Login
                    </h3>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                        placeholder="author@university.edu.pk"
                      />
                    </div>

                    {/* Username */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Username <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                        placeholder="e.g. m_hashimi"
                      />
                    </div>

                    {/* Password */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700">
                          Password <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700">
                          Repeat password <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="password"
                          name="repeatPassword"
                          value={formData.repeatPassword}
                          onChange={handleChange}
                          required
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Consents / Checkboxes */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        id="agreePrivacy"
                        name="agreePrivacy"
                        checked={formData.agreePrivacy}
                        onChange={handleChange}
                        required
                        className="mt-0.5 w-4 h-4 rounded text-journal-primary focus:ring-amber-500 border-slate-300"
                      />
                      <label htmlFor="agreePrivacy" className="text-xs text-slate-700 leading-normal cursor-pointer">
                        Yes, I agree to have my data collected and stored according to the <Link to="/policies#privacy" className="text-journal-primary underline font-medium">privacy statement</Link>. <span className="text-red-500 font-bold">*</span>
                      </label>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        id="agreeNotifications"
                        name="agreeNotifications"
                        checked={formData.agreeNotifications}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 rounded text-journal-primary focus:ring-amber-500 border-slate-300"
                      />
                      <label htmlFor="agreeNotifications" className="text-xs text-slate-700 leading-normal cursor-pointer">
                        Yes, I would like to be notified of new publications and announcements.
                      </label>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        id="agreeReviewer"
                        name="agreeReviewer"
                        checked={formData.agreeReviewer}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 rounded text-journal-primary focus:ring-amber-500 border-slate-300"
                      />
                      <label htmlFor="agreeReviewer" className="text-xs text-slate-700 leading-normal cursor-pointer">
                        Yes, I would like to be contacted with requests to review submissions to this journal.
                      </label>
                    </div>
                  </div>

                  {/* Submit buttons */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-journal-navy hover:bg-journal-primary text-white font-bold text-sm shadow-md transition-colors flex items-center gap-2"
                    >
                      <UserPlus className="w-4 h-4 text-amber-400" />
                      <span>Register</span>
                    </button>
                    <Link
                      to="/login"
                      className="text-xs font-bold text-journal-primary hover:underline"
                    >
                      Login
                    </Link>
                  </div>

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
