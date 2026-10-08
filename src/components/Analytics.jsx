import React, { useState, useEffect } from 'react';

export default function Analytics({ onBack }) {
  const [activePlan, setActivePlan] = useState(null);

  useEffect(() => {
    const savedPlan = localStorage.getItem('interviewai_active_plan');
    if (savedPlan) {
      setActivePlan(JSON.parse(savedPlan));
    }
  }, []);

  return (
    <div className="w-full max-w-4xl flex flex-col gap-6 my-4">
      <div className="flex justify-between items-center bg-slate-900/80 p-4 border border-slate-800 rounded-2xl backdrop-blur-xl">
        <div>
          <h2 className="text-xl font-bold text-white">📊 Performance Analytics & Subscription</h2>
          <p className="text-xs text-slate-400">Track your interview readiness, past scores, and active plan validity.</p>
        </div>
        {onBack && (
          <button onClick={onBack} className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all cursor-pointer">
            Back to Dashboard
          </button>
        )}
      </div>

      {/* Active Subscription Box */}
      <div className="p-6 bg-slate-900/90 border border-emerald-500/30 rounded-2xl shadow-xl backdrop-blur-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Current Membership Status</span>
          <h3 className="text-lg font-bold text-white mt-1">
            {activePlan ? activePlan.name : 'Free Trial (15 Days)'}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {activePlan 
              ? `Valid up to: ${activePlan.expiryDate} (${activePlan.validityMonths * 30} Days validity)` 
              : 'Activate a Pro Plan (3, 4, or 6 months) for extended full access.'}
          </p>
        </div>
        <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 font-bold text-xs">
          {activePlan ? `₹${activePlan.price} Paid` : 'Active Trial'}
        </div>
      </div>

      {/* Analytics Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-xl">
          <span className="text-xs text-slate-400 block mb-1">Total Interviews Taken</span>
          <div className="text-2xl font-bold text-white">4 Sessions</div>
          <span className="text-[11px] text-emerald-400 mt-2 block">↑ 2 more than last week</span>
        </div>

        <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-xl">
          <span className="text-xs text-slate-400 block mb-1">Average Readiness Score</span>
          <div className="text-2xl font-bold text-cyan-400">82 / 100</div>
          <span className="text-[11px] text-slate-400 mt-2 block">Strong in React & Problem Solving</span>
        </div>

        <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-xl">
          <span className="text-xs text-slate-400 block mb-1">Code Sandbox Tests</span>
          <div className="text-2xl font-bold text-purple-400">12 Passed</div>
          <span className="text-[11px] text-purple-400 mt-2 block">100% execution success</span>
        </div>
      </div>

      {/* Recent History Table */}
      <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-xl flex flex-col gap-4">
        <h3 className="text-sm font-bold text-white">Recent Interview Logs</h3>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl text-xs">
            <div>
              <span className="font-semibold text-white block">Full Stack React Developer Round</span>
              <span className="text-[10px] text-slate-400">Duration: 15 mins • Voice AI + Code</span>
            </div>
            <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 font-bold rounded-lg border border-emerald-500/20">Score: 85%</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl text-xs">
            <div>
              <span className="font-semibold text-white block">Frontend JavaScript Assessment</span>
              <span className="text-[10px] text-slate-400">Duration: 5 mins • Standard Quiz</span>
            </div>
            <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-400 font-bold rounded-lg border border-cyan-500/20">Score: 78%</span>
          </div>
        </div>
      </div>
    </div>
  );
}