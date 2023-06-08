import { create } from "zustand";

import {studentSemesterModel, teacherSemesterModel} from "@/models";

type IStudent = {
    semester: teacherSemesterModel | null;
    setSemester: (semester?: studentSemesterModel) => void;
};

export const useStudentStore = create<IStudent>((set) => ({
    semester: null,
    setSemester: (semester) =>
        set(() => ({
            semester: semester || null,
        })),
}));
