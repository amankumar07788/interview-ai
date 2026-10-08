import React from 'react';

export default function PricingSection({ onBack }) {
  const handleSelectPlan = (planName, price, validityMonths) => {
    const totalDays = Math.round(validityMonths * 30);
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + totalDays);

    const planData = {
      name: planName,
      price: price,
      validityMonths: validityMonths,
      expiryDate: expiryDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    localStorage.setItem('interviewai_active_plan', JSON.stringify(planData));
    alert(`Successfully activated ${planName} (₹${price}) for ${validityMonths} Months! Valid up to ${planData.expiryDate}.`);
  };

  return (
    <div className="w-full max-w-5xl flex flex-col gap-6 my-4">
      <div className="flex justify-between items-center bg-slate-900/80 p-4 border border-slate-800 rounded-2xl backdrop-blur-xl">
        <div>
          <h2 className="text-xl font-bold text-white">💎 Flexible Subscription Plans</h2>
          <p className="text-xs text-slate-400">Choose from 15 days free trial up to 3, 4, or 6 months pocket-friendly access.</p>
        </div>
        {onBack && (
          <button onClick={onBack} className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all cursor-pointer">
            Back to Dashboard
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Free Plan (15 Days) */}
        <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl flex flex-col justify-between backdrop-blur-xl">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Free Trial</span>
            <div className="text-2xl font-bold text-white my-2">₹0 <span className="text-[11px] font-normal text-slate-400">/ 15 Days</span></div>
            <p className="text-xs text-slate-400 mb-4">Basic mock practice for quick evaluation.</p>
            <ul className="text-xs text-slate-300 space-y-1.5 mb-6">
              <li>✓ Valid for 15 Days</li>
              <li>✓ Basic AI questions</li>
              <li>✓ Standard report</li>
            </ul>
          </div>
          <button 
            onClick={() => handleSelectPlan('Free Plan', 0, 0.5)}
            className="w-full py-2 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl hover:bg-slate-700 transition-all cursor-pointer"
          >
            Activate Free
          </button>
        </div>

        {/* 3 Months Plan (₹149) */}
        <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl flex flex-col justify-between backdrop-blur-xl">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Pro - 3 Months</span>
            <div className="text-2xl font-bold text-white my-2">₹149 <span className="text-[11px] font-normal text-slate-400">/ 3 Months</span></div>
            <p className="text-xs text-slate-400 mb-4">Ideal for short-term placement preparations.</p>
            <ul className="text-xs text-slate-300 space-y-1.5 mb-6">
              <li>✓ Valid for 3 Months (90 Days)</li>
              <li>✓ Unlimited AI interviews</li>
              <li>✓ Voice simulator & code sandbox</li>
            </ul>
          </div>
          <button 
            onClick={() => handleSelectPlan('Pro 3 Months', 149, 3)}
            className="w-full py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold text-xs rounded-xl hover:bg-emerald-500/20 transition-all cursor-pointer"
          >
            Choose 3 Months (₹149)
          </button>
        </div>

        {/* 4 Months Plan (₹299) - Highlighted as Best Value */}
        <div className="p-5 bg-slate-900 border-2 border-emerald-500/50 rounded-2xl flex flex-col justify-between shadow-xl shadow-emerald-500/10 backdrop-blur-xl relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-emerald-500 text-slate-950 font-bold text-[10px] rounded-full uppercase">Most Popular</div>
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Pro - 4 Months</span>
            <div className="text-2xl font-bold text-white my-2">₹299 <span className="text-[11px] font-normal text-slate-400">/ 4 Months</span></div>
            <p className="text-xs text-slate-400 mb-4">Extended preparation window for campus drives.</p>
            <ul className="text-xs text-slate-300 space-y-1.5 mb-6">
              <li>✓ Valid for 4 Months (120 Days)</li>
              <li>✓ All Pro features unlocked</li>
              <li>✓ Advanced Analytics reports</li>
            </ul>
          </div>
          <button 
            onClick={() => handleSelectPlan('Pro 4 Months', 299, 4)}
            className="w-full py-2 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-emerald-400 transition-all cursor-pointer"
          >
            Choose 4 Months (₹299)
          </button>
        </div>

        {/* 6 Months Plan (₹499) */}
        <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl flex flex-col justify-between backdrop-blur-xl">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Ultimate - 6 Months</span>
            <div className="text-2xl font-bold text-white my-2">₹499 <span className="text-[11px] font-normal text-slate-400">/ 6 Months</span></div>
            <p className="text-xs text-slate-400 mb-4">Complete mastery pack for long-term career growth.</p>
            <ul className="text-xs text-slate-300 space-y-1.5 mb-6">
              <li>✓ Valid for 6 Months (180 Days)</li>
              <li>✓ Everything included</li>
              <li>✓ Priority AI evaluation</li>
            </ul>
          </div>
          <button 
            onClick={() => handleSelectPlan('Ultimate 6 Months', 499, 6)}
            className="w-full py-2 bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs rounded-xl hover:bg-slate-700 transition-all cursor-pointer"
          >
            Choose 6 Months (₹499)
          </button>
        </div>
      </div>
    </div>
  );
}