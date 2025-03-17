import React from "react";
import "./Button.css";

const Button = ({ children, customClass="", ...props}) => {
    return (
        <button {...props} className={customClass + ' button'}>
            {children}
        </button>
    );
}

export default Button;