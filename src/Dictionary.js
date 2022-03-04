import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./App.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState([]);

  function load(keyword) {
    setLoaded(true);
    search(keyword);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);

    let pexelsApiKey =
      "563492ad6f917000010000017b4d7fff03d7447ebe3afda7e7e83620";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
    console.log(response.data.photos);
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
              <div className="col-10 ">
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    return load();
  }
}
