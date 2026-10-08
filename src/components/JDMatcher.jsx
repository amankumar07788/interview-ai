import React, { useState } from 'react';

export default function JDMatcher({ onBack }) {
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedData, setGeneratedData] = useState(null);

  const handleGenerateQuestions = (e) => {
    e.preventDefault();
    if (!jobDescription.trim()) {
      alert('Please paste a job description first.');
      return;
    }

    setIsGenerating(true);
    setGeneratedData(null);

    // Simulate AI parsing JD and generating custom questions & coding challenge
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedData({
        roleMatched: companyName ? `${companyName} - Targeted Role` : 'Software Engineering Role',
        matchScore: '92%',
        questions: [
          'Explain how you would handle high-concurrency and scalability issues mentioned in this role.',
          'What experience do you have with the primary tech stack required in this JD?',
          'Describe a time when you optimized a slow-performing database query or API endpoint.',
          'How do you approach writing clean unit tests for critical business logic?',
          'Explain your debugging workflow when a production bug is reported.'
        ],
        codingChallenge: {
          title: 'Custom Algorithm Challenge based on JD requirements',
          problem: 'Write an efficient function to process incoming data streams, handle rate-limiting, and ensure zero data loss under heavy load.',
          difficulty: 'Medium-Hard'
        }
      });
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl flex flex-col gap-6 my-4">
      <div className="flex justify-between items-center bg-slate-900/80 p-4 border border-slate-800 rounded-2xl backdrop-blur-xl">
        <div>
          <h2 className="text-xl font-bold text-white">🎯 Custom JD Matcher & AI Generator</h2>
          <p className="text-xs text-slate-400">Paste any job description to instantly generate targeted interview questions & coding tasks.</p>
        </div>
        {onBack && (
          <button onClick={onBack} className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all cursor-pointer">
            Back to Dashboard
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Form */}
        <form onSubmit={handleGenerateQuestions} className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-xl flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-300">Company Name (Optional)</label>
            <input 
              type="text"
              placeholder="e.g. Google, Amazon, Microsoft"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full bg-slate-950 text-xs text-slate-200 p-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500/50"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-emerald-400">Paste Job Description (JD)</label>
            <textarea
              rows={8}
              placeholder="Paste the requirements, responsibilities, and tech stack from the job posting here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="w-full bg-slate-950 font-mono text-xs text-slate-200 p-3.5 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500/50 resize-none shadow-inner"
            />
          </div>

          <button
            type="submit"
            disabled={isGenerating}
            className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 hover:from-emerald-400 transition-all cursor-pointer disabled:opacity-50"
          >
            {isGenerating ? 'Analyzing JD & Generating Questions...' : '✨ Generate Custom Interview Set'}
          </button>
        </form>

        {/* Results Box */}
        <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-cyan-400">Generated AI Assessment</span>
              {generatedData && (
                <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold rounded-lg">
                  Match: {generatedData.matchScore}
                </span>
              )}
            </div>

            {generatedData ? (
              <div className="flex flex-col gap-4 animate-fadeIn">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-white">Top 5 Custom Interview Questions:</span>
                  <ol className="list-decimal list-inside text-xs text-slate-300 space-y-1.5 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                    {generatedData.questions.map((q, idx) => (
                      <li key={idx} className="leading-relaxed">{q}</li>
                    ))}
                  </ol>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-white">Targeted Coding Challenge:</span>
                  <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl text-xs flex flex-col gap-1">
                    <span className="font-bold text-emerald-400">{generatedData.codingChallenge.title}</span>
                    <p className="text-slate-300">{generatedData.codingChallenge.problem}</p>
                    <span className="text-[10px] text-slate-400 mt-1">Difficulty: {generatedData.codingChallenge.difficulty}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center text-center text-slate-500 text-xs">
                {isGenerating ? 'AI is reading the job description...' : 'Paste a job description on the left and click generate to see tailored questions.'}
              </div>
            )}
          </div>
          <div className="text-[11px] text-slate-500 mt-4 border-t border-slate-800/80 pt-3">
            💡 Pro Tip: Use these specific questions to practice in the live Interview Section or test your code in the Scratchpad.
          </div>
        </div>
      </div>
    </div>
  );
}