import React from "react";

const PrimaryLoginBtn = ({ text, ...props }) => {
    return (
        <button
            {...props}
            className="w-80 transition-all shadow-orange-200 shadow-md bg-orange-800 hover:bg-orange-600 text-white font-semibold py-2 px-3 rounded-full"
        >
            {text}
        </button>
    );
};

export default PrimaryLoginBtn;
