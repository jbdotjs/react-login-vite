import React from "react";

const Link = ({ text, href }) => {
    return (
        <a
            href={href}
            referrerPolicy="no-referrer"
            className="text-sm font-sans font-medium text-sky-500 hover:text-sky-600 transition-all"
        >
            {text}
        </a>
    );
};

export default Link;
