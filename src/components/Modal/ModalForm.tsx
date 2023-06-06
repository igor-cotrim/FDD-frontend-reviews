"use client";

import { HTMLInputTypeAttribute, useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useModalStore } from "@/store";
import { Button, Input } from "@/components";

import ModalContainer from "./ModalContainer";

type Field = {
  name: string;
  label: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
};

type ModalFormProps = {
  title: string;
  fields: Field[];
  value?: any;
  onSubmit: (values: any) => void;
};

const ModalForm = ({ title, fields, value, onSubmit }: ModalFormProps) => {
  const [valueField, setValueField] = useState(value || ({} as any));
  const { toggleVisibility } = useModalStore();

  return (
    <ModalContainer>
      <div className="bg-white">
        <Dialog.Title className="relative p-4 text-lg font-medium leading-6 text-center text-gray-900 border-b border-solid sm:p-4 border-slate-200">
          {title}
        </Dialog.Title>
        <XMarkIcon
          className="absolute w-6 h-6 text-gray-400 cursor-pointer right-3 top-2"
          onClick={() => toggleVisibility(false)}
        />
      </div>
      <div className="pb-4 bg-white sm:p-1">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:mt-0 sm:text-left sm:w-full">
            <div>
              <div className="pl-4 pr-4 mt-2 ">
                {fields.map((field, index) => (
                  <Input
                    type={field.type}
                    key={index}
                    label={field.label}
                    name={field.name}
                    id={field.name}
                    placeholder={field.placeholder}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setValueField((prev: any) => ({
                        ...prev,
                        [field.name]: e.target.value,
                      }))
                    }
                    value={valueField[field?.name]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 p-4 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
        <Button
          type="submit"
          className="w-[80%] px-4 py-2 border border-transparent rounded-md shadow-sm sm:w-auto sm:text-sm"
          onClick={() => {
            toggleVisibility(false);
            onSubmit(valueField);
          }}
        >
          Salvar
        </Button>
        <Button
          type="button"
          className="w-[80%] px-4 py-2 text-gray-800 bg-gray-200 hover:bg-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => toggleVisibility(false)}
        >
          Fechar
        </Button>
      </div>
    </ModalContainer>
  );
};

export default ModalForm;
