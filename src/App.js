
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

//importamos los campos creados

import About from './Componentes/about';
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
          <Route path='about' element={ <About /> } />
         <Route path='contact' element={ <Contacto /> } />

        </Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
