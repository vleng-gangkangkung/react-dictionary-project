import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="sunset" />

      <footer>
        <small>
          Coded by Vanessa Leng |
          <a
            href="https://github.com/vleng-gangkangkung/react-dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
