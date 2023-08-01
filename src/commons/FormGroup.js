import React from 'react';

function FormGroup({ id, name, type, placeholder, rules, title, onNameChange }) {
    return (
        <div className="form-group">
            <label htmlFor={id} className="form-label">{title}</label>
            <input id={id} name={name} type={type} rules={rules} placeholder={placeholder}
                className="form-control" />
            <span className="form-message"></span>
        </div>
    );
}

export default FormGroup;