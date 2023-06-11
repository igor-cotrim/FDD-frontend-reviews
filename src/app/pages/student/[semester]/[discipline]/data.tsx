import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

import { useModalStore, useTeacherStore } from "@/store";

export const Data = () => {
    const { students } = useTeacherStore();

    return {
        data: students,
        columns: [
            {
                Header: "Nome",
                accessor: "name",
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
    const { selectStudent } = useTeacherStore();

    const editAction = (row: any) => (
        <PencilSquareIcon
            className="p-2 text-green-600 rounded-lg cursor-pointer w-9 h-9"
            title="Editar"
            onClick={() => {
                selectStudent(row.original.id);
                toggleVisibility(true, "edit");
            }}
        />
    );
    const deleteAction = (row: any) => (
        <TrashIcon
            className="p-2 text-red-600 rounded-lg cursor-pointer w-9 h-9"
            title="Deletar"
            onClick={() => {
                selectStudent(row.original.id);
                toggleVisibility(true, "delete");
            }}
        />
    );

    return [editAction, deleteAction];
};
