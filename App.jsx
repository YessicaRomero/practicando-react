import { useState}  from 'react';
import Example from './componentes/carrusel'
import './App.css'
import Formulario from './componentes/form';



function App() {
const suma = 0;

  return (
    <div className='container'>
      <h1>Campeones del Mundo</h1>
    
        <Example />
        <hr />
   <Formulario />
   <hr />
   <button onClick={suma+1}>Sumar</button>
    </div>
  )
}

export default App
