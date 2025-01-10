'use client';

import Button from '@/components/Buttons/Button';
import { useToast } from '@/providers/ToastProvider';
import { MdArrowForward } from 'react-icons/md';

const ToastSample = () => {
    const toast = useToast();

    const openDefaultToast = (): void => {
        toast.on({ message: 'Toast Message:)' });
    };

    const openWarningToast = (): void => {
        toast.on({ message: 'Toast Message:)', color: 'warning' });
    };

    const openDangerToast = (): void => {
        toast.on({ message: 'Toast Message:)', color: 'danger' });
    };

    return (
        <div className="flex gap-3">
            <Button icon={<MdArrowForward />} priority={'secondary'} onClick={openDefaultToast}>
                Default Toast Open
            </Button>
            <Button icon={<MdArrowForward />} priority={'secondary'} onClick={openWarningToast}>
                Warning Toast Open
            </Button>
            <Button icon={<MdArrowForward />} priority={'secondary'} onClick={openDangerToast}>
                Danger Toast Open
            </Button>
        </div>
    );
};

export default ToastSample;
