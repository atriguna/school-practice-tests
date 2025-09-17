import Worksheet from "@/app/components/worksheet/Worksheet";

export function generateStaticParams() {
  return [
    { grade: "1" },
    { grade: "2" },
    { grade: "3" },
    { grade: "4" },
    { grade: "5" },
    { grade: "6" },
  ];
}

export default async function WorksheetPage({ params }: { params: { grade: string } }) {
  const { grade } = params;

  // load file JSON sesuai grade
  const questions = await import(`@/app/data/grade${grade}.json`);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 md:ml-40">
        Math Worksheet — Grade {grade}
      </h1>
      <Worksheet questions={questions.default} />
    </main>
  );
}
