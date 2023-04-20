import React from "react";

export default function Person({ id, name, age, img }) {
  return (
    <div className="box">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <h4>{age}</h4>
      </div>
    </div>
  );
}
