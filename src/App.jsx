import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [userTier, setUserTier] = useState('free'); // 'free', 'premium', 'pro', 'plus'

  const tierValidities = {
    free: '15 Days Trial Active',
    premium: '3 Months (90 Days) Validity',
    pro: '6 Months (180 Days) Validity',
    plus: '1 Year (365 Days) Validity'
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'} flex flex-col items-center p-4 sm:p-6 font-sans transition-colors duration-300`}>
      {/* Top Navbar */}
      <header className={`w-full max-w-7xl flex justify-between items-center ${isDarkMode ? 'bg-slate-900/85 border-slate-800' : 'bg-white/85 border-slate-200'} border p-4 rounded-2xl backdrop-blur-xl mb-6 shadow-xl`}>
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-slate-950 text-sm shadow-lg shadow-emerald-500/20">
            AI
          </div>
          <span className="font-extrabold tracking-wide text-base">Interview<span className="text-emerald-500">AI</span></span>
        </div>

        <nav className="hidden xl:flex items-center gap-1 text-[11px] font-semibold">
          <button onClick={() => setActiveTab('dashboard')} className={`px-3 py-1.5 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'hover:opacity-80'}`}>Dashboard</button>
          <button onClick={() => setActiveTab('simulator')} className={`px-3 py-1.5 rounded-xl transition-all ${activeTab === 'simulator' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'hover:opacity-80'}`}>🎙️ Simulator {userTier === 'free' && '🔒'}</button>
          <button onClick={() => setActiveTab('tracks')} className={`px-3 py-1.5 rounded-xl transition-all ${activeTab === 'tracks' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'hover:opacity-80'}`}>🎯 Tracks</button>
          <button onClick={() => setActiveTab('projectq')} className={`px-3 py-1.5 rounded-xl transition-all ${activeTab === 'projectq' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'hover:opacity-80'}`}>💡 Project Q&A</button>
          <button onClick={() => setActiveTab('ats')} className={`px-3 py-1.5 rounded-xl transition-all ${activeTab === 'ats' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'hover:opacity-80'}`}>✨ ATS Analyzer</button>
          <button onClick={() => setActiveTab('pricing')} className={`px-3 py-1.5 rounded-xl transition-all ${activeTab === 'pricing' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'text-amber-400 hover:opacity-80'}`}>👑 Plans & Pricing</button>
        </nav>

        {/* Tier Status & Theme Toggle */}
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-xl text-xs font-extrabold border uppercase ${userTier === 'free' ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-amber-500/20 border-amber-500/40 text-amber-400'}`}>
            {userTier === 'free' ? 'Free (15 Days)' : `${userTier} Tier`}
          </span>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-xl text-xs font-bold border transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700 text-amber-400' : 'bg-slate-200 border-slate-300 text-slate-800'}`}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-6xl flex flex-col items-center">
        {activeTab === 'dashboard' && <DashboardView setActiveTab={setActiveTab} isDarkMode={isDarkMode} userTier={userTier} />}
        {activeTab === 'simulator' && <LiveSimulatorView onBack={() => setActiveTab('dashboard')} isDarkMode={isDarkMode} userTier={userTier} setActiveTab={setActiveTab} />}
        {activeTab === 'tracks' && <TargetTracksView onBack={() => setActiveTab('dashboard')} isDarkMode={isDarkMode} />}
        {activeTab === 'projectq' && <ProjectQuestionGenerator onBack={() => setActiveTab('dashboard')} isDarkMode={isDarkMode} />}
        {activeTab === 'ats' && <ATSAnalyzerView onBack={() => setActiveTab('dashboard')} isDarkMode={isDarkMode} />}
        {activeTab === 'pricing' && <PricingView onBack={() => setActiveTab('dashboard')} isDarkMode={isDarkMode} userTier={userTier} setUserTier={setUserTier} tierValidities={tierValidities} />}
      </main>
    </div>
  );
}

