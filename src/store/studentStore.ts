import { create } from "zustand";

import {studentSemesterModel} from "@/models";

type IStudent = {
    semester: studentSemesterModel | null;
    setSemester: (semester?: studentSemesterModel) => void;
};

export const useStudentStore = create<IStudent>((set) => ({
    semester: null,
    setSemester: (semester) =>
        set(() => ({
            semester: semester || null,
        })),
}));
