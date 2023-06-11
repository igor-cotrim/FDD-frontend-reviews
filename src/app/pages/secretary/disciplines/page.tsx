"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";

import { useModalStore, useSecretaryStore } from "@/store";
import { Button, ModalDelete, ModalForm, Table } from "@/components";

import * as D from "./data";

const Disciplines = () => {
  const router = useRouter();
  const { toggleVisibility, modalType } = useModalStore();
  const {
    addDiscipline,
    editDiscipline,
    deleteDiscipline,
    selectedDiscipline,
  } = useSecretaryStore();

  return (
    <div className="pt-12">
      <div className="flex items-center justify-between mb-4">
        <h1
          className="flex items-center font-mono text-3xl font-semibold cursor-pointer text-primary"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon className="w-6 h-6 mr-3" />
          Disciplinas
        </h1>
        <Button
          type="button"
          className="max-w-[12rem] p-2"
          onClick={() => {
            toggleVisibility(true, "form");
          }}
        >
          <PlusIcon className="w-6 h-6" />
          Adicionar disciplina
        </Button>
      </div>
      <Table
        columns={D.Data().columns}
        data={D.Data().data}
        actions={D.Actions()}
      />

      {modalType === "form" && (
        <ModalForm
          onSubmit={(values) => addDiscipline(values)}
          title="Cadastrar Disciplina"
          fields={[
            { label: "Nome", name: "name", type: "text" },
            { label: "Carga horária", name: "workload", type: "number" },
          ]}
        />
      )}

      {modalType === "edit" && (
        <ModalForm
          onSubmit={(values) => editDiscipline(selectedDiscipline?.id!, values)}
          title="Editar Discente"
          value={selectedDiscipline}
          fields={[
            { label: "Nome", name: "name", type: "text" },
            { label: "Carga horária", name: "workload", type: "number" },
          ]}
        />
      )}

      {modalType === "delete" && (
        <ModalDelete
          title="Deseja realmente deletar a Disciplina?"
          description="Ao fazer isso a disciplina será deletada. Tem certeza que deseja deleta-lo?"
          action={() => deleteDiscipline(selectedDiscipline?.id!)}
        />
      )}
    </div>
  );
};

export default Disciplines;
