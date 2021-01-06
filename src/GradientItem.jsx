import React from "react";

const GradientItem = ({ firstvalue, secondvalue, index, deleteItem }) => {
  let gradient = {
    background: `linear-gradient(90deg,${firstvalue},${secondvalue})`,
  };

  return (
    <div style={gradient} className="item_block">
      <span className="item_block__text">{firstvalue}</span>
      <span className="item_block__text">{secondvalue}</span>
      <button
        className={"item_block__btn"}
        onClick={() => {
          deleteItem(index);
        }}
      >
        X
      </button>
    </div>
  );
};

export default GradientItem;
