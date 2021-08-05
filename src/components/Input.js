import React, { useState, useContext } from "react";
import { GlobalContext } from '../context/GlobalState';


export const Input = () => {
        const [text, setText] = useState('');
        const [amount, setAmount] = useState('');
      
        const { addTransaction } = useContext(GlobalContext);
      
        const onSubmit = e => {
          e.preventDefault();
      
          //create uniq transaction
          const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
          }
      
          addTransaction(newTransaction);
        }

    return (
        <div className='user-input'>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
            <div>
            <label htmlFor="text">Transaction Name </label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div>
            <label htmlFor="amount">Transaction Amount
                (add + or - to specify income or expence)</label
            >
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Add</button>
        </form>
        </div>
    );

}


export default Input;