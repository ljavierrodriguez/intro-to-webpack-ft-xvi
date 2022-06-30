import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, id, name, placeholder, value, style, className }) {
    return (
        <>
            <label>{name}: </label> <br />
            <input type={type} id={id} name={name} placeholder={placeholder} defaultValue={value} style={style} className={className} />  <br />
        </>
    )
}

Input.defaultProps = {
    type: 'text',
    id: 'input-id',
    name: 'input-name',
    placeholder: 'texto alternativo',
    value: '',
    style: {},
    className: ''
}

Input.propTypes = {
    type: PropTypes.string,
    style: PropTypes.object.isRequired
}



export function App() {
    const myStyle = {
        border: 0,
        borderBottom: '1px solid gray',
        marginBottom: '10px'
    }
    return (
        <>
            <h1>Hola Mundo</h1>
            <h3>desde React</h3>
            <Input type={"email"} name={"email"} placeholder={"john.doe@example.com"} id={"email"} value={"lrodriguez@4geeks.co"} style={myStyle} className="prueba" />
            <Input type={"password"} name={"password"}  id={"password"} style={myStyle} />
        </>
    )
}

//export default App;