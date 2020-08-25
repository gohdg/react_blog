import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" style={{ width: props.width ? props.width : "100%" }}>
      {props.children}
    </div>
  );
}

export default Card;
