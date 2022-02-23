import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>
        <span>{props.meaning.partOfSpeech}</span>
      </h4>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <span className="definition">
              <strong>Definition: </strong>
              {definition.definition}
            </span>

            <span className="font-italic example">
              <strong>Example: </strong>
              {definition.example}
            </span>

            <Synonyms synonyms={definition.synonyms} />
            <span></span>
          </div>
        );
      })}
    </div>
  );
}
