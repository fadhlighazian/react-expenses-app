import './App.css';
import Expenses from './components/Expenses/Expenses';

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

  return (
    <div>
      <h2>Let's Get Started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
