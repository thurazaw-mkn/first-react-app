import React, { useState } from "react";
import Alert from "./Alert";

interface Props {
  children: string;
  color?: "primary" | "danger" | "secondary";
  onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {
  const [alertVisiable, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisiable && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <button
        className={"btn btn-" + color}
        onClick={() => setAlertVisibility(true)}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
