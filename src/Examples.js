import React from "react";

export default function Examples(props) {
  if (props.examples) {
    return (
      <div className="Examples">
        <span className="font-italic example">
          <strong>Example:</strong> {props.examples}
        </span>
      </div>
    );
  } else return null;
}
