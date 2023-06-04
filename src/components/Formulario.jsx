import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Formulario = () => {
const [nombre, setNombre] = useState('');
const [correo, setCorreo] = useState('');
const [sugerencias, setSugerencias] = useState('');

const handleNombreChange = (event) => {
setNombre(event.target.value);
};

const handleCorreoChange = (event) => {
setCorreo(event.target.value);
};

const handleSugerenciasChange = (event) => {
setSugerencias(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault(); // Prevenir que el formulario envíe una solicitud
console.log(`Nombre: ${nombre}, Correo electrónico: ${correo}, Sugerencias: ${sugerencias}`);
};

return (
<Container>
<Form onSubmit={handleSubmit}>
<FormGroup>
<Label for="nombre">Nombre:</Label>
<Input type="text" name="nombre" id="nombre" value={nombre} onChange={handleNombreChange} placeholder="Ingrese su nombre" />
</FormGroup>
<FormGroup>
<Label for="correo">Correo electrónico:</Label>
<Input type="email" name="correo" id="correo" value={correo} onChange={handleCorreoChange} placeholder="Ingrese su correo electrónico" />
</FormGroup>
<FormGroup>
<Label for="sugerencias">Sugerencias:</Label>
<Input type="textarea" name="sugerencias" id="sugerencias" value={sugerencias} onChange={handleSugerenciasChange} placeholder="Escriba aquí sus sugerencias" />
</FormGroup>
<Button color="primary" type="submit">Enviar</Button>
</Form>
</Container>
);
};

export default Formulario;