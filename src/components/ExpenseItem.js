import './ExpenseItem.css';

function ExpenseItem(){

    const expenseDate = new Date(2023, 8, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 500.5;
    const locationOfExpenditure = 'Bangalore';
    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2> 
                <div className='expense-item__price'>${expenseAmount} </div>
                <p>At {locationOfExpenditure}</p>
            </div>
        </div>
    );
}
export default ExpenseItem;