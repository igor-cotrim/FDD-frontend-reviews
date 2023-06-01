"use client";

import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

import { Button, Table, Modal } from "@/components";

import * as D from "./data";

const Teacher = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-12">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-mono text-3xl font-semibold text-primary">
          Semestres
        </h1>
        <Button
          onClick={() => setIsModalOpen(true)}
          type="button"
          className="max-w-xs"
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

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          titleModal="Cadastrar Discente"
          fields={[
            { keyName: 'name', placeholderInput: "Nome" },
            { keyName: 'registrationNumber', placeholderInput: "Número de Matrícula" },
          ]}
          buttonSubmit={{
            label: "Cadastrar",
            onDidDismiss: (data) => {
              console.log("data: ", data);
            },
          }}
        />
      )}
    </div>
  );
};

export default Teacher;
