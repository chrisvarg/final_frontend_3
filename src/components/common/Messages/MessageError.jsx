import React from "react";

export const MessageError = () => {
  return (
    <p
      className="error"
      style={{
        color: "white",
        fontSize: "1.4rem",
        fontWeight: "400",
        backgroundColor: "#ee1740",
        padding: "8px",
      }}
    >
      Por favor verifique su información nuevamente
    </p>
  );
};
