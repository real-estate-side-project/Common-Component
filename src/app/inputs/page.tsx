import InputSample from './_components/InputSample';
import ToggleSample from './_components/ToggleSample';

const page = () => {
    return (
        <div className="p-20 flex flex-col items-start justify-start gap-10">
            <InputSample />
            <ToggleSample />
        </div>
    );
};

export default page;
