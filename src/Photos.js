import React from "react";
import "./App.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <h4>
          <span>image results</span>
        </h4>
        <div className="row">
          {props.photos.map((photos, index) => {
            return (
              <div className="col-4" key={index}>
                <a href={photos.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photos.src.landscape}
                    className="img-fluid"
                    alt={photos.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return "no images";
  }
}
