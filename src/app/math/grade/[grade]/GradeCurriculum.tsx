'use client';

import { useState } from 'react';
import Link from 'next/link';
import VideoLessonsModal from '../../../components/curriculum/VideoLessonsModal';


type SubTopic = { id: string; title: string; description?: string; hasPractice?: boolean };
type Topic = { id: string; name: string; description?: string; subtopics: (string | SubTopic)[] };
type Grade = { id: string; name: string; description: string; topics: Topic[] };

export default function GradeCurriculum({
  gradeNumber,
  grade,
}: {
  gradeNumber: number;
  grade: Grade;
}) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const INITIAL_VISIBLE = 3;

  const stTitle = (st: string | SubTopic) => (typeof st === 'string' ? st : st.title);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">What You'll Learn</h2>
          </div>

          <div className="divide-y divide-gray-100">
            {grade.topics.map((topic, index) => {
              const isOpen = !!expanded[topic.id];
              const subs = topic.subtopics;
              const first = subs.slice(0, INITIAL_VISIBLE);
              const rest = subs.slice(INITIAL_VISIBLE);

              return (
                <div key={topic.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                    <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3">
                      {index + 1}
                    </span>
                    {topic.name}
                  </h3>

                  {topic.description && (
                    <p className="text-gray-600 mt-2 ml-11">{topic.description}</p>
                  )}

                  <div className="mt-3 ml-11">
                    <ul className="space-y-2">
                      {first.map((st, i) => (
                        <li key={`first-${i}`} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{stTitle(st)}</span>
                        </li>
                      ))}

                      {isOpen &&
                        rest.map((st, j) => (
                          <li key={`rest-${j}`} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-700">{stTitle(st)}</span>
                          </li>
                        ))}

                      {rest.length > 0 && (
                        <li>
                          {!isOpen ? (
                            <button
                              onClick={() => setExpanded((p) => ({ ...p, [topic.id]: true }))}
                              className="mt-1 text-blue-600 hover:underline text-sm font-medium"
                            >
                              + {rest.length} more...
                            </button>
                          ) : (
                            <button
                              onClick={() => setExpanded((p) => ({ ...p, [topic.id]: false }))}
                              className="mt-1 text-blue-600 hover:underline text-sm font-medium"
                            >
                              Show less
                            </button>
                          )}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div>
        <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Link
              href={`/math/grade/${gradeNumber}/practice`}
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
            >
              Start Practice Test
            </Link>
            <Link
              href={`/worksheet/${gradeNumber}`}
              className="w-full block bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg font-medium text-center transition-colors"
            >
              📘 Math Worksheet
            </Link>
            <VideoLessonsModal
                subtopics={grade.topics.flatMap(t =>
                    t.subtopics.map(st =>
                    typeof st === 'string'
                        ? { id: st, title: st, videos: [] }
                        : st
                    )
                )}
                />
          </div>
        </div>
      </div>
    </div>
  );
}
