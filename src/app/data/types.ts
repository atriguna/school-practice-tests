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

export type QuestionWorksheets = {
  id: number;
  question_text: string;
  options: string[];
  correct_answer: string;
  explanation: string;
}
