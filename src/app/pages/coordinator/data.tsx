import { useRouter } from "next/navigation";
import {
  PencilSquareIcon,
  TrashIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";

export const Data = () => ({
  data: [
    {
      name: "Disciplina - Programação Web",
      createdAt: "25/05/2023",
      totalQuestions: 10,
    },
    {
      name: "Disciplina - Programação Mobile",
      createdAt: "20/05/2023",
      totalQuestions: 12,
    },
    {
      name: "Disciplina - Frameworks de Desenvolvimento",
      createdAt: "21/05/2023",
      totalQuestions: 8,
    },
  ],
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

export const Actions = () => {
  const router = useRouter();

  const editAction = (row: any) => (
    <PencilSquareIcon
      className="p-2 rounded-lg cursor-pointer text-primary w-9 h-9"
      title="Editar"
    />
  );

  const deleteAction = (row: any) => (
    <TrashIcon
      className="p-2 rounded-lg cursor-pointer text-primary w-9 h-9"
      title="Excluir"
    />
  );

  const copyAction = (row: any) => (
    <ClipboardIcon
      className="p-2 rounded-lg cursor-pointer text-primary w-9 h-9"
      title="Copiar"
    />
  );

  return [editAction, deleteAction, copyAction];
};
