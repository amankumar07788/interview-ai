import React, { useState } from 'react';

const interviewData = {
  React: {
    question: "What are React hooks, and why were they introduced?",
    hint: "Think about class component limitations, reusing stateful logic, and `this` binding.",
    answer: "Hooks are functions that let you 'hook into' React state and lifecycle features from function components without writing classes. They solved issues with complex components and difficult logic reuse."
  },
  JavaScript: {
    question: "Explain the difference between `let`, `const`, and `var`.",
    hint: "Consider scoping rules (block scope vs function scope) and variable reassignment.",
    answer: "`var` is function-scoped and can be re-declared/hoisted. `let` and `const` are block-scoped. `const` cannot be reassigned after initial declaration."
  },
  SystemDesign: {
    question: "What is Load Balancing and why is it important?",
    hint: "Think about high traffic, distributing workloads across multiple servers, and fault tolerance.",
    answer: "A load balancer acts as the 'traffic cop' sitting in front of your servers, routing client requests across all servers capable of fulfilling those requests to maximize speed and capacity utilization."
  }
};

export default function InterviewSection() {
  const [selectedTech, setSelectedTech] = useState('React');
  const [showAnswer, setShowAnswer] = useState(false);

  const currentItem = interviewData[selectedTech];

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-6 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-xl backdrop-blur-xl text-left">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span className="text-cyan-400">⚡</span> Interactive Practice Arena
      </h2>

      {/* Tech Stack Selector Tabs */}
      <div className="flex gap-2 mb-6 border-b border-slate-800 pb-4">
        {Object.keys(interviewData).map((tech) => (
          <button
            key={tech}
            onClick={() => {
              setSelectedTech(tech);
              setShowAnswer(false);
            }}
            className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${
              selectedTech === tech
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Question Card */}
      <div className="mb-6">
        <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">Question</span>
        <p className="text-lg font-medium text-white mt-1">{currentItem.question}</p>
      </div>

      {/* Hint Box */}
      <div className="mb-6 p-4 bg-slate-950/50 border border-slate-800/60 rounded-xl text-sm text-slate-300">
        <span className="font-semibold text-indigo-400">💡 Hint: </span> {currentItem.hint}
      </div>

      {/* Answer Section Toggle */}
      {showAnswer ? (
        <div className="mb-6 p-4 bg-cyan-950/20 border border-cyan-800/40 rounded-xl text-sm text-cyan-200 animate-fadeIn">
          <span className="font-semibold text-cyan-400">✨ Model Answer: </span> {currentItem.answer}
        </div>
      ) : null}

      {/* Actions */}
      <div className="flex justify-between items-center pt-2">
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="px-5 py-2 text-sm font-medium text-slate-200 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 hover:text-white transition-all cursor-pointer"
        >
          {showAnswer ? "Hide Answer" : "Reveal Answer"}
        </button>
        
        <span className="text-xs text-slate-500">InterviewAI v1.0</span>
      </div>
    </div>
  );
}