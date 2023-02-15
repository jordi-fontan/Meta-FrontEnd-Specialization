import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Bag from './Bag';
import Apples from './Apples.js';
import Pears from './Pears.js';

function App() {
  return (
    <div className="App">
      <Header firstName='Pepito' greeting='Howdy'/> 
      <Bag>
        <Apples number='5' color='green'></Apples>
        <Apples number='2' color='red'></Apples>
        <Apples number='51' color='pink'></Apples>
        <Pears friend='Colombian Friend'></Pears>
      </Bag>
    </div>
  );
}

export default App;
