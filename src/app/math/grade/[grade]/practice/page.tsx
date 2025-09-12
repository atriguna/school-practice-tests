import { notFound } from 'next/navigation';
import { getPracticeQuestions } from '@/app/data/mathPracticeQuestions';
import PracticeWrapper from './PracticeWrapper';

export default async function PracticePage({ params }: { params: Promise<{ grade: string }> }) {
  const { grade } = await params; // ✅ unwrap di server
  const gradeNumber = parseInt(grade);

  if (isNaN(gradeNumber) || gradeNumber < 1 || gradeNumber > 6) {
    notFound();
  }

  const gradeId = `grade-${gradeNumber}`;
  const questions = getPracticeQuestions(gradeId);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-black">Grade {gradeNumber} Practice Test</h1>
      <PracticeWrapper questions={questions} />
    </div>
  );
}
