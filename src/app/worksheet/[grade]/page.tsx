import Worksheet from "@/app/components/worksheet/Worksheet";
import type { QuestionWorksheets } from "@/app/data/types"; // kalau kamu punya tipe Question


export async function generateStaticParams() {
  return [1, 2, 3, 4, 5, 6].map((grade) => ({
    grade: grade.toString(),
  }));
}


export default async function WorksheetPage({ params }: { params: Promise<{ grade: string }> }) {
  const { grade } = await params;

  // load file JSON sesuai grade
  const questions: { default: QuestionWorksheets[] } = await import(
    `@/app/data/grade${grade}.json`
  );

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 md:ml-40">
        Math Worksheet — Grade {grade}
      </h1>
      <Worksheet questions={questions.default} />
    </main>
  );
}
