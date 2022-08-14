import logo from './logo.svg';
import './App.css';
import {Greetings} from './Greetings';
import {PeopleList} from "./PeopleList";

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
        <Greetings name={"Ashish"} numberofMessages={0}></Greetings>
        <PeopleList people ={people} />
        <button onClick={() =>{alert('Hello World');}}>Click Me</button>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
