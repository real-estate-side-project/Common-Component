'use client';

import Input from '@/components/Inputs/Input';
import { useToast } from '@/providers/ToastProvider';
import { MdClose } from 'react-icons/md';

const InputSample = () => {
    const toast = useToast();

    const handleClickIcon = (): void => {
        toast.on({ message: 'Icon clicked!' });
    };

    return (
        <div className="flex flex-row border-2 p-6 gap-10">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold pb-1">Input</h1>
                <div className="flex gap-2">
                    <Input placeholder="Input..." />
                    <Input state={'filled'} placeholder="Input..." />
                    <Input state={'error'} placeholder="Input..." />
                    <Input state={'disable'} placeholder="Input..." />
                </div>
                <div className="flex gap-2 mb-6">
                    <Input icon={<MdClose />} placeholder="Input..." handleClickIcon={handleClickIcon} />
                    <Input
                        icon={<MdClose />}
                        state={'filled'}
                        placeholder="Input..."
                        handleClickIcon={handleClickIcon}
                    />
                    <Input
                        icon={<MdClose />}
                        state={'error'}
                        placeholder="Input..."
                        handleClickIcon={handleClickIcon}
                    />
                    <Input icon={<MdClose />} state={'disable'} placeholder="Input..." />
                </div>
                <div className="flex gap-2">
                    <Input label="Label" placeholder="Input..." />
                    <Input label="Label" state={'filled'} placeholder="Input..." />
                    <Input label="Label" state={'error'} placeholder="Input..." />
                    <Input label="Label" state={'disable'} placeholder="Input..." />
                </div>
                <div className="flex gap-2 mb-6">
                    <Input label="Label" icon={<MdClose />} placeholder="Input..." handleClickIcon={handleClickIcon} />
                    <Input
                        label="Label"
                        icon={<MdClose />}
                        state={'filled'}
                        placeholder="Input..."
                        handleClickIcon={handleClickIcon}
                    />
                    <Input
                        label="Label"
                        icon={<MdClose />}
                        state={'error'}
                        placeholder="Input..."
                        handleClickIcon={handleClickIcon}
                    />
                    <Input label="Label" icon={<MdClose />} state={'disable'} placeholder="Input..." />
                </div>
                <div className="flex gap-2">
                    <Input validationMessage="Supporting text.." placeholder="Input..." />
                    <Input validationMessage="Supporting text.." state={'filled'} placeholder="Input..." />
                    <Input validationMessage="Supporting text.." state={'error'} placeholder="Input..." />
                    <Input validationMessage="Supporting text.." state={'disable'} placeholder="Input..." />
                </div>
                <div className="flex gap-2 mb-6">
                    <Input
                        validationMessage="Supporting text.."
                        icon={<MdClose />}
                        placeholder="Input..."
                        handleClickIcon={handleClickIcon}
                    />
                    <Input
                        validationMessage="Supporting text.."
                        icon={<MdClose />}
                        state={'filled'}
                        placeholder="Input..."
                        handleClickIcon={handleClickIcon}
                    />
                    <Input
                        validationMessage="Supporting text.."
                        icon={<MdClose />}
                        state={'error'}
                        placeholder="Input..."
                        handleClickIcon={handleClickIcon}
                    />
                    <Input
                        validationMessage="Supporting text.."
                        icon={<MdClose />}
                        state={'disable'}
                        placeholder="Input..."
                    />
                </div>
                <div className="flex gap-2">
                    <Input label="Label" validationMessage="Supporting text.." placeholder="Input..." />
                    <Input
                        label="Label"
                        validationMessage="Supporting text.."
                        state={'filled'}
                        placeholder="Input..."
                    />
                    <Input label="Label" validationMessage="Supporting text.." state={'error'} placeholder="Input..." />{' '}
                    <Input
                        label="Label"
                        validationMessage="Supporting text.."
                        state={'disable'}
                        placeholder="Input..."
                    />
                </div>
                <div className="flex gap-2">
                    <Input
                        label="Label"
                        validationMessage="Supporting text.."
                        icon={<MdClose />}
                        placeholder="Input..."
                        handleClickIcon={handleClickIcon}
                    />
                    <Input
                        label="Label"
                        validationMessage="Supporting text.."
                        icon={<MdClose />}
                        state={'filled'}
                        placeholder="Input..."
                        handleClickIcon={handleClickIcon}
                    />
                    <Input
                        label="Label"
                        validationMessage="Supporting text.."
                        icon={<MdClose />}
                        state={'error'}
                        placeholder="Input..."
                        handleClickIcon={handleClickIcon}
                    />
                    <Input
                        label="Label"
                        validationMessage="Supporting text.."
                        icon={<MdClose />}
                        state={'disable'}
                        placeholder="Input..."
                    />
                </div>
            </div>
        </div>
    );
};

export default InputSample;
