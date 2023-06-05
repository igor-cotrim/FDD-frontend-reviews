import { create } from "zustand";

type ModalType = "form" | "delete" | "edit" | null;

interface IModal {
  open: boolean;
  modalType: "form" | "delete" | "edit" | null;
  toggleVisibility: (isOpen: boolean, modalType?: ModalType) => void;
}

export const useModalStore = create<IModal>((set) => ({
  open: false,
  modalType: null,
  toggleVisibility: (isOpen: boolean, modalType?: ModalType) =>
    set((state) => ({
      open: isOpen,
      modalType: modalType || state.modalType,
    })),
}));
