// src/app/components/curriculum/CurriculumViewer.tsx
'use client';

import { ChevronDown, ChevronUp, BookOpen, Award, Star, Zap, Target, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Grade, Topic } from '@/app/data/mathCurriculum';
import Link from 'next/link';

// ... (keep the existing types and interfaces)

type ExpandedState = {
  [key: string]: boolean;
};

interface CurriculumViewerProps {
  grade: Grade;
}

export default function CurriculumViewer({ grade }: CurriculumViewerProps) {
  const [expandedState, setExpandedState] = useState<ExpandedState>({});
  
  // Topic icons mapping
  const topicIcons: Record<string, { emoji: string; color: string }> = {
    number: { emoji: '🔢', color: 'bg-blue-100 text-blue-600' },
    geometry: { emoji: '📐', color: 'bg-purple-100 text-purple-600' },
    measurement: { emoji: '📏', color: 'bg-green-100 text-green-600' },
    'data-handling': { emoji: '📊', color: 'bg-yellow-100 text-yellow-600' },
    'problem-solving': { emoji: '💡', color: 'bg-pink-100 text-pink-600' },
  };

  // Toggle topic expansion
  const toggleTopic = (topicId: string) => {
    setExpandedState((prevState: Record<string, boolean>) => ({
      ...prevState,
      [topicId]: !prevState[topicId]
    }));
  };

  // Toggle subtopic expansion
  const toggleSubtopic = (topicId: string, subtopicId: string) => {
    const key = `${topicId}-${subtopicId}`;
    setExpandedState((prevState: Record<string, boolean>) => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  // Check if topic is expanded
  const isTopicExpanded = (topicId: string) => {
    return expandedState[topicId] || false;
  };

  // Check if subtopic is expanded
  const isSubtopicExpanded = (topicId: string, subtopicId: string) => {
    return expandedState[`${topicId}-${subtopicId}`] || false;
  };

  // Count subtopics with practice
  const getPracticeCount = (topic: Topic) => {
    return topic.subtopics.filter(subtopic => 
      typeof subtopic !== 'string' && subtopic.hasPractice
    ).length;
  };

  return (
    <div className="w-full space-y-8">
      {/* Learning Path Section */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 font-display">
            <BookOpen className="text-blue-500" size={24} />
            Your Learning Path
          </h2>
          <p className="text-gray-600 mt-1">Explore topics and practice your skills!</p>
        </div>
        
        <div className="divide-y divide-gray-100">
          {grade.topics.map((topic: any) => {
            const topicIcon = topicIcons[topic.id] || { emoji: '📚', color: 'bg-gray-100 text-gray-600' };
            
            return (
              <div key={topic.id} className="hover:bg-gray-50/50 transition-colors">
                <button
                  onClick={() => toggleTopic(topic.id)}
                  className={`w-full flex items-center justify-between p-6 text-left group ${
                    isTopicExpanded(topic.id) ? 'bg-blue-50/50' : ''
                  }`}
                  aria-expanded={isTopicExpanded(topic.id)}
                  aria-controls={`${topic.id}-content`}
                >
                  <div className="flex items-start">
                    <span 
                      className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl mr-4 ${topicIcon.color}`}
                      aria-hidden="true"
                    >
                      {topicIcon.emoji}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors font-display">
                        {topic.name}
                      </h3>
                      {topic.description && (
                        <p className="text-sm text-gray-500 mt-1 max-w-2xl">{topic.description}</p>
                      )}
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {topic.subtopics.length} Lessons
                        </span>
                        {getPracticeCount(topic) > 0 && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {getPracticeCount(topic)} Practice Sets
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-4 hidden sm:inline">
                      {isTopicExpanded(topic.id) ? 'Hide' : 'Show'} Lessons
                    </span>
                    {isTopicExpanded(topic.id) ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    )}
                  </div>
                </button>
                
                <div 
                  id={`${topic.id}-content`}
                  className={`bg-white overflow-hidden transition-all duration-300 ${
                    isTopicExpanded(topic.id) ? 'border-t border-gray-100' : 'max-h-0'
                  }`}
                  aria-hidden={!isTopicExpanded(topic.id)}
                >
                  <div className="p-6 pt-0">
                    <div className="grid gap-3">
                      {topic.subtopics.map((subtopic: any, index: any) => {
                        if (typeof subtopic === 'string') {
                          return (
                            <div key={index} className="subtopic-item">
                              <div className="flex items-center">
                                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg text-gray-500 font-medium mr-3">
                                  {index + 1}
                                </div>
                                <span className="font-medium">{subtopic}</span>
                              </div>
                            </div>
                          );
                        }

                        return (
                          <div 
                            key={subtopic.id} 
                            className={`subtopic-item ${
                              isSubtopicExpanded(topic.id, subtopic.id) ? 'border-blue-200 bg-blue-50' : ''
                            }`}
                          >
                            <div className="flex items-start">
                              <button
                                onClick={() => toggleSubtopic(topic.id, subtopic.id)}
                                className="flex-1 text-left group"
                              >
                                <div className="flex items-center">
                                  <div className={`w-8 h-8 flex items-center justify-center rounded-lg ${
                                    subtopic.hasPractice ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
                                  } font-medium mr-3`}>
                                    {index + 1}
                                  </div>
                                  <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                                    {subtopic.title}
                                  </span>
                                  {subtopic.hasPractice && (
                                    <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                      Practice Available
                                    </span>
                                  )}
                                </div>
                                
                                <div 
                                  className={`mt-2 pl-11 text-sm text-gray-600 overflow-hidden transition-all duration-300 ${
                                    isSubtopicExpanded(topic.id, subtopic.id) ? 'max-h-96' : 'max-h-0'
                                  }`}
                                >
                                  <div className="pt-2">
                                    <p className="mb-4">{subtopic.description}</p>
                                    {subtopic.hasPractice && (
                                      <Link 
                                        href={`/math/grade/${grade.id.split('-')[1]}/practice?topic=${topic.id}&subtopic=${subtopic.id}`}
                                        className="btn-primary inline-flex"
                                      >
                                        <Zap className="w-4 h-4" />
                                        Start Practice
                                        <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                                          {Math.floor(Math.random() * 5) + 1} min
                                        </span>
                                      </Link>
                                    )}
                                  </div>
                                </div>
                              </button>
                              <button
                                onClick={() => toggleSubtopic(topic.id, subtopic.id)}
                                className="ml-2 p-1 text-gray-400 hover:text-blue-500 transition-colors self-start mt-1.5"
                                aria-label={isSubtopicExpanded(topic.id, subtopic.id) ? 'Collapse' : 'Expand'}
                              >
                                {isSubtopicExpanded(topic.id, subtopic.id) ? (
                                  <ChevronUp className="w-5 h-5" />
                                ) : (
                                  <ChevronDown className="w-5 h-5" />
                                )}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {getPracticeCount(topic) > 0 && (
                      <div className="mt-6 pt-5 border-t border-gray-100 text-center">
                        <Link 
                          href={`/math/grade/${grade.id.split('-')[1]}/practice?topic=${topic.id}`}
                          className="btn-primary inline-flex mx-auto"
                        >
                          <Award className="w-5 h-5" />
                          Practice All {topic.name} Topics
                          <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                            {topic.subtopics.length} lessons
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Encouragement Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <Star className="w-8 h-8 text-yellow-300" />
          </div>
          <h3 className="text-2xl font-bold mb-3 font-display">You're Doing Great!</h3>
          <p className="text-blue-100 mb-6">
            Keep practicing and you'll be a math superstar in no time! 🌟
          </p>
          <Link 
            href={`/math/grade/${grade.id.split('-')[1]}/practice`}
            className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full 
                      shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <Zap className="w-5 h-5 mr-2" />
            Start Full Practice Test
          </Link>
        </div>
      </div>
    </div>
  );
}