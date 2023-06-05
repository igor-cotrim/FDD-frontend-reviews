import {
  secretaryDisciplineModel,
  secretarySemesterModel,
  secretaryStudentModel,
  secretaryTeacherModel,
} from "@/models";

export const secretaryTeachers: secretaryTeacherModel[] = [
  {
    name: "Alexandre da Silva",
    siap: 2018219000,
    isCoordinator: true,
  },
  {
    name: "Lio",
    siap: 2018219000,
    isCoordinator: false,
  },
  {
    name: "Luis Paulo",
    siap: 2018219000,
    isCoordinator: false,
  },
  {
    name: "Camilo",
    siap: 2018219000,
    isCoordinator: false,
  },
  {
    name: "Alexandre da Silva",
    siap: 2018219000,
    isCoordinator: false,
  },
];

export const secretaryStudents: secretaryStudentModel[] = [
  {
    name: "Alexandre da Silva",
    registrationNumber: 2018219000,
  },
  {
    name: "Lio",
    registrationNumber: 2018219000,
  },
  {
    name: "Luis Paulo",
    registrationNumber: 2018219000,
  },
  {
    name: "Camilo",
    registrationNumber: 2018219000,
  },
  {
    name: "Alexandre da Silva",
    registrationNumber: 2018219000,
  },
];

export const secretaryDisciplines: secretaryDisciplineModel[] = [
  {
    name: "Programação Orientada a Objetos",
    workload: 80,
  },
  {
    name: "Matemática Discreta",
    workload: 80,
  },
  {
    name: "Linear Algebra",
    workload: 80,
  },
  {
    name: "Etica e Cidadania",
    workload: 80,
  },
];

export const secretarySemesters: secretarySemesterModel[] = [
  {
    name: "2023.1",
  },
  {
    name: "2022.2",
  },
  {
    name: "2021.1",
  },
  {
    name: "2020.2",
  },
];
