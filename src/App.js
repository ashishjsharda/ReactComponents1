import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import {
    HomePage,
    CounterButtonPage,
    PeopleListPage,
    NotFoundPage,
    ProtectedPage,
    ControlledFormPage,
    UnControlledFormPage

} from './pages'
import {NavBar} from "./pages/NavBar";
import {FormsNavBar} from "./FormsNavBar";
function App() {
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <div className={"App-header"}>

                    <Link to="/">Home page</Link>
                    <Link to="/people-list">People list page</Link>
                    <Link to="/counter">Counter page</Link>
                    <Link to="/protected">Protected page</Link>
                    <Link to="/controlled-form">Controlled form page</Link>
                    <Link to="/uncontrolled-form">Uncontrolled form page</Link>
                    <Routes>
                        <Route path="/" exact element={<HomePage />} />
                        <Route path="/counter/" exact element={<CounterButtonPage />} />
                        <Route path="/people-list" exact element={<PeopleListPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                        <Route path="/protected" element={<ProtectedPage />} />
                        <Route path={"/controlled-form"} element={<ControlledFormPage />} />
                        <Route path={"/uncontrolled-form"} element={<UnControlledFormPage />} />

                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;