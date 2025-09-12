'use client';

import { useState, useEffect } from 'react';

type Video = { title: string; url: string };
type Subtopic = { id: string; title: string; videos?: Video[] };

export default function VideoLessonsModal({ subtopics }: { subtopics: Subtopic[] }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // 🔒 Lock scroll saat modal open
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer"
      >
        Watch Video Lessons
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-xl shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b bg-green-50">
              <h2 className="text-xl font-bold flex items-center gap-2 text-black">📚 Video Lessons</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setOpen(false)}
              >
                ✕ Close
              </button>
            </div>

            {/* Konten scrollable */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {subtopics.map((sub, idx) => {
                const isOpen = activeIndex === idx;
                return (
                  <div
                    key={sub.id}
                    className="border rounded-lg bg-gray-50 hover:shadow-md transition-shadow"
                  >
                    {/* Accordion header */}
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : idx)}
                      className="w-full flex justify-between items-center px-4 py-3 font-semibold text-left text-black"
                    >
                      <span>{sub.title}</span>
                      <span className="text-black">{isOpen ? '▲' : '▼'}</span>
                    </button>

                    {/* Accordion content */}
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-4 space-y-4">
                        {sub.videos && sub.videos.length > 0 ? (
                          sub.videos.map((video, vIdx) => (
                            <div
                              key={vIdx}
                              className="rounded-lg overflow-hidden border shadow-sm bg-white"
                            >
                              <iframe
                                className="w-full aspect-video"
                                src={video.url}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                              <p className="p-2 text-sm text-gray-700">{video.title}</p>
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-500 text-sm">No videos yet for this subtopic.</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
