// import React from 'react'
import Balance from "./Tracker/Balance";
import ExpensesDisplay from "./Tracker/ExpensesDisplay";
const Tracker = () => {
  return (
    <div
      style={{
        background: "#626262",
        width: "1211px",
        height: "269px",
        display: "flex",
        gap: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 4px 0px #00000040",
        // alignContent: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Balance />
      <ExpensesDisplay />
    </div>
  );
};

export default Tracker;
