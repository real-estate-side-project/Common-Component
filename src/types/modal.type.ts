import { JSX } from 'react';

export type ToastType = {
    id?: number;
    message: string;
    color?: 'sub' | 'warning' | 'danger' | null | undefined;
};

export type ToastContextType = {
    on: (toast: ToastType) => void;
};

export type ModalButtonContentType = {
    children: string;
    icon?: JSX.Element;
};

export type ModalType = {
    message: string;
    onConfirm: () => void;
    onCancel?: () => void | null;
    hasCancel?: boolean;
    confirmButtonContent?: ModalButtonContentType;
    cancelButtonContent?: ModalButtonContentType | null;
};

export type ModalContextType = {
    modal: ModalType | null;
    open: (modal: ModalType) => void;
    close: () => void;
};
