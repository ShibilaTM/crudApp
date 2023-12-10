
import { Route, Routes } from 'react-router-dom';
import './App.css';
import User from './components/getUser/User';
import Add from './components/addUser/Add';
import Edit from './components/updateUser/Edit';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<User/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
