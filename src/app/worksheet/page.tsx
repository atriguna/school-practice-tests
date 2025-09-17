import Worksheet from "@/app/components/worksheet/Worksheet";

export default function WorksheetPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 md:ml-40">
        Math Worksheet
      </h1>
      <Worksheet />
    </main>
  );
}
