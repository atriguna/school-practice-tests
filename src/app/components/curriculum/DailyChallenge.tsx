'use client';

import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const dailyChallenges: Record<number, { q: string; a: string }[]> = {
  1: [
    { q: "What is 3 + 2?", a: "5" },
    { q: "Count the apples 🍎: 🍎🍎🍎🍎", a: "4" },
    { q: "What comes after 19?", a: "20" },
    { q: "7 - 3 = ?", a: "4" },
    { q: "2 + 6 = ?", a: "8" },
    { q: "10 - 7 = ?", a: "3" },
    { q: "Count the stars ⭐: ⭐⭐⭐", a: "3" },
    { q: "What is double of 4?", a: "8" },
    { q: "What comes before 12?", a: "11" },
    { q: "9 + 1 = ?", a: "10" },
    { q: "5 - 2 = ?", a: "3" },
    { q: "Count the bananas 🍌: 🍌🍌🍌🍌🍌", a: "5" },
    { q: "10 + 5 = ?", a: "15" },
    { q: "8 - 6 = ?", a: "2" },
    { q: "What comes after 29?", a: "30" },
    { q: "7 + 2 = ?", a: "9" },
    { q: "6 - 1 = ?", a: "5" },
    { q: "Double of 7?", a: "14" },
    { q: "Count the ducks 🦆: 🦆🦆🦆🦆🦆🦆", a: "6" },
    { q: "What is 15 - 10?", a: "5" },
  ],
  2: [
    { q: "12 - 7 = ?", a: "5" },
    { q: "What is double of 8?", a: "16" },
    { q: "10 + 15 = ?", a: "25" },
    { q: "20 - 5 = ?", a: "15" },
    { q: "3 × 4 = ?", a: "12" },
    { q: "Half of 12?", a: "6" },
    { q: "9 + 11 = ?", a: "20" },
    { q: "15 - 9 = ?", a: "6" },
    { q: "2 × 8 = ?", a: "16" },
    { q: "Double of 11?", a: "22" },
    { q: "18 ÷ 2 = ?", a: "9" },
    { q: "7 + 13 = ?", a: "20" },
    { q: "14 - 6 = ?", a: "8" },
    { q: "5 × 5 = ?", a: "25" },
    { q: "Half of 20?", a: "10" },
    { q: "21 - 7 = ?", a: "14" },
    { q: "8 + 12 = ?", a: "20" },
    { q: "3 × 7 = ?", a: "21" },
    { q: "16 ÷ 4 = ?", a: "4" },
    { q: "25 - 19 = ?", a: "6" },
  ],
  3: [
    { q: "4 × 5 = ?", a: "20" },
    { q: "Half of 30?", a: "15" },
    { q: "36 ÷ 6 = ?", a: "6" },
    { q: "9 × 3 = ?", a: "27" },
    { q: "45 ÷ 5 = ?", a: "9" },
    { q: "7 × 6 = ?", a: "42" },
    { q: "Half of 50?", a: "25" },
    { q: "81 ÷ 9 = ?", a: "9" },
    { q: "12 × 2 = ?", a: "24" },
    { q: "100 ÷ 10 = ?", a: "10" },
    { q: "8 × 8 = ?", a: "64" },
    { q: "49 ÷ 7 = ?", a: "7" },
    { q: "11 × 3 = ?", a: "33" },
    { q: "90 ÷ 9 = ?", a: "10" },
    { q: "6 × 7 = ?", a: "42" },
    { q: "24 ÷ 6 = ?", a: "4" },
    { q: "15 × 2 = ?", a: "30" },
    { q: "70 ÷ 10 = ?", a: "7" },
    { q: "9 × 4 = ?", a: "36" },
    { q: "32 ÷ 8 = ?", a: "4" },
  ],
  4: [
    { q: "120 ÷ 10 = ?", a: "12" },
    { q: "Perimeter of a square with side 5?", a: "20" },
    { q: "15 × 3 = ?", a: "45" },
    { q: "100 ÷ 25 = ?", a: "4" },
    { q: "Area of square with side 6?", a: "36" },
    { q: "20 × 4 = ?", a: "80" },
    { q: "144 ÷ 12 = ?", a: "12" },
    { q: "Perimeter of rectangle (6,4)?", a: "20" },
    { q: "30 × 3 = ?", a: "90" },
    { q: "200 ÷ 50 = ?", a: "4" },
    { q: "Area of rectangle (8×5)?", a: "40" },
    { q: "25 × 6 = ?", a: "150" },
    { q: "121 ÷ 11 = ?", a: "11" },
    { q: "Perimeter of square with side 7?", a: "28" },
    { q: "18 × 9 = ?", a: "162" },
    { q: "144 ÷ 16 = ?", a: "9" },
    { q: "Area of square with side 9?", a: "81" },
    { q: "40 × 5 = ?", a: "200" },
    { q: "180 ÷ 15 = ?", a: "12" },
    { q: "Perimeter of rectangle (10,6)?", a: "32" },
  ],
  5: [
    { q: "Simplify: 3/4 + 1/4", a: "1" },
    { q: "Find 20% of 150", a: "30" },
    { q: "7 × 8 = ?", a: "56" },
    { q: "2/5 + 3/5 = ?", a: "1" },
    { q: "35% of 200 = ?", a: "70" },
    { q: "9 × 9 = ?", a: "81" },
    { q: "3/8 + 5/8 = ?", a: "1" },
    { q: "50% of 180 = ?", a: "90" },
    { q: "12 × 12 = ?", a: "144" },
    { q: "7/10 + 3/10 = ?", a: "1" },
    { q: "25% of 240 = ?", a: "60" },
    { q: "8 × 7 = ?", a: "56" },
    { q: "5/6 + 1/6 = ?", a: "1" },
    { q: "10% of 450 = ?", a: "45" },
    { q: "15 × 10 = ?", a: "150" },
    { q: "2/3 + 1/3 = ?", a: "1" },
    { q: "40% of 250 = ?", a: "100" },
    { q: "14 × 6 = ?", a: "84" },
    { q: "9/12 + 3/12 = ?", a: "1" },
    { q: "5% of 500 = ?", a: "25" },
  ],
  6: [
    { q: "Ratio of 6:9 in simplest form?", a: "2:3" },
    { q: "Area of triangle (base 10, height 5)?", a: "25" },
    { q: "Simplify: 2/3 × 3/4", a: "1/2" },
    { q: "Simplify ratio 12:18", a: "2:3" },
    { q: "Area of circle (r=7, π=22/7)?", a: "154" },
    { q: "3/5 × 10 = ?", a: "6" },
    { q: "Ratio of 15:25?", a: "3:5" },
    { q: "Area of triangle (12×8/2)?", a: "48" },
    { q: "Simplify 4/8", a: "1/2" },
    { q: "Perimeter of circle (r=7, π=22/7)?", a: "44" },
    { q: "5/6 × 12 = ?", a: "10" },
    { q: "Ratio of 21:14?", a: "3:2" },
    { q: "Area of rectangle (15×9)?", a: "135" },
    { q: "Simplify 9/12", a: "3/4" },
    { q: "Volume of cube (side 5)?", a: "125" },
    { q: "7/8 × 16 = ?", a: "14" },
    { q: "Simplify 18/24", a: "3/4" },
    { q: "Surface area of cube (side 6)?", a: "216" },
    { q: "Volume of cuboid (10×4×5)?", a: "200" },
    { q: "Simplify 15/25", a: "3/5" },
  ],
};

export default function DailyChallenge({ gradeNumber }: { gradeNumber: number }) {
  const [challenge, setChallenge] = useState<{ q: string; a: string } | null>(null);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const questions = dailyChallenges[gradeNumber] || [];
    if (questions.length > 0) {
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

          {/* 🔹 Responsif: kolom di mobile, row di desktop */}
          <div className="flex flex-col sm:flex-row gap-2">
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
