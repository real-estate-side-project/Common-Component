import CheckboxSample from './_components/CheckboxSample';
import InputSample from './_components/InputSample';
import RadioButtonSample from './_components/RadioButtonSample';
import ToggleSample from './_components/ToggleSample';

const page = () => {
    return (
        <div className="p-20 flex flex-col items-start justify-start gap-10">
            <InputSample />
            <div className="flex gap-10">
                <ToggleSample />
                <CheckboxSample />
            </div>
            <RadioButtonSample />
        </div>
    );
};

export default page;
