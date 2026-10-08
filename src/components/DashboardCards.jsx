import React from 'react';

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
      <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-xl">
        <span className="text-xs text-slate-400 block mb-1">Interviews Completed</span>
        <h3 className="text-2xl font-bold text-white">04 <span className="text-xs font-normal text-emerald-400">this month</span></h3>
      </div>
      <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-xl">
        <span className="text-xs text-slate-400 block mb-1">Average AI Score</span>
        <h3 className="text-2xl font-bold text-emerald-400">82 / 100</h3>
      </div>
      <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-xl">
        <span className="text-xs text-slate-400 block mb-1">Active Plan</span>
        <h3 className="text-2xl font-bold text-cyan-400">Pro Tier 🚀</h3>
      </div>
    </div>
  );
}