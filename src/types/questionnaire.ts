export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'scale' | 'text';
  options?: string[];
  required: boolean;
}

export interface Questionnaire {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  createdAt: Date;
  isActive: boolean;
}

export interface QuestionnaireResponse {
  id: string;
  questionnaireId: string;
  userId: string;
  responses: Record<string, string | number>;
  completedAt: Date;
  score?: number;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'article' | 'guide' | 'activity';
  url?: string;
  content?: string;
  tags: string[];
  createdAt: Date;
  createdBy: string;
}