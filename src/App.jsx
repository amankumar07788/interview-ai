import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  Menu, 
  X, 
  FileText, 
  BarChart2, 
  Zap, 
  User,
  Layers,
  HelpCircle,
  LogOut,
  CheckCircle2
} from 'lucide-react';
import { auth, googleProvider, signInWithPopup, signOut } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Track user login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsSignInOpen(false);
    } catch (error) {
      console.error("Login Error:", error);
      alert("Google Sign-In failed. Please check your Firebase configuration keys.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
    }
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

        {/* User Profile or Sign In Button */}
        {user ? (
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950 border border-emerald-800 text-xs text-emerald-200">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>{user.displayName || user.email}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/80 border border-red-800/60 hover:bg-red-900 text-red-200 font-medium text-xs transition shadow-md"
            >
              <LogOut size={14} />
              <span>Sign out</span>
            </button>
          </div>
        ) : (
          <button 
            onClick={() => setIsSignInOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 hover:bg-emerald-900 text-white font-medium text-sm transition shadow-md"
          >
            <User size={16} className="text-emerald-400" />
            <span>Sign in</span>
          </button>
        )}
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

          <button 
            onClick={() => {
              if (!user) {
                setIsSignInOpen(true);
              } else {
                alert('Starting AI Interview Session...');
              }
            }}
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
              <p className="text-xs text-emerald-300/70 mt-1">AI Powered Feedback</p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 shadow-inner">
              <FileText size={28} />
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#0a231b] border border-emerald-900/60 flex items-center justify-between shadow-lg">
            <div>
              <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">Confidence Score</p>
              <h3 className="text-2xl font-bold text-white tracking-tight">{user ? "Active" : "Guest Mode"}</h3>
              <p className="text-xs text-emerald-300/70 mt-1">{user ? "Synced with account" : "Sign in to track"}</p>
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
          <div className="w-full max-w-md bg-[#0b2219] border border-emerald-700/60 rounded-3xl p-8 shadow-2xl relative text-center">
            <button 
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-emerald-950 text-emerald-400 hover:bg-emerald-900"
            >
              <X size={18} />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-black font-black text-xl mx-auto mb-4 shadow-lg shadow-emerald-900/50">
              IQ
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Sign in to InterviewIQ</h3>
            <p className="text-xs text-emerald-300/70 mb-8">Access your personalized mock interview dashboards, resume analytics, and confidence reports.</p>

            <button 
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-white hover:bg-gray-100 text-gray-900 font-semibold text-sm transition shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.18v3.15C3.17 21.32 7.23 24 12 24z"/>
                <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.6H1.18C.43 8.13 0 9.87 0 12s.43 3.87 1.18 5.4l4.09-3.16z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.23 0 3.17 2.68 1.18 6.6l4.09 3.15c.95-2.85 3.6-4.96 6.73-4.96z"/>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}