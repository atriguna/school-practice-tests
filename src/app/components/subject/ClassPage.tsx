'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

type SubjectContent = {
  [key: string]: Question[];
};

// Sample questions for different subjects and classes
const subjectContent: SubjectContent = {
  'math-class-1': [
    {
      id: 1,
      question: 'What is 2 + 3?',
      options: ['4', '5', '6', '7'],
      correctAnswer: '5',
    },
    {
      id: 2,
      question: 'How many sides does a triangle have?',
      options: ['2', '3', '4', '5'],
      correctAnswer: '3',
    },
  ],
  'math-class-2': [
    {
      id: 1,
      question: 'What is 5 + 7?',
      options: ['10', '11', '12', '13'],
      correctAnswer: '12',
    },
    {
      id: 2,
      question: 'What is 8 × 3?',
      options: ['16', '20', '24', '28'],
      correctAnswer: '24',
    },
  ],
  'english-class-1': [
    {
      id: 1,
      question: 'Which word is a noun?',
      options: ['run', 'happy', 'dog', 'quickly'],
      correctAnswer: 'dog',
    },
    {
      id: 2,
      question: 'Choose the correct spelling:',
      options: ['hapy', 'happy', 'hapi', 'happi'],
      correctAnswer: 'happy',
    },
  ],
  // Add more subjects and classes as needed
};

const getSubjectQuestions = (subject: string, classLevel: string) => {
  const key = `${subject}-${classLevel}`;
  return subjectContent[key] || [
    {
      id: 1,
      question: 'No questions available for this class yet.',
      options: [],
      correctAnswer: '',
    },
  ];
};

type ClassPageProps = {
  subject: string;
  classLevel: string;
};

export default function ClassPage({ subject, classLevel }: ClassPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const router = useRouter();

  const questions = getSubjectQuestions(subject, classLevel);
  const currentQ = questions[currentQuestion];

  const handleAnswer = (selectedAnswer: string) => {
    setSelectedOption(selectedAnswer);
    
    if (selectedAnswer === currentQ.correctAnswer) {
      setScore(score + 1);
    }

    // Move to next question or show score
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowScore(true);
      }
    }, 500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  const getSubjectTitle = (subject: string) => {
    return subject.charAt(0).toUpperCase() + subject.slice(1);
  };

  if (showScore) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <button
          onClick={() => router.push(`/${subject}`)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to {getSubjectTitle(subject)}
        </button>
        
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {getSubjectTitle(subject)} - Class {classLevel.split('-')[1]} Test Completed!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your score: {score} out of {questions.length}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
            <div
              className="bg-blue-600 h-4 rounded-full transition-all duration-500"
              style={{ width: questions.length > 0 ? `${(score / questions.length) * 100}%` : '0%' }}
            ></div>
          </div>
          <button
            onClick={resetQuiz}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mr-4"
          >
            Try Again
          </button>
          <button
            onClick={() => router.push(`/${subject}`)}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Back to {getSubjectTitle(subject)}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.push(`/${subject}`)}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to {getSubjectTitle(subject)}
        </button>
        <span className="text-gray-600">
          Class {classLevel.split('-')[1]}
        </span>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-500">
            Question {currentQuestion + 1}/{questions.length}
          </span>
          <span className="font-semibold text-blue-600">
            Score: {score}
          </span>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          {currentQ.question}
        </h2>
        
        {currentQ.options.length > 0 ? (
          <div className="space-y-4">
            {currentQ.options.map((option) => {
              const isSelected = selectedOption === option;
              const isCorrect = option === currentQ.correctAnswer;
              let buttonClass = 'w-full text-left p-4 rounded-lg border border-gray-200 hover:border-blue-400';
              
              if (selectedOption) {
                if (isSelected) {
                  buttonClass += isCorrect 
                    ? ' bg-green-100 border-green-400' 
                    : ' bg-red-100 border-red-400';
                } else if (isCorrect) {
                  buttonClass += ' bg-green-100 border-green-400';
                }
              }
              
              return (
                <button
                  key={option}
                  className={buttonClass}
                  onClick={() => !selectedOption && handleAnswer(option)}
                  disabled={!!selectedOption}
                >
                  {option}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No questions available for this class yet.
          </div>
        )}
      </div>
    </div>
  );
}
