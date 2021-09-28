import React from "react";
import "./ExpenceItem.css";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = ({ date, item, price }) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description ">
        <h2 item={item}>{item}</h2>
        <div price={price} className="expense-item__price">
          {price}
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
