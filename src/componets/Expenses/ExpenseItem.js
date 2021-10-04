import React, { useState } from "react";
import "./ExpenceItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [item, setTitle] = useState(props.item);

  const clickHandler = () => {
    setTitle("ayman");
    console.log("ayman");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description ">
        <h2>{item}</h2>
        <div price={props.price} className="expense-item__price">
          {props.price}
        </div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
};

export default ExpenseItem;
