import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 3, 5),
    },
    {
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 13, 8),
    },
    {
      title: 'Internet Wifi',
      amount: 100,
      date: new Date(2022, 8, 9),
    },
    {
      title: 'New Desk',
      amount: 450,
      date: new Date(2022, 2, 11),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
