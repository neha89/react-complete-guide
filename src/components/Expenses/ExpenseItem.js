import React, {useState} from "react";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import "./Expenses.css"
import Card from "../UI/Card";

const ExpenseItem=(props)=> {

const [title, setTitle] = useState(props.title); 
const [amount, setAmount] = useState(props.amount);
console.log('ExpenseItem evaluated by React'); 

  const clickHandler = ()=>{
   setTitle('Updated!!'); 
   console.log('title'); 
  }
  const changeHandler = ()=>{
    setAmount('100');
    console.log("Changed Expense");
  }
  

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={amount}
        location={props.location}
        title={title}
        
      />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={changeHandler}>Change Expense</button>
    </Card>
  );
}
export default ExpenseItem;
