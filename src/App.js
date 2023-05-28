import { Route, Routes } from 'react-router-dom';
import formulario from "./componente/formulario";
import "./src/componente/formulario.css"

//import NavBar from './componente/Navbar';
//import Contactanos from './componente/Contactanos';
//import Footer from "./componente/Footer";

//import Home from "./secciones/Home";

//import Lista from "./secciones/Lista";


function App() {
  return (
    <>
   
        <Routes>
            <Route 
              path="/" 
              element={<Home/>} >
            </Route>
            <Route 
              path="/contactanos" 
              element={<Lista/>} >
            </Route>
            <Route 
              path="/about" 
              element={<Contactanos />} >
            </Route>
            <Route 
              path="/formulario" 
              element={<Formulario />} >
            </Route>
            <Route 
              path="/api" 
              element={<Api />} >
            </Route>
            
        </Routes>
      <Footer></Footer>  

    </>
  );
}

export default App;
