import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

import { useModalStore } from "@/store";
import { secretaryDisciplines } from "@/mocks";

export const Data = () => ({
  data: secretaryDisciplines,
  columns: [
    {
      Header: "Nome",
      accessor: "name",
    },
    {
      Header: "Carga horária",
      accessor: "workload",
      Cell: ({ value }: { value: number }) => (
        <div className="flex items-center justify-center w-full">
          {value} horas
        </div>
      ),
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
