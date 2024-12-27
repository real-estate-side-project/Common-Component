'use client';

import Tag from '@/components/Chips/Tag';
import { useState } from 'react';

const TagSample = () => {
    const [intent, setIntent] = useState<'default' | 'pressed'>('default');

    const handleClickChip = (): void => {
        setIntent((prev) => (prev === 'pressed' ? 'default' : 'pressed'));
    };

    return (
        <div className="flex flex-col items-start justify-start border-2 p-6 gap-1">
            <h1 className="text-3xl font-bold pb-1">Tag</h1>
            <div className="flex items-start justify-start gap-1">
                <Tag state={intent} handleClickDeleteIcon={handleClickChip} />
                <Tag state={'disable'} />
            </div>{' '}
            <div className="flex items-start justify-start gap-1">
                <Tag state={intent} handleClickDeleteIcon={handleClickChip} size={'lg'} />
                <Tag state={'disable'} size={'lg'} />
            </div>
        </div>
    );
};

export default TagSample;
