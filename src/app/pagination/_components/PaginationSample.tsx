'use client';

import Pagination from '@/components/Pagination';
import { useState } from 'react';

const PaginationSample = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const handleChangePage = (page: number): void => {
        if (page < 1) setCurrentPage(1);
        else setCurrentPage(page);
    };

    return (
        <div className="flex flex-col gap-2 items-start justify-start border-2 p-6">
            <h1 className="text-3xl font-bold">Pagination</h1>
            <Pagination currentPage={currentPage} totalPages={20} handleChangePage={handleChangePage} />
        </div>
    );
};

export default PaginationSample;
