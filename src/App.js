import { useState } from "react";
import Field from "./Field";
import GradientItem from "./GradientItem";

import "./App.css";

const App = () => {
  let [gradientsArr, setGradientsArr] = useState([]);
  let [firstValue, setFirstValue] = useState("");
  let [secondValue, setSecondValue] = useState("");

  let valueValidation = (value) => {
    if ((value[0] === "#" && value.length === 4) || value.length === 7) {
      for (const letter of value) {
        if ("#0123456789ABCDEFabcdef".indexOf(letter) === -1) {
          return false;
        }
      }
      return true;
    } else return false;
  };

  let addGradients = () => {
    setGradientsArr([
      ...gradientsArr,
      {
        firstGradient: firstValue,
        secondGradient: secondValue,
      },
    ]);
    setFirstValue("");
    setSecondValue("");
  };

  let handleSubmit = (e) => {
    addGradients();
    e.preventDefault();
  };

  let deleteItem = (index) => {
    let gradientArrCopy = [...gradientsArr];
    setGradientsArr(
      gradientArrCopy.filter((item, arrIndex) => {
        return arrIndex !== index;
      })
    );
  };

  return (
    <div className="container">
      <div className="app">
        <form onSubmit={handleSubmit} className="form">
          <div className="form__inputs">
            <Field
              placeholder={"#000000"}
              value={firstValue}
              setValue={setFirstValue}
            />
            <Field
              placeholder={"#ffffff"}
              value={secondValue}
              setValue={setSecondValue}
            />
          </div>
          <button
            className="form__btn"
            disabled={
              !valueValidation(firstValue) || !valueValidation(secondValue)
            }
          >
            Add gradient
          </button>
        </form>
        <div className="gradient">
          {gradientsArr.map((item, index) => (
            <GradientItem
              key={index}
              index={index}
              firstvalue={item.firstGradient}
              secondvalue={item.secondGradient}
              deleteItem={deleteItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
