import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./App.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }
  function getQuery(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <header className="App-header">
        <h2>DICTIONARY</h2>
        <hr />
      </header>
      <div className="search">
        <h1>What would you like to search for?</h1>

        <form className="mt-4" onSubmit={search}>
          <input
            type="text"
            placeholder="Search"
            autoFocus={true}
            onChange={getQuery}
          />
          <input type="submit" value="search" />
        </form>
      </div>
      <Results results={results} />
    </div>
  );
}
