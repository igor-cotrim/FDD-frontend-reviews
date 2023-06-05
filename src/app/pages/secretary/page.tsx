"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { EyeIcon } from "@heroicons/react/24/outline";

const Teacher = () => {
  const router = useRouter();

  return (
    <div className="pt-12">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-mono text-3xl font-semibold text-primary">
          Secretaria
        </h1>
      </div>
      <div className="flex items-center justify-between p-2 my-2 text-white rounded-md bg-primary">
        <h3>Docentes</h3>
        <EyeIcon
          className="p-2 text-white rounded-lg cursor-pointer w-9 h-9"
          title="Visualizar"
          onClick={() => router.push(`/secretaria/docentes`)}
        />
      </div>
      <div className="flex items-center justify-between p-2 my-2 text-white rounded-md bg-primary">
        <h3>Discentes</h3>
        <EyeIcon
          className="p-2 text-white rounded-lg cursor-pointer w-9 h-9"
          title="Visualizar"
          onClick={() => router.push(`/secretaria/discentes`)}
        />
      </div>
      <div className="flex items-center justify-between p-2 my-2 text-white rounded-md bg-primary">
        <h3>Disciplinas</h3>
        <EyeIcon
          className="p-2 text-white rounded-lg cursor-pointer w-9 h-9"
          title="Visualizar"
          onClick={() => router.push(`/secretaria/disciplinas`)}
        />
      </div>
      <div className="flex items-center justify-between p-2 my-2 text-white rounded-md bg-primary">
        <h3>Semestres</h3>
        <EyeIcon
          className="p-2 text-white rounded-lg cursor-pointer w-9 h-9"
          title="Visualizar"
          onClick={() => router.push(`/secretaria/semestres`)}
        />
      </div>
      {/* <div className="flex items-center justify-between p-2 my-2 text-white rounded-md bg-primary">
        <h3>Alocação docente/disciplina</h3>
        <EyeIcon
          className="p-2 text-white rounded-lg cursor-pointer w-9 h-9"
          title="Visualizar"
          onClick={() => router.push(`/secretaria/alocacao`)}
        />
      </div> */}
    </div>
  );
};

export default Teacher;
