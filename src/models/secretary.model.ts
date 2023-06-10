export type secretaryTeacherModel = {
  id: number;
  name: string;
  siap: number;
  isCoordinator: boolean;
  password?: string;
};

export type secretaryStudentModel = {
  id: number;
  name: string;
  registrationNumber: number;
  password?: string;
};

export type secretaryDisciplineModel = {
  id: number;
  name: string;
  workload: number;
};

export type secretarySemesterModel = {
  id: number;
  name: string;
};
