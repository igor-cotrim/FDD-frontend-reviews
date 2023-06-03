import { removeSpacesAndAccents } from "@/utils";
import {
  PencilSquareIcon,
  EyeIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export const Data = () => ({
  columns: [
    {
      Header: "Id",
      accessor: "id"
    },
    {
      Header: "Nome",
      accessor: "name",
    },
    {
      Header: "Numero de matrícula",
      accessor: "registrationNumber",
    },
  ],
});

export const Actions = () => {
  const router = useRouter();
  const viewAction = (row: any) => (
    <EyeIcon
      className="p-2 text-blue-600 rounded-lg cursor-pointer w-9 h-9"
      title="Visualizar"
      onClick={() => router.push(`docente/semester/discipline/${removeSpacesAndAccents(row.original.name)}`)}
    />
  );
  const editAction = (row: any) => (
    <PencilSquareIcon
      className="p-2 text-green-600 rounded-lg cursor-pointer w-9 h-9"
      title="Editar"
      onClick={() => console.log(row)}
    />
  );
  const deleteAction = (row: any) => (
    <TrashIcon
      className="p-2 text-red-600 rounded-lg cursor-pointer w-9 h-9"
      title="Deletar"
      onClick={() => {}}
    />
  );

  return [viewAction, editAction, deleteAction];
};
