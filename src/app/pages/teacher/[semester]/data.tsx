import { useRouter } from "next/navigation";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

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
          `/docente/${semester}/${removeSpacesAndAccents(
            row.original.discipline
          )}`
        );
        setDiscipline(row.original.discipline);
      }}
    />
  );

  return [editAction];
};
