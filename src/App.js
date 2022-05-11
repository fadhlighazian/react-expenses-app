import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2019, 3, 5),
  },
  {
    id: 'e2',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 11, 8),
  },
  {
    id: 'e3',
    title: 'Internet Wifi',
    amount: 100,
    date: new Date(2020, 8, 9),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2022, 2, 11),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log('In App.js');
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
