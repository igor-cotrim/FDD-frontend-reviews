import { create } from "zustand";

type ITeacher = {
  semester: string | null;
  discipline: string | null;
  setSemester: (semester?: string) => void;
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
