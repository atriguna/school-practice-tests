"use client";

type QuizResultProps = {
  score: number;
  total: number;
  onClose: () => void;
};

export default function QuizResult({ score, total, onClose }: QuizResultProps) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
        <h2 className="text-xl font-bold mb-4">🎉 Well Done!</h2>
        <p className="text-gray-700 mb-2">
          You scored <span className="font-semibold">{score}</span> out of{" "}
          <span className="font-semibold">{total}</span>
        </p>
        <div className="flex justify-center items-center mb-4">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-green-100 text-green-600 text-2xl font-bold">
            {percentage}%
          </div>
        </div>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
