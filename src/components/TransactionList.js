import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

// This section mostly referenced from https://github.com/bradtraversy/expense-tracker-react/blob/master/src/components/TransactionList.js

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul>
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}

export default TransactionList;