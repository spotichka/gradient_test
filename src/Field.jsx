import React from "react";

const Field = ({ value, setValue, placeholder }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
};

export default Field;
