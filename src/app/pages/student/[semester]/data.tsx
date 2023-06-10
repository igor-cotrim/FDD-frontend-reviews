import { useRouter } from "next/navigation";
import { PencilSquareIcon, EyeIcon } from "@heroicons/react/24/outline";

import { useTeacherStore } from "@/store";
import { removeSpacesAndAccents } from "@/utils";
import { disciplines } from "@/mocks";

export const Data = () => ({
    data: disciplines,
    columns: [
        {
            Header: "Disciplina",
            accessor: "discipline",
        },
    ],
});

export const Actions = () => {
    const router = useRouter();
    const { semester, setDiscipline } = useTeacherStore();

    const editAction = (row: any) => (
        <PencilSquareIcon
            className="p-2 rounded-lg cursor-pointer text-primary w-9 h-9"
            title="Editar"
            onClick={() => {
                router.push(
                    `/discente/${semester?.semester}/${removeSpacesAndAccents(
                        row.original.discipline
                    )}`
                );
                setDiscipline(row.original.discipline);
            }}
        />
    );

    const eyeAction = (row: any) => (
        <EyeIcon
            className="p-2 text-blue-400 rounded-lg cursor-pointer w-9 h-9"
            title="Visualizar"
            onClick={() => ({})}
        />
    );

    if (semester?.current) {
        return [editAction];
    } else {
        return [eyeAction];
    }
};
