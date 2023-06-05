import { create } from "zustand";

import { teacherSemesterModel } from "@/models";

type ITeacher = {
  semester: teacherSemesterModel | null;
  discipline: string | null;
  setSemester: (semester?: teacherSemesterModel) => void;
  setDiscipline: (discipline?: string) => void;
};

export const useTeacherStore = create<ITeacher>((set) => ({
  semester: null,
  discipline: null,
  setSemester: (semester) =>
    set(() => ({
      semester: semester || null,
    })),
  setDiscipline: (discipline) =>
    set(() => ({
      discipline: discipline || null,
    })),
}));
