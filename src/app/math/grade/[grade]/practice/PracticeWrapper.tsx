'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import PracticeTest from '@/app/components/practice/PracticeTest';
import QuizResult from '@/app/components/QuizResult';
import { Question } from '@/app/data/types';

interface PracticeWrapperProps {
  gradeNumber: number;
}

export default function PracticeWrapper({ gradeNumber }: PracticeWrapperProps) {
  const router = useRouter();
  const grade = gradeNumber.toString();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState<number | null>(null);
  const [total, setTotal] = useState<number>(0);

  // ✅ fallback harus lengkap sesuai type
  const fallbackQuestions: Question[] = [
    {
      id: 1,
      question: "2 + 3 = ?",
      options: ["4", "5", "6", "7"],
      correctAnswer: "5",
      explanation: "Adding 2 and 3 gives 5.",
      topic: "basic math",
    },
  ];

  // 🔹 Fetch questions dari Worker API
  const fetchQuestions = useCallback(async () => {
    setLoading(true);

    try {
      const cached = localStorage.getItem(`questions-grade-${grade}`);
      if (cached) {
        console.log("📦 Loaded from cache");
        setQuestions(JSON.parse(cached));
        setLoading(false);
        return;
      }

      const res = await fetch("https://api.ruangbelajar.info/api/question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ grade }),
      });

      const data = await res.json();
      console.log("🎯 API Response:", data);

      if (data.questions?.length) {
        setQuestions(data.questions);
        localStorage.setItem(
          `questions-grade-${grade}`,
          JSON.stringify(data.questions)
        );
      } else {
        throw new Error("API returned empty questions");
      }
    } catch (err) {
      console.error("❌ Error fetching questions, using fallback:", err);
      setQuestions(fallbackQuestions);
      localStorage.removeItem(`questions-grade-${grade}`);
    } finally {
      setLoading(false);
    }
  }, [grade]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  // 🔹 Ambil explanation per jawaban salah
  const fetchExplanation = async (question: string, wrongAnswer: string) => {
    try {
      const res = await fetch("https://api.ruangbelajar.info/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, wrongAnswer, grade }),
      });

      const data = await res.json();
      return data.explanation || "⚠️ No explanation available.";
    } catch (err) {
      console.error("❌ Error fetching explanation:", err);
      return "⚠️ Failed to fetch explanation.";
    }
  };

  // 🔹 Selesai kuis
  const handleComplete = (s: number, t: number) => {
    setScore(s);
    setTotal(t);

    // clear cache
    localStorage.removeItem(`questions-grade-${grade}`);
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith(`explain-${grade}-`)) {
        localStorage.removeItem(key);
      }
    });
  };

  const handleCloseResult = () => {
    setScore(null);
    router.push(`/math/grade/${grade}`);
  };

  return (
    <div>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-2">⏳ Please Wait</h2>
            <p className="text-sm text-gray-600">Preparing your practice test...</p>
            <div className="mt-4 flex justify-center">
              <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      )}

      {!loading && questions.length > 0 && score === null && (
        <PracticeTest
          questions={questions}
          onComplete={handleComplete}
          fetchExplanation={fetchExplanation} // 🔹 lempar ke PracticeTest
        />
      )}

      {score !== null && (
        <QuizResult
          score={score}
          total={total}
          onClose={handleCloseResult}
        />
      )}

      {!loading && questions.length === 0 && (
        <p className="text-center text-red-500">
          ⚠️ No practice questions available. Please try again.
        </p>
      )}
    </div>
  );
}
