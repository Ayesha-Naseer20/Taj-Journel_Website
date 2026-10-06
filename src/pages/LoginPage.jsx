import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { LogIn, Key, Mail, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usernameOrEmail || !password) {
      alert('Please fill in all required fields marked with *');
      return;
    }
    setIsSuccess(true);
    setTimeout(() => {
      navigate('/submissions');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-journal-navy">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Login</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Login Form Column (8 cols) */}
          <main className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 md:p-10 border border-slate-200 shadow-academic space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <h1 className="font-serif text-3xl font-extrabold text-journal-navy">Login</h1>
                <p className="text-xs text-slate-500 mt-1">
                  Required fields are marked with an asterisk (<span className="text-red-500 font-bold">*</span>)
                </p>
              </div>

              {isSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-emerald-900">Login Successful!</h3>
                  <p className="text-xs text-emerald-700">Redirecting to your Author & Reviewer Dashboard...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
                  
                  {/* Username or Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Username or Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={usernameOrEmail}
                        onChange={(e) => setUsernameOrEmail(e.target.value)}
                        required
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                        placeholder="Enter your registered username or email"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                      placeholder="••••••••"
                    />
                    <div className="text-right">
                      <a href="#forgot" onClick={(e) => {e.preventDefault(); alert("Password reset link sent to your registered email.");}} className="text-xs text-journal-primary hover:underline font-medium">
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  {/* Keep me logged in checkbox */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="keepLoggedIn"
                      checked={keepLoggedIn}
                      onChange={(e) => setKeepLoggedIn(e.target.checked)}
                      className="w-4 h-4 rounded text-journal-primary focus:ring-amber-500 border-slate-300"
                    />
                    <label htmlFor="keepLoggedIn" className="text-xs text-slate-700 font-medium cursor-pointer">
                      Keep me logged in
                    </label>
                  </div>

                  {/* Action buttons matching screenshot: Login button & Register link */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-journal-navy hover:bg-journal-primary text-white font-bold text-sm shadow-md transition-colors flex items-center gap-2"
                    >
                      <LogIn className="w-4 h-4 text-amber-400" />
                      <span>Login</span>
                    </button>
                    <Link
                      to="/register"
                      className="text-xs font-bold text-journal-primary hover:underline"
                    >
                      Register
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
