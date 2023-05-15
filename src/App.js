import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import './App.css'


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Kaos',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    total: '2',
    file: '',

    
  },
  { id: 'e2', 
    title: 'Kemeja', 
    amount: 799.49, 
    date: new Date(2021, 2, 12),
    total: '1',
    file: '',
  },
  {
    id: 'e3',
    title: 'Seragam',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    total: '4',
    file: '',
  },
  {
    id: 'e4',
    title: 'Kaos Kaki',
    amount: 450,
    date: new Date(2021, 5, 12),
    total: '6',
    file: '',
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div className='test'>
      <div><NewExpense onAddExpense={addExpenseHandler} /></div>
      
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
