import React, { useState, useEffect } from 'react';

export default function InterviewSectionView({ onBack }) {
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [warningAlert, setWarningAlert] = useState(null);

  const personas = [
    { id: 'strict', name: 'Strict Tech Lead', desc: 'Deep technical cross-questions & code optimizations.' },
    { id: 'hr', name: 'Friendly HR Recruiter', desc: 'Behavioral questions, strengths, and culture fit.' },
    { id: 'faang', name: 'FAANG Senior Architect', desc: 'System design, scalability, and performance.' }
  ];

  const questionsList = [
    "Tell me about a complex project you built and how you handled architecture scaling.",
    "How do you optimize React component re-renders and manage heavy state?",
    "Explain your approach to debugging production bottlenecks under tight deadlines."
  ];

  // Proctoring: Detect Tab Switching / Focus Loss
  useEffect(() => {
    if (!started) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitchCount((prev) => {
          const newCount = prev + 1;
          setWarningAlert(`⚠️ Warning #${newCount}: Tab switch detected! Stay on the interview window.`);
          return newCount;
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [started]);

  // Text-to-Speech: AI speaks the question
  const speakQuestion = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop previous speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Speech-to-Text: User speaks their answer
  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser. Try Chrome or Edge.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = true;

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => {
      const speechToText = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      setTranscript(speechToText);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognition.start();
  };

  const handleStartInterview = (personaId) => {
    setSelectedPersona(personaId);
    setStarted(true);
    setTabSwitchCount(0);
    setWarningAlert(null);
    // Speak first question
    setTimeout(() => speakQuestion(questionsList[0]), 500);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsList.length - 1) {
      const nextIdx = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIdx);
      setTranscript('');
      speakQuestion(questionsList[nextIdx]);
    } else {
      alert('Mock Interview Completed Successfully! Check your Analytics score.');
      setStarted(false);
      setCurrentQuestionIndex(0);
    }
  };

  if (!started) {
    return (
      <div className="w-full flex flex-col gap-6">
        <div className="flex justify-between items-center bg-slate-900/80 p-4 border border-slate-800 rounded-2xl">
          <div>
            <h2 className="text-xl font-bold text-white">🎙️ Select AI Interviewer Persona (Proctoring Enabled)</h2>
            <p className="text-xs text-slate-400">Choose your interviewer persona with voice simulation & anti-cheat monitoring.</p>
          </div>
          {onBack && <button onClick={onBack} className="text-xs px-3 py-1.5 bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700 cursor-pointer">Back</button>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {personas.map(p => (
            <div key={p.id} onClick={() => handleStartInterview(p.id)} className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl cursor-pointer hover:border-emerald-500/50 transition-all flex flex-col gap-2">
              <h3 className="text-sm font-bold text-white">{p.name}</h3>
              <p className="text-xs text-slate-400">{p.desc}</p>
              <span className="text-[10px] text-emerald-400 mt-2 font-semibold">Includes Voice + Anti-Cheat 🛡️</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Warning Banner for Tab Switching */}
      {warningAlert && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold rounded-xl flex justify-between items-center animate-pulse">
          <span>{warningAlert} (Total Switch Violations: {tabSwitchCount})</span>
          <button onClick={() => setWarningAlert(null)} className="text-[10px] bg-red-500/20 px-2 py-1 rounded-lg">Dismiss</button>
        </div>
      )}

      <div className="flex justify-between items-center bg-slate-900/80 p-4 border border-slate-800 rounded-2xl">
        <div>
          <span className="text-[10px] text-emerald-400 uppercase font-bold">Live AI Interview Session</span>
          <h3 className="text-sm font-bold text-white">{selectedPersona?.toUpperCase()} Persona Active</h3>
        </div>
        <button onClick={() => setStarted(false)} className="text-xs px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl cursor-pointer">End Session</button>
      </div>

      <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-2xl flex flex-col gap-6">
        <div className="flex justify-between items-center text-xs text-slate-400">
          <span>Question {currentQuestionIndex + 1} of {questionsList.length}</span>
          <span className="text-amber-400">Anti-Cheat Active (Tab Switches: {tabSwitchCount})</span>
        </div>

        {/* Question Box */}
        <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl flex flex-col gap-2">
          <span className="text-xs font-bold text-emerald-400">AI Interviewer Question:</span>
          <p className="text-sm font-medium text-white leading-relaxed">{questionsList[currentQuestionIndex]}</p>
          <button 
            onClick={() => speakQuestion(questionsList[currentQuestionIndex])} 
            className="w-max text-[11px] px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg cursor-pointer mt-1"
          >
            🔊 Replay Audio Question
          </button>
        </div>

        {/* Answer Recording Box */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold text-slate-300">Your Spoken Answer (Speech-to-Text):</label>
            <button 
              onClick={startListening} 
              className={`text-xs px-3 py-1.5 font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'}`}
            >
              {isListening ? '🎙️ Listening... (Speak now)' : '🎙️ Start Speaking'}
            </button>
          </div>
          <textarea
            rows={4}
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            placeholder="Click 'Start Speaking' and talk, or type your answer here..."
            className="w-full bg-slate-950 text-xs text-slate-200 p-3.5 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500/50 resize-none"
          />
        </div>

        <button 
          onClick={handleNextQuestion}
          className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-xs rounded-xl shadow-lg hover:from-emerald-400 cursor-pointer"
        >
          Submit Answer & Next Question →
        </button>
      </div>
    </div>
  );
}