import "./componente/formulario.css"


const Formulario = () =>{
    return(
        <>

          <form action="" method="post">
            <div id="contenedor">
            <label htmlFor="">NOMBRE</label>
            
            <input className="inputFormulario cambioColor" type="text" name="" id="" placeholder="Escriba su nombre" />
           
            <label htmlFor="">EMAIL</label>
            
            <input className="inputFormulario cambioColor" type="email" name="EMAIL" id="" placeholder="Escriba su email" />
            
            <label htmlFor="">TELEFONO</label>
            
            <input className="inputFormulario cambioColor" type="tel" name="TELEFONO" id="" placeholder="Escriba su telefono"/>
            
            <label htmlFor="">DEJE SU COMENTARIO</label>
            
            <textarea className="cambioColor" name="" id="" cols="41" rows="6" placeholder="Comentarios"></textarea>
            
            <input className="enviar cambioColor" type="submit" value="ENVIAR" />
            </div>
          </form>


        </>
    )
};
export default Formulario;
