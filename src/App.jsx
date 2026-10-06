import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ArticleViewerModal from './components/ArticleViewerModal';
import SearchModal from './components/SearchModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EditorialBoardPage from './pages/EditorialBoardPage';
import AimScopePage from './pages/AimScopePage';
import IssuesPage from './pages/IssuesPage';
import IndexedInPage from './pages/IndexedInPage';
import AuthorGuidelinesPage from './pages/AuthorGuidelinesPage';
import SubmissionsPage from './pages/SubmissionsPage';
import CallForPaperPage from './pages/CallForPaperPage';
import PoliciesPage from './pages/PoliciesPage';
import PublicationEthicsPage from './pages/PublicationEthicsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-slate-900">
      
      {/* Top Navbar */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Main Page Routes */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onSelectArticle={setSelectedArticle} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/editorial-board" element={<EditorialBoardPage />} />
          <Route path="/aim-and-scope" element={<AimScopePage />} />
          <Route path="/issues" element={<IssuesPage onSelectArticle={setSelectedArticle} />} />
          <Route path="/indexed-in" element={<IndexedInPage />} />
          <Route path="/author-guidelines" element={<AuthorGuidelinesPage />} />
          <Route path="/submissions" element={<SubmissionsPage />} />
          <Route path="/call-for-paper" element={<CallForPaperPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/publication-ethics" element={<PublicationEthicsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ArticleViewerModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onSelectArticle={setSelectedArticle} 
      />

    </div>
  );
}
