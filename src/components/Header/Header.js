import React from 'react';
import styles from './Header.module.scss';
import logoImage from '../../assets/img/react.png';
import Navigation from './Navigation/Navigation';
import Button from '../Button/Button';

const Header = ({openModal}) => (
    <header className={styles.wrapper}>
        <img src={logoImage} className={styles.logo} alt="logo" />
        <Navigation />
        <Button onClick={openModal}>
            add item
        </Button>
    </header>
);

export default Header;