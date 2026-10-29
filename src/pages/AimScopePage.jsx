import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Target, CheckCircle2, Globe, BookOpen, Brain, Heart, Users, Lightbulb, BookMarked, GraduationCap, Layers, FlaskConical } from 'lucide-react';

export default function AimScopePage() {

  const scopeA = [
    {
      title: "Religious Studies & Comparative Religion",
      desc: "Covers the academic study of religions, religious traditions, beliefs, practices, institutions, comparative religion, interreligious relations, religious experience, and contemporary religious thought."
    },
    {
      title: "Qur'anic & Hadith Studies",
      desc: "Covers Qur'anic studies, Tafsir, Ulum al-Qur'an, Hadith studies, Ulum al-Hadith, Prophetic traditions, interpretation, authentication, and contemporary approaches to Qur'an and Hadith."
    },
    {
      title: "Seerah, Islamic History & Civilization",
      desc: "Covers the Seerah of the Prophet Muhammad ﷺ, Islamic history, Muslim societies, Islamic civilization, intellectual heritage, historical development, and the social and cultural dimensions of Islamic history."
    },
    {
      title: "Islamic Thought, Philosophy & Jurisprudence",
      desc: "Covers Islamic theology, philosophy, ethics, Fiqh, Usul al-Fiqh, Maqasid al-Shariah, Islamic intellectual traditions, and contemporary developments in Islamic thought."
    },
    {
      title: "Religion, Ethics & Contemporary Society",
      desc: "Covers religion and society, religious ethics, religious identity, interfaith relations, religion and culture, religion and social change, contemporary religious issues, and the role of religion in modern societies."
    }
  ];

  const scopeB = [
    {
      title: "General & Applied Psychology",
      desc: "Covers foundational theories, principles, methods, and applications of psychology in individual, educational, professional, organizational, and social contexts."
    },
    {
      title: "Social, Cultural & Behavioral Psychology",
      desc: "Covers human behavior, social interaction, group dynamics, culture, identity, attitudes, relationships, social influence, and behavioral processes."
    },
    {
      title: "Cognitive & Developmental Psychology",
      desc: "Covers cognition, perception, memory, learning, intelligence, language, personality development, and psychological development across the lifespan."
    },
    {
      title: "Clinical, Counseling & Health Psychology",
      desc: "Covers mental health, psychological disorders, counseling, psychotherapy, psychological assessment, health behavior, stress, trauma, and psychological interventions."
    },
    {
      title: "Positive Psychology & Psychological Well-being",
      desc: "Covers happiness, resilience, emotional well-being, meaning and purpose, human strengths, flourishing, mindfulness, quality of life, and positive human development."
    }
  ];

  const scopeC = [
    {
      title: "Psychology of Religion & Religious Experience",
      desc: "Covers religious beliefs, religious experience, spirituality, faith development, religious practices, conversion, religiosity, and the psychological dimensions of religion."
    },
    {
      title: "Religion, Spirituality & Psychological Well-being",
      desc: "Covers the relationship between religion, spirituality, mental health, emotional well-being, life satisfaction, meaning, purpose, and human flourishing."
    },
    {
      title: "Religious Coping, Resilience & Mental Health",
      desc: "Covers religious coping, resilience, stress, trauma, grief, adversity, psychological adjustment, and the role of faith and spirituality in mental health."
    },
    {
      title: "Religion, Human Behavior & Psychological Development",
      desc: "Covers the influence of religious beliefs and practices on personality, cognition, emotions, moral development, identity formation, interpersonal behavior, and human development."
    },
    {
      title: "Religion, Psychology & Contemporary Society",
      desc: "Covers religion and contemporary psychological challenges, family and youth issues, digital religion, social media, technology, religious identity, interfaith relations, and emerging psychosocial issues."
    }
  ];

  const ScopeCard = ({ index, item, accentColor, borderColor, bgColor, dotColor }) => (
    <div className={`p-4 rounded-xl border ${borderColor} ${bgColor} hover:shadow-md transition-all duration-300 space-y-1.5`}>
      <div className="flex items-start gap-3">
        <span className={`w-6 h-6 rounded-full ${dotColor} text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5`}>
          {index + 1}
        </span>
        <div>
          <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
          <p className="text-xs text-slate-600 leading-relaxed mt-1">{item.desc}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-journal-navy">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Aims and Scope</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content (8 cols) */}
          <main className="lg:col-span-8 space-y-8">
            
            {/* Header Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-8">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="px-2.5 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded uppercase">
                  Aims and Scope
                </span>
                <h1 className="font-serif text-3xl font-extrabold text-journal-navy mt-2">
                  Aims and Scope
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Taj Journal of Religion and Psychology (TJRP) — Scope guidelines for research manuscripts.
                </p>
              </div>

              {/* ─── AIM SECTION ─── */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center">
                    <Target className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-journal-navy">Aim</h2>
                </div>

                <div className="text-sm text-slate-700 leading-relaxed space-y-4 font-sans">
                  <p>
                    <strong className="text-journal-navy">Taj Journal of Religion and Psychology (TJRP)</strong> is an international, peer-reviewed, multidisciplinary research journal published by the <strong>Taj Islamic Research Center (TIRC)</strong>. The journal aims to promote rigorous and innovative scholarship at the intersection of Religion, Islamic Studies, Psychology, and related interdisciplinary fields.
                  </p>
                  <p>
                    TJRP provides a scholarly platform for original theoretical, empirical, conceptual, qualitative, quantitative, comparative, historical, and interdisciplinary research that examines religion and psychology as influential dimensions of human thought, behavior, experience, well-being, ethics, identity, and social life.
                  </p>
                  <p>
                    The journal particularly seeks to advance research that explores the relationship between religious beliefs, spirituality, psychological processes, human behavior, mental and emotional well-being, ethical development, culture, and contemporary society. It welcomes scholarship from diverse intellectual and methodological traditions, with particular attention to research that contributes to meaningful dialogue between religious knowledge and psychological sciences.
                  </p>
                  <p>
                    TJRP also encourages research addressing emerging issues such as digital religion, artificial intelligence, technology, changing patterns of religious engagement, contemporary psychological challenges, and the evolving relationship between religion and human well-being.
                  </p>
                </div>
              </div>
            </div>


            {/* ─── SCOPE SECTION ─── */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-8">
              
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-journal-navy">Scope</h2>
                    <p className="text-xs text-slate-500 mt-0.5">TJRP welcomes high-quality original research across the following three broad areas:</p>
                  </div>
                </div>
              </div>

              {/* ─── A. Religion & Islamic Studies ─── */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-l-4 border-emerald-600 pl-4 py-1">
                  <BookMarked className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Section A</span>
                    <h3 className="font-serif text-lg font-bold text-slate-900">Religion & Islamic Studies</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {scopeA.map((item, index) => (
                    <ScopeCard
                      key={index}
                      index={index}
                      item={item}
                      borderColor="border-emerald-200"
                      bgColor="bg-emerald-50/50"
                      dotColor="bg-emerald-600"
                    />
                  ))}
                </div>
              </div>

              {/* ─── B. Psychology ─── */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 border-l-4 border-blue-600 pl-4 py-1">
                  <Brain className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Section B</span>
                    <h3 className="font-serif text-lg font-bold text-slate-900">Psychology</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {scopeB.map((item, index) => (
                    <ScopeCard
                      key={index}
                      index={index}
                      item={item}
                      borderColor="border-blue-200"
                      bgColor="bg-blue-50/50"
                      dotColor="bg-blue-600"
                    />
                  ))}
                </div>
              </div>

              {/* ─── C. Interdisciplinary Religion & Psychology ─── */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 border-l-4 border-purple-600 pl-4 py-1">
                  <Layers className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">Section C</span>
                    <h3 className="font-serif text-lg font-bold text-slate-900">Interdisciplinary Religion & Psychology</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {scopeC.map((item, index) => (
                    <ScopeCard
                      key={index}
                      index={index}
                      item={item}
                      borderColor="border-purple-200"
                      bgColor="bg-purple-50/50"
                      dotColor="bg-purple-600"
                    />
                  ))}
                </div>
              </div>
            </div>


            {/* ─── METHODOLOGICAL ORIENTATION ─── */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-academic space-y-5">
              
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center">
                  <FlaskConical className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-journal-navy">Interdisciplinary and Methodological Orientation</h2>
              </div>

              <div className="text-sm text-slate-700 leading-relaxed space-y-4 font-sans">
                <p>
                  TJRP welcomes research employing diverse methodological and theoretical approaches, including qualitative, quantitative, mixed-methods, comparative, historical, textual, experimental, survey-based, case-study, and interdisciplinary approaches.
                </p>
                <p>
                  The journal encourages meaningful engagement between Islamic intellectual traditions, religious studies, and contemporary psychological sciences, while maintaining academic rigor, methodological transparency, ethical research practices, and scholarly independence.
                </p>
                <p>
                  TJRP particularly welcomes studies that contribute new theoretical perspectives, empirical evidence, methodological innovation, or practical insights into the relationship between religion, psychology, human well-being, and society.
                </p>
                <p>
                  The journal is open to contributions from scholars and researchers worldwide and seeks to foster cross-cultural, interreligious, and interdisciplinary dialogue on religion and psychology.
                </p>
              </div>

              {/* Methodological Tags */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                {[
                  "Qualitative", "Quantitative", "Mixed-Methods", "Comparative",
                  "Historical", "Textual", "Experimental", "Survey-Based",
                  "Case-Study", "Interdisciplinary"
                ].map((method, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium border border-slate-200 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-800 transition-colors cursor-default"
                  >
                    {method}
                  </span>
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
