import Button from './Button.js';
import './App.css';
import ModeToggler from './ModeToggler.js';
import ModeTogglerStateful from './ModeTogglerStateful.js';

function App() {
  return (
    <div >
      <div><Button/></div>      
      <hr/>
      <div><ModeToggler/></div>
      <div><ModeTogglerStateful/></div>
    </div>
  );
}

export default App;
