import { create } from "zustand";

import { teacherSemesterModel, teacherStudentModel } from "@/models";
import { students } from "@/mocks";

type ITeacher = {
  semester: teacherSemesterModel | null;
  discipline: string | null;
  students: teacherStudentModel[];
  selectedStudent: teacherStudentModel | null;
  selectStudent: (id?: number) => void;
  addAmbience: (newStudent: teacherStudentModel) => void;
  editStudent: (id: number, value: teacherStudentModel) => void;
  deleteStudent: (id: number) => void;
  setSemester: (semester?: teacherSemesterModel) => void;
  setDiscipline: (discipline?: string) => void;
};

export const useTeacherStore = create<ITeacher>((set, get) => ({
  semester: null,
  discipline: null,
  students: students,
  selectedStudent: null,
  selectStudent: (id) => {
    const students = get().students;
    const selectedStudent =
      students.find((student) => student.id === id) || null;

    set({ selectedStudent: !!id ? selectedStudent : null });
  },
  addAmbience: (newStudent) => {
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
  editStudent: (id, value) => {
    const students = get().students;
    const index = students.findIndex((student) => student.id === id);
    if (index === -1) {
      return;
    }
    const updatedStudent = { ...students[index], ...value };
    const newupdatedStudents = [...students];
    newupdatedStudents.splice(index, 1, updatedStudent);

    set({ students: newupdatedStudents });
  },
  deleteStudent: (id) => {
    set((state) => ({
      students: state.students.filter((student) => student.id !== id),
    }));
  },
  setSemester: (semester) =>
    set(() => ({
      semester: semester || null,
    })),
  setDiscipline: (discipline) =>
    set(() => ({
      discipline: discipline || null,
    })),
}));
