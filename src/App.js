import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>DICTIONARY</h2>
        <hr />
      </header>
      <div className="search">
        <h1>What would you like to search for?</h1>
        <form className="mt-4">
          <input type="text" placeholder="Search"></input>
        </form>
      </div>

      <div>
        <h3>Search Results</h3>
        <hr />
      </div>
    </div>
  );
}

export default App;
