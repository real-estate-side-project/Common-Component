import Button from '@/components/Buttons/Button';
import SingleIconButton from '@/components/Buttons/SingleIconButton';
import TextButton from '@/components/Buttons/TextButton';
import { MdOutlineGridView } from 'react-icons/md';

const page = () => {
    return (
        <div className="p-20 flex flex-col items-start justify-start gap-20">
            <div className="flex flex-row border-2 p-6 gap-10">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold pb-1">Button</h1>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} />
                        <Button />
                        <Button size={'lg'} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} isDisabled />
                        <Button isDisabled />
                        <Button size={'lg'} isDisabled />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} priority={'secondary'} />
                        <Button priority={'secondary'} />
                        <Button size={'lg'} priority={'secondary'} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} priority={'secondary'} isDisabled />
                        <Button priority={'secondary'} isDisabled />
                        <Button size={'lg'} priority={'secondary'} isDisabled />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} priority={'tertiary'} />
                        <Button priority={'tertiary'} />
                        <Button size={'lg'} priority={'tertiary'} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} priority={'tertiary'} isDisabled />
                        <Button priority={'tertiary'} isDisabled />
                        <Button size={'lg'} priority={'tertiary'} isDisabled />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} priority={'gray'} />
                        <Button priority={'gray'} />
                        <Button size={'lg'} priority={'gray'} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} priority={'gray'} isDisabled />
                        <Button priority={'gray'} isDisabled />
                        <Button size={'lg'} priority={'gray'} isDisabled />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold pb-1 text-white">Left Icon</h1>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} icon={<MdOutlineGridView />} />
                        <Button icon={<MdOutlineGridView />} />
                        <Button size={'lg'} icon={<MdOutlineGridView />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} isDisabled icon={<MdOutlineGridView />} />
                        <Button isDisabled icon={<MdOutlineGridView />} />
                        <Button size={'lg'} isDisabled icon={<MdOutlineGridView />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button priority={'secondary'} size={'sm'} icon={<MdOutlineGridView />} />
                        <Button priority={'secondary'} icon={<MdOutlineGridView />} />
                        <Button priority={'secondary'} size={'lg'} icon={<MdOutlineGridView />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button priority={'secondary'} size={'sm'} isDisabled icon={<MdOutlineGridView />} />
                        <Button priority={'secondary'} isDisabled icon={<MdOutlineGridView />} />
                        <Button priority={'secondary'} size={'lg'} isDisabled icon={<MdOutlineGridView />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button priority={'tertiary'} size={'sm'} icon={<MdOutlineGridView />} />
                        <Button priority={'tertiary'} icon={<MdOutlineGridView />} />
                        <Button priority={'tertiary'} size={'lg'} icon={<MdOutlineGridView />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button priority={'tertiary'} size={'sm'} isDisabled icon={<MdOutlineGridView />} />
                        <Button priority={'tertiary'} isDisabled icon={<MdOutlineGridView />} />
                        <Button priority={'tertiary'} size={'lg'} isDisabled icon={<MdOutlineGridView />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button priority={'gray'} size={'sm'} icon={<MdOutlineGridView />} />
                        <Button priority={'gray'} icon={<MdOutlineGridView />} />
                        <Button priority={'gray'} size={'lg'} icon={<MdOutlineGridView />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button priority={'gray'} size={'sm'} isDisabled icon={<MdOutlineGridView />} />
                        <Button priority={'gray'} isDisabled icon={<MdOutlineGridView />} />
                        <Button priority={'gray'} size={'lg'} isDisabled icon={<MdOutlineGridView />} />
                    </div>
                </div>
            </div>
            <div className="flex border-2 p-6 gap-10">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold pb-3">Single Icon Button</h1>
                    <div className="flex gap-10">
                        <div className="flex flex-col">
                            <div className="flex gap-2 items-center pb-2">
                                <SingleIconButton size={'sm'} icon={<MdOutlineGridView />} />
                                <SingleIconButton icon={<MdOutlineGridView />} />
                                <SingleIconButton size={'lg'} icon={<MdOutlineGridView />} />
                            </div>
                            <div className="flex gap-2 items-center pb-2">
                                <SingleIconButton size={'sm'} isDisabled icon={<MdOutlineGridView />} />
                                <SingleIconButton isDisabled icon={<MdOutlineGridView />} />
                                <SingleIconButton size={'lg'} isDisabled icon={<MdOutlineGridView />} />
                            </div>
                            <div className="flex gap-2 items-center pb-2">
                                <SingleIconButton priority={'secondary'} size={'sm'} icon={<MdOutlineGridView />} />
                                <SingleIconButton priority={'secondary'} icon={<MdOutlineGridView />} />
                                <SingleIconButton priority={'secondary'} size={'lg'} icon={<MdOutlineGridView />} />
                            </div>
                            <div className="flex gap-2 items-center pb-2">
                                <SingleIconButton
                                    priority={'secondary'}
                                    size={'sm'}
                                    isDisabled
                                    icon={<MdOutlineGridView />}
                                />
                                <SingleIconButton priority={'secondary'} isDisabled icon={<MdOutlineGridView />} />
                                <SingleIconButton
                                    priority={'secondary'}
                                    size={'lg'}
                                    isDisabled
                                    icon={<MdOutlineGridView />}
                                />
                            </div>
                            <div className="flex gap-2 items-center pb-2">
                                <SingleIconButton priority={'tertiary'} size={'sm'} icon={<MdOutlineGridView />} />
                                <SingleIconButton priority={'tertiary'} icon={<MdOutlineGridView />} />
                                <SingleIconButton priority={'tertiary'} size={'lg'} icon={<MdOutlineGridView />} />
                            </div>
                            <div className="flex gap-2 items-center pb-2">
                                <SingleIconButton
                                    priority={'tertiary'}
                                    size={'sm'}
                                    isDisabled
                                    icon={<MdOutlineGridView />}
                                />
                                <SingleIconButton priority={'tertiary'} isDisabled icon={<MdOutlineGridView />} />
                                <SingleIconButton
                                    priority={'tertiary'}
                                    size={'lg'}
                                    isDisabled
                                    icon={<MdOutlineGridView />}
                                />
                            </div>
                            <div className="flex gap-2 items-center pb-2">
                                <SingleIconButton priority={'gray'} size={'sm'} icon={<MdOutlineGridView />} />
                                <SingleIconButton priority={'gray'} icon={<MdOutlineGridView />} />
                                <SingleIconButton priority={'gray'} size={'lg'} icon={<MdOutlineGridView />} />
                            </div>
                            <div className="flex gap-2 items-center">
                                <SingleIconButton
                                    priority={'gray'}
                                    size={'sm'}
                                    isDisabled
                                    icon={<MdOutlineGridView />}
                                />
                                <SingleIconButton priority={'gray'} isDisabled icon={<MdOutlineGridView />} />
                                <SingleIconButton
                                    priority={'gray'}
                                    size={'lg'}
                                    isDisabled
                                    icon={<MdOutlineGridView />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row border-2 p-6 gap-10">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold pb-1">Text Button</h1>
                    <div className="flex gap-3 items-center pb-3">
                        <TextButton size={'sm'} />
                        <TextButton />
                        <TextButton size={'lg'} />
                    </div>
                    <div className="flex gap-3 items-center pb-3">
                        <TextButton size={'sm'} isDisabled />
                        <TextButton isDisabled />
                        <TextButton size={'lg'} isDisabled />
                    </div>
                    <div className="flex gap-3 items-center pb-3">
                        <TextButton size={'sm'} priority={'secondary'} />
                        <TextButton priority={'secondary'} />
                        <TextButton size={'lg'} priority={'secondary'} />
                    </div>
                    <div className="flex gap-3 items-center pb-3">
                        <TextButton size={'sm'} priority={'secondary'} isDisabled />
                        <TextButton priority={'secondary'} isDisabled />
                        <TextButton size={'lg'} priority={'secondary'} isDisabled />
                    </div>
                    <div className="flex gap-3 items-center pb-3">
                        <TextButton size={'sm'} priority={'tertiary'} />
                        <TextButton priority={'tertiary'} />
                        <TextButton size={'lg'} priority={'tertiary'} />
                    </div>
                    <div className="flex gap-3 items-center pb-3">
                        <TextButton size={'sm'} priority={'tertiary'} isDisabled />
                        <TextButton priority={'tertiary'} isDisabled />
                        <TextButton size={'lg'} priority={'tertiary'} isDisabled />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold pb-1 text-white">Left Icon</h1>
                    <div className="flex gap-3 items-center pb-3">
                        <TextButton size={'sm'} icon={<MdOutlineGridView />} />
                        <TextButton icon={<MdOutlineGridView />} />
                        <TextButton size={'lg'} icon={<MdOutlineGridView />} />
                    </div>
                    <div className="flex gap-3 items-center pb-3">
                        <TextButton size={'sm'} isDisabled icon={<MdOutlineGridView />} />
                        <TextButton isDisabled icon={<MdOutlineGridView />} />
                        <TextButton size={'lg'} isDisabled icon={<MdOutlineGridView />} />
                    </div>
                    <div className="flex gap-3 items-center pb-3">
                        <TextButton priority={'secondary'} size={'sm'} icon={<MdOutlineGridView />} />
                        <TextButton priority={'secondary'} icon={<MdOutlineGridView />} />
                        <TextButton priority={'secondary'} size={'lg'} icon={<MdOutlineGridView />} />
                    </div>
                    <div className="flex gap-3 items-center pb-3">
                        <TextButton priority={'secondary'} size={'sm'} isDisabled icon={<MdOutlineGridView />} />
                        <TextButton priority={'secondary'} isDisabled icon={<MdOutlineGridView />} />
                        <TextButton priority={'secondary'} size={'lg'} isDisabled icon={<MdOutlineGridView />} />
                    </div>
                    <div className="flex gap-3 items-center pb-3">
                        <TextButton priority={'tertiary'} size={'sm'} icon={<MdOutlineGridView />} />
                        <TextButton priority={'tertiary'} icon={<MdOutlineGridView />} />
                        <TextButton priority={'tertiary'} size={'lg'} icon={<MdOutlineGridView />} />
                    </div>
                    <div className="flex gap-3 items-center pb-3">
                        <TextButton priority={'tertiary'} size={'sm'} isDisabled icon={<MdOutlineGridView />} />
                        <TextButton priority={'tertiary'} isDisabled icon={<MdOutlineGridView />} />
                        <TextButton priority={'tertiary'} size={'lg'} isDisabled icon={<MdOutlineGridView />} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
