'use client';

import Checkbox from '@/components/Inputs/Checkbox';
import { useToast } from '@/providers/ToastProvider';
import { CheckboxSelectType } from '@/types/input.type';

const CheckboxSample = () => {
    const toast = useToast();

    const handleChangeState = (state: CheckboxSelectType): void => {
        toast.on({ message: `Checkbox State: ${state}` });
    };

    return (
        <div className="flex flex-col gap-2 items-start justify-start border-2 p-6">
            <h1 className="text-3xl font-bold">Checkbox</h1>
            <div className="flex gap-2 items-center justify-start">
                <Checkbox onChange={handleChangeState}>on-off</Checkbox>
                <Checkbox mode={'indeterminate-off'} initialState={'indeterminate'} onChange={handleChangeState}>
                    indeterminate-off
                </Checkbox>
                <Checkbox mode={'full-cycle'} onChange={handleChangeState}>
                    full-cycle
                </Checkbox>
            </div>
            <div className="flex gap-2 items-center justify-start">
                <Checkbox disabled onChange={handleChangeState}>
                    on-off
                </Checkbox>
                <Checkbox
                    disabled
                    mode={'indeterminate-off'}
                    initialState={'indeterminate'}
                    onChange={handleChangeState}
                >
                    indeterminate-off
                </Checkbox>
                <Checkbox disabled mode={'full-cycle'} initialState={'on'} onChange={handleChangeState}>
                    full-cycle
                </Checkbox>
            </div>
        </div>
    );
};

export default CheckboxSample;
