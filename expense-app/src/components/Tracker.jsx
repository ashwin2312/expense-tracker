// import React from 'react'
import Balance from "./Tracker/Balance";
import ExpensesDisplay from "./Tracker/ExpensesDisplay";
const Tracker = () => {
  return (
    <div
      style={{
        background: "grey",
        width: "95vw",
        height: "40vh",
        display: "flex",
      }}
    >
      <Balance />
      <ExpensesDisplay />
    </div>
  );
};

export default Tracker;
