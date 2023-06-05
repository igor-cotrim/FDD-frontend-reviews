import { useRouter } from "next/navigation";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

import { useTeacherStore } from "@/store";
import { semesters } from "@/mocks";

export const Data = () => ({
  data: semesters,
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
      accessor: "current",
      Cell: ({ value }: { value: boolean }) =>
        value ? (
          <div className="flex items-center justify-center w-full text-sm text-green-800 bg-green-200 rounded-xl">
            Atual
          </div>
        ) : (
          <div className="flex items-center justify-center w-full text-sm text-red-800 bg-red-200 rounded-xl">
            Anterior
          </div>
        ),
    },
  ],
});

export const Actions = () => {
  const router = useRouter();
  const { setSemester } = useTeacherStore();

  const editAction = (row: any) => (
    <PencilSquareIcon
      className="p-2 rounded-lg cursor-pointer text-primary w-9 h-9"
      title="Acessar"
      onClick={() => {
        router.push(`/docente/${row.original.semester}`);
        setSemester(row.original.semester);
      }}
    />
  );

  return [editAction];
};
