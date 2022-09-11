import React from "react";

const ExpenditureCard = (props) => {
  return (
    <div className="bg-gray-200 my-2 px-4 py-2 rounded flex">
      <img
        className="mr-4"
        src={require("../img/" + props.exp.category + ".png")}
        alt="Makanan"
      />
      <div>
        <p>{props.exp.name}</p>
        <p>{props.exp.category}</p>
        <p>Rp. {separator(props.exp.price)}</p>
      </div>
    </div>
  );
};

let separator = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export default ExpenditureCard;
