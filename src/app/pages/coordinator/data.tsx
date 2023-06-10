import { useRouter } from "next/navigation";
import {
  PencilSquareIcon,
  TrashIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";
import { coordinatorDataForms } from "@/mocks";

export const Data = () => ({
  data: coordinatorDataForms,
  columns: [
    {
      Header: "Nome",
      accessor: "name",
    },
    {
      Header: "Criado em",
      accessor: "createdAt",
    },
    {
      Header: "Total Perguntas",
      accessor: "totalQuestions",
    },
  ],
});

type ActionProps = {
  onEdit: (row: any) => void;
  onDelete: (row: any) => void;
  onCopy: (row: any) => void;
};

export const Actions = (props: ActionProps) => {
  const editAction = ({ original }: any) => (
    <PencilSquareIcon
      className="p-2 rounded-lg cursor-pointer text-primary w-9 h-9"
      title="Editar"
      onClick={() => props.onEdit(original)}
    />
  );

  const deleteAction = ({ original }: any) => (
    <TrashIcon
      className="p-2 rounded-lg cursor-pointer text-primary w-9 h-9"
      title="Excluir"
      onClick={() => props.onDelete(original)}
    />
  );

  const copyAction = ({ original }: any) => (
    <ClipboardIcon
      className="p-2 rounded-lg cursor-pointer text-primary w-9 h-9"
      title="Copiar"
      onClick={() => props.onCopy(original)}
    />
  );

  return [editAction, deleteAction, copyAction];
};
