import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="consanguineous" />

      <footer>
        <small>Coded by Vanessa Leng</small>
      </footer>
    </div>
  );
}

export default App;
