'use client';

import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const dailyChallenges: Record<number, { q: string; a: string }[]> = {
  1: [
    { q: "What is 3 + 2?", a: "5" },
    { q: "Count the apples 🍎: 🍎🍎🍎🍎", a: "4" },
    { q: "What comes after 19?", a: "20" },
  ],
  2: [
    { q: "12 - 7 = ?", a: "5" },
    { q: "What is double of 8?", a: "16" },
    { q: "10 + 15 = ?", a: "25" },
  ],
  3: [
    { q: "4 × 5 = ?", a: "20" },
    { q: "Half of 30?", a: "15" },
    { q: "36 ÷ 6 = ?", a: "6" },
  ],
  4: [
    { q: "120 ÷ 10 = ?", a: "12" },
    { q: "Perimeter of a square with side 5?", a: "20" },
    { q: "15 × 3 = ?", a: "45" },
  ],
  5: [
    { q: "Simplify: 3/4 + 1/4", a: "1" },
    { q: "Find 20% of 150", a: "30" },
    { q: "7 × 8 = ?", a: "56" },
  ],
  6: [
    { q: "Ratio of 6:9 in simplest form?", a: "2:3" },
    { q: "Area of triangle (base 10, height 5)?", a: "25" },
    { q: "Simplify: 2/3 × 3/4", a: "1/2" },
  ],
};

export default function DailyChallenge({ gradeNumber }: { gradeNumber: number }) {
  const [challenge, setChallenge] = useState<{ q: string; a: string } | null>(null);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const questions = dailyChallenges[gradeNumber] || [];
    if (questions.length > 0) {
      // pilih soal berdasarkan tanggal
      const todayIndex = new Date().getDate() % questions.length;
      setChallenge(questions[todayIndex]);
    }
  }, [gradeNumber]);

  const checkAnswer = () => {
    if (!challenge) return;
    if (answer.trim().toLowerCase() === challenge.a.toLowerCase()) {
      setResult('✅ Correct! Great job!');
    } else {
      setResult('❌ Try again!');
    }
  };

  return (
    <div className="mt-10 bg-gradient-to-r from-blue-100 to-blue-300 p-6 rounded-2xl shadow-lg text-black">
      <div className="flex items-center mb-4">
        <Sparkles className="w-6 h-6 mr-2 text-yellow-200" />
        <h2 className="text-xl font-bold">🎯 Today’s Challenge</h2>
      </div>

      {challenge ? (
        <div>
          <p className="text-lg font-medium mb-4">{challenge.q}</p>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer..."
              className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-gray-800"
            />
            <button
              onClick={checkAnswer}
              className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold rounded-lg shadow transition cursor-pointer"
            >
              Check
            </button>
          </div>

          {result && (
            <p className="mt-3 text-sm font-semibold bg-white/20 px-3 py-2 rounded-lg inline-block">
              {result}
            </p>
          )}
        </div>
      ) : (
        <p>No challenge available today.</p>
      )}
    </div>
  );
}
