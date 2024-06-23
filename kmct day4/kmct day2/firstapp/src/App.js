import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Listmap from './components/Listmap';
import Api from './components/Api';
import Sampleuse from './components/Sampleuse';
import Cardget from './components/Cardget';

function App() {
  return (
    <div className="App">
  
     <Navbar/>
     <Routes>
       <Route path='/' element={<Register/>}/>
       <Route path='/sin' element={<Signup/>}/>
       <Route path='/sb' element={<StateBasics/>}/>
       <Route path='/co' element={<Counter/>}/>
       <Route path='/mp' element={<Listmap/>}/>
       <Route path='/ap' element={<Api/>}/>
       <Route path='/sa' element={<Sampleuse/>}/>
       <Route path='/cg' element={<Cardget/>}/>


     </Routes>
     
     

    </div>
  );
}

export default App;
