import logo from "./logo.svg";
import "./App.css";
import CenteredCard from "./components/CenteredCard";

function App() {
  return (
    <div className="pai">
      <CenteredCard>
        {" "}
        <h1> Filho- 1</h1>
      </CenteredCard>

      <CenteredCard>
        {" "}
        <h1> Filho- 2</h1>
      </CenteredCard>

      <CenteredCard>
        {" "}
        <h1> Filho- 3</h1>
      </CenteredCard>
    </div>
  );
}

export default App;
