'use client';

import Toggle from '@/components/Inputs/Toggle';
import { useToast } from '@/providers/ToastProvider';

const ToggleSample = () => {
    const toast = useToast();

    const handleToggle = (state: boolean): void => {
        if (state) {
            toast.on({ message: 'Toggle On!' });
        } else {
            toast.on({ message: 'Toggle Off!' });
        }
    };

    return (
        <div className="flex flex-col gap-2 items-start justify-start border-2 p-6">
            <h1 className="text-3xl font-bold">Toggle</h1>
            <div className="flex gap-2 items-center justify-start">
                <Toggle onToggle={handleToggle} size="md" />
                <Toggle initialState={true} onToggle={handleToggle} size="lg" />
            </div>
            <div className="flex gap-2 items-center justify-start">
                <Toggle onToggle={handleToggle} size="md" disabled={true} />
                <Toggle initialState={true} onToggle={handleToggle} size="lg" disabled={true} />
            </div>
        </div>
    );
};

export default ToggleSample;
