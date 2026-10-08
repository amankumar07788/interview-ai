import React, { useState, useEffect } from 'react';

export default function Navbar({ setActiveTab }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('interviewai_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('interviewai_user');
    setUser(null);
    setActiveTab('dashboard');
  };

  return (
    <nav className="w-full max-w-4xl flex items-center justify-between px-6 py-4 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-xl mb-6 shadow-xl">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-slate-950 text-sm shadow-lg shadow-emerald-500/20">
          AI
        </div>
        <span className="font-bold text-base text-white tracking-wide">Interview<span className="text-emerald-400">AI</span></span>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 text-xs font-medium text-slate-300">
        <button onClick={() => setActiveTab('dashboard')} className="hover:text-emerald-400 transition-all cursor-pointer">Dashboard</button>
        <button onClick={() => setActiveTab('resume-lab')} className="hover:text-emerald-400 transition-all cursor-pointer">Resume Lab</button>
        <button onClick={() => setActiveTab('voice-interview')} className="hover:text-emerald-400 transition-all cursor-pointer">Voice AI</button>
        <button onClick={() => setActiveTab('analytics')} className="hover:text-emerald-400 transition-all cursor-pointer">Analytics</button>
        <button onClick={() => setActiveTab('pricing')} className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl transition-all cursor-pointer">Pricing</button>
        
        {user ? (
          <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
            <span className="text-emerald-400 font-semibold hidden sm:inline">{user.name}</span>
            <button 
              onClick={handleLogout} 
              className="px-2.5 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg hover:bg-red-500/20 transition-all cursor-pointer"
            >
              Logout
            </button>
          </div>
        ) : (
          <button 
            onClick={() => setActiveTab('auth')} 
            className="px-3 py-1.5 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition-all cursor-pointer"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}