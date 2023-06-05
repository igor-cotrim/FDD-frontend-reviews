"use client";

import React from "react";
import { useRouter } from 'next/navigation'
import { PlusIcon } from "@heroicons/react/24/outline";

import { Button, Table } from "@/components";

import * as D from "./data";

const Coordinator = () => {
  const router = useRouter()

  return (
    <div className="pt-12">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-mono text-3xl font-semibold text-primary">
          Formulários
        </h1>
        <Button onClick={() => router.push('/coordenador/formulario')} type="button" className="max-w-xs flex">
          <PlusIcon className="w-6 h-6" />
          Adicionar formulário
        </Button>
      </div>
      <Table
        columns={D.Data().columns}
        data={D.Data().data}
        actions={D.Actions({ onEdit: (params) => router.push(`/coordenador/formulario/${params.id}`) })}
      />
    </div>
  );
};

export default Coordinator;
