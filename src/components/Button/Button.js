import React from 'react';
import styles from './Button.module.scss';

const Button = ({children, styleButton, ...props}) => {
    const buttonStyle = styleButton ? styles[styleButton] : styles.button;
    return (
        <button className={buttonStyle} {...props} >
            {children}
        </button>
    );
}

export default Button;
