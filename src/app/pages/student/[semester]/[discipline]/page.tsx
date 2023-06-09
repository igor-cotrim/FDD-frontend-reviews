"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import {useModalStore, useStudentStore} from "@/store";
import {Table, ModalDelete, ModalForm } from "@/components";

import * as D from "./data";

const Discipline = () => {
    const router = useRouter();
    const {
        discipline,
        setDiscipline,
        selectedTest,
        deleteTest,
        editTest,
    } = useStudentStore();
    const {modalType } = useModalStore();

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
            </div>
            <Table
                columns={D.Data().columns}
                data={D.Data().data}
                actions={D.Actions()}
            />

            {modalType === "edit" && (
                <ModalForm
                    onSubmit={(values) => editTest(selectedTest?.id!, values)}
                    title={`${selectedTest?.question}`}
                    value={selectedTest}
                    fields={[
                        {
                            label: "Status",
                            name: "registrationNumber",
                            type: "number",
                        },
                    ]}
                />
            )}

            {modalType === "delete" && (
                <ModalDelete
                    title="Deseja realmente cancelar a Avaliacao?"
                    description="Ao fazer isso a avaliacao será deletada. Tem certeza que deseja deleta-lo?"
                    action={() => deleteTest(selectedTest?.id!)}
                />
            )}
        </div>
    );
};

export default Discipline;
