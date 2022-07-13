import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Dogs from './Components/Dogs';
import DogDetail from './Components/DogDetail';
import { Route, Routes } from 'react-router-dom';
import Create from './Components/Create';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
       
        <Route path='/home' element={<Dogs/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/detail/:id' element={<DogDetail/> }/>
      </Routes>
    </div>
  );
}

export default App;
//https://contactmentor.com/how-to-add-loading-spinner-react-js/