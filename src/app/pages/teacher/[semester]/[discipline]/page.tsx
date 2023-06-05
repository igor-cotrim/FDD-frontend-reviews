"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";

import { useTeacherStore } from "@/store";
import { Button, Modal, Table } from "@/components";
import { DiscenteList } from "@/types/DiscenteList";

import * as D from "./data";

const Discipline = () => {
  const router = useRouter();
  const { discipline, setDiscipline } = useTeacherStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<DiscenteList>([
    { name: "", registrationNumber: "" },
  ]);

  const saveData = async (data: any) => {
    await fetch("http://localhost:8080/discentes", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/discentes");
      const discentes = await res.json();
      setData(discentes);
    };
    fetchData();
  }, [saveData]);

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
          onClick={() => setIsModalOpen(true)}
        >
          <PlusIcon className="absolute w-6 h-6" />
          Adicionar discente
        </Button>
      </div>
      <Table columns={D.Data().columns} data={data} actions={D.Actions()} />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          titleModal="Cadastrar Discente"
          fields={[
            { keyName: "name", placeholderInput: "Nome" },
            {
              keyName: "registrationNumber",
              placeholderInput: "Número de Matrícula",
            },
          ]}
          buttonSubmit={{
            label: "Cadastrar",
            onDidDismiss: async (data) => {
              saveData(data);
            },
          }}
        />
      )}
    </div>
  );
};

export default Discipline;
