import Tracker from "./components/Tracker";

function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
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
