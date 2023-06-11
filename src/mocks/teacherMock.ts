import {
  teacherDisciplineModel,
  teacherSemesterModel,
  teacherStudentModel,
} from "@/models";

export const semesters: teacherSemesterModel[] = [
  {
    semester: "2023.1",
    date: "13/05/2023 - 15/05/2023",
    current: true,
  },
  {
    semester: "2022.2",
    date: "13/05/2023 - 15/05/2023",
    current: false,
  },
  {
    semester: "2022.2",
    date: "13/05/2023 - 15/05/2023",
    current: false,
  },
  {
    semester: "2022.2",
    date: "13/05/2023 - 15/05/2023",
    current: false,
  },
  {
    semester: "2022.2",
    date: "13/05/2023 - 15/05/2023",
    current: false,
  },
  {
    semester: "2022.2",
    date: "13/05/2023 - 15/05/2023",
    current: false,
  },
  {
    semester: "2022.2",
    date: "13/05/2023 - 15/05/2023",
    current: false,
  },
];

export const disciplines: teacherDisciplineModel[] = [
  { discipline: "Programação para Web" },
  { discipline: "Programação Mobile" },
  { discipline: "Framework de desenvolvimento" },
];

export const students: teacherStudentModel[] = [
  {
    id: 1,
    name: "Fulano da Silva",
    registrationNumber: 2018219000,
  },
  {
    id: 2,
    name: "João da Silva",
    registrationNumber: 2018219001,
  },
  {
    id: 3,
    name: "Felipe da Silva",
    registrationNumber: 2018219002,
  },
  {
    id: 4,
    name: "Augusto da Silva",
    registrationNumber: 2018219003,
  },
  {
    id: 5,
    name: "Beltrano da Silva",
    registrationNumber: 2018219004,
  },
  {
    id: 6,
    name: "Zé da Silva",
    registrationNumber: 2018219005,
  },
  {
    id: 7,
    name: "Sara da Silva",
    registrationNumber: 2018219006,
  },
  {
    id: 8,
    name: "Igor da Silva",
    registrationNumber: 2018219007,
  },
];
