import { create } from "zustand";

import {studentSemesterModel, teacherSemesterModel} from "@/models";
import { students } from "@/mocks";

type IStudent = {
    semester: teacherSemesterModel | null;
    setSemester: (semester?: studentSemesterModel) => void;
};

export const useStudentStore = create<IStudent>((set, get) => ({
    semester: null,
    setSemester: (semester) =>
        set(() => ({
            semester: semester || null,
        })),
}));
