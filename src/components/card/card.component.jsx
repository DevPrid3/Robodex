import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${
          props.monster.id * 2
        }?set=set1&size=180x180`}
      />
      <h3>{props.monster.name}</h3>
      <p>{props.monster.email}</p>
    </div>
  );
};
