import Expenses from "./components/Expenses";
import Tracker from "./components/Tracker";
import Transactions from "./components/Transactions";

function App() {
  return (
    <>
      <div
        style={{
          background: "#3B3B3B",
          color: "white",
          height: "100vh",
          width: "96vw",
          padding: "10px",
        }}
      >
        <div>
          <p style={{ fontFamily: "Ubuntu", fontWeight: "700" }}>
            Expense Tracker
          </p>
          <Tracker />
        </div>
        <div style={{ display: "flex", gap: "40px" }}>
          <div>
            <p
              style={{
                fontFamily: "Ubuntu",
                fontWeight: "700",
                fontStyle: "italic",
              }}
            >
              Recent Transactions
            </p>
            <Transactions />
          </div>

          <div>
            <p
              style={{
                fontFamily: "Ubuntu",
                fontWeight: "700",
                fontStyle: "italic",
              }}
            >
              Top Expenses
            </p>
            <Expenses />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
