import React from 'react';
import styles from './Heading.module.scss'

const Heading = ({children, isDark}) => (
    <h1 className={isDark ? `${styles.heading} ${styles.headingDark}` : styles.heading}>{children}</h1>
);

export default Heading;