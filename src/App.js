import { Route, Routes } from 'react-router-dom';
import  './componente/formulario.css';


function App() {
  return (
    <>
    <BrowserRouter>   
        <Routes>
          
            <Route 
              path= '/' element= {<Formulario />} >
            </Route>
            
        </Routes>
        </BrowserRouter>
      
    </>
  );
}

export default App;
