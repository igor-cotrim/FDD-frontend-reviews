
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";

import { Button, Table } from "@/components";

import * as D from "./data";

const Discente = () => {
  const router = useRouter();

  return (
    <div className="pt-12">
      <div className="flex items-center justify-between mb-4">
        <h1
          className="flex items-center font-mono text-3xl font-semibold cursor-pointer text-primary"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon className="w-6 h-6 mr-3" />
          Programação para Web - 2022.2
        </h1>
        <Button type="button" className="max-w-xs">
          <PlusIcon className="absolute w-6 h-6" />
          Adicionar discente
        </Button>
      </div>
      <Table
        columns={D.Data().columns}
        data={[{}]}
      />
    </div>
  );
};

export default Discente;
