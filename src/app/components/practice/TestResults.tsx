'use client';

import { useRouter } from 'next/navigation';
import { CheckCircle, XCircle, ArrowLeft } from 'lucide-react';

type TestResultsProps = {
  score: number;
  total: number;
  onRetry: () => void;
};

export default function TestResults({ score, total, onRetry }: TestResultsProps) {
  const router = useRouter();
  const percentage = Math.round((score / total) * 100);
  const isPassing = percentage >= 70;

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={() => router.back()}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Curriculum
      </button>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className={`p-6 text-center ${isPassing ? 'bg-green-50' : 'bg-yellow-50'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-4">
            {isPassing ? (
              <CheckCircle className="w-10 h-10 text-green-500" />
            ) : (
              <XCircle className="w-10 h-10 text-yellow-500" />
            )}
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {isPassing ? 'Great Job!' : 'Keep Practicing!'}
          </h2>
          
          <p className="text-gray-600 mb-6">
            You scored {score} out of {total} ({percentage}%)
          </p>
          
          <div className="w-full bg-gray-200 rounded-full h-4 mb-6 overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ${
                isPassing ? 'bg-green-500' : 'bg-yellow-500'
              }`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          
          {isPassing ? (
            <p className="text-green-700 font-medium">
              Congratulations! You've passed the practice test.
            </p>
          ) : (
            <p className="text-yellow-700">
              You're getting there! Try again to improve your score.
            </p>
          )}
        </div>
        
        <div className="p-6 border-t">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{score}</div>
              <div className="text-sm text-gray-500">Correct</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">{total - score}</div>
              <div className="text-sm text-gray-500">Incorrect</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={onRetry}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={() => router.back()}
              className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Back to Curriculum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
