'use client';

import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';

export default function EnglishPage() {
  const classes = [1, 2, 3, 4, 5, 6];

  return (
    // ❌ Hapus sidebar di sini, cukup bungkus konten
    <main className="flex-1 flex justify-center items-start p-6 md:-ml-40">
      <div className="w-full max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center">
            <span>Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">English</h1>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 bg-blue-700 text-white">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 mr-4" />
              <h2 className="text-2xl font-bold">English Practice Tests</h2>
            </div>
            <p className="mt-2 text-blue-100">
              Select your grade level to start practicing english problems.
            </p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {classes.map((classNum) => (
                <Link
                  key={classNum}
                  href={`/english/grade/${classNum}`}
                  className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Grade {classNum}</h3>
                    <p className="text-sm text-gray-500">Practice english for grade {classNum}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.723-1.36 3.488 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    More subjects are coming soon. Check back later for updates!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
