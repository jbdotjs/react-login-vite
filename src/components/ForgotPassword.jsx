import React from "react";

const ForgotPassword = ({ href, text }) => {
    return (
        <a
            href={href}
            referrerPolicy="no-referrer"
            className="text-sm font-sans font-medium text-slate-500 hover:text-orange-600 transition-all"
        >
            {text}
        </a>
    );
};

export default ForgotPassword;
