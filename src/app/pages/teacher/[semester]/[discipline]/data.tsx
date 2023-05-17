import {
  PencilSquareIcon,
  EyeIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export const Data = () => ({
  data: [
    {
      name: "Fulano da Silva",
      code: "2018219000",
    },
    {
      name: "Fulano da Silva",
      code: "2018219000",
    },
    {
      name: "Fulano da Silva",
      code: "2018219000",
    },
    {
      name: "Fulano da Silva",
      code: "2018219000",
    },
    {
      name: "Fulano da Silva",
      code: "2018219000",
    },
    {
      name: "Fulano da Silva",
      code: "2018219000",
    },
    {
      name: "Fulano da Silva",
      code: "2018219000",
    },
    {
      name: "Fulano da Silva",
      code: "2018219000",
    },
  ],
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
  const viewAction = (row: any) => (
    <EyeIcon
      className="p-2 text-blue-600 rounded-lg cursor-pointer w-9 h-9"
      title="Visualizar"
      onClick={() => console.log(row)}
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
      onClick={() => console.log(row)}
    />
  );

  return [viewAction, editAction, deleteAction];
};
