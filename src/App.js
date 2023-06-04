
import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

//importamos los campos creados

import Caja from './Componentes/about';
import Contacto from './Componentes/contact';
import Home from './Componentes/home';
import NavBarEj from './Componentes/NavBar';

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
