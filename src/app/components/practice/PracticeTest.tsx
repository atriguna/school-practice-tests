'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Check, X, Sparkles } from 'lucide-react';
import type { Question } from '@/app/data/types';

type PracticeTestProps = {
  subject: 'math' | 'english';   // ✅ tambahin subject
  questions: Question[];
  onComplete: (score: number, total: number) => void;
  resumeIndex?: number;
  fetchExplanation: (question: string, wrongAnswer: string, grade: string) => Promise<string>;
};

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

export default function PracticeTest({
  subject,
  questions,
  onComplete,
  resumeIndex = 0,
  fetchExplanation,
}: PracticeTestProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(resumeIndex);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [loadingExplain, setLoadingExplain] = useState(false);
  const [aiExplanation, setAiExplanation] = useState<string>("");

  const router = useRouter();
  const params = useParams();
  const grade = params?.grade ?? "1";

  const current = questions[currentQuestionIndex];
  const isLast = currentQuestionIndex === questions.length - 1;

  // 🔹 Save progress
  useEffect(() => {
    localStorage.setItem(
      `practice-progress-${subject}-grade-${grade}`,
      JSON.stringify({
        index: currentQuestionIndex,
        score,
      })
    );
  }, [currentQuestionIndex, score, grade, subject]);

  const handleAnswer = async (option: string) => {
    if (answered) return;
    setSelectedOption(option);
    setAnswered(true);

    if (option === current.correctAnswer) {
      setScore((s) => s + 1);
      setAiExplanation("");
    } else {
      const key = `explain-${subject}-${grade}-${currentQuestionIndex}-${option}`;
      const cachedExplain = localStorage.getItem(key);

      if (cachedExplain) {
        console.log("✅ Loaded explanation from cache:", cachedExplain);
        setAiExplanation(cachedExplain);
        return;
      }

      setLoadingExplain(true);
      try {
        const explanation = await fetchExplanation(current.question, option, grade as string);
        setAiExplanation(explanation);

        localStorage.setItem(key, explanation || "");
      } catch (err) {
        console.error("Failed to fetch explanation:", err);
        setAiExplanation("⚠️ Failed to get AI explanation.");
      } finally {
        setLoadingExplain(false);
      }
    }
  };

  const handleNext = () => {
    if (isLast) {
      if (questions.length > 0) {
        onComplete(score, questions.length);
      }
      return;
    }
    setCurrentQuestionIndex((i) => i + 1);
    setSelectedOption(null);
    setAnswered(false);
    setAiExplanation("");
  };

  const getOptionClass = (option: string) => {
    if (!answered) return 'hover:ring-2 hover:ring-blue-300';
    if (option === current.correctAnswer) return 'bg-green-50 border-green-400';
    if (option === selectedOption && option !== current.correctAnswer) return 'bg-red-50 border-red-400';
    return 'opacity-70';
  };

  if (!questions.length) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-sky-50 to-fuchsia-50">
        <p className="text-gray-600">No practice questions available yet.</p>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-sky-50 to-fuchsia-50">
      {/* Strip dekor kiri */}
      <div className="pointer-events-none fixed left-0 top-0 h-screen w-2 bg-gradient-to-b from-sky-400 to-fuchsia-500" />

      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sky-700 hover:text-sky-900 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back</span>
          </button>

          <div className="flex items-center gap-2 text-sky-700">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">
              Grade {grade} {subject === "math" ? "Math" : "English"} Practice
            </span>
          </div>

          <div className="text-sm text-gray-600">
            Q {currentQuestionIndex + 1}/{questions.length}
          </div>
        </div>

        {/* Progress dots */}
        <div className="mb-4 flex justify-center gap-2">
          {questions.map((_, i) => (
            <div
              key={i}
              className={[
                'h-2 rounded-full transition-all',
                i === currentQuestionIndex ? 'w-10 bg-sky-500' : 'w-6 bg-gray-300',
              ].join(' ')}
            />
          ))}
        </div>

        {/* Kartu soal */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 ring-1 ring-black/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold mb-3">
            <span>📘</span>
            <span>{current.topic}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
            {current.question}
          </h2>

          {/* Opsi jawaban */}
          <div className="space-y-3">
            {Array.isArray(current?.options) && current.options.length > 0 ? (
              current.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => !answered && handleAnswer(option)}
                  className={`w-full text-left p-4 sm:p-5 border-2 rounded-2xl bg-white transition-all
                    ${getOptionClass(option)} text-gray-900`}
                >
                  <div className="flex items-center gap-3 cursor-pointer">
                    <span className="grid place-content-center h-9 w-9 rounded-xl border-2 font-black text-lg
                                    bg-sky-50 border-sky-300">
                      {LETTERS[idx] ?? '•'}
                    </span>

                    <div className="flex-1 text-lg sm:text-xl font-semibold">{option}</div>

                    {answered && (
                      option === current.correctAnswer ? (
                        <Check className="w-6 h-6 text-green-600" />
                      ) : option === selectedOption ? (
                        <X className="w-6 h-6 text-red-500" />
                      ) : (
                        <span className="opacity-0 w-6" />
                      )
                    )}
                  </div>
                </button>
              ))
            ) : (
              <p className="text-sm text-gray-500">⚠️ Soal ini tidak punya opsi jawaban.</p>
            )}
          </div>

          {/* Feedback & tombol next */}
          <div className="mt-6">
            {answered ? (
              <div className={`p-4 rounded-2xl ${selectedOption === current.correctAnswer ? 'bg-green-50' : 'bg-amber-50'}`}>
                <div className="flex items-start gap-3">
                  {selectedOption === current.correctAnswer ? (
                    <span className="text-2xl">🎉</span>
                  ) : (
                    <span className="text-2xl">🤔</span>
                  )}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {selectedOption === current.correctAnswer ? 'Great job!' : 'Nice try!'}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {selectedOption === current.correctAnswer
                        ? current.explanation
                        : (loadingExplain ? "⏳ Waiting AI Explain..." : aiExplanation || current.explanation)
                      }
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="mt-4 w-full bg-sky-600 text-white py-3 px-4 rounded-2xl text-lg font-bold hover:bg-sky-700 active:scale-[0.99] transition cursor-pointer"
                >
                  {isLast ? 'See My Score' : 'Next Question ➜'}
                </button>
              </div>
            ) : (
              <p className="text-center text-sm text-gray-500">Tap an answer to continue 👆</p>
            )}
          </div>
        </div>

        {/* Footer skor sementara */}
        <div className="mt-4 text-center text-sm text-gray-600">
          ⭐ Score: <span className="font-semibold">{score}</span>
        </div>
      </div>
    </main>
  );
}
