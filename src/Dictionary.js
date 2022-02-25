import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./App.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function load(keyword) {
    setLoaded(true);
    search(keyword);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function getQuery(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <header className="App-header">
          <h2>DICTIONARY</h2>
        </header>
        <section>
          <h1>What would you like to search for?</h1>

          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="row ">
              <div class="col-10 ">
                <input
                  type="text"
                  defaultValue={props.defaultKeyword}
                  autoFocus={true}
                  onChange={getQuery}
                />
              </div>
              <div className="col-2 ">
                <input type="submit" value="search" />
              </div>
            </div>
          </form>
          <div className="hint">
            Suggested words: 'abhorrent', 'badinage', 'consanguineous'
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    return load();
  }
}
