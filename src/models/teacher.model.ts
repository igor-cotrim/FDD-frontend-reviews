export type teacherSemesterModel = {
  semester: string;
  date: string;
  current: boolean;
};

export type teacherDisciplineModel = {
  discipline: string;
};

export type teacherStudentModel = {
  id: number;
  name: string;
  registrationNumber: number;
};
