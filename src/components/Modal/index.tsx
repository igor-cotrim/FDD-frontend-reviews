"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useModalStore } from "@/store";

import "./styles.css";

type Field = {
  keyName: string;
  label?: string;
  placeholderInput: string;
};

type ButtonSubmit = {
  label: string;
  onDidDismiss?: (arg: any) => void;
  type: "submit" | "close";
};

type modalProps = {
  titleModal: string;
  className?: string;
  fields?: Field[];
  buttons: ButtonSubmit[];
};

const Modal = ({ titleModal, fields = [], buttons }: modalProps) => {
  const [valueField, setValueField] = useState({} as any);
  const { open, toggleVisibility } = useModalStore();

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

  function submit(button: ButtonSubmit) {
    if (button.type === "submit" && button.onDidDismiss) {
      button.onDidDismiss(valueField);
      toggleVisibility(false, null);
    }
  }

  return (
    <Dialog.Root defaultOpen open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">{titleModal}</Dialog.Title>
          {fields?.length > 0 &&
            fields.map((field, index) => (
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
              <>
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 mr-4 text-white rounded-lg cursor-pointer bg-primary"
                    onClick={() =>
                      button.type === "submit"
                        ? submit(button)
                        : toggleVisibility(false, null)
                    }
                  >
                    {button.label}
                  </button>
                ))}
              </>
            </Dialog.Close>
          </div>

          <Dialog.Close asChild onClick={() => toggleVisibility(false, null)}>
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
