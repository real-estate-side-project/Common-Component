'use client';

import SingleIconButton from '@/components/Buttons/SingleIconButton';
import { useRouter } from 'next/navigation';
import { MdArrowBackIosNew } from 'react-icons/md';

const BackButtons = () => {
    const router = useRouter();

    return (
        <div className="fixed top-5 left-5">
            <SingleIconButton
                icon={<MdArrowBackIosNew />}
                priority={'tertiary'}
                size={'lg'}
                onClick={() => router.back()}
            />
        </div>
    );
};

export default BackButtons;
