import {
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export const Data = () => ({
  data: {
    title: "Formulário de perguntas",
    questions: [
      { title: "Qual o nome do professor da disciplina de Programação Web?" },
      { title: "Qual o nome do professor da disciplina de Programação Mobile?" },
      { title: "Qual o nome do professor da disciplina de Frameworks de Desenvolvimento?" },
      { title: "Qual o seu nome?" }
    ]
  },
  columns: [{ Header: "Pergunta", accessor: "title" }]
})

type ActionProps = {
  onEdit?: (row: any) => void
  onDelete?: (row: any) => void
  onCopy?: (row: any) => void
}

export const Actions = (props: ActionProps) => {
  const editAction = (row: any) => (
    <PencilSquareIcon
      className="p-2 rounded-lg cursor-pointer text-primary w-9 h-9"
      title="Editar"
      onClick={props.onEdit}
    />
  );

  const deleteAction = (row: any) => (
    <TrashIcon
      className="p-2 rounded-lg cursor-pointer text-primary w-9 h-9"
      title="Excluir"
    />
  );

  return [editAction, deleteAction];
};
