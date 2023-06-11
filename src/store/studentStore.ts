import { create } from "zustand";

import {studentSemesterModel, testStudentModel} from "@/models";
import {tests} from "@/mocks/studentMock";

type IStudent = {
    semester: studentSemesterModel | null;
    discipline: string | null;
    tests: testStudentModel[];
    selectedTest: testStudentModel | null;
    selectTest: (id?: number) => void;
    editTest: (id: number, value: testStudentModel) => void;
    deleteTest: (id: number) => void;
    setSemester: (semester?: studentSemesterModel) => void;
    setDiscipline: (discipline?: string) => void;
};

export const useStudentStore = create<IStudent>((set,get) => ({
    semester: null,
    discipline: null,
    tests: tests,
    selectedTest: null,
    selectTest: (id) => {
        const tests = get().tests;
        const selectedTest =
            tests.find((selectedTest) => selectedTest.id === id) || null;

        set({ selectedTest: !!id ? selectedTest : null });
    },
    editTest: (id, value) => {
        const tests = get().tests;
        const index = tests.findIndex((tests) => tests.id === id);
        if (index === -1) {
            return;
        }
        const updatedTest = { ...tests[index], ...value };
        const newupdatedTests = [...tests];
        newupdatedTests.splice(index, 1, updatedTest);

        set({ tests: newupdatedTests });
    },
    deleteTest: (id) => {
        set((state) => ({
            tests: state.tests.filter((tests) => tests.id !== id),
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
