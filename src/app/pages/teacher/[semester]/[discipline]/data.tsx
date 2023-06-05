import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

import { students } from "@/mocks";
import { useModalStore } from "@/store";

export const Data = () => ({
  data: students,
  columns: [
    {
      Header: "Nome",
      accessor: "name",
    },
    {
      Header: "Numero de matrícula",
      accessor: "code",
    },
  ],
});

export const Actions = () => {
  const { toggleVisibility } = useModalStore();

  const editAction = (row: any) => (
    <PencilSquareIcon
      className="p-2 text-green-600 rounded-lg cursor-pointer w-9 h-9"
      title="Editar"
      onClick={() => {
        toggleVisibility(true, "edit");
      }}
    />
  );
  const deleteAction = (row: any) => (
    <TrashIcon
      className="p-2 text-red-600 rounded-lg cursor-pointer w-9 h-9"
      title="Deletar"
      onClick={() => {
        toggleVisibility(true, "delete");
      }}
    />
  );

  return [editAction, deleteAction];
};
