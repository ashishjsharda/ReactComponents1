import './App.css';
import {CounterButton} from "./CounterButton";
import {CongratulationsMessage} from "./CongratulationsMessage";


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
          <CongratulationsMessage numberOfClicks={10} threshold={5}/>
      <CounterButton />
      </header>
    </div>
  );
}

export default App;
