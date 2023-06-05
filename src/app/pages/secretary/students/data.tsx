import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

import { useModalStore } from "@/store";
import { secretaryStudents } from "@/mocks";

export const Data = () => ({
  data: secretaryStudents,
  columns: [
    {
      Header: "Nome",
      accessor: "name",
    },
    {
      Header: "Número de matrícula",
      accessor: "registrationNumber",
    },
  ],
});

export const Actions = () => {
  const { toggleVisibility } = useModalStore();

  const editAction = (row: any) => (
    <PencilSquareIcon
      className="p-2 text-blue-500 rounded-lg cursor-pointer w-9 h-9"
      title="Acessar"
      onClick={() => toggleVisibility(true, "edit")}
    />
  );
  const deleteAction = (row: any) => (
    <TrashIcon
      className="p-2 text-red-600 rounded-lg cursor-pointer w-9 h-9"
      title="Deletar"
      onClick={() => toggleVisibility(true, "delete")}
    />
  );

  return [editAction, deleteAction];
};
