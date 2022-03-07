import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Edit from './components/Task/EditTask';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/main" element={ 
          <><Header /><Main /></> } />
          <Route path="/signup" element={< Signup/>}/>
          <Route path="/edit" element={< Edit/>}/>
      </Routes>
    </Router>
  );
}

export default App;
