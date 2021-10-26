
import classes from './InputText.module.css';
import React from 'react';

const InputText = props => {
    return(
        <div className={classes.control}>
            <label htmlFor={props.name}>{props.label} </label>
            <i className={props.eyeOff} onClick={props.onclick}></i>
            <input type={props.type} id={props.id} name={props.name}  onChange={props.onChange}/>
            <div className={classes.error}>{props.errorMsg}</div>
        </div>
    );
};

export default InputText;

