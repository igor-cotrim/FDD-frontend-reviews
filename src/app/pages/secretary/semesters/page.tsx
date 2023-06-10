"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";

import { useModalStore, useSecretaryStore } from "@/store";
import { Button, ModalDelete, ModalForm, Table } from "@/components";

import * as D from "./data";

const Semesters = () => {
  const router = useRouter();
  const { toggleVisibility, modalType } = useModalStore();
  const { addSemester, editSemester, deleteSemester, selectedSemester } =
    useSecretaryStore();

  return (
    <div className="pt-12">
      <div className="flex items-center justify-between mb-4">
        <h1
          className="flex items-center font-mono text-3xl font-semibold cursor-pointer text-primary"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon className="w-6 h-6 mr-3" />
          Semestres
        </h1>
        <Button
          type="button"
          className="max-w-[12rem] p-2"
          onClick={() => toggleVisibility(true, "form")}
        >
          <PlusIcon className="w-6 h-6" />
          Adicionar semestre
        </Button>
      </div>
      <Table
        columns={D.Data().columns}
        data={D.Data().data}
        actions={D.Actions()}
      />

      {modalType === "form" && (
        <ModalForm
          onSubmit={(values) => addSemester(values)}
          title="Cadastrar Semestre"
          fields={[{ label: "Nome", name: "name", type: "text" }]}
        />
      )}

      {modalType === "edit" && (
        <ModalForm
          onSubmit={(values) => editSemester(selectedSemester?.id!, values)}
          title="Editar Semestre"
          value={selectedSemester}
          fields={[{ label: "Nome", name: "name", type: "text" }]}
        />
      )}

      {modalType === "delete" && (
        <ModalDelete
          title="Deseja realmente deletar o Semestre?"
          description="Ao fazer isso o semestre será deletado. Tem certeza que deseja deleta-lo?"
          action={() => deleteSemester(selectedSemester?.id!)}
        />
      )}
    </div>
  );
};

export default Semesters;
