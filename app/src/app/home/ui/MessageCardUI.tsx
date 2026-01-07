import { CONTENTS } from "../constants/contents";

interface MessageCardUIProps {
  name: string | null;
  message: string;
  icon: string;
  theme: { bg: string; text: string; };
  onClick: () => void;
}

export default function MessageCardUI({
  name,
  message,
  icon,
  theme,
  onClick,
}: MessageCardUIProps) {
  return (
    <div 
      className="group bg-white p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
      style={{ borderRadius: "32px" }}
    >
      <div className="flex justify-between items-start mb-5">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${theme.bg}`}>
          <img 
            src={icon} 
            alt="icon" 
            className="w-6 h-6 object-contain opacity-80" 
            style={{ mixBlendMode: "multiply" }} 
          />
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-3 h-3 text-gray-400"
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8 a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
          </svg>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
        {name || CONTENTS.ANONYMOUS}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow">
        {message}
      </p>
      <div className="mt-auto">
        <div 
          className="w-full py-3 bg-gray-50 rounded-full text-center cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={onClick}
        >
          <span className="text-gray-700 text-sm font-bold">View</span>
        </div>
      </div>
    </div>
  );
}