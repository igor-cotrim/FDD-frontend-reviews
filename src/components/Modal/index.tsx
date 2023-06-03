"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { XMarkIcon } from "@heroicons/react/24/outline";

import "./styles.css";

type PropsModal = {
  titleModal: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  fields: Field[];
  buttonSubmit: ButtonSubmit;
};

type Field = {
  keyName: string;
  label?: string;
  placeholderInput: string;
};

type ButtonSubmit = {
  label: string;
  onDidDismiss: (arg: any) => void;
};

const Modal = ({
  isOpen,
  setIsOpen,
  titleModal,
  fields,
  buttonSubmit,
}: PropsModal) => {
  const [valueField, setValueField] = useState({} as any);

  function updateFieldValue(
    keyName: string,
    arg: React.ChangeEvent<HTMLInputElement>
  ) {
    const value = arg.target.value;
    setValueField((oldValue: any) => ({
      ...oldValue,
      [keyName]: value,
    }));
  }

  function submit() {
    buttonSubmit.onDidDismiss(valueField);
    setIsOpen(false);
  }

  return (
    <Dialog.Root defaultOpen open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">{titleModal}</Dialog.Title>
          {fields.map((field, index) => (
            <fieldset key={index} className="Fieldset">
              {field?.label && (
                <label className="Label" htmlFor="name">
                  {field.label}
                </label>
              )}

              <input
                className="Input"
                id="name"
                placeholder={field.placeholderInput}
                defaultValue=""
                onChange={(e) => updateFieldValue(field.keyName, e)}
              />
            </fieldset>
          ))}

          <div
            style={{ display: "flex", marginTop: 25, justifyContent: "center" }}
          >
            <Dialog.Close asChild>
              <button className="Button green" onClick={() => submit()}>
                {buttonSubmit.label}
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Close asChild onClick={() => setIsOpen(false)}>
            <button className="IconButton" aria-label="Close">
              <XMarkIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
