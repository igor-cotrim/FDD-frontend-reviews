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
          <PlusIcon className="absolute w-6 h-6" />
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
          className="max-w-xs"
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default Teacher;
