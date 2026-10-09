import React, { useState } from 'react';
import { 
  Mic, 
  Menu, 
  X, 
  FileText, 
  BarChart2, 
  Zap, 
  User,
  Layers,
  HelpCircle
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    alert(`Successfully signed in with: ${email}`);
    setIsSignInOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#071611] text-emerald-100 font-sans selection:bg-emerald-500 selection:text-black relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Header / Navigation Bar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-emerald-900/40 backdrop-blur-md sticky top-0 z-50 bg-[#071611]/80">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 hover:bg-emerald-900/50 transition"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-900/50 text-black font-black text-lg">
              IQ
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight text-white leading-tight">InterviewIQ</h1>
              <p className="text-[10px] text-emerald-400 tracking-wider uppercase font-medium">Premium AI Interview SaaS</p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setIsSignInOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 hover:bg-emerald-900 text-white font-medium text-sm transition shadow-md"
        >
          <User size={16} className="text-emerald-400" />
          <span>Sign in</span>
        </button>
      </header>

      {/* Dropdown Navigation Menu Drawer */}
      {isMenuOpen && (
        <div className="absolute top-16 left-6 z-50 w-72 bg-[#0b2219] border border-emerald-800/80 rounded-2xl shadow-2xl p-4 backdrop-blur-xl">
          <nav className="space-y-1">
            <a href="#interview" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-900/40 text-emerald-200 font-medium transition">
              <Mic size={18} className="text-emerald-400" />
              <span>Interview</span>
            </a>
            <a href="#group-discussion" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-900/40 text-emerald-200 font-medium transition">
              <Layers size={18} className="text-emerald-400" />
              <span>Group Discussion</span>
            </a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-900/40 text-emerald-200 font-medium transition">
              <HelpCircle size={18} className="text-emerald-400" />
              <span>About</span>
            </a>
            <a href="#reports" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-900/40 text-emerald-200 font-medium transition">
              <BarChart2 size={18} className="text-emerald-400" />
              <span>Reports</span>
            </a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-900/40 text-emerald-200 font-medium transition">
              <Zap size={18} className="text-emerald-400" />
              <span>Pricing</span>
            </a>
          </nav>
        </div>
      )}

      {/* Main Content Dashboard */}
      <main className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        <div className="p-8 rounded-3xl bg-gradient-to-b from-emerald-950/40 to-[#0a231b] border border-emerald-800/40 shadow-xl relative overflow-hidden">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-700/50 text-[11px] font-semibold uppercase tracking-widest text-emerald-300 mb-4">
            Production-Ready Interview Prep
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Practice like a serious candidate, not a demo user.
          </h2>
          
          <p className="text-emerald-200/80 text-base max-w-2xl mb-8 leading-relaxed">
            Upload a resume, generate role-specific rounds, get feedback, and track your readiness with a cleaner, more focused workflow.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-800 text-xs font-medium text-emerald-300">Resume intelligence</span>
            <span className="px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-800 text-xs font-medium text-emerald-300">Role-specific questions</span>
            <span className="px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-800 text-xs font-medium text-emerald-300">Voice scoring</span>
            <span className="px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-800 text-xs font-medium text-emerald-300">Saved reports</span>
          </div>

          <button 
            onClick={() => alert('Starting AI Interview Session...')}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-base transition shadow-lg shadow-emerald-500/20 active:scale-95"
          >
            <Mic size={20} />
            <span>Start interview</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-[#0a231b] border border-emerald-900/60 flex items-center justify-between shadow-lg">
            <div>
              <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">Resume lab</p>
              <h3 className="text-2xl font-bold text-white tracking-tight">Ready</h3>
              <p className="text-xs text-emerald-300/70 mt-1">No stock art templates used</p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 shadow-inner">
              <FileText size={28} />
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#0a231b] border border-emerald-900/60 flex items-center justify-between shadow-lg">
            <div>
              <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">Confidence Score</p>
              <h3 className="text-2xl font-bold text-white tracking-tight">Strong</h3>
              <p className="text-xs text-emerald-300/70 mt-1">Always sharp & responsive</p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 shadow-inner">
              <BarChart2 size={28} />
            </div>
          </div>
        </div>
      </main>

      {/* Sign In Modal Popup */}
      {isSignInOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-[#0b2219] border border-emerald-700/60 rounded-3xl p-6 shadow-2xl relative">
            <button 
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-emerald-950 text-emerald-400 hover:bg-emerald-900"
            >
              <X size={18} />
            </button>

            <h3 className="text-xl font-bold text-white mb-2">Sign in to InterviewIQ</h3>
            <p className="text-xs text-emerald-300/70 mb-6">Enter your email to access your mock interview dashboard and saved reports.</p>

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-emerald-300 mb-1">Email address</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-white placeholder-emerald-600 focus:outline-none focus:border-emerald-500 text-sm"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-sm transition shadow-lg shadow-emerald-500/20"
              >
                Continue with Email
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}