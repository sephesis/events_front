import React from "react";

const Input = ({
    name,
    type = "text",
    value,
    onChange,
    placeholder = "",
    label = "",
    className = "",
    inputClassName = "form-control",
    error = null,
    ...props
}) => {
    const handleChange = (e) => {
        onChange({
            target: {
                name,
                value: type === "checkbox" ? e.target.checked : e.target.value
            }
        });
    };

    const inputProps = {
        name,
        type,
        className: `${inputClassName} ${error ? "is-invalid" : ""}`,
        placeholder,
        onChange: handleChange,
        ...props
    };

    // Особые случаи для разных типов input
    if (type === "checkbox" || type === "radio") {
        inputProps.checked = value;
        inputProps.className = `form-check-input ${error ? "is-invalid" : ""}`;
    } else {
        inputProps.value = value || "";
    }

    return (
        <div className={`mb-3 ${className}`}>
            {label && (
                <label htmlFor={name} className={type === "checkbox" || type === "radio" ? "form-check-label" : "form-label"}>
                    {label}
                </label>
            )}

            {type === "range" ? (
                <input
                    {...inputProps}
                    className={`form-range ${error ? "is-invalid" : ""}`}
                />
            ) : type === "checkbox" || type === "radio" ? (
                <div className="form-check">
                    <input {...inputProps} />
                    {label && (
                        <label htmlFor={name} className="form-check-label">
                            {label}
                        </label>
                    )}
                </div>
            ) : (
                <input {...inputProps} />
            )}

            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default Input;