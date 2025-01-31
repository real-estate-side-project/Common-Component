'use client';

import RadioButton from '@/components/Inputs/RadioButton';
import { useToast } from '@/providers/ToastProvider';
import { RadioButtonOption } from '@/types/input.type';
import { FormProvider, useForm } from 'react-hook-form';

const options: RadioButtonOption[] = [
    { label: 'Radio1', value: '1' },
    { label: 'Radio2', value: '2' },
    { label: 'Radio3', value: '3' }
];

const RadioButtonSample = () => {
    const toast = useToast();

    const methods = useForm({
        defaultValues: {
            radioGroup: 'option1'
        }
    });

    const onSubmit = (): void => {
        toast.on({ message: 'Form submitted successfully!' });
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="flex flex-col gap-2 items-start justify-start border-2 p-6"
            >
                <h1 className="text-3xl font-bold">Radio Button</h1>
                <RadioButton name="radioGroup" options={options} />
                <RadioButton name="radioGroup" options={options} isDisabled />
                <RadioButton name="radioGroup" radioSize={'lg'} options={options} />
                <RadioButton
                    name="radioGroup"
                    groupStyle="flex flex-col gap-3"
                    radioSize={'lg'}
                    options={options}
                    isDisabled
                />
            </form>
        </FormProvider>
    );
};

export default RadioButtonSample;
