'use client';

import PracticeTest from '@/app/components/practice/PracticeTest';
import { Question } from '@/app/data/types';

export default function PracticeWrapper({ questions }: { questions: Question[] }) {
  return (
    <PracticeTest
      questions={questions}
      onComplete={(score, total) => {
        alert(`You scored ${score} out of ${total}`);
      }}
    />
  );
}
