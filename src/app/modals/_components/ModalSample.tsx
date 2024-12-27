'use client';

import Button from '@/components/Buttons/Button';
import { useModal } from '@/providers/ModalProvider';
import { MdArrowForward, MdCheck, MdClose } from 'react-icons/md';

const ModalSample = () => {
    const modal = useModal();

    const handleClickOpenModal = (): void => {
        modal.open({
            message: 'Modal message...',
            onConfirm: () => modal.close(),
            onCancel: () => modal.close()
        });
    };

    const handleClickOpenOneButtonModal = (): void => {
        modal.open({
            message: 'Modal message...',
            onConfirm: () => modal.close(),
            hasCancel: false
        });
    };

    const handleClickOpenModalWithContent = (): void => {
        modal.open({
            message: 'Modal message...',
            onConfirm: () => modal.close(),
            onCancel: () => modal.close(),
            confirmButtonContent: { children: '확인', icon: <MdCheck /> },
            cancelButtonContent: { children: '취소', icon: <MdClose /> }
        });
    };

    const handleClickOpenOneButtonModalWithContent = (): void => {
        modal.open({
            message: 'Modal message...',
            onConfirm: () => modal.close(),
            hasCancel: false,
            confirmButtonContent: { children: '확인', icon: <MdCheck /> }
        });
    };

    return (
        <div className="flex flex-col items-start gap-2">
            <Button icon={<MdArrowForward />} priority={'secondary'} onClick={handleClickOpenModal}>
                Modal Open
            </Button>
            <Button icon={<MdArrowForward />} priority={'secondary'} onClick={handleClickOpenOneButtonModal}>
                One Button Modal Open
            </Button>
            <Button icon={<MdArrowForward />} priority={'secondary'} onClick={handleClickOpenModalWithContent}>
                Modal Open (With Content)
            </Button>
            <Button icon={<MdArrowForward />} priority={'secondary'} onClick={handleClickOpenOneButtonModalWithContent}>
                One Button Modal Open (With Content)
            </Button>
        </div>
    );
};

export default ModalSample;
