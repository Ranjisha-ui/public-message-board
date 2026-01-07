import { CONTENTS } from "../constants/contents";

interface MessageFormUIProps {
    name: string;
    message: string;
    isLoading: boolean;
    onNameChange: (name: string) => void;
    onMessageChange: (message: string) => void;
    onSubmit: () => void;
    onClose: () => void;
}

export default function MessageFormUI({
    name,
    message,
    isLoading,
    onNameChange,
    onMessageChange,
    onSubmit,
    onClose
}: MessageFormUIProps) {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <input
                    type="text"
                    className="w-full p-4 bg-gray-100 rounded-2xl border-none focus:ring-0 text-gray-800 placeholder-gray-800 text-base"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => onNameChange(e.target.value)}
                />
            </div>
            <div>
                <textarea
                    className="w-full h-32 p-4 bg-gray-100 rounded-2xl border-none focus:ring-0 text-gray-800 placeholder-gray-800 text-base resize-none"
                    placeholder={CONTENTS.FORM.MESSAGE_PLACEHOLDER}
                    value={message}
                    onChange={(e) => onMessageChange(e.target.value)}
                />
            </div>
            <div className="flex gap-4 w-full">
                <button
                    className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-2xl hover:bg-gray-300 transition-colors"
                    onClick={onClose}
                >
                    {CONTENTS.FORM.CANCEL_BUTTON}
                </button>
                <button
                    className="flex-1 px-6 py-3 text-white rounded-2xl hover:opacity-90 transition-colors disabled:opacity-50"
                    onClick={onSubmit}
                    disabled={isLoading}
                    style={{ backgroundColor: "#648bc0" }}
                >
                    {isLoading ? "..." : CONTENTS.FORM.SUBMIT_BUTTON}
                </button>
            </div>
        </div>
    );
}