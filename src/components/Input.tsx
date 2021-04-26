import React from "react";

type InputProps = {
    placeholder: string;
    type: string;
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FunctionComponent<InputProps> = ({
    placeholder,
    type,
    handleOnChange,
}) => (
    <input
        className="input"
        type={type}
        onChange={(event) => handleOnChange(event)}
        placeholder={placeholder}
    />
);

export default Input;
