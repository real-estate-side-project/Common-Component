'use client';

import Checkbox from '@/components/Inputs/Checkbox';
import { useToast } from '@/providers/ToastProvider';
import { CheckboxSelectType } from '@/types/input.type';
import { FormProvider, useForm } from 'react-hook-form';

const CheckboxSample = () => {
    const toast = useToast();

    const methods = useForm({
        defaultValues: {
            check: 'off',
            box: 'on',
            indeterminate: 'indeterminate'
        }
    });

    const onSubmit = (): void => {
        toast.on({ message: 'Form submitted successfully!' });
    };

    const handleChangeState = (state: CheckboxSelectType): void => {
        toast.on({ message: `Checkbox State: ${state}` });
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-2 items-start justify-start border-2 p-6">
                    <h1 className="text-3xl font-bold">Checkbox</h1>
                    <div className="flex gap-2 items-center justify-start">
                        <Checkbox name="check" handleChangeState={handleChangeState}>
                            on-off
                        </Checkbox>
                        <Checkbox
                            name="indeterminate"
                            mode={'indeterminate-off'}
                            initialState={'indeterminate'}
                            handleChangeState={handleChangeState}
                        >
                            indeterminate-off
                        </Checkbox>
                        <Checkbox name="box" mode={'full-cycle'} handleChangeState={handleChangeState}>
                            full-cycle
                        </Checkbox>
                    </div>
                    <div className="flex gap-2 items-center justify-start">
                        <Checkbox disabled name="check" handleChangeState={handleChangeState}>
                            on-off
                        </Checkbox>
                        <Checkbox
                            disabled
                            name="indeterminate"
                            mode={'indeterminate-off'}
                            initialState={'indeterminate'}
                            handleChangeState={handleChangeState}
                        >
                            indeterminate-off
                        </Checkbox>
                        <Checkbox
                            disabled
                            name="box"
                            mode={'full-cycle'}
                            initialState={'on'}
                            handleChangeState={handleChangeState}
                        >
                            full-cycle
                        </Checkbox>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default CheckboxSample;
