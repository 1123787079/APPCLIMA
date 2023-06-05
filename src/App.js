

import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

//importamos los campos creados

import Caja from './about';
import Contacto from './contact';
import Home from './home';
import NavBarEj from './NavBar';

function App() {
  return (

<div className="App">
      <BrowserRouter>
      <Routes>
        <Route path= '/' element={<NavBarEj/> }>
          <Route index element={ <Home /> } />
          <Route path='about' element={ <Caja /> } />
         <Route path='contact' element={ <Contacto /> } />

        </Route>
      </Routes>
      </BrowserRouter>


    </div>
  );
}


export default App;
