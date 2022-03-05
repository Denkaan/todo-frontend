import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/Main/Main';
import Login from './components/Login/Login'
import Header from './components/Header/Header'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/main" element={ 
          <><Header /><Main /></> } />
      </Routes>
    </Router>
  );
}

export default App;
