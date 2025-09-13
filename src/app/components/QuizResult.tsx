'use client';

export default function QuizResult({
  score,
  total,
  onClose,
}: {
  score: number;
  total: number;
  onClose: () => void;
}) {
  const percentage = Math.round((score / total) * 100);
  const isGreat = percentage >= 80;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-center animate-fadeIn">
        <h2 className="text-2xl font-bold mb-2">
          {isGreat ? '🎉 Great Job!' : '👏 Well Done!'}
        </h2>
        <p className="text-gray-700 mb-4">
          You scored <span className="font-bold">{score}</span> out of {total}
        </p>

        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full flex items-center justify-center text-xl font-bold text-white 
            bg-gradient-to-r from-green-400 to-emerald-500">
            {percentage}%
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
