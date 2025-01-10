'use client';

import Tag from '@/components/Chips/Tag';
import { useToast } from '@/providers/ToastProvider';
import { useState } from 'react';

const TagSample = () => {
    const toast = useToast();

    const [intent, setIntent] = useState<'default' | 'pressed'>('default');

    const handleClickChip = (): void => {
        setIntent((prev) => (prev === 'pressed' ? 'default' : 'pressed'));
    };

    const handleClickClose = (): void => {
        toast.on({ message: 'X Icon Clicked' });
    };

    return (
        <div className="flex flex-col items-start justify-start border-2 p-6 gap-1">
            <h1 className="text-3xl font-bold pb-1">Tag</h1>
            <div className="flex items-start justify-start gap-1">
                <Tag state={intent} handleClickText={handleClickChip} handleClickDeleteIcon={handleClickClose} />
                <Tag state={'disable'} />
            </div>
            <div className="flex items-start justify-start gap-1">
                <Tag
                    state={intent}
                    handleClickText={handleClickChip}
                    size={'lg'}
                    handleClickDeleteIcon={handleClickClose}
                />
                <Tag state={'disable'} size={'lg'} />
            </div>
        </div>
    );
};

export default TagSample;
