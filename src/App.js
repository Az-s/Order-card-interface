import React , {useState} from 'react';
import './App.css';
import DrinksCard from './components/DrinksCard';
import Orders from './components/Orders';

const App = () => {
  const [sendOrder, setSendOrder] = useState({});

  return (
    <div className="App">
        <DrinksCard />
        <Orders />
    </div>
  );
}

export default App;
