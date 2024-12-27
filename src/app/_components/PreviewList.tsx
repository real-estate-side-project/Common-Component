'use client';

import { useRouter } from 'next/navigation';

const PreviewList = () => {
    const router = useRouter();

    return (
        <ul className="list-disc">
            <li
                className="bg-white w-fit text-base font-semibold cursor-pointer hover:brightness-90 hover:scale-105 rounded-lg px-1 transition-all mb-2"
                onClick={() => router.push('/buttons')}
            >
                Buttons Preview →
            </li>
            <li
                className="bg-white w-fit text-base font-semibold cursor-pointer hover:brightness-90 hover:scale-105 rounded-lg px-1 transition-all mb-2"
                onClick={() => router.push('/modals')}
            >
                Toast & Modal Preview →
            </li>
            <li
                className="bg-white w-fit text-base font-semibold cursor-pointer hover:brightness-90 hover:scale-105 rounded-lg px-1 transition-all mb-2"
                onClick={() => router.push('/inputs')}
            >
                Inputs Preview →
            </li>
            <li
                className="bg-white w-fit text-base font-semibold cursor-pointer hover:brightness-90 hover:scale-105 rounded-lg px-1 transition-all mb-2"
                onClick={() => router.push('/chips')}
            >
                Chips Preview →
            </li>
        </ul>
    );
};

export default PreviewList;
