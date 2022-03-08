import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Signup from './components/Signup/Signup';
import Add from './components/Task/AddTask';
import Edit from './components/Task/EditTask';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/main" element={ 
          <><Header /><Main /></> } />
          <Route path="/signup" element={< Signup/>}/>
          <Route path="/edit" element={<><Header /><Edit /></>}/>
          <Route path="/add" element={<><Header /><Add /></>} />
      </Routes>
    </Router>
  );
}

export default App;
