import {
  teacherDisciplineModel,
  teacherSemesterModel,
  teacherStudentModel,
} from "@/app/models";

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
    name: "Fulano da Silva",
    code: 2018219000,
  },
  {
    name: "João da Silva",
    code: 2018219001,
  },
  {
    name: "Felipe da Silva",
    code: 2018219002,
  },
  {
    name: "Augusto da Silva",
    code: 2018219003,
  },
  {
    name: "Beltrano da Silva",
    code: 2018219004,
  },
  {
    name: "Zé da Silva",
    code: 2018219005,
  },
  {
    name: "Sara da Silva",
    code: 2018219006,
  },
  {
    name: "Igor da Silva",
    code: 2018219007,
  },
];
