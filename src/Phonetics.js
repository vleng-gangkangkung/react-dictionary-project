import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  if (props.phonetics) {
    return (
      <div className="phonic">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <br />
        {props.phonetics.text}
      </div>
    );
  } else return null;
}
