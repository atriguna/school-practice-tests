import { notFound } from "next/navigation";
import PracticeWrapper from "./PracticeWrapper";

// ✅ generate static params untuk SSG
export async function generateStaticParams() {
  return [1, 2, 3, 4, 5, 6].map((grade) => ({
    grade: grade.toString(),
  }));
}

export default async function PracticePage({
  params,
}: {
  params: Promise<{ grade: string }>;
}) {
  const { grade } = await params;
  const gradeNumber = Number(grade);

  if (!Number.isInteger(gradeNumber) || gradeNumber < 1 || gradeNumber > 6) {
    return notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-black">
        Math – Grade {gradeNumber} Practice Test
      </h1>
      <PracticeWrapper subject="math" gradeNumber={gradeNumber} />
    </div>
  );
}
