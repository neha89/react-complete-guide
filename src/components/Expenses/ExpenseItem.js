import React from "react";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import "./Expenses.css"
import Card from "../UI/Card";

const ExpenseItem=(props)=> {
  const clickHandler = ()=>{
    console.log("Clicked!!!");
  }
  const delHandler = ()=>{
    console.log("Deleted!!!");
  }
  

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={delHandler}>Delete Expense</button>
    </Card>
  );
}
export default ExpenseItem;
