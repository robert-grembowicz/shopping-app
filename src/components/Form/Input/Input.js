import React from 'react';
import styles from './Input.module.scss';

const Input = ({name, value, onChange, label, ...props}) => (
    <div className={styles.inputHld}>
        <label htmlFor={name}>{label}</label>
        <input className={styles.input} name={name} value={value} onChange={onChange} {...props}/>
    </div>
);

export default Input;