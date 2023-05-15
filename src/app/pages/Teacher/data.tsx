import { PencilSquareIcon } from "@heroicons/react/24/outline";

export const Data = () => ({
  data: [
    {
      semester: "2023.1",
      date: "13/05/2023 - 15/05/2023",
      status: "Atual",
    },
    {
      semester: "2022.2",
      date: "13/05/2023 - 15/05/2023",
      status: "Anterior",
    },
    {
      semester: "2022.2",
      date: "13/05/2023 - 15/05/2023",
      status: "Anterior",
    },
    {
      semester: "2022.2",
      date: "13/05/2023 - 15/05/2023",
      status: "Anterior",
    },
    {
      semester: "2022.2",
      date: "13/05/2023 - 15/05/2023",
      status: "Anterior",
    },
    {
      semester: "2022.2",
      date: "13/05/2023 - 15/05/2023",
      status: "Anterior",
    },
    {
      semester: "2022.2",
      date: "13/05/2023 - 15/05/2023",
      status: "Anterior",
    },
  ],
  columns: [
    {
      Header: "Semestre",
      accessor: "semester",
    },
    {
      Header: "Data",
      accessor: "date",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ value }: any) =>
        value === "Atual" ? (
          <div className="flex items-center justify-center w-full text-sm text-green-800 bg-green-200 rounded-xl">
            {value}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full text-sm text-red-800 bg-red-200 rounded-xl">
            {value}
          </div>
        ),
    },
  ],
});

export const Actions = () => {
  const editAction = (row: any) => (
    <PencilSquareIcon
      className="p-2 rounded-lg cursor-pointer text-primary w-9 h-9"
      title="Editar"
      onClick={() => console.log(row)}
    />
  );

  return [editAction];
};
