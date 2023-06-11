import { coordinatorDataForm, coordinatorDataQuestionForm } from "@/models";

export const coordinatorDataForms: coordinatorDataForm[] = [
  {
    id: "1",
    name: "Disciplina - Programação Web",
    createdAt: "25/05/2023",
    totalQuestions: 10,
  },
  {
    id: "2",
    name: "Disciplina - Programação Mobile",
    createdAt: "20/05/2023",
    totalQuestions: 12,
  },
  {
    id: "3",
    name: "Disciplina - Frameworks de Desenvolvimento",
    createdAt: "21/05/2023",
    totalQuestions: 8,
  },
];

export const coordinatorDataQuestionForms: coordinatorDataQuestionForm[] = [
  {
    title: "Formulário de perguntas",
    questions: [
      { title: "Qual o nome do professor da disciplina de Programação Web?" },
      {
        title: "Qual o nome do professor da disciplina de Programação Mobile?",
      },
      {
        title:
          "Qual o nome do professor da disciplina de Frameworks de Desenvolvimento?",
      },
      { title: "Qual o seu nome?" },
    ],
  },
];
