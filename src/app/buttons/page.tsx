import Button from '@/components/Buttons/Button';
import SingleIconButton from '@/components/Buttons/SingleIconButton';
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
                            <div className="flex gap-2 items-center">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
