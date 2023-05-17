import { useRouter } from "next/navigation";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

import { removeSpacesAndAccents } from "@/utils";

export const Data = () => ({
  data: [
    {
      discipline: "Programação para Web",
    },
    {
      discipline: "Programação Mobile",
    },
    {
      discipline: "Framework de desenvolvimento",
    },
  ],
  columns: [
    {
      Header: "Disciplina",
      accessor: "discipline",
    },
  ],
});

export const Actions = () => {
  const router = useRouter();

  const editAction = (row: any) => (
    <PencilSquareIcon
      className="p-2 rounded-lg cursor-pointer text-primary w-9 h-9"
      title="Editar"
      onClick={() =>
        router.push(
          `/docente/semester/${removeSpacesAndAccents(row.original.discipline)}`
        )
      }
    />
  );

  return [editAction];
};
