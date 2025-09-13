// src/app/math/grade/[grade]/practice/page.tsx
import { notFound } from 'next/navigation';
import { getPracticeQuestions } from '@/app/data/mathPracticeQuestions';
import PracticeWrapper from './PracticeWrapper';

// ✅ WAJIB ada kalau pakai output: 'export'
export async function generateStaticParams() {
  return [1, 2, 3, 4, 5, 6].map((grade) => ({
    grade: grade.toString(),
  }));
}

export default async function PracticePage({ params }: { params: Promise<{ grade: string }> }) {
  const resolvedParams = await params;
  const gradeNumber = Number(resolvedParams.grade);

  if (!Number.isInteger(gradeNumber) || gradeNumber < 1 || gradeNumber > 6) {
    notFound();
  }

  const gradeId = `grade-${gradeNumber}`;
  const questions = getPracticeQuestions(gradeId);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-black">
        Grade {gradeNumber} Practice Test
      </h1>
      <PracticeWrapper questions={questions} />
    </div>
  );
}
