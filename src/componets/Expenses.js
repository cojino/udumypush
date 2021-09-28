import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
      <ExpenseItem
        date={expenses[0].date}
        item={expenses[0].item}
        price={expenses[0].price}
      />{" "}
      <ExpenseItem
        date={expenses[1].date}
        item={expenses[1].item}
        price={expenses[1].price}
      />{" "}
      <ExpenseItem
        date={expenses[2].date}
        item={expenses[2].item}
        price={expenses[2].price}
      />{" "}
      <ExpenseItem
        date={expenses[3].date}
        item={expenses[3].item}
        price={expenses[3].price}
      />
    </div>
  );
};

export default Expenses;
