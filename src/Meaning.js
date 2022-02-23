import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

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

            <Examples examples={definition.example} />
            <Synonyms synonyms={definition.synonyms} />
            <span></span>
          </div>
        );
      })}
    </div>
  );
}
