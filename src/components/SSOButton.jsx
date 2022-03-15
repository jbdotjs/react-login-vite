import React from "react";

const SSOButton = ({ alt, src, ...props }) => {
    return (
        <button
            {...props}
            className="bg-white hover:bg-slate-100 transition-all py-1 px-3 w-24 center border border-gray-200 rounded-3xl"
        >
            <img src={src} alt={alt} />
        </button>
    );
};

export default SSOButton;
