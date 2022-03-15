import React from "react";

const Input = ({ name, text, ...props }) => {
    return (
        <div className="col-start w-2/3">
            <label className="pb-1 text-gray-600 text-sm" htmlFor={name}>
                {text}
            </label>
            <input
                className="border w-full h-9 px-4 py-1 rounded-3xl ring-0 ring-slate-300 transition-all focus:border-slate-500 focus:ring-slate-500 focus:outline-none"
                type={name}
                name={name}
                id={name}
                placeholder={name}
                {...props}
            />
        </div>
    );
};

export default Input;
