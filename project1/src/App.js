import './Components.js/Login.css';
import './Components.js/Signup';
import Login from './Components.js/Login';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components.js/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

