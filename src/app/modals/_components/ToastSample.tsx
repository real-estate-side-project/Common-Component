'use client';

import Button from '@/components/Buttons/Button';
import { useToast } from '@/providers/ToastProvider';
import { MdArrowForward } from 'react-icons/md';

const ToastSample = () => {
    const toast = useToast();

    const handleClickOpenToast = (): void => {
        toast.on({ message: 'Toast Message:)' });
    };

    return (
        <Button icon={<MdArrowForward />} priority={'secondary'} onClick={handleClickOpenToast}>
            Toast Open
        </Button>
    );
};

export default ToastSample;
