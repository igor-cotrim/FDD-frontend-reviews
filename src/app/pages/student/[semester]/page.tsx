"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import { useTeacherStore } from "@/store";
import { Table } from "@/components";

import * as D from "./data";

const Semester = () => {
    const router = useRouter();
    const { semester, setSemester } = useTeacherStore();

    return (
        <div className="pt-12">
            <div className="flex items-center justify-between mb-4">
                <h1
                    className="flex items-center font-mono text-3xl font-semibold cursor-pointer text-primary"
                    onClick={() => {
                        router.back();
                        setSemester();
                    }}
                >
                    <ArrowLeftIcon className="w-6 h-6 mr-3" />
                    Semestre - {semester?.semester}
                </h1>
            </div>
            <Table
                columns={D.Data().columns}
                data={D.Data().data}
                actions={D.Actions()}
            />
        </div>
    );
};

export default Semester;
