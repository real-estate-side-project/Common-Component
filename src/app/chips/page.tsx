import Badge from '@/components/Chips/Badge';
import FilterSample from './_components/FilterSample';
import TagSample from './_components/TagSample';

const page = () => {
    return (
        <div className="p-20 flex items-start justify-start gap-10">
            <TagSample />
            <FilterSample />
            <div className="flex flex-col items-start justify-start border-2 p-6 gap-1">
                <h1 className="text-3xl font-bold pb-1">Badge</h1>
                <div className="flex gap-3">
                    <div className="flex flex-col gap-1">
                        <Badge />
                        <Badge color={'sub'} />
                        <Badge color={'danger'} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Badge type={'outline'} />
                        <Badge color={'sub'} type={'outline'} />
                        <Badge color={'danger'} type={'outline'} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Badge type={'pastel'} />
                        <Badge color={'sub'} type={'pastel'} />
                        <Badge color={'danger'} type={'pastel'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
