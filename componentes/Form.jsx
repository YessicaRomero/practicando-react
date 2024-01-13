import { useState}  from 'react';

function Formulario(){
  const[form, setForm] = useState({});
  const handleChange = e =>{
    setForm({
      ...form, 
      [e.target.name]: e.target.value,
    }
      )
  }
 
  return( 
  <div className='form'>
    <h2>Contanos quien es tu jugador preferido</h2>
  <form onSubmit={handleChange}>
 
  
    <label htmlFor="nombre">Nombre: </label>
    <input type="text" id="nombre" name="nombre" value={form.nombre}  onChange={handleChange}
    />
 
  <p>Describe su posicion: </p>
  
    <input type="radio" id="delantero" name="posicion" value={handleChange}
    defaultChecked
    />
    <label htmlFor="delantero">Delantero</label>
    <input type="radio" id="arquero" name="posicion" value={handleChange} 
    defaultChecked
    />
    <label htmlFor="arquero">Arquero</label>
     <input type="radio" id="defensor" name="posicion" value={handleChange}
    defaultChecked
    />
       <label htmlFor="defensor">Defensor</label>
       </form>
       </div>
  )
}
      
 export default Formulario;
      
  
      
