import React from "react";

type ButtonProps = {
    title: string;
    handleClick?: () => void;
};

const Button: React.FunctionComponent<ButtonProps> = ({
    title,
    handleClick,
}) => (
    <button onClick={handleClick} className="button">
        {title}
    </button>
);

export default Button;
