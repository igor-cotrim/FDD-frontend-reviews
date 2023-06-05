"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";

import { Button, Table } from "@/components";

import * as D from "./data";
import { useModalStore } from "@/store";

const Teacher = () => {
  const router = useRouter();
  const { toggleVisibility } = useModalStore();

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
          className="max-w-[12rem]"
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
    </div>
  );
};

export default Teacher;
