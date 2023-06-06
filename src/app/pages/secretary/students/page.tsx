"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";

import { useModalStore, useSecretaryStore } from "@/store";
import { Button, ModalDelete, ModalForm, Table } from "@/components";

import * as D from "./data";

const Students = () => {
  const router = useRouter();
  const { toggleVisibility, modalType } = useModalStore();
  const { addStudent, editStudent, deleteStudent, selectedStudent } =
    useSecretaryStore();

  return (
    <div className="pt-12">
      <div className="flex items-center justify-between mb-4">
        <h1
          className="flex items-center font-mono text-3xl font-semibold cursor-pointer text-primary"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon className="w-6 h-6 mr-3" />
          Discentes
        </h1>
        <Button
          type="button"
          className="max-w-[12rem] p-2"
          onClick={() => toggleVisibility(true, "form")}
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
          onSubmit={(values) => addStudent(values)}
          title="Cadastrar Discente"
          fields={[
            { label: "Nome", name: "name", type: "text" },
            {
              label: "Número de matrícula",
              name: "registrationNumber",
              type: "number",
            },
            { label: "Senha", name: "password", type: "password" },
          ]}
        />
      )}

      {modalType === "edit" && (
        <ModalForm
          onSubmit={(values) => editStudent(selectedStudent?.id!, values)}
          title="Editar Discente"
          value={selectedStudent}
          fields={[
            { label: "Nome", name: "name", type: "text" },
            {
              label: "Número de matrícula",
              name: "registrationNumber",
              type: "number",
            },
            { label: "Senha", name: "password", type: "password" },
          ]}
        />
      )}

      {modalType === "delete" && (
        <ModalDelete
          title="Deseja realmente deletar o Discente?"
          description="Ao fazer isso o discente será deletado. Tem certeza que deseja deleta-lo?"
          action={() => deleteStudent(selectedStudent?.id!)}
        />
      )}
    </div>
  );
};

export default Students;
