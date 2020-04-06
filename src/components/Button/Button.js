import React from 'react';
import styles from './Button.module.scss';

const Button = ({children, icon, ...props}) => (
    <button className={icon ? styles.buttonIcon : styles.button} {...props} >
        {children}
    </button>
);

export default Button;
