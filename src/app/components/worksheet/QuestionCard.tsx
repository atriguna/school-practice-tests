"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Question = {
  id: string;
  question_text: string;
  options: string[];
  correct_answer: string;
  explanation?: string;
};

export default function QuestionCard({ question }: { question: Question }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<null | "correct" | "wrong">(null);

  const checkAnswer = (option: string) => {
    setSelected(option);
    if (option === question.correct_answer) {
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-blue-50 to-purple-50 shadow-md rounded-2xl p-6 md:-ml-40"
    >
      <p className="text-lg font-semibold text-gray-800 mb-4">
        {question.question_text}
      </p>

      <div className="space-y-3">
        {question.options.map((opt) => (
          <motion.button
            key={opt}
            onClick={() => checkAnswer(opt)}
            disabled={feedback !== null}
            whileTap={{ scale: 0.95 }}
            className={`w-full px-4 py-3 rounded-xl border font-medium transition cursor-pointer text-gray-800 ${
              selected === opt && feedback === "correct"
                ? "bg-green-100 border-green-500 text-green-700"
                : selected === opt && feedback === "wrong"
                ? "bg-red-100 border-red-500 text-red-700"
                : "bg-white border-gray-300 hover:bg-blue-50"
            }`}
          >
            {opt}
          </motion.button>
        ))}
      </div>

      {feedback === "correct" && (
        <p className="mt-4 text-green-600 font-semibold text-lg">
          ✅ Correct! Well done!
        </p>
      )}
      {feedback === "wrong" && (
        <div className="mt-4 text-red-600 font-semibold text-lg">
          ❌ Oops! Try again!
          {question.explanation && (
            <p className="mt-2 text-gray-700 text-sm">{question.explanation}</p>
          )}
        </div>
      )}
    </motion.div>
  );
}
