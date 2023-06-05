"use client";

import React, { useState } from "react";
import { Button, Input, ModalForm, Table } from "@/components";
import { useModalStore } from "@/store";
import * as D from "./data";

const CoordinatorForm = () => {
  const { toggleVisibility, modalType } = useModalStore();
  const data = D.Data();
  const [form, setForm] = useState(data.data);
  const [question, setQuestion] = useState<string>("");

  return (
    <div className="pt-12">
      <h1 className="font-mono text-3xl font-semibold text-primary">
        {form.title}
      </h1>
      <h2 className="font-mono text-xl font-semibold text-primary">
        Qual pergunta deseja cadastrar no formulário?
      </h2>
      <div className="flex items-center justify-between mb-4">
        <Input
          label=""
          value={question}
          name="question"
          type="text"
          onChange={(event) => setQuestion(event.target.value)}
          className="bg-white h-9"
        />
        <Button
          onClick={() => {
            if (question) {
              setForm((oldValue) => ({
                title: oldValue.title,
                questions: [...oldValue.questions, { title: question }],
              }));
              setQuestion("");
            }
          }}
          type="button"
          className="max-w-xs p-2"
        >
          Cadastrar
        </Button>
      </div>
      <Table
        columns={data.columns}
        data={form.questions}
        actions={D.Actions({ onEdit: () => toggleVisibility(true, "edit") })}
      />

      {modalType === "edit" && (
        <ModalForm
          onSubmit={() => ({})}
          title="Editar Pergunta"
          fields={[{ label: "Pergunta", name: "question", type: "text" }]}
        />
      )}
    </div>
  );
};

export default CoordinatorForm;
