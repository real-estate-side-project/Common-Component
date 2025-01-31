'use client';

import Input from '@/components/Inputs/Input';
import { useToast } from '@/providers/ToastProvider';
import { FormProvider, useForm } from 'react-hook-form';
import { MdClose } from 'react-icons/md';

const InputSample = () => {
    const toast = useToast();

    const methods = useForm({
        defaultValues: {
            input: ''
        }
    });

    const onSubmit = (): void => {
        toast.on({ message: 'Form submitted successfully!' });
    };

    const handleClickIcon = (): void => {
        toast.on({ message: 'Icon clicked!' });
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-row border-2 p-6 gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold pb-1">Input</h1>
                    <div className="flex gap-2">
                        <Input name="input" placeholder="Input..." />
                        <Input name="input" state={'filled'} placeholder="Input..." />
                        <Input name="input" state={'error'} placeholder="Input..." />
                        <Input name="input" state={'disable'} placeholder="Input..." />
                    </div>
                    <div className="flex gap-2 mb-6">
                        <Input
                            name="input"
                            icon={<MdClose />}
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                        <Input
                            name="input"
                            icon={<MdClose />}
                            state={'filled'}
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                        <Input
                            name="input"
                            icon={<MdClose />}
                            state={'error'}
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                        <Input name="input" icon={<MdClose />} state={'disable'} placeholder="Input..." />
                    </div>
                    <div className="flex gap-2">
                        <Input name="input" label="Label" placeholder="Input..." />
                        <Input name="input" label="Label" state={'filled'} placeholder="Input..." />
                        <Input name="input" label="Label" state={'error'} placeholder="Input..." />
                        <Input name="input" label="Label" state={'disable'} placeholder="Input..." />
                    </div>
                    <div className="flex gap-2 mb-6">
                        <Input
                            name="input"
                            label="Label"
                            icon={<MdClose />}
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                        <Input
                            name="input"
                            label="Label"
                            icon={<MdClose />}
                            state={'filled'}
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                        <Input
                            name="input"
                            label="Label"
                            icon={<MdClose />}
                            state={'error'}
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                        <Input name="input" label="Label" icon={<MdClose />} state={'disable'} placeholder="Input..." />
                    </div>
                    <div className="flex gap-2">
                        <Input name="input" validationMessage="Supporting text.." placeholder="Input..." />
                        <Input
                            name="input"
                            validationMessage="Supporting text.."
                            state={'filled'}
                            placeholder="Input..."
                        />
                        <Input
                            name="input"
                            validationMessage="Supporting text.."
                            state={'error'}
                            placeholder="Input..."
                        />
                        <Input
                            name="input"
                            validationMessage="Supporting text.."
                            state={'disable'}
                            placeholder="Input..."
                        />
                    </div>
                    <div className="flex gap-2 mb-6">
                        <Input
                            name="input"
                            validationMessage="Supporting text.."
                            icon={<MdClose />}
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                        <Input
                            name="input"
                            validationMessage="Supporting text.."
                            icon={<MdClose />}
                            state={'filled'}
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                        <Input
                            name="input"
                            validationMessage="Supporting text.."
                            icon={<MdClose />}
                            state={'error'}
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                        <Input
                            name="input"
                            validationMessage="Supporting text.."
                            icon={<MdClose />}
                            state={'disable'}
                            placeholder="Input..."
                        />
                    </div>
                    <div className="flex gap-2">
                        <Input
                            name="input"
                            label="Label"
                            validationMessage="Supporting text.."
                            placeholder="Input..."
                        />
                        <Input
                            name="input"
                            label="Label"
                            validationMessage="Supporting text.."
                            state={'filled'}
                            placeholder="Input..."
                        />
                        <Input
                            name="input"
                            label="Label"
                            validationMessage="Supporting text.."
                            state={'error'}
                            placeholder="Input..."
                        />
                        <Input
                            name="input"
                            label="Label"
                            validationMessage="Supporting text.."
                            state={'disable'}
                            placeholder="Input..."
                        />
                    </div>
                    <div className="flex gap-2">
                        <Input
                            name="input"
                            label="Label"
                            validationMessage="Supporting text.."
                            icon={<MdClose />}
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                        <Input
                            name="input"
                            label="Label"
                            validationMessage="Supporting text.."
                            icon={<MdClose />}
                            state={'filled'}
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                        <Input
                            name="input"
                            label="Label"
                            validationMessage="Supporting text.."
                            icon={<MdClose />}
                            state={'error'}
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                        <Input
                            name="input"
                            label="Label"
                            validationMessage="Supporting text.."
                            icon={<MdClose />}
                            state={'disable'}
                            placeholder="Input..."
                        />
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default InputSample;
