import React from "react";

const Error = ({ errorMessage }) => {
  return (
    <h1
      style={{
        height: "100vh",
        color: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        fontWeight: "bold",
      }}
    >
      {errorMessage}
    </h1>
  );
};

export default Error;
