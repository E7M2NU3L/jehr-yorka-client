import { FaExclamationTriangle } from "react-icons/fa";

interface formErrorProps {
    message? : string;
};

export const FormError = ({message} : formErrorProps) => {
    if (!message) return null;

    return (
        <div className="text-md font-semibold flex items-center gap-x-2 border px-3 rounded-lg shadow-xl border-dark-red py-1 mt-2 bg-destructive/15" style={{
            fontFamily: "Anta, sans-serif"
        }}>
            <FaExclamationTriangle className="text-dark-red" />
            <span className="text-subtle-red">{message}</span>
        </div>
    );
}