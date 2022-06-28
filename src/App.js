import './App.css';
import {Routes, Route , BrowserRouter} from 'react-router-dom';
import Trailer from './components/Trailer';
import Home from './components/home'
import { useState } from 'react';

function App() {
 const [id , setid] = useState();

  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/"  element={<Home setid = {setid}/>} />
        <Route path="/trailer"   element={<Trailer id={id}/>}/>
        </Routes>
    </BrowserRouter>
  );

}


export default App;
