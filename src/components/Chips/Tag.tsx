import { cva, VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { MdClose } from 'react-icons/md';

const chipVariant = cva(
    'flex items-center justify-center border rounded-full px-3 py-1.5 gap-0.5 font-normal whitespace-nowrap transition-all',
    {
        variants: {
            state: {
                pressed: 'bg-main400 text-white border-main600 cursor-default',
                default: 'bg-white text-gray910 border-main200 hover:bg-main200 hover:border-main400 cursor-default',
                disable: 'bg-gray100 text-gray500 border-gray300 cursor-not-allowed'
            },
            size: {
                md: 'text-xs',
                lg: 'text-base'
            }
        },
        defaultVariants: {
            state: 'default',
            size: 'md'
        }
    }
);

type ChipVariantProps = VariantProps<typeof chipVariant>;

type ChipProps = { handleClickDeleteIcon?: () => void } & ChipVariantProps;

const Tag = ({ children, state, size, handleClickDeleteIcon }: PropsWithChildren<ChipProps>) => {
    return (
        <div className={chipVariant({ state, size })}>
            {children || 'Tag'}
            {state === 'disable' ? (
                <span className="flex items-center justify-center cursor-not-allowed">
                    <MdClose />
                </span>
            ) : (
                <span onClick={handleClickDeleteIcon} className="flex items-center justify-center cursor-pointer">
                    <MdClose />
                </span>
            )}
        </div>
    );
};

export default Tag;
