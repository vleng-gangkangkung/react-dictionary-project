import React from "react";
import Meaning from "./Meaning";

import "./App.css";

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="Results">
        <h3>Search Results</h3>
        <hr className="long" />
        <p className="mainWord">{props.results.word}</p>
        <div className="phonic">{props.results.phonetic}</div>

        <div>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
