import { BookOpen, Book, BookText, BookMarked } from 'lucide-react';
import Link from 'next/link';

const subjects = [
  {
    id: 'math',
    name: 'Mathematics',
    description: 'Practice addition, subtraction, multiplication, and more!',
    icon: BookOpen,
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-700',
  },
  {
    id: 'english',
    name: 'English',
    description: 'Improve your grammar, vocabulary, and reading skills.',
    icon: Book,
    bgColor: 'bg-green-100',
    textColor: 'text-green-700',
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Explore the wonders of science with fun experiments.',
    icon: BookText,
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-700',
  },
  {
    id: 'history',
    name: 'History',
    description: 'Travel through time and learn about important events.',
    icon: BookMarked,
    bgColor: 'bg-amber-100',
    textColor: 'text-amber-700',
  },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to School Practice Tests</h1>
        <p className="text-xl text-gray-600">Select a subject to start practicing</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {subjects.map((subject) => {
          const href = subject.id === 'math' ? `/math` : `/coming-soon`;
          return (
            <Link
              key={subject.id}
              href={href}
              className={`${subject.bgColor} rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className={`${subject.textColor} mb-4`}>
                <subject.icon className="w-10 h-10" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{subject.name}</h2>
              <p className="text-gray-600">{subject.description}</p>
            </Link>
          );
        })}
      </div>
      
      <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">How it works</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          <li>Select a subject from the cards above or the sidebar</li>
          <li>Choose a practice test or topic</li>
          <li>Answer the questions and check your results</li>
          <li>Track your progress and improve your skills!</li>
        </ol>
      </div>
    </div>
  );
}