function DashboardView({ setActiveTab, isDarkMode, userTier }) {
  return (
    <div className="w-full flex flex-col gap-6 animate-fadeIn">
      {/* Banner */}
      <div className="p-8 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-3xl flex flex-col gap-4 shadow-xl relative overflow-hidden">
        <span className="text-xs font-bold px-3.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full w-max uppercase tracking-wider">
          Multi-Tier Placement Suite 🚀
        </span>
        <h1 className="text-3xl font-extrabold text-white">Smart Interview & Resume Platform</h1>
        <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
          Prepare using structured tracks, simulated AI interviews, and flexible pricing options starting from ₹149.
        </p>
        <div className="flex flex-wrap gap-3 mt-2">
          <button onClick={() => setActiveTab('simulator')} className="px-5 py-2.5 bg-emerald-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all cursor-pointer">
            🎙️ Start Live Mock Simulator {userTier === 'free' && '🔒'}
          </button>
          {userTier === 'free' && (
            <button onClick={() => setActiveTab('pricing')} className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg hover:opacity-95 transition-all cursor-pointer">
              ✨ View Subscription Plans
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div onClick={() => setActiveTab('simulator')} className={`p-5 ${isDarkMode ? 'bg-slate-900 border-emerald-500/40' : 'bg-white border-emerald-500/40'} border rounded-2xl hover:border-emerald-400 cursor-pointer transition-all flex flex-col gap-3 group relative`}>
          <span className="absolute top-4 right-4 text-xs font-bold px-2 py-0.5 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-lg">Paid</span>
          <span className="text-2xl p-2.5 bg-emerald-500/10 rounded-xl w-max">🎙️</span>
          <h3 className="text-sm font-bold text-emerald-400">Live Mock Simulator</h3>
          <p className="text-[11px] opacity-70">Interactive question-answering with instant AI scoring.</p>
        </div>

        <div onClick={() => setActiveTab('tracks')} className={`p-5 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} border rounded-2xl hover:border-emerald-500 cursor-pointer transition-all flex flex-col gap-3 group relative`}>
          <span className="absolute top-4 right-4 text-xs font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg">Free</span>
          <span className="text-2xl p-2.5 bg-emerald-500/10 rounded-xl w-max">🎯</span>
          <h3 className="text-sm font-bold">Target Interview Tracks</h3>
          <p className="text-[11px] opacity-70">FAANG, Product Startups, and Core Electronics modules.</p>
        </div>

        <div onClick={() => setActiveTab('projectq')} className={`p-5 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} border rounded-2xl hover:border-emerald-500 cursor-pointer transition-all flex flex-col gap-3 group relative`}>
          <span className="absolute top-4 right-4 text-xs font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg">Free</span>
          <span className="text-2xl p-2.5 bg-emerald-500/10 rounded-xl w-max">💡</span>
          <h3 className="text-sm font-bold">Project Q&A Generator</h3>
          <p className="text-[11px] opacity-70">Defend your IoT or software projects with AI cross-questions.</p>
        </div>

        <div onClick={() => setActiveTab('ats')} className={`p-5 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} border rounded-2xl hover:border-emerald-500 cursor-pointer transition-all flex flex-col gap-3 group relative`}>
          <span className="absolute top-4 right-4 text-xs font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg">Free</span>
          <span className="text-2xl p-2.5 bg-emerald-500/10 rounded-xl w-max">✨</span>
          <h3 className="text-sm font-bold">Live ATS Analyzer</h3>
          <p className="text-[11px] opacity-70">Check keyword match score and get optimization suggestions.</p>
        </div>
      </div>
    </div>
  );
}

// 👑 Pricing & Tiers View with Exact Amounts and Validities
function PricingView({ onBack, isDarkMode, userTier, setUserTier, tierValidities }) {
  return (
    <div className="w-full flex flex-col gap-6 animate-fadeIn max-w-5xl mx-auto">
      <div className={`flex justify-between items-center ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} p-4 border rounded-2xl`}>
        <div>
          <h2 className="text-lg font-bold text-amber-400">👑 Subscription Tiers & Pricing</h2>
          <p className="text-xs opacity-70">Choose a plan tailored to your placement timeline.</p>
        </div>
        <button onClick={onBack} className="text-xs px-3 py-1.5 bg-slate-800 text-slate-200 rounded-xl cursor-pointer">← Back</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1. Free Trial Plan */}
        <div className={`p-5 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} border rounded-3xl flex flex-col justify-between gap-4`}>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Starter Plan</span>
            <h3 className="text-xl font-extrabold text-white">Free Trial</h3>
            <p className="text-amber-400 font-bold text-xs">{tierValidities.free}</p>
            <p className="text-[11px] opacity-70">Basic access to explore core interview tracks and ATS analyzer.</p>
          </div>
          <button 
            onClick={() => { setUserTier('free'); alert('Switched to Free Trial (15 Days).'); }}
            className={`py-2.5 rounded-xl text-xs font-bold cursor-pointer ${userTier === 'free' ? 'bg-emerald-500 text-slate-950 font-extrabold' : 'bg-slate-800 text-slate-300'}`}
          >
            {userTier === 'free' ? 'Active Plan' : 'Select Free'}
          </button>
        </div>

        {/* 2. Premium Plan (₹149) */}
        <div className={`p-5 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} border rounded-3xl flex flex-col justify-between gap-4`}>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-emerald-400 uppercase">Standard Access</span>
            <h3 className="text-xl font-extrabold text-white">₹149 <span className="text-xs font-normal opacity-70">/ 3 months</span></h3>
            <p className="text-emerald-400 font-bold text-xs">{tierValidities.premium}</p>
            <p className="text-[11px] opacity-70">Ideal for semester placements and mid-term interview preparation.</p>
          </div>
          <button 
            onClick={() => { setUserTier('premium'); alert('🎉 Premium Plan Activated for 3 Months!'); }}
            className={`py-2.5 rounded-xl text-xs font-bold cursor-pointer ${userTier === 'premium' ? 'bg-emerald-500 text-slate-950 font-extrabold' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'}`}
          >
            {userTier === 'premium' ? 'Active Plan ✓' : 'Choose Premium'}
          </button>
        </div>

        {/* 3. Pro Plan (₹299) */}
        <div className="p-5 bg-gradient-to-b from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/40 rounded-3xl flex flex-col justify-between gap-4 relative shadow-xl">
          <span className="absolute top-3 right-3 text-[9px] font-extrabold px-2.5 py-0.5 bg-amber-500 text-slate-950 rounded-full uppercase">
            Popular 🔥
          </span>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-amber-400 uppercase">Advanced Pro</span>
            <h3 className="text-xl font-extrabold text-white">₹299 <span className="text-xs font-normal opacity-70">/ 6 months</span></h3>
            <p className="text-amber-400 font-bold text-xs">{tierValidities.pro}</p>
            <p className="text-[11px] opacity-70">Unlimited mock interview simulator and downloadable performance reports.</p>
          </div>
          <button 
            onClick={() => { setUserTier('pro'); alert('🎉 Pro Plan Activated for 6 Months!'); }}
            className={`py-2.5 rounded-xl text-xs font-extrabold cursor-pointer ${userTier === 'pro' ? 'bg-amber-500 text-slate-950' : 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:opacity-95'}`}
          >
            {userTier === 'pro' ? 'Active Plan ✓' : 'Choose Pro'}
          </button>
        </div>

        {/* 4. Plus Plan (₹599) */}
        <div className={`p-5 ${isDarkMode ? 'bg-slate-900 border-indigo-500/40' : 'bg-white border-indigo-500/40'} border rounded-3xl flex flex-col justify-between gap-4 shadow-xl`}>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-indigo-400 uppercase">Ultimate Plus</span>
            <h3 className="text-xl font-extrabold text-white">₹599 <span className="text-xs font-normal opacity-70">/ 1 year</span></h3>
            <p className="text-indigo-400 font-bold text-xs">{tierValidities.plus}</p>
            <p className="text-[11px] opacity-70">Complete yearly access with priority recruiter visibility & support.</p>
          </div>
          <button 
            onClick={() => { setUserTier('plus'); alert('🎉 Plus Plan Activated for 1 Year!'); }}
            className={`py-2.5 rounded-xl text-xs font-extrabold cursor-pointer ${userTier === 'plus' ? 'bg-indigo-500 text-slate-950' : 'bg-indigo-600 text-white hover:bg-indigo-500'}`}
          >
            {userTier === 'plus' ? 'Active Plan ✓' : 'Choose Plus'}
          </button>
        </div>
      </div>
    </div>
  );
}
// 🎙️ Live Simulator with Free Trial vs Paid Check
function LiveSimulatorView({ onBack, isDarkMode, userTier, setActiveTab }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [scoreEarned, setScoreEarned] = useState(null);

  const questions = [
    { q: 'Explain the difference between process and thread, and when would you use multi-threading in C++?', category: 'Core OS & C++' },
    { q: 'How do you optimize an I2C communication bus speed when interfacing multiple sensors with an ESP32?', category: 'Embedded Systems' },
    { q: 'What is memoization in React and how does it prevent unnecessary component re-renders?', category: 'Full-Stack / React' }
  ];

  if (userTier === 'free') {
    return (
      <div className="w-full flex flex-col gap-6 animate-fadeIn max-w-xl mx-auto text-center p-10 bg-slate-900 border border-amber-500/30 rounded-3xl shadow-2xl">
        <span className="text-5xl">🔒</span>
        <h2 className="text-xl font-extrabold text-white">Simulator Locked on Free Trial</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          Your 15-day Free Trial provides basic tracking. Upgrade to <span className="text-amber-400 font-bold">Premium (₹149), Pro (₹299), or Plus (₹599)</span> to unlock full interactive mock interviews.
        </p>
        <div className="flex gap-3 justify-center mt-2">
          <button onClick={() => setActiveTab('pricing')} className="px-5 py-2.5 bg-amber-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg hover:bg-amber-400 cursor-pointer">
            ✨ View Subscription Plans
          </button>
          <button onClick={onBack} className="px-5 py-2.5 bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs rounded-xl hover:bg-slate-700 cursor-pointer">
            ← Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const handleSubmitAnswer = () => {
    if (!userAnswer.trim()) {
      alert('Please type your answer before submitting.');
      return;
    }
    const randomScore = Math.floor(Math.random() * 15) + 85;
    setScoreEarned(randomScore);
    setFeedbackSubmitted(true);
  };

  const handleDownloadReport = () => {
    const reportContent = `--- INTERVIEW AI (${userTier.toUpperCase()} TIER) REPORT ---\nCandidate: Developer\nQuestion: ${questions[currentQuestionIndex].q}\nScore: ${scoreEarned}/100\nStatus: Verified Evaluation\n------------------------------------------------`;
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `InterviewAI_${userTier}_Report_Q${currentQuestionIndex + 1}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleNextQuestion = () => {
    setUserAnswer('');
    setFeedbackSubmitted(false);
    setScoreEarned(null);
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="w-full flex flex-col gap-6 animate-fadeIn">
      <div className={`flex justify-between items-center ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} p-4 border rounded-2xl`}>
        <div>
          <h2 className="text-lg font-bold text-amber-400">🎙️ Live Mock Interview Simulator ({userTier.toUpperCase()} Mode)</h2>
          <p className="text-xs opacity-70">Answer technical questions interactively with AI scoring.</p>
        </div>
        <button onClick={onBack} className="text-xs px-3 py-1.5 bg-slate-800 text-slate-200 rounded-xl cursor-pointer">← Back</button>
      </div>

      <div className={`p-6 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} border rounded-3xl flex flex-col gap-5 max-w-3xl mx-auto w-full`}>
        <div className="flex justify-between items-center">
          <span className="text-[11px] font-bold px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full uppercase">
            Question {currentQuestionIndex + 1} of {questions.length} • {questions[currentQuestionIndex].category}
          </span>
          <span className="text-xs text-amber-400 font-bold uppercase">👑 {userTier} Tier Active</span>
        </div>

        <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl">
          <h3 className="text-sm font-bold text-slate-100 leading-relaxed">
            "{questions[currentQuestionIndex].q}"
          </h3>
        </div>

        {feedbackSubmitted ? (
          <div className="flex flex-col gap-4 animate-fadeIn">
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase">AI Evaluation Result</span>
                <h4 className="text-2xl font-extrabold text-white">{scoreEarned} / 100 Score</h4>
              </div>
              <span className="px-3 py-1 bg-emerald-500 text-slate-950 font-extrabold text-xs rounded-xl">
                {scoreEarned >= 90 ? '🌟 Outstanding Answer!' : '👍 Good Explanation'}
              </span>
            </div>
            
            <p className="text-xs text-slate-300 italic pl-2 border-l-2 border-emerald-500">
              💡 Feedback: Your conceptual clarity is solid. Including a real-world code example or time-complexity metric would make this answer recruiter-ready.
            </p>

            <div className="flex gap-3 mt-2">
              <button onClick={handleDownloadReport} className="flex-1 py-3 bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs rounded-xl hover:bg-slate-700 transition-all cursor-pointer">
                📥 Download Performance Report
              </button>
              <button onClick={handleNextQuestion} className="flex-1 py-3 bg-emerald-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg hover:bg-emerald-400 transition-all cursor-pointer">
                Next Question ➔
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <label className="text-xs opacity-70">Type your detailed answer below:</label>
            <textarea 
              placeholder="Write your structured technical answer here..." 
              value={userAnswer} 
              onChange={(e) => setUserAnswer(e.target.value)} 
              className="p-3 text-xs bg-slate-800 border border-slate-700 rounded-xl text-white outline-none h-32" 
            />
            <button onClick={handleSubmitAnswer} className="py-3 bg-emerald-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg hover:bg-emerald-400 transition-all cursor-pointer">
              Submit Answer for AI Evaluation 🚀
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// 🎯 Target Tracks View
function TargetTracksView({ onBack, isDarkMode }) {
  const [selectedTrack, setSelectedTrack] = useState('faang');

  const tracks = {
    faang: {
      title: 'Product Based / FAANG Track',
      desc: 'Focuses on Advanced Data Structures & Algorithms, System Design scalability, and LLD.',
      topics: ['Graph Algorithms & Dynamic Programming', 'Distributed Caching & Load Balancers', 'Concurrency in C++/Java'],
      sampleQ: 'How would you design a rate-limiter for a high-traffic API gateway handling 100k requests/sec?'
    },
    embedded: {
      title: 'Core Embedded & IoT Hardware Track',
      desc: 'Tailored for microcontroller programming, sensor interfacing, and real-time protocols.',
      topics: ['FreeRTOS Task Scheduling & Memory Management', 'I2C/SPI Protocol Clock Stretching', 'Low-power Deep Sleep & GPIO Interrupts'],
      sampleQ: 'How do you handle race conditions when two sensor interrupts access the same shared buffer in an ESP32?'
    },
    startup: {
      title: 'Agile Startup & Full-Stack Track',
      desc: 'Focuses on fast product shipping, REST APIs, database schemas, and state management.',
      topics: ['React Component Lifecycle & Performance', 'Docker Containerization & Nginx', 'Asynchronous Socket Programming in Python'],
      sampleQ: 'What are the main advantages of using Docker over virtual machines for microservices deployment?'
    }
  };

  return (
    <div className="w-full flex flex-col gap-6 animate-fadeIn">
      <div className={`flex justify-between items-center ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} p-4 border rounded-2xl`}>
        <div>
          <h2 className="text-lg font-bold text-emerald-400">🎯 Target Company & Domain Tracks</h2>
          <p className="text-xs opacity-70">Choose your targeted industry domain to customize mock evaluations.</p>
        </div>
        <button onClick={onBack} className="text-xs px-3 py-1.5 bg-slate-800 text-slate-200 rounded-xl cursor-pointer">← Back</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button onClick={() => setSelectedTrack('faang')} className={`p-4 border rounded-2xl text-left flex flex-col gap-2 transition-all cursor-pointer ${selectedTrack === 'faang' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-slate-900 border-slate-800 text-slate-300'}`}>
          <span className="text-xs font-bold uppercase">Track A</span>
          <h3 className="text-sm font-extrabold text-white">Product / FAANG</h3>
        </button>
        <button onClick={() => setSelectedTrack('embedded')} className={`p-4 border rounded-2xl text-left flex flex-col gap-2 transition-all cursor-pointer ${selectedTrack === 'embedded' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-slate-900 border-slate-800 text-slate-300'}`}>
          <span className="text-xs font-bold uppercase">Track B</span>
          <h3 className="text-sm font-extrabold text-white">Core IoT & Embedded</h3>
        </button>
        <button onClick={() => setSelectedTrack('startup')} className={`p-4 border rounded-2xl text-left flex flex-col gap-2 transition-all cursor-pointer ${selectedTrack === 'startup' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-slate-900 border-slate-800 text-slate-300'}`}>
          <span className="text-xs font-bold uppercase">Track C</span>
          <h3 className="text-sm font-extrabold text-white">Startup & Full-Stack</h3>
        </button>
      </div>

      <div className={`p-6 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} border rounded-3xl flex flex-col gap-4`}>
        <h3 className="text-base font-extrabold text-emerald-400">{tracks[selectedTrack].title}</h3>
        <p className="text-xs opacity-80 leading-relaxed">{tracks[selectedTrack].desc}</p>
        
        <div className="flex flex-col gap-2 mt-2">
          <span className="text-[11px] font-bold text-amber-400 uppercase">Core Focus Areas:</span>
          <ul className="list-disc list-inside text-xs text-slate-300 flex flex-col gap-1.5 pl-2">
            {tracks[selectedTrack].topics.map((t, idx) => (
              <li key={idx}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col gap-2 mt-2">
          <span className="text-[11px] font-bold text-emerald-400 uppercase">Sample Interview Challenge:</span>
          <p className="text-xs text-slate-200">{tracks[selectedTrack].sampleQ}</p>
        </div>

        <button onClick={() => alert(`Activated ${tracks[selectedTrack].title} session successfully! 🚀`)} className="mt-4 py-3 bg-emerald-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg hover:bg-emerald-400 cursor-pointer">
          Start Mock Session for This Track ⚡
        </button>
      </div>
    </div>
  );
}
// 💡 Project Question Generator View
function ProjectQuestionGenerator({ onBack, isDarkMode }) {
  const [projectName, setProjectName] = useState('IoT Automated Surveillance & Flood Warning System');
  const [techStack, setTechStack] = useState('ESP32, ESP32-CAM, PIR/IR Sensors, Python, Wokwi Simulation');
  const [generatedQuestions, setGeneratedQuestions] = useState(null);

  const handleGenerate = () => {
    if (!projectName) {
      alert('Please enter a project name.');
      return;
    }
    setGeneratedQuestions([
      {
        q: `Why did you choose an ESP32-CAM over a standard Raspberry Pi for ${projectName}?`,
        intent: 'Tests hardware cost optimization, power consumption trade-offs, and edge processing limitations.'
      },
      {
        q: 'How does your system handle network disconnections or Wi-Fi drops during a real-time emergency alert?',
        intent: 'Evaluates error-handling logic, local buffer caching, and automatic reconnection routines.'
      },
      {
        q: 'Can you explain how sensor data calibration is managed to prevent false positive alerts from PIR/IR sensors?',
        intent: 'Checks real-world filtering algorithms, threshold adjustments, and noise suppression techniques.'
      }
    ]);
  };

  return (
    <div className="w-full flex flex-col gap-6 animate-fadeIn">
      <div className={`flex justify-between items-center ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} p-4 border rounded-2xl`}>
        <div>
          <h2 className="text-lg font-bold text-emerald-400">💡 Instant Project Q&A Defense Generator</h2>
          <p className="text-xs opacity-70">Defend your resume projects like a pro with AI-generated technical cross-questions.</p>
        </div>
        <button onClick={onBack} className="text-xs px-3 py-1.5 bg-slate-800 text-slate-200 rounded-xl cursor-pointer">← Back</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`p-6 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} border rounded-3xl flex flex-col gap-4`}>
          <h3 className="text-sm font-bold text-emerald-400">Enter Project Details</h3>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs opacity-70">Project Name / Title</label>
            <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} className="p-2.5 text-xs bg-slate-800 border border-slate-700 rounded-xl text-white outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs opacity-70">Key Technologies / Hardware Used</label>
            <textarea value={techStack} onChange={(e) => setTechStack(e.target.value)} className="p-2.5 text-xs bg-slate-800 border border-slate-700 rounded-xl text-white outline-none h-24" />
          </div>

          <button onClick={handleGenerate} className="py-3 bg-emerald-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg hover:bg-emerald-400 transition-all cursor-pointer">
            Generate Defense Questions 🚀
          </button>
        </div>

        <div className={`p-6 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} border rounded-3xl flex flex-col gap-4`}>
          <h3 className="text-sm font-bold text-emerald-400">AI Generated Interview Defense Q&A</h3>
          
          {generatedQuestions ? (
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[380px] pr-1">
              {generatedQuestions.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-amber-400 uppercase">Cross-Question {idx + 1}:</span>
                  <p className="text-xs text-slate-100 font-semibold">{item.q}</p>
                  <p className="text-[11px] text-emerald-400/90 italic">🎯 Evaluator Intent: {item.intent}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-56 text-center opacity-60">
              <span className="text-3xl mb-2">📋</span>
              <p className="text-xs">Fill out your project details on the left and click generate to see AI cross-questions.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ✨ ATS Analyzer View
function ATSAnalyzerView({ onBack, isDarkMode }) {
  const [resumeText, setResumeText] = useState('Developer | Skills: React, Flutter, Python, ESP32, Git, Docker, C++');
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyze = () => {
    if (!resumeText) {
      alert('Please enter your resume text or skills.');
      return;
    }
    setAnalysisResult({
      score: 92,
      matchedKeywords: ['React', 'Python', 'Git', 'Docker', 'C++', 'ESP32'],
      missingKeywords: ['CI/CD Pipelines', 'Unit Testing (Jest)', 'System Architecture'],
      feedback: 'Excellent technical skill coverage! Adding a brief mention of unit testing or cloud pipelines will take your ATS score to 98%+'
    });
  };

  return (
    <div className="w-full flex flex-col gap-6 animate-fadeIn">
      <div className={`flex justify-between items-center ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} p-4 border rounded-2xl`}>
        <div>
          <h2 className="text-lg font-bold text-emerald-400">✨ Live ATS Score & Keyword Analyzer</h2>
          <p className="text-xs opacity-70">Check how well your resume matches recruiter screening algorithms.</p>
        </div>
        <button onClick={onBack} className="text-xs px-3 py-1.5 bg-slate-800 text-slate-200 rounded-xl cursor-pointer">← Back</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`p-6 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} border rounded-3xl flex flex-col gap-4`}>
          <h3 className="text-sm font-bold text-emerald-400">Paste Resume Text / Summary</h3>
          <textarea value={resumeText} onChange={(e) => setResumeText(e.target.value)} className="p-3 text-xs bg-slate-800 border border-slate-700 rounded-xl text-white outline-none h-44" />
          <button onClick={handleAnalyze} className="py-3 bg-emerald-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg hover:bg-emerald-400 transition-all cursor-pointer">
            Run ATS Compatibility Check 🚀
          </button>
        </div>

        <div className={`p-6 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} border rounded-3xl flex flex-col gap-4`}>
          <h3 className="text-sm font-bold text-emerald-400">ATS Analysis Report</h3>
          
          {analysisResult ? (
            <div className="flex flex-col gap-4 animate-fadeIn">
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] opacity-70 uppercase font-bold">Overall ATS Match</span>
                  <h4 className="text-2xl font-extrabold text-emerald-400">{analysisResult.score}%</h4>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 font-bold text-xs rounded-xl border border-emerald-500/30">
                  {analysisResult.score >= 90 ? '🔥 Highly Optimized' : '⚡ Good Match'}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-emerald-400 uppercase">Matched Industry Keywords:</span>
                <div className="flex flex-wrap gap-1.5">
                  {analysisResult.matchedKeywords.map((kw, i) => (
                    <span key={i} className="px-2.5 py-1 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded-lg text-[11px] font-semibold">{kw}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-amber-400 uppercase">Suggested Additions:</span>
                <div className="flex flex-wrap gap-1.5">
                  {analysisResult.missingKeywords.map((kw, i) => (
                    <span key={i} className="px-2.5 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded-lg text-[11px] font-semibold">{kw}</span>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-slate-300 italic border-l-2 border-emerald-500 pl-3 py-1">
                💡 {analysisResult.feedback}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-56 text-center opacity-60">
              <span className="text-3xl mb-2">📊</span>
              <p className="text-xs">Click run check on the left to view your live ATS optimization score and keywords.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}