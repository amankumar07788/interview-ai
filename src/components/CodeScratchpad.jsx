import React, { useState } from 'react';

export default function CodeScratchpad() {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState(() => {
    return '# Write your solution here\ndef twoSum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        diff = target - num\n        if diff in seen:\n            return [seen[diff], i]\n        seen[num] = i\n    return []\n\nprint(twoSum([2, 7, 11, 15], 9))';
  });
  const [output, setOutput] = useState('Click "Run Code" to test your solution...');
  const [isRunning, setIsRunning] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    if (lang === 'python') {
      setCode('# Write your Python solution\ndef solve():\n    print("Hello from InterviewAI Python Engine!")\n\nsolve()');
    } else if (lang === 'javascript') {
      setCode('// Write your JavaScript solution\nfunction solve() {\n    console.log("Hello from InterviewAI JS Engine!");\n}\nsolve();');
    } else if (lang === 'cpp') {
      setCode('// Write your C++ solution\n#iostream>\nusing namespace std;\nint main() {\n    cout << "Hello from InterviewAI C++ Engine!" << endl;\n    return 0;\n}');
    }
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput('Compiling and executing code...');
    setTimeout(() => {
      setIsRunning(false);
      if (language === 'python') {
        setOutput('[Output]:\n[0, 1]\nExecution successful. Time: 0.04s, Memory: 14.2 MB');
      } else if (language === 'javascript') {
        setOutput('[Output]:\nHello from InterviewAI JS Engine!\nExecution successful. Time: 0.02s');
      } else {
        setOutput('[Output]:\nHello from InterviewAI C++ Engine!\nExecution successful. Time: 0.01s');
      }
    }, 1000);
  };

  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl backdrop-blur-xl flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-emerald-400">💻 Live Code Sandbox</span>
          <span className="text-xs text-slate-500">| Technical Rounding Environment</span>
        </div>
        <div className="flex items-center gap-2">
          <select 
            value={language} 
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="bg-slate-950 text-xs text-slate-200 border border-slate-800 rounded-lg px-3 py-1.5 focus:outline-none focus:border-emerald-500 cursor-pointer"
          >
            <option value="python">Python 3</option>
            <option value="javascript">JavaScript (Node)</option>
            <option value="cpp">C++ 20</option>
          </select>
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-all cursor-pointer disabled:opacity-50"
          >
            {isRunning ? 'Running...' : '▶ Run Code'}
          </button>
        </div>
      </div>

      {/* Code Editor Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-[11px] text-slate-400 font-medium">Source Editor</span>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={10}
            className="w-full bg-slate-950 font-mono text-xs text-emerald-300 p-3.5 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500/50 resize-none shadow-inner"
          />
        </div>

        {/* Console Terminal Output */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] text-slate-400 font-medium">Execution Terminal</span>
          <div className="w-full h-[212px] bg-slate-950 font-mono text-xs text-slate-300 p-3.5 rounded-xl border border-slate-800 overflow-y-auto whitespace-pre-wrap shadow-inner">
            <span className="text-slate-500">// Terminal logs & test case results...</span>
            <div className="mt-2 text-emerald-400">{output}</div>
          </div>
        </div>
      </div>
    </div>
  );
}