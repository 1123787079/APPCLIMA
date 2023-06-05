import React from 'react';
import emailjs from '@emailjs/browser';

export const Mailer = () => {

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_b6njbpr','template_eqvs908',event.target,'mi74cjFYq7e4OFVP6')
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <div className='div-form'>
      <h1 className='title-form'>Tú Opinión nos interesa</h1>
      <form className='form-mail' onSubmit={sendEmail}>
        <label>Nombre</label>
        <br></br><input type="text" name='user_name' />
        <hr />
        <label>Apellido</label>
        <br></br><input type="text" name='user_name' />
        <hr />
        <label>E-mail</label>
        <br></br><input type="email" name='user_email' />
        <hr />

        <label>Mensaje</label>
        <textarea name="user_message" id="" cols="30" rows="10"></textarea>
        <hr />
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Mailer;