import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//input gets prettier here 
function formatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Total = () => {

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  //calculating income
  const income = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0);

  //calculating expenses
  const expense = (
  amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
  -1);

  //calculating net balance
  const balance = income - expense;



  return (
    <div className='Total'>
      <h4>Income</h4>
      <p>{formatter(income)}</p>
        
   
      <h4>Expense</h4>
      <p>{formatter(expense)}</p>
      
      <h4>Your Net Balance</h4>
      <h1>{ balance }</h1>
    </div>
    
    
  )
}

