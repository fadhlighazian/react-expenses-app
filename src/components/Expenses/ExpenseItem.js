// 1: to use state, import it first
// import { useState } from 'react';
import Card from '../UI/Card';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  // 2: call useState to use it (and useState always return an ARRAY)
  // 3: we intialize Default State Value with => props.title
  // 4: the 1st variable (title) is the Value Itself
  // 4: the 2nd variable (setTitle) is the Updating Function
  // 5: using destructuring array to store both elements to separate variable
  // const [title, setTitle] = useState(props.title);
  // console.log('ExpenseItem evaluated by React');

  // const clickHandler = () => {
  //   setTitle('Updated!');
  //   console.log(title);
  // };

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
