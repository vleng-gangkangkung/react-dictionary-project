import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Synonym:</strong>
        {props.synonyms.map((synonym, index) => {
          return <ul>{synonym}</ul>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
