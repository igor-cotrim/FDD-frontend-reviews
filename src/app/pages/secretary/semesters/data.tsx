import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

import { useModalStore, useSecretaryStore } from "@/store";

export const Data = () => {
  const { semesters } = useSecretaryStore();

  return {
    data: semesters,
    columns: [
      {
        Header: "Nome",
        accessor: "name",
      },
    ],
  };
};

export const Actions = () => {
  const { toggleVisibility } = useModalStore();
  const { selectSemester } = useSecretaryStore();

  const editAction = (row: any) => (
    <PencilSquareIcon
      className="p-2 text-blue-500 rounded-lg cursor-pointer w-9 h-9"
      title="Acessar"
      onClick={() => {
        selectSemester(row.original.id);
        toggleVisibility(true, "edit");
      }}
    />
  );
  const deleteAction = (row: any) => (
    <TrashIcon
      className="p-2 text-red-600 rounded-lg cursor-pointer w-9 h-9"
      title="Deletar"
      onClick={() => {
        selectSemester(row.original.id);
        toggleVisibility(true, "delete");
      }}
    />
  );

  return [editAction, deleteAction];
};
