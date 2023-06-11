import {studentSemesterModel, testStudentModel} from "@/models";


export const studentSemesters: studentSemesterModel[] = [
    {
        semester: "2023.1",
        date: "13/05/2023 - 15/05/2023",
        current: true,
    },
    {
        semester: "2022.2",
        date: "13/05/2023 - 15/05/2023",
        current: false,
    },
    {
        semester: "2022.2",
        date: "13/05/2023 - 15/05/2023",
        current: false,
    },
    {
        semester: "2022.2",
        date: "13/05/2023 - 15/05/2023",
        current: false,
    },
    {
        semester: "2022.2",
        date: "13/05/2023 - 15/05/2023",
        current: false,
    },
    {
        semester: "2022.2",
        date: "13/05/2023 - 15/05/2023",
        current: false,
    },
    {
        semester: "2022.2",
        date: "13/05/2023 - 15/05/2023",
        current: false,
    },
];
export const tests: testStudentModel[] = [
    {
        id: 1,
        question: "Como voce avalia o professor no inicio do semestre",
        registrationNumber: 3,
    },
    {
        id: 2,
        question: "Como voce avalia o professor no fim do semestre",
        registrationNumber: 5,
    },
];