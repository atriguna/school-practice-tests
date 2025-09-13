'use client';

import { useState } from 'react';
import PracticeTest from '@/app/components/practice/PracticeTest';
import { Question } from '@/app/data/types';
import QuizResult from '@/app/components/QuizResult';

export default function PracticeWrapper({ questions }: { questions: Question[] }) {
  const [score, setScore] = useState<number | null>(null);
  const [total, setTotal] = useState<number>(0);

  return (
    <div>
      <PracticeTest
        questions={questions}
        onComplete={(s, t) => {
          setScore(s);
          setTotal(t);
        }}
      />

      {score !== null && (
        <QuizResult
          score={score}
          total={total}
          onClose={() => setScore(null)}
        />
      )}
    </div>
  );
}
