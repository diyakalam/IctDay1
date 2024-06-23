import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dataadd from './components/Dataadd';
import View from './components/View';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path='/ad' element={<Dataadd data={{ename:"",eage:"",eposition:"",esalary:""}} method="post"/>}/>
       <Route path='/vw' element={<View/>}/>
      </Routes>
    </div>
  );
}

export default App;
