// src/app/home/components/MessageCard.tsx



import { CONTENTS } from "../constants/contents";



// Props

interface MessageCardProps {

  id: number;

  name: string | null;

  message: string;

  createdAt: string;

  onClick: () => void;

}



// Icon paths

const icons = [

  "/icons/i1.png", "/icons/i2.png", "/icons/i3.png", "/icons/i4.png",

  "/icons/i5.png", "/icons/i6.png", "/icons/i7.png", "/icons/i8.png",

  "/icons/i9.png", "/icons/i10.png",

];



// Color themes for the icon box to match the reference image

// Cycles through: Light Blue, Light Orange, Light Green, Light Purple, Light Pink

const cardThemes = [

  { bg: "bg-blue-50", text: "text-blue-600" },

  { bg: "bg-orange-50", text: "text-orange-600" },

  { bg: "bg-green-50", text: "text-green-600" },

  { bg: "bg-yellow-50", text: "text-yellow-600" },

  { bg: "bg-purple-50", text: "text-purple-600" },

  { bg: "bg-pink-50", text: "text-pink-600" },

];



export default function MessageCard({

  id,

  name,

  message,

  createdAt,

  onClick,

}: MessageCardProps) {

  const icon = icons[id % icons.length];

 

  // Select color theme based on ID so it's consistent per card

  const theme = cardThemes[id % cardThemes.length];



  return (

    <div

      className="group bg-white p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"

      style={{ borderRadius: "32px" }} // Matches the extra roundness in the image

      onClick={onClick}

    >

      {/* Top Row: Icon Box + Edit Button */}

      <div className="flex justify-between items-start mb-5">

       

        {/* Icon Container with dynamic pastel background */}

        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${theme.bg}`}>

          {/* Using the image as the icon, styled to blend in */}

          <img

            src={icon}

            alt="icon"

            className="w-6 h-6 object-contain opacity-80"

            style={{ mixBlendMode: "multiply" }}

          />

        </div>



        {/* Small Circular Edit Icon (Top Right) */}

        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">

           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-gray-400">

             <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />

           </svg>

        </div>

      </div>



      {/* Title */}

      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">

        {name || CONTENTS.ANONYMOUS}

      </h3>



      {/* Body Text */}

      <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow">

        {message}

      </p>



      {/* Footer: Learn More Button */}

      <div className="mt-auto">

        <div className="w-full py-3 bg-gray-50 rounded-full text-center">

            <span className="text-gray-700 text-sm font-bold">Learn more</span>

        </div>

      </div>



    </div>

  );

}