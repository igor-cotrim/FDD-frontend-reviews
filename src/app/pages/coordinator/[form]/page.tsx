"use client";

import React, { useState } from "react";
import { Button, Input, Table, ModalForm } from "@/components";
import { useModalStore } from "@/store";
import * as D from "./data";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const CoordinatorForm = () => {
  const { toggleVisibility, open } = useModalStore();
  const data = D.Data();
  const [form, setForm] = useState(data.data);
  const [question, setQuestion] = useState<string>("");
  const [editQuestion, setEditQuestion] = useState<string>("");
  const router = useRouter();

  return (
    <div className="pt-12">
      <h1 className="font-mono text-3xl font-semibold text-primary flex items-center">
        <ArrowLeftIcon
          className="w-6 h-6 mr-3 cursor-pointer"
          onClick={router.back}
        />
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
          className="h-9 bg-white"
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
          className="max-w-xs flex"
        >
          Cadastrar
        </Button>
      </div>
      <Table
        columns={data.columns}
        data={form.questions}
        actions={D.Actions({
          onEdit: (question) => {
            toggleVisibility(!open);
            setEditQuestion(question.title);
          },
          onDelete: (question) => {
            setForm((oldValue) => ({
              title: oldValue.title,
              questions: oldValue.questions.filter(
                (oldQuestion) => oldQuestion.title !== question.title
              ),
            }));
          },
        })}
      />
      <ModalForm
        onSubmit={(data) => {
          setForm((oldValue) => ({
            title: oldValue.title,
            questions: oldValue.questions.map((question) => {
              if (question.title === editQuestion) {
                return { title: data.question };
              }
              return question;
            }),
          }));
        }}
        fields={[
          {
            label: "Questão",
            name: "question",
            type: "text",
            placeholder: "Pergunta",
          },
        ]}
        title="Atualizar pergunta"
      />
    </div>
  );
};

export default CoordinatorForm;
