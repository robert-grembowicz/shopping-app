import React from 'react';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav className={styles.navHeader}>
        <ul className={styles.nav}>

            <li className={styles.navItem}>
                <NavLink exact 
                activeClassName={styles.navItemLink_active}
                className={styles.navItemLink}
                to="/" >
                    products list
                </NavLink>
            </li>

            <li className={styles.navItem}>
                <NavLink exact 
                activeClassName={styles.navItemLinkActive}
                className={styles.navItemLink}
                to="/shopping" >
                    shopping list
                </NavLink>
            </li>
            
            <li className={styles.navItem}>
                <NavLink exact 
                activeClassName={styles.navItemLinkActive}
                className={styles.navItemLink}
                to="/settings" >
                    settings
                </NavLink>
            </li>

        </ul>
    </nav>
);

export default Navigation;