import './App.css';
import React from 'react';
import Dogs from './Components/Dogs';
import DogDetail from './Components/DogDetail';
import { Route, Routes } from 'react-router-dom';
import Create from './Components/Create';
import LandingPage from './Components/LandingPage';
import AddedSuccessfully from './Components/AddedSuccessfully';
import Busqueda from './Components/Busqueda';

function App() {
  return (
    <div>
     
      <Routes>
        <Route path='/' element={<LandingPage/>} />        
        <Route path='/home' element={<Dogs/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/detail/:id' element={<DogDetail/> }/>
        <Route path='/added' element={<AddedSuccessfully/> }/>
        <Route path='/search' element={<Busqueda/>}/>


      </Routes>
    </div>
  );
}

export default App;
//https://contactmentor.com/how-to-add-loading-spinner-react-js/