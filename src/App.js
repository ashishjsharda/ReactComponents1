import logo from './logo.svg';
import './App.css';
import {Greetings} from './Greetings';
import {PeopleList} from "./PeopleList";
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
