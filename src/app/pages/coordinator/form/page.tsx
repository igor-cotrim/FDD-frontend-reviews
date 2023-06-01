"use client";

import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

import { Button, Input, Modal, Table } from "@/components";

import * as D from "./data";
import { useDisclosure } from "@/hooks/useDisclosure";

const CoordinatorForm = () => {

  const createQuestionModalHook = useDisclosure()
  const editQuestionModalHook = useDisclosure()
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
        actions={D.Actions({ onEdit: editQuestionModalHook.onOpen })}
      />
      <Modal
        isOpen={createQuestionModalHook.isOpen}
        setIsOpen={createQuestionModalHook.onClose}
        buttonSubmit={{
          label: "Cadastrar",
          onDidDismiss: (data) => console.log("data: ", data)
        }}
        fields={[{ keyName: 'question', placeholderInput: "Pergunta" }]}
        titleModal="Cadastrar pergunta" />
      <Modal
        isOpen={editQuestionModalHook.isOpen}
        setIsOpen={editQuestionModalHook.onClose}
        buttonSubmit={{
          label: "Atualizar",
          onDidDismiss: (data) => console.log("data: ", data)
        }}
        fields={[{ keyName: 'question', placeholderInput: "Pergunta" }]}
        titleModal="Atualizar pergunta"
      />
    </div>
  );
};

export default CoordinatorForm;
