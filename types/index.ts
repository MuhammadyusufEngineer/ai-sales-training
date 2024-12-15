export interface Scenario {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  completedAt?: Date;
  score?: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ProgressRecord {
  id: string;
  scenarioId: string;
  score: number;
  completedAt: Date;
  feedback: string;
}
