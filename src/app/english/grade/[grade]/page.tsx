// src/app/math/grade/[grade]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Star, Zap } from 'lucide-react';
import { getEnglishGrade } from '@/data/englishCurriculum';
import GradeCurriculum from './GradeCurriculum';
import DailyChallenge from '@/app/components/curriculum/DailyChallenge';

// ✅ generate static params untuk grade 1–6
export async function generateStaticParams() {
  return Array.from({ length: 6 }, (_, i) => ({
    grade: (i + 1).toString(),
  }));
}

export default async function GradePage({ params }: any) {
  const { grade } = await params;
  const gradeNumber = Number(grade);

  if (!Number.isInteger(gradeNumber) || gradeNumber < 1 || gradeNumber > 6) {
    notFound();
  }

  const gradeId = `grade-${gradeNumber}`;
  const gradeData = getEnglishGrade(gradeId);
  if (!gradeData) notFound();

  const gradeColors =
    [
      'from-pink-400 to-purple-500',
      'from-yellow-400 to-orange-500',
      'from-green-400 to-teal-500',
      'from-blue-400 to-indigo-500',
      'from-purple-400 to-pink-500',
      'from-red-400 to-orange-500',
    ][gradeNumber - 1] || 'from-blue-400 to-indigo-500';

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div
        className={`relative rounded-3xl p-8 mb-10 text-white overflow-hidden ${gradeColors} bg-gradient-to-r`}
      >
        <div className="relative z-10">
          <Link
            href="/english"
            className="inline-flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to English
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Grade {gradeNumber} English</h1>
              <p className="text-xl text-white/90 max-w-2xl">{gradeData.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center bg-white/20 px-3 py-1 rounded-full text-sm">
                  <Star className="w-4 h-4 mr-1" /> Fun Lessons
                </span>
                <span className="inline-flex items-center bg-white/20 px-3 py-1 rounded-full text-sm">
                  <Zap className="w-4 h-4 mr-1" /> Interactive Practice
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center w-24 h-24 bg-white/20 rounded-2xl text-5xl font-bold">
              {gradeNumber}
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <GradeCurriculum gradeNumber={gradeNumber} grade={gradeData} />

      {/* Daily Challenge */}
      <DailyChallenge gradeNumber={gradeNumber} />
    </div>
  );
}
