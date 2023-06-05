"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";

import { useModalStore, useTeacherStore } from "@/store";
import { Button, Table, ModalDelete, ModalForm } from "@/components";

import * as D from "./data";

const Discipline = () => {
  const router = useRouter();
  const { discipline, setDiscipline } = useTeacherStore();
  const { toggleVisibility, modalType } = useModalStore();

  return (
    <div className="pt-12">
      <div className="flex items-center justify-between mb-4">
        <h1
          className="flex items-center font-mono text-3xl font-semibold cursor-pointer text-primary"
          onClick={() => {
            router.back();
            setDiscipline();
          }}
        >
          <ArrowLeftIcon className="w-6 h-6 mr-3" />
          {discipline}
        </h1>
        <Button
          type="button"
          className="max-w-[12rem] p-2"
          onClick={() => {
            toggleVisibility(true, "form");
          }}
        >
          <PlusIcon className="w-6 h-6" />
          Adicionar discente
        </Button>
      </div>
      <Table
        columns={D.Data().columns}
        data={D.Data().data}
        actions={D.Actions()}
      />

      {modalType === "form" && (
        <ModalForm
          onSubmit={() => ({})}
          title="Cadastrar Discente"
          fields={[
            { label: "Nome", name: "name", type: "text" },
            { label: "Matrícula", name: "registrationNumber", type: "number" },
          ]}
        />
      )}

      {modalType === "edit" && (
        <ModalForm
          onSubmit={() => ({})}
          title="Editar Discente"
          fields={[
            { label: "Nome", name: "name", type: "text" },
            { label: "Matrícula", name: "registrationNumber", type: "number" },
          ]}
        />
      )}

      {modalType === "delete" && (
        <ModalDelete
          title="Deseja realmente deletar o Discente?"
          description="Ao fazer isso o discente será deletado. Tem certeza que deseja deleta-lo?"
          action={() => ({})}
        />
      )}
    </div>
  );
};

export default Discipline;
