import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Search from './Components/Search';
import Dogs from './Components/Dogs';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Search/>
      <Dogs />
    </React.Fragment>
  );
}

export default App;
//https://contactmentor.com/how-to-add-loading-spinner-react-js/