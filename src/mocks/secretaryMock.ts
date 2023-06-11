import {
  secretaryDisciplineModel,
  secretarySemesterModel,
  secretaryStudentModel,
  secretaryTeacherModel,
} from "@/models";

export const secretaryTeachers: secretaryTeacherModel[] = [
  {
    id: 1,
    name: "Alexandre da Silva",
    siap: 2018219000,
    isCoordinator: true,
  },
  {
    id: 2,
    name: "Lio",
    siap: 2018219000,
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Luis Paulo",
    siap: 2018219000,
    isCoordinator: false,
  },
  {
    id: 4,
    name: "Camilo",
    siap: 2018219000,
    isCoordinator: false,
  },
  {
    id: 5,
    name: "Alexandre da Silva",
    siap: 2018219000,
    isCoordinator: false,
  },
];

export const secretaryStudents: secretaryStudentModel[] = [
  {
    id: 1,
    name: "Alexandre da Silva",
    registrationNumber: 2018219000,
  },
  {
    id: 2,
    name: "Lio",
    registrationNumber: 2018219000,
  },
  {
    id: 3,
    name: "Luis Paulo",
    registrationNumber: 2018219000,
  },
  {
    id: 4,
    name: "Camilo",
    registrationNumber: 2018219000,
  },
  {
    id: 5,
    name: "Alexandre da Silva",
    registrationNumber: 2018219000,
  },
];

export const secretaryDisciplines: secretaryDisciplineModel[] = [
  {
    id: 1,
    name: "Programação Orientada a Objetos",
    workload: 80,
  },
  {
    id: 2,
    name: "Matemática Discreta",
    workload: 80,
  },
  {
    id: 3,
    name: "Linear Algebra",
    workload: 80,
  },
  {
    id: 4,
    name: "Etica e Cidadania",
    workload: 80,
  },
];

export const secretarySemesters: secretarySemesterModel[] = [
  {
    id: 1,
    name: "2023.1",
  },
  {
    id: 2,
    name: "2022.2",
  },
  {
    id: 3,
    name: "2021.1",
  },
  {
    id: 4,
    name: "2020.2",
  },
];
