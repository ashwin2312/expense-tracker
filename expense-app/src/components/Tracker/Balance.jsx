import React from "react";

const Balance = () => {
  return (
    <div
      style={{
        width: "355.41px",
        height: "181px",
        borderRadius: "15px",
        backgroundColor: "#9B9B9B",
        alignContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "302px",
          height: "34px",
          top: "192px",
          left: "113px",
          alignContent: "center",
          justifyItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Ubuntu",
            fontSize: "30px",
            fontWeight: "400",
            lineHeight: "34.47px",
          }}
        >
          Wallet Balance:{" "}
          <span
            style={{
              fontFamily: "inherit",
              fontSize: "30px",
              fontWeight: "700",
              lineHeight: "34.47px",
              color: "#89E148",
            }}
          >
            ₹4500
          </span>
        </p>
        <div
          style={{
            width: "167.65px",
            height: "38px",
            borderRadius: "15px",
            background: "linear-gradient(90deg, #B5DC52 0%, #89E148 100%)",
            alignContent: "center",
            justifyItems: "center",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <p
            style={{
              width: "103px",
              height: "18px",
              fontFamily: "Ubuntu",
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "18.38px",
              alignContent: "center",
            }}
          >
            + Add Income
          </p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
