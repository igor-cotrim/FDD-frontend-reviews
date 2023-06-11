"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";

import { useModalStore, useSecretaryStore } from "@/store";
import { Button, ModalDelete, ModalForm, Table } from "@/components";

import * as D from "./data";

const Teachers = () => {
  const router = useRouter();
  const { toggleVisibility, modalType } = useModalStore();
  const { addTeacher, editTeacher, deleteTeacher, selectedTeacher } =
    useSecretaryStore();

  return (
    <div className="pt-12">
      <div className="flex items-center justify-between mb-4">
        <h1
          className="flex items-center font-mono text-3xl font-semibold cursor-pointer text-primary"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon className="w-6 h-6 mr-3" />
          Docentes
        </h1>
        <Button
          type="button"
          className="max-w-[12rem] p-2"
          onClick={() => toggleVisibility(true, "form")}
        >
          <PlusIcon className="w-6 h-6" />
          Adicionar docente
        </Button>
      </div>
      <Table
        columns={D.Data().columns}
        data={D.Data().data}
        actions={D.Actions()}
      />

      {modalType === "form" && (
        <ModalForm
          onSubmit={(values) => addTeacher(values)}
          title="Cadastrar Docente"
          fields={[
            { label: "Nome", name: "name", type: "text" },
            { label: "Siap", name: "siap", type: "number" },
            {
              label: "É Coordenador?",
              name: "isCoordinator",
              type: "checkbox",
            },
            { label: "Senha", name: "password", type: "password" },
          ]}
        />
      )}

      {modalType === "edit" && (
        <ModalForm
          onSubmit={(values) => editTeacher(selectedTeacher?.id!, values)}
          title="Editar Docente"
          value={selectedTeacher}
          fields={[
            { label: "Nome", name: "name", type: "text" },
            { label: "Siap", name: "siap", type: "number" },
            {
              label: "É Coordenador?",
              name: "isCoordinator",
              type: "checkbox",
            },
            { label: "Senha", name: "password", type: "password" },
          ]}
        />
      )}

      {modalType === "delete" && (
        <ModalDelete
          title="Deseja realmente deletar o Docente?"
          description="Ao fazer isso o docente será deletado. Tem certeza que deseja deleta-lo?"
          action={() => deleteTeacher(selectedTeacher?.id!)}
        />
      )}
    </div>
  );
};

export default Teachers;
