export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  topic: string;
};

export type LessonOutline = {
  title: string;
  description: string;
  example?: string;
  objectives?: string[]; 
};

