"use client";

import { useState } from "react";
import QuestionCard from "./QuestionCard";
import { QuestionWorksheets } from "@/app/data/types"

export default function Worksheet({ questions }: { questions: QuestionWorksheets[] }) {
  const [page, setPage] = useState(1);
  const limit = 5;

  const startIndex = (page - 1) * limit;
  const currentQuestions = questions.slice(startIndex, startIndex + limit);
  const totalPages = Math.ceil(questions.length / limit);

  const progress = Math.min(page * limit, questions.length);

  return (
    <div className="max-w-3xl mx-auto space-y-6 ">
      {/* Progress bar */}
      <div className="md:-ml-40">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all"
            style={{ width: `${(progress / questions.length) * 100}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 font-medium mt-2">
          {progress} / {questions.length} questions viewed
        </p>
      </div>

      {/* Render questions */}
      {currentQuestions.map((q) => (
        <QuestionCard key={q.id} question={q} />
      ))}

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className={`md:-ml-40 px-4 py-2 rounded-lg border text-gray-600 ${
            page === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-white border-gray-300 hover:bg-gray-50"
          }`}
        >
          ← Prev
        </button>

        <span className="text-sm font-medium text-gray-600">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded-lg border text-gray-600 ${
            page === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-white border-gray-300 hover:bg-gray-50"
          }`}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
