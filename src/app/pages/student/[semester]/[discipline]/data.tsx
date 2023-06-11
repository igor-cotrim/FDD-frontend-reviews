import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

import { useModalStore, useStudentStore } from "@/store";

export const Data = () => {
    const { tests } = useStudentStore();

    return {
        data: tests,
        columns: [
            {
                Header: "Nome",
                accessor: "question",
            },
            {
                Header: "Numero de matrícula",
                accessor: "registrationNumber",
            },
        ],
    };
};

export const Actions = () => {
    const { toggleVisibility } = useModalStore();
    const { selectTest } = useStudentStore();

    const editAction = (row: any) => (
        <PencilSquareIcon
            className="p-2 text-green-600 rounded-lg cursor-pointer w-9 h-9"
            title="Editar"
            onClick={() => {
                selectTest(row.original.id);
                toggleVisibility(true, "edit");
            }}
        />
    );
    const deleteAction = (row: any) => (
        <TrashIcon
            className="p-2 text-red-600 rounded-lg cursor-pointer w-9 h-9"
            title="Deletar"
            onClick={() => {
                selectTest(row.original.id);
                toggleVisibility(true, "delete");
            }}
        />
    );

    return [editAction, deleteAction];
};
