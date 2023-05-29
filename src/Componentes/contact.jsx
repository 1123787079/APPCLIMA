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
      <h1 className='title-form'>Formulario de Contacto</h1>
      <form className='form-mail' onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name='user_name' />
        <hr />

        <label>Email</label>
        <input type="email" name='user_email' />
        <hr />

        <label>Message</label>
        <textarea name="user_message" id="" cols="30" rows="10"></textarea>
        <hr />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Mailer;