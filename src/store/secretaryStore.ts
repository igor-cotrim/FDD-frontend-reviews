import { create } from "zustand";

import {
  secretaryDisciplineModel,
  secretarySemesterModel,
  secretaryStudentModel,
  secretaryTeacherModel,
} from "@/models";
import {
  secretaryTeachers,
  secretaryStudents,
  secretaryDisciplines,
  secretarySemesters,
} from "@/mocks";

type ISecretary = {
  teachers: secretaryTeacherModel[];
  students: secretaryStudentModel[];
  disciplines: secretaryDisciplineModel[];
  semesters: secretarySemesterModel[];

  selectedTeacher: secretaryTeacherModel | null;
  selectedStudent: secretaryStudentModel | null;
  selectedDiscipline: secretaryDisciplineModel | null;
  selectedSemester: secretarySemesterModel | null;

  selectTeacher: (id?: number) => void;
  selectStudent: (id?: number) => void;
  selectDiscipline: (id?: number) => void;
  selectSemester: (id?: number) => void;

  addTeacher: (newTeacher: secretaryTeacherModel) => void;
  addStudent: (newStudent: secretaryStudentModel) => void;
  addDiscipline: (newDiscipline: secretaryDisciplineModel) => void;
  addSemester: (newSemester: secretarySemesterModel) => void;

  editTeacher: (id: number, value: secretaryTeacherModel) => void;
  editStudent: (id: number, value: secretaryStudentModel) => void;
  editDiscipline: (id: number, value: secretaryDisciplineModel) => void;
  editSemester: (id: number, value: secretarySemesterModel) => void;

  deleteTeacher: (id: number) => void;
  deleteStudent: (id: number) => void;
  deleteDiscipline: (id: number) => void;
  deleteSemester: (id: number) => void;
};

export const useSecretaryStore = create<ISecretary>((set, get) => ({
  teachers: secretaryTeachers,
  students: secretaryStudents,
  disciplines: secretaryDisciplines,
  semesters: secretarySemesters,

  selectedTeacher: null,
  selectedStudent: null,
  selectedDiscipline: null,
  selectedSemester: null,

  selectTeacher: (id) => {
    const teachers = get().teachers;
    const selectedTeacher =
      teachers.find((teacher) => teacher.id === id) || null;

    set({ selectedTeacher: !!id ? selectedTeacher : null });
  },
  selectStudent: (id) => {
    const students = get().students;
    const selectedStudent =
      students.find((student) => student.id === id) || null;

    set({ selectedStudent: !!id ? selectedStudent : null });
  },
  selectDiscipline: (id) => {
    const disciplines = get().disciplines;
    const selectedDiscipline =
      disciplines.find((discipline) => discipline.id === id) || null;

    set({ selectedDiscipline: !!id ? selectedDiscipline : null });
  },
  selectSemester: (id) => {
    const semesters = get().semesters;
    const selectedSemester =
      semesters.find((semester) => semester.id === id) || null;

    set({ selectedSemester: !!id ? selectedSemester : null });
  },

  addTeacher: (newTeacher) => {
    const teachers = get().teachers;
    const id =
      teachers.length === 0
        ? 1
        : Math.max(...teachers.map((teacher) => teacher.id)) + 1;
    const updatedTeacher = { ...newTeacher, id };

    set((state) => ({
      teachers: [...state.teachers, updatedTeacher],
    }));
  },
  addStudent: (newStudent) => {
    const students = get().students;
    const id =
      students.length === 0
        ? 1
        : Math.max(...students.map((student) => student.id)) + 1;
    const updatedStudent = { ...newStudent, id };

    set((state) => ({
      students: [...state.students, updatedStudent],
    }));
  },
  addDiscipline: (newDiscipline) => {
    const disciplines = get().disciplines;
    const id =
      disciplines.length === 0
        ? 1
        : Math.max(...disciplines.map((discipline) => discipline.id)) + 1;
    const updatedDiscipline = { ...newDiscipline, id };

    set((state) => ({
      disciplines: [...state.disciplines, updatedDiscipline],
    }));
  },
  addSemester: (newSemester) => {
    const semesters = get().semesters;
    const id =
      semesters.length === 0
        ? 1
        : Math.max(...semesters.map((semester) => semester.id)) + 1;
    const updatedSemester = { ...newSemester, id };

    set((state) => ({
      semesters: [...state.semesters, updatedSemester],
    }));
  },

  editTeacher: (id, value) => {
    const teachers = get().teachers;
    const index = teachers.findIndex((teacher) => teacher.id === id);
    if (index === -1) {
      return;
    }
    const updatedTeacher = { ...teachers[index], ...value };
    const newUpdatedTeachers = [...teachers];
    newUpdatedTeachers.splice(index, 1, updatedTeacher);

    set({ teachers: newUpdatedTeachers });
  },
  editStudent: (id, value) => {
    const students = get().students;
    const index = students.findIndex((student) => student.id === id);
    if (index === -1) {
      return;
    }
    const updatedStudent = { ...students[index], ...value };
    const newUpdatedStudents = [...students];
    newUpdatedStudents.splice(index, 1, updatedStudent);

    set({ students: newUpdatedStudents });
  },
  editDiscipline: (id, value) => {
    const disciplines = get().disciplines;
    const index = disciplines.findIndex((discipline) => discipline.id === id);
    if (index === -1) {
      return;
    }
    const updatedDiscipline = { ...disciplines[index], ...value };
    const newUpdatedDisciplines = [...disciplines];
    newUpdatedDisciplines.splice(index, 1, updatedDiscipline);

    set({ disciplines: newUpdatedDisciplines });
  },
  editSemester: (id, value) => {
    const semesters = get().semesters;
    const index = semesters.findIndex((semester) => semester.id === id);
    if (index === -1) {
      return;
    }
    const updatedSemester = { ...semesters[index], ...value };
    const newUpdatedSemesters = [...semesters];
    newUpdatedSemesters.splice(index, 1, updatedSemester);

    set({ semesters: newUpdatedSemesters });
  },

  deleteTeacher: (id) => {
    set((state) => ({
      teachers: state.teachers.filter((teacher) => teacher.id !== id),
    }));
  },
  deleteStudent: (id) => {
    set((state) => ({
      students: state.students.filter((student) => student.id !== id),
    }));
  },
  deleteDiscipline: (id) => {
    set((state) => ({
      disciplines: state.disciplines.filter(
        (discipline) => discipline.id !== id
      ),
    }));
  },
  deleteSemester: (id) => {
    set((state) => ({
      semesters: state.semesters.filter((semester) => semester.id !== id),
    }));
  },
}));
