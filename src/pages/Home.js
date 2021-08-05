import React from "react";
import '../App.css';
import { Greeter } from '../components/Greeter'
import { Input } from '../components/Input'
import { TransactionList } from '../components/TransactionList'
import { Total } from '../components/Total'
import { GlobalProvider } from '../context/GlobalState';


function Home() {

  

return (

  <GlobalProvider>
  <div className='App'>
    
    <Greeter />
    <Input />
    <Total />
    <TransactionList />
    
    </div>
  </GlobalProvider>
 
  );
}

export default Home;
