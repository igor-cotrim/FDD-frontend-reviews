export type secretaryTeacherModel = {
  name: string;
  siap: number;
  isCoordinator: boolean;
  password?: string;
};

export type secretaryStudentModel = {
  name: string;
  registrationNumber: number;
  password?: string;
};

export type secretaryDisciplineModel = {
  name: string;
  workload: number;
};

export type secretarySemesterModel = {
  name: string;
};
