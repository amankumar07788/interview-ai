import React, { useState } from 'react';

export default function AuthModal({ onLoginSuccess, onBack }) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating user login / signup storage
    const userData = { name: name || 'Aman Kumar', email: email || 'aman@example.com' };
    localStorage.setItem('interviewai_user', JSON.stringify(userData));
    if (onLoginSuccess) onLoginSuccess(userData);
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-slate-900/90 border border-slate-800 rounded-3xl shadow-2xl backdrop-blur-xl my-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">
            {isSignup ? 'Create Account 🚀' : 'Welcome Back 👋'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {isSignup ? 'Sign up to unlock all AI modules' : 'Log in to sync your interview analytics'}
          </p>
        </div>
        {onBack && (
          <button 
            onClick={onBack} 
            className="text-xs text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {isSignup && (
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-slate-300 font-medium">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={isSignup}
              className="bg-slate-950 text-slate-200 text-xs p-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
            />
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-slate-300 font-medium">Email Address</label>
          <input 
            type="email" 
            placeholder="name@example.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-slate-950 text-slate-200 text-xs p-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-slate-300 font-medium">Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-slate-950 text-slate-200 text-xs p-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
          />
        </div>

        <button 
          type="submit"
          className="mt-2 w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 hover:from-emerald-400 transition-all cursor-pointer"
        >
          {isSignup ? 'Sign Up' : 'Log In'}
        </button>
      </form>

      <div className="mt-6 text-center text-xs text-slate-400">
        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button 
          onClick={() => setIsSignup(!isSignup)} 
          className="text-emerald-400 font-semibold hover:underline cursor-pointer ml-1"
        >
          {isSignup ? 'Log In' : 'Sign Up'}
        </button>
      </div>
    </div>
  );
}