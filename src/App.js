import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';

function Input({ type, id, name, placeholder, value, style, className }) {
    return (
        <>
            <div className="form-group mb-3">
                <label className="form-label">{name}: </label>
                <input type={type} id={id} name={name} placeholder={placeholder} defaultValue={value} style={style} className={className} />
            </div>
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
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='text-center'><i className="fa-brands fa-react fa-3x"></i></h1>
                        <h1>Hola Mundo</h1>
                        <h3>desde React</h3>
                        <Input type={"email"} name={"email"} placeholder={"john.doe@example.com"} id={"email"} value={"lrodriguez@4geeks.co"} style={myStyle} className="form-control" />
                        <Input type={"password"} name={"password"} id={"password"} style={myStyle} className="form-control"/>
                    </div>
                </div>
            </div>

        </>
    )
}

//export default App;