export type coordinatorDataForm = {
  id: string;
  name: string;
  createdAt: string;
  totalQuestions: number;
};

export type coordinatorDataQuestionForm = {
  title: string;
  questions: Array<{ title: string }>;
};
