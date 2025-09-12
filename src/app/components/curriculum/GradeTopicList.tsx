'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link'; // kalau nggak pakai Link, bisa hapus & ganti <button>
import type { Grade, Topic, SubTopic } from '@/app/data/mathCurriculum';

// --- Helper: ubah string | SubTopic => SubTopic penuh ---
function normalizeSubtopics(subtopics: (string | SubTopic)[]): SubTopic[] {
  return subtopics.map((st, idx) => {
    if (typeof st === 'string') {
      // bikin id slug sederhana dari string
      const slug =
        st
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '') || `sub-${idx}`;
      return {
        id: slug,
        title: st,
        description: '',
        hasPractice: false,
      };
    }
    return st;
  });
}

type GradeTopicListProps = {
  grade: Grade; // pass grade object langsung (lebih aman)
  // atau kalau mau by id: gradeId?: string;

  // opsional kalau kamu mau handle start practice di luar (mis. buka route lain)
  onStartPractice?: (topic: Topic, subtopic: SubTopic) => void;

  // berapa subtopic yang ditampilkan sebelum “+ n more”
  initialVisible?: number;
};

export default function GradeTopicList({
  grade,
  onStartPractice,
  initialVisible = 3,
}: GradeTopicListProps) {
  // state expand per topic
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const topics = grade.topics ?? [];

  return (
    <section className="space-y-6">
      {topics.map((topic) => {
        const normalized = normalizeSubtopics(topic.subtopics);
        const isExpanded = !!expanded[topic.id];
        const visibleItems = isExpanded
          ? normalized
          : normalized.slice(0, initialVisible);
        const remaining = Math.max(normalized.length - visibleItems.length, 0);

        return (
          <article
            key={topic.id}
            className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
          >
            <header className="mb-3">
              <h3 className="text-xl font-bold text-gray-900">
                {topic.name}
              </h3>
              {topic.description && (
                <p className="mt-1 text-gray-600">{topic.description}</p>
              )}
            </header>

            <ul className="space-y-3">
              {visibleItems.map((st) => (
                <li
                  key={st.id}
                  className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {st.title}
                      </h4>
                      {st.description && (
                        <p className="text-sm text-gray-600">{st.description}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Tombol Outline/Intro */}
                      {/* Ganti href sesuai route outline-mu, mis: /math/grade/[gradeId]/outline?topic=...&sub=... */}
                      <Link
                        href={{
                          pathname: `/math/grade/${grade.id}/outline`,
                          query: { topic: topic.id, sub: st.id },
                        }}
                        className="inline-flex items-center justify-center rounded-lg border border-sky-300 px-3 py-1.5 text-sm font-semibold text-sky-700 hover:bg-sky-50"
                      >
                        Outline
                      </Link>

                      {/* Tombol Practice */}
                      {st.hasPractice ? (
                        onStartPractice ? (
                          <button
                            onClick={() => onStartPractice(topic, st)}
                            className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-sky-700"
                          >
                            Practice
                          </button>
                        ) : (
                          <Link
                            href={{
                              pathname: `/math/grade/${grade.id}/practice`,
                              query: { topic: topic.id, sub: st.id },
                            }}
                            className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-sky-700"
                          >
                            Practice
                          </Link>
                        )
                      ) : (
                        <span className="rounded-lg bg-gray-100 px-2 py-1 text-xs font-medium text-gray-500">
                          No Practice
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* + n more / Show less */}
            {remaining > 0 && (
              <div className="mt-4">
                <button
                  onClick={() =>
                    setExpanded((p) => ({ ...p, [topic.id]: true }))
                  }
                  className="text-sky-700 font-semibold hover:underline"
                >
                  + {remaining} more
                </button>
              </div>
            )}

            {isExpanded && normalized.length > initialVisible && (
              <div className="mt-3">
                <button
                  onClick={() =>
                    setExpanded((p) => ({ ...p, [topic.id]: false }))
                  }
                  className="text-sky-700 font-semibold hover:underline"
                >
                  Show less
                </button>
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
}
