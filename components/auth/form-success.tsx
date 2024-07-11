import {GrStatusGood} from 'react-icons/gr'

interface FormSuccessProps {
    message : string;
}

export const FormSuccess = ({message} : FormSuccessProps) => {
    if (!message) return null;

    return (
        <div className="text-md font-semibold flex items-center gap-x-2 border px-3 rounded-lg shadow-xl border-dark-green py-1 mt-2 bg-dark-green/15" style={{
            fontFamily: "Anta, sans-serif"
        }}>
            <GrStatusGood className="text-dark-green" />
            <span className="text-subtle-green">{message}</span>
        </div>
    );
}