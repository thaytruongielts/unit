
export type QuestionType = 'multiple-choice' | 'text' | 'true-false';

export interface Question {
  id: number;
  section: string;
  instruction: string;
  content: string;
  options?: string[];
  correctAnswer: string | string[]; // Can be multiple accepted answers for text input
  userAnswer?: string;
  isCorrect?: boolean;
}

export interface Section {
  id: string;
  title: string;
  description?: string;
}
