import './App.css';
import {CounterButton} from "./CounterButton";


const people=[
  {
    name:'Ashish',
    age:40,
    hairColor:'brown'
  },{
    name:'Jack',
    age:42,
    hairColor:'black'

  }
]

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <CounterButton />
      </header>
    </div>
  );
}

export default App;
