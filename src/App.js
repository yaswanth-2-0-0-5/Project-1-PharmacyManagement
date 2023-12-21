import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Signup from './Components/Signup';
// import Home from './Components/Home';

function App() {
  return (
    <div >

      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/signup' element={<Signup></Signup>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
