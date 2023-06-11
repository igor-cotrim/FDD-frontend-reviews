import { coordinatorDataQuestionForms } from "@/mocks";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export const Data = () => ({
  data: coordinatorDataQuestionForms[0],
  columns: [{ Header: "Pergunta", accessor: "title" }],
});

type ActionProps = {
  onEdit: (row: any) => void;
  onDelete: (row: any) => void;
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

  return [editAction, deleteAction];
};
