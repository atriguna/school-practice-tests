import { grade1Practice } from './practice/ grade-1';
import { grade2Practice } from './practice/ grade-2';
import { grade3Practice } from './practice/ grade-3';
import { grade4Practice } from './practice/ grade-4';
import { grade5Practice } from './practice/ grade-5';
import { grade6Practice } from './practice/ grade-6';

export const mathPracticeQuestions = {
  'grade-1': grade1Practice,
  'grade-2': grade2Practice,
  'grade-3': grade3Practice,
  'grade-4': grade4Practice,
  'grade-5': grade5Practice,
  'grade-6': grade6Practice
};

export const getPracticeQuestions = (gradeId: string, subtopicId?: string) => {
  const grade = mathPracticeQuestions[gradeId as keyof typeof mathPracticeQuestions];
  if (!grade) return [];
  if (subtopicId) return grade[subtopicId] || [];
  return Object.values(grade).flat();
};

