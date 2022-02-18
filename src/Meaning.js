import React from "react";

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
            <span className="definition">{definition.definition}</span>

            <span className="font-italic example">{definition.example}</span>
          </div>
        );
      })}
    </div>
  );
}
