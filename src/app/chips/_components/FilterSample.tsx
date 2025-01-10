'use client';

import Filter from '@/components/Chips/Filter';
import { useState } from 'react';

const FilterSample = () => {
    const [intent, setIntent] = useState<'default' | 'pressed'>('default');

    const handleClickChip = (): void => {
        setIntent((prev) => (prev === 'pressed' ? 'default' : 'pressed'));
    };

    return (
        <div className="flex flex-col items-start justify-start border-2 p-6 gap-1">
            <h1 className="text-3xl font-bold pb-1">Filter</h1>
            <Filter state={intent} handleClickFilter={handleClickChip} />
        </div>
    );
};

export default FilterSample;
