import React from "react";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="phonic ">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>

        {props.phonetics.text}
      </div>
    );
  } else return null;
}
