import Tracker from "./components/Tracker";

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
        <p style={{ fontFamily: "Ubuntu", fontWeight: "700" }}>
          Expense Tracker
        </p>
        <Tracker />
      </div>
    </>
  );
}

export default App;
