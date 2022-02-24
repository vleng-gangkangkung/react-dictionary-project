import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import "./App.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h3>Search Results</h3>
        <hr className="long" />
        <p className="mainWord">{props.results.word}</p>

        {props.results.phonetics.map((phonic, index) => {
          return (
            <div key={index}>
              <Phonetics phonetics={phonic} />
            </div>
          );
        })}

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
