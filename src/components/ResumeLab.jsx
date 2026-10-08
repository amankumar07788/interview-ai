import React, { useState } from 'react';

export default function ResumeLab({ onBack }) {
  const [resumeText, setResumeText] = useState(
    'John Doe\nSoftware Engineer | React, Node.js, TypeScript\nExperience in building scalable web apps and REST APIs.\nSkills: JavaScript, Python, Git, Docker'
  );
  const [isScanning, setIsScanning] = useState(false);
  const [atsScore, setAtsScore] = useState(null);

  const handleScanResume = () => {
    setIsScanning(true);
    setAtsScore(null);
    setTimeout(() => {
      setIsScanning(false);
      // Simulate random calculated score based on length/keywords
      setAtsScore({
        score: 84,
        matchRate: 'High ATS Compatibility',
        missingKeywords: ['CI/CD', 'Unit Testing', 'Tailwind CSS'],
        feedback: 'Your resume has a clean structure and strong technical keywords. Adding metrics and testing tools will boost your score above 90%.'
      });
    }, 1200);
  };

  return (
    <div className="w-full max-w-4xl flex flex-col gap-6 my-4">
      <div className="flex justify-between items-center bg-slate-900/80 p-4 border border-slate-800 rounded-2xl backdrop-blur-xl">
        <div>
          <h2 className="text-xl font-bold text-white">📄 Resume Lab & ATS Scanner</h2>
          <p className="text-xs text-slate-400">Analyze your resume against job descriptions to optimize ATS parsing.</p>
        </div>
        {onBack && (
          <button onClick={onBack} className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all cursor-pointer">
            Back to Dashboard
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Editor / Input Box */}
        <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-xl flex flex-col gap-3">
          <span className="text-xs font-bold text-emerald-400">Paste Your Resume Text</span>
          <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            rows={10}
            className="w-full bg-slate-950 font-mono text-xs text-slate-200 p-3.5 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500/50 resize-none shadow-inner"
            placeholder="Paste your resume content here..."
          />
          <button
            onClick={handleScanResume}
            disabled={isScanning}
            className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 hover:from-emerald-400 transition-all cursor-pointer disabled:opacity-50"
          >
            {isScanning ? 'Scanning ATS Compatibility...' : '⚡ Scan Resume Now'}
          </button>
        </div>

        {/* Results & Suggestions Box */}
        <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-cyan-400">ATS Analysis & Feedback</span>
            {atsScore ? (
              <div className="mt-4 flex flex-col gap-4 animate-fadeIn">
                <div className="flex items-center justify-between p-4 bg-slate-950/60 border border-slate-800 rounded-xl">
                  <div>
                    <span className="text-xs text-slate-400 block">Overall ATS Score</span>
                    <span className="text-2xl font-bold text-emerald-400">{atsScore.score} / 100</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold text-xs rounded-lg">
                    {atsScore.matchRate}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-slate-300">Missing Key Terms:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {atsScore.missingKeywords.map((kw, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-red-500/10 text-red-400 border border-red-500/20 text-[11px] rounded-md font-mono">
                        +{kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl text-xs text-slate-300">
                  <strong className="text-white block mb-1">AI Recommendation:</strong>
                  {atsScore.feedback}
                </div>
              </div>
            ) : (
              <div className="h-48 flex items-center justify-center text-center text-slate-500 text-xs">
                {isScanning ? 'Analyzing keyword density and formatting...' : 'Click "Scan Resume Now" to view your detailed ATS report.'}
              </div>
            )}
          </div>
          <div className="text-[11px] text-slate-500 mt-4 border-t border-slate-800/80 pt-3">
            💡 Pro Tip: Tailor your resume keywords according to the specific job role before starting your mock interview.
          </div>
        </div>
      </div>
    </div>
  );
}