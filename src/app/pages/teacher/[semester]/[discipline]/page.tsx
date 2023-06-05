"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";

import { useModalStore, useTeacherStore } from "@/store";
import { Button, Modal, Table } from "@/components";

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
          className="max-w-[12rem]"
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
        <Modal
          titleModal="Cadastrar Discente"
          fields={[
            { keyName: "name", placeholderInput: "Nome" },
            {
              keyName: "registrationNumber",
              placeholderInput: "Número de Matrícula",
            },
          ]}
          buttons={[
            {
              label: "Fechar",
              type: "close",
            },
            {
              label: "Cadastrar",
              type: "submit",
              onDidDismiss: async (data) => {
                // saveData(data);
              },
            },
          ]}
        />
      )}

      {modalType === "edit" && (
        <Modal
          titleModal="Editar Discente"
          fields={[
            { keyName: "name", placeholderInput: "Nome" },
            {
              keyName: "registrationNumber",
              placeholderInput: "Número de Matrícula",
            },
          ]}
          buttons={[
            {
              label: "Fechar",
              type: "close",
            },
            {
              label: "Editar",
              type: "submit",
              onDidDismiss: async (data) => {
                // saveData(data);
              },
            },
          ]}
        />
      )}

      {modalType === "delete" && (
        <Modal
          titleModal="Deseja realmente deletar o Discente?"
          buttons={[
            {
              label: "Não",
              type: "close",
            },
            {
              label: "Sim",
              type: "submit",
              onDidDismiss: async (data) => {
                // saveData(data);
              },
            },
          ]}
        />
      )}
    </div>
  );
};

export default Discipline;
