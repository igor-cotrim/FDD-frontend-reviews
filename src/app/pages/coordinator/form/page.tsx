"use client";

import React, { useState } from "react";
import { Button, Input, Modal, Table } from "@/components";
import { useModalStore } from "@/store";
import * as D from "./data";

const CoordinatorForm = () => {
  const { toggleVisibility } = useModalStore()
  const data = D.Data()
  const [form, setForm] = useState(data.data)
  const [question, setQuestion] = useState<string>('')

  return (
    <div className="pt-12">
      <h1 className="font-mono text-3xl font-semibold text-primary">
        {form.title}
      </h1>
      <h2 className="font-mono text-xl font-semibold text-primary">
        Qual pergunta deseja cadastrar no formulário?
      </h2>
      <div className="flex items-center justify-between mb-4">
        <Input label="" value={question} name="question" type="text" onChange={event => setQuestion(event.target.value)} className="h-9 bg-white" />
        <Button onClick={() => {
          if (question) {
            setForm(oldValue => ({
              title: oldValue.title,
              questions: [...oldValue.questions, { title: question }]
            }))
            setQuestion('')
          }
        }} type="button" className="max-w-xs flex">
          Cadastrar
        </Button>
      </div>
      <Table
        columns={data.columns}
        data={form.questions}
        actions={D.Actions({ onEdit: toggleVisibility })}
      />
      <Modal
        buttons={[{
          label: "Atualizar",
          type: "submit",
          onDidDismiss: (data) => console.log("data: ", data)
        }]}
        fields={[{ keyName: 'question', placeholderInput: "Pergunta" }]}
        titleModal="Atualizar pergunta"
      />
    </div>
  );
};

export default CoordinatorForm;
