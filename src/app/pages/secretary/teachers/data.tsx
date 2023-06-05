import {
  CheckCircleIcon,
  PencilSquareIcon,
  TrashIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

import { useModalStore } from "@/store";
import { secretaryTeachers } from "@/mocks";

export const Data = () => ({
  data: secretaryTeachers,
  columns: [
    {
      Header: "Nome",
      accessor: "name",
    },
    {
      Header: "Siap",
      accessor: "siap",
    },
    {
      Header: "Coordenador",
      accessor: "isCoordinator",
      Cell: ({ value }: { value: boolean }) =>
        value ? (
          <div className="flex items-center justify-center w-full">
            <CheckCircleIcon className="w-6 h-6 text-green-500 " />
          </div>
        ) : (
          <div className="flex items-center justify-center w-full">
            <XCircleIcon className="w-6 h-6 text-red-500" />
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
