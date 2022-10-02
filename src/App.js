import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import {
    HomePage,
    CounterButtonPage,
    PeopleListPage,

} from './pages'
function App() {
    return (
        <div className="App">
            <Router>
                <Link to="/">Home page</Link>
                <Link to="/people-list">People list page</Link>
                <Link to="/counter">Counter page</Link>
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/counter" exact element={<CounterButtonPage />} />
                    <Route path="/people-list" exact element={<PeopleListPage />} />
                    
                </Routes>
            </Router>
        </div>
    );
}

export default App;