'use client';

import Toggle from '@/components/Inputs/Toggle';
import { useToast } from '@/providers/ToastProvider';
import { FormProvider, useForm } from 'react-hook-form';

const ToggleSample = () => {
    const toast = useToast();

    const methods = useForm({
        defaultValues: {
            toggle: false,
            switch: true
        }
    });

    const onSubmit = (): void => {
        toast.on({ message: 'Form submitted successfully!' });
    };

    const handleToggle = (state: boolean): void => {
        if (state) {
            toast.on({ message: 'Toggle On!' });
        } else {
            toast.on({ message: 'Toggle Off!' });
        }
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="flex flex-col gap-2 items-start justify-start border-2 p-6"
            >
                <h1 className="text-3xl font-bold">Toggle</h1>
                <div className="flex gap-2 items-center justify-start">
                    <Toggle name="switch" onToggle={handleToggle} size="md" />
                    <Toggle name="toggle" initialState={true} size="lg" />
                </div>
                <div className="flex gap-2 items-center justify-start">
                    <Toggle name="switch" size="md" disabled={true} />
                    <Toggle name="toggle" initialState={true} onToggle={handleToggle} size="lg" disabled={true} />
                </div>
            </form>
        </FormProvider>
    );
};

export default ToggleSample;
