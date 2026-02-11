
import React, { useState, useMemo } from 'react';
import { QUESTIONS } from './data/questions';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Trophy, 
  BookOpen,
  GraduationCap,
  AlertCircle,
  Eye
} from 'lucide-react';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [feedback, setFeedback] = useState<Record<number, boolean | null>>({});
  const [attempts, setAttempts] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];
  const currentAttempts = attempts[currentQuestion.id] || 0;

  const handleAnswerChange = (val: string) => {
    if (isSubmitted || feedback[currentQuestion.id] === true) return;
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: val }));
    // Reset individual feedback only if it was false, so users can try again
    if (feedback[currentQuestion.id] === false) {
       setFeedback(prev => ({ ...prev, [currentQuestion.id]: null }));
    }
  };

  const checkAnswer = () => {
    if (feedback[currentQuestion.id] === true) return;

    const userAnswer = (answers[currentQuestion.id] || '').trim().toLowerCase();
    const correct = currentQuestion.correctAnswer;
    
    let isCorrect = false;
    if (Array.isArray(correct)) {
      isCorrect = correct.some(ans => ans.toLowerCase() === userAnswer);
    } else {
      isCorrect = correct.toLowerCase() === userAnswer;
    }

    setFeedback(prev => ({ ...prev, [currentQuestion.id]: isCorrect }));
    setAttempts(prev => ({ ...prev, [currentQuestion.id]: (prev[currentQuestion.id] || 0) + 1 }));
  };

  const score = useMemo(() => {
    const correctCount = Object.values(feedback).filter(v => v === true).length;
    return (10 * correctCount) / QUESTIONS.length;
  }, [feedback]);

  const progress = ((currentIndex + 1) / QUESTIONS.length) * 100;

  const resetTest = () => {
    if (window.confirm("Bạn có chắc chắn muốn làm lại từ đầu không?")) {
      setAnswers({});
      setFeedback({});
      setAttempts({});
      setIsSubmitted(false);
      setCurrentIndex(0);
    }
  };

  const getCorrectAnswerDisplay = (correct: string | string[]) => {
    if (Array.isArray(correct)) return correct[0];
    return correct;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-slate-200 py-4 px-6 mb-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="text-blue-600 w-8 h-8" />
            <div>
              <h1 className="font-bold text-xl text-slate-800">Unit 9 Test</h1>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Natural Disasters</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-slate-600">Điểm số</p>
              <p className="text-2xl font-bold text-blue-600">{score.toFixed(1)} <span className="text-slate-400 text-sm">/ 10</span></p>
            </div>
            <button 
              onClick={resetTest}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors group"
              title="Làm lại"
            >
              <RotateCcw className="w-5 h-5 text-slate-500 group-hover:rotate-[-45deg] transition-transform" />
            </button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mt-4 h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Question Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                  Câu {currentIndex + 1} / {QUESTIONS.length}
                </span>
                <span className="text-sm text-slate-400 font-medium italic max-w-[200px] truncate text-right">
                  {currentQuestion.section}
                </span>
              </div>

              <h2 className="text-lg font-semibold text-slate-800 mb-2 leading-relaxed">
                {currentQuestion.instruction}
              </h2>
              
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 mb-8">
                <p className="text-xl font-medium text-slate-700 leading-relaxed">
                  {currentQuestion.content}
                </p>
              </div>

              {/* Input Area */}
              <div className="space-y-4">
                {currentQuestion.options ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentQuestion.options.map((opt) => {
                      const optVal = opt.split('.')[0].trim();
                      const isSelected = answers[currentQuestion.id] === optVal;
                      const isCorrectAnswer = feedback[currentQuestion.id] === true && isSelected;
                      const isWrongAnswer = feedback[currentQuestion.id] === false && isSelected;

                      return (
                        <button
                          key={opt}
                          disabled={feedback[currentQuestion.id] === true}
                          onClick={() => handleAnswerChange(optVal)}
                          className={`p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between ${
                            isSelected
                              ? isCorrectAnswer 
                                ? 'border-emerald-500 bg-emerald-50 ring-4 ring-emerald-50' 
                                : isWrongAnswer 
                                  ? 'border-rose-500 bg-rose-50 ring-4 ring-rose-50'
                                  : 'border-blue-500 bg-blue-50 ring-4 ring-blue-50'
                              : 'border-slate-100 hover:border-slate-300 bg-white'
                          } ${feedback[currentQuestion.id] === true && !isSelected ? 'opacity-50 grayscale-[0.5]' : ''}`}
                        >
                          <span className="font-medium text-slate-700">{opt}</span>
                          {isSelected && feedback[currentQuestion.id] === true && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                          {isSelected && feedback[currentQuestion.id] === false && <XCircle className="w-5 h-5 text-rose-500" />}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="relative">
                    <input
                      type="text"
                      disabled={feedback[currentQuestion.id] === true}
                      value={answers[currentQuestion.id] || ''}
                      onChange={(e) => handleAnswerChange(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
                      placeholder="Nhập câu trả lời của bạn..."
                      className={`w-full p-4 text-lg border-2 rounded-2xl outline-none transition-all ${
                        feedback[currentQuestion.id] === true
                          ? 'border-emerald-500 bg-emerald-50'
                          : feedback[currentQuestion.id] === false
                            ? 'border-rose-500 bg-rose-50'
                            : 'border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-50'
                      }`}
                    />
                    {feedback[currentQuestion.id] === true && (
                      <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-emerald-500" />
                    )}
                  </div>
                )}
              </div>

              {/* Feedback Block */}
              {feedback[currentQuestion.id] !== undefined && feedback[currentQuestion.id] !== null && (
                <div className="space-y-3 mt-6 animate-in fade-in slide-in-from-top-2">
                  <div className={`p-4 rounded-2xl flex items-center gap-3 ${
                    feedback[currentQuestion.id] 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
                      : 'bg-rose-50 text-rose-700 border border-rose-100'
                  }`}>
                    {feedback[currentQuestion.id] ? (
                      <><CheckCircle2 className="w-6 h-6 shrink-0" /> <span className="font-bold">Đúng!</span> Tuyệt vời.</>
                    ) : (
                      <><XCircle className="w-6 h-6 shrink-0" /> <span className="font-bold">Chưa đúng.</span> Thử lại nhé ({currentAttempts}/3)</>
                    )}
                  </div>

                  {/* Reveal Answer Logic */}
                  {feedback[currentQuestion.id] === false && currentAttempts >= 3 && (
                    <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl animate-in zoom-in-95">
                      <div className="flex items-center gap-2 mb-2 text-amber-800 font-bold text-sm uppercase tracking-wide">
                        <Eye className="w-4 h-4" />
                        Đáp án tham khảo
                      </div>
                      <p className="text-lg text-amber-900 font-medium">
                        {getCorrectAnswerDisplay(currentQuestion.correctAnswer)}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="mt-10 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={checkAnswer}
                    className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!answers[currentQuestion.id] || feedback[currentQuestion.id] === true}
                  >
                    Kiểm tra
                  </button>
                  {currentAttempts > 0 && feedback[currentQuestion.id] !== true && (
                    <span className="text-sm font-semibold text-slate-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {currentAttempts} lần thử
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="p-4 rounded-2xl border-2 border-slate-100 hover:bg-slate-50 disabled:opacity-30 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setCurrentIndex(prev => Math.min(QUESTIONS.length - 1, prev + 1))}
                    disabled={currentIndex === QUESTIONS.length - 1}
                    className="p-4 rounded-2xl border-2 border-slate-100 hover:bg-slate-50 disabled:opacity-30 transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-500" />
                Tiến độ bài làm
              </h3>
              <div className="grid grid-cols-5 gap-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {QUESTIONS.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-10 h-10 rounded-xl text-xs font-bold transition-all relative ${
                      currentIndex === idx 
                        ? 'bg-blue-600 text-white ring-4 ring-blue-100 scale-110 z-10' 
                        : feedback[q.id] === true 
                        ? 'bg-emerald-500 text-white' 
                        : feedback[q.id] === false 
                        ? 'bg-rose-500 text-white'
                        : answers[q.id] 
                        ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                        : 'bg-slate-50 text-slate-400 border border-slate-100'
                    }`}
                  >
                    {idx + 1}
                    {attempts[q.id] >= 3 && feedback[q.id] === false && (
                       <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 border-2 border-white rounded-full"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-xl shadow-blue-200">
              <Trophy className="w-10 h-10 mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-1">Kết quả hiện tại</h3>
              <p className="text-blue-100 text-sm mb-4">Mỗi câu đúng cộng 0.1 điểm.</p>
              <div className="text-4xl font-black mb-1">
                {score.toFixed(2)}
                <span className="text-blue-300 text-xl font-normal"> / 10.0</span>
              </div>
              <p className="text-xs text-blue-200 uppercase tracking-widest font-bold">
                Thang điểm 10
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation (Mobile) */}
      <footer className="fixed bottom-0 inset-x-0 glass-effect border-t border-slate-200 p-4 md:hidden flex justify-center gap-4">
         <button 
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            className="flex-1 py-3 px-6 bg-white border border-slate-200 rounded-xl font-bold text-slate-700"
          >
            Quay lại
          </button>
          <button 
            onClick={() => setCurrentIndex(prev => Math.min(QUESTIONS.length - 1, prev + 1))}
            className="flex-1 py-3 px-6 bg-blue-600 rounded-xl font-bold text-white"
          >
            Tiếp theo
          </button>
      </footer>
    </div>
  );
};

export default App;
