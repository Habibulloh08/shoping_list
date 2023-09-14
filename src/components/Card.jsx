import React from "react";

const Card = ({ title, pri, removeText, id, chekItem, isDone }) => {
  // let color = "green";
  // if (pri === "hight") {
  //   color = "red";
  // } else if (pri === "normal") {
  //   color = "yellow";
  // }
  const style = () => {
    if (pri === "low") return "green";
    else if (pri === "normal") return "orange";
    else if (pri === "hight") return "red";
  };

  return (
    <div
      className="card"
      style={{
        backgroundColor: style(),
        filter: isDone && "grayscale(100%)",
      }}
    >
      <div className="card-input">
        <input type="checkbox" onChange={() => chekItem(id)} />
        <p style={{ textDecoration: isDone && "line-through" }}>{title}</p>
      </div>
      <button className="remove-btn" onClick={() => removeText(title)}>
        X
      </button>
    </div>
  );
};

export default Card;
