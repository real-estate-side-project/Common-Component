'use client';

import RadioButton from '@/components/Inputs/RadioButton';
import { RadioButtonOption } from '@/types/input.type';
import { ChangeEvent, useState } from 'react';

const options: RadioButtonOption[] = [
    { label: 'Radio1', value: '1' },
    { label: 'Radio2', value: '2' },
    { label: 'Radio3', value: '3' }
];

const RadioButtonSample = () => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>();

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>): void => {
        setSelectedValue(e.target.value);
    };

    return (
        <div className="flex flex-col gap-2 items-start justify-start border-2 p-6">
            <h1 className="text-3xl font-bold">Radio Button</h1>
            <RadioButton options={options} selectedValue={selectedValue} onChange={handleChangeValue} />
            <RadioButton options={options} selectedValue={'1'} isDisabled />
            <RadioButton
                radioSize={'lg'}
                options={options}
                selectedValue={selectedValue}
                onChange={handleChangeValue}
            />
            <RadioButton
                groupStyle="flex flex-col gap-3"
                radioSize={'lg'}
                options={options}
                selectedValue={'2'}
                isDisabled
            />
        </div>
    );
};

export default RadioButtonSample;
