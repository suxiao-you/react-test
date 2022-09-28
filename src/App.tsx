
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Login} from './login'
import {Current} from '../src/pages/current'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Current />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
