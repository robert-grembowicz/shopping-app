import React from 'react';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import AppContext from '../../../context';

const Navigation = () => (
    <AppContext.Consumer>
        {(context) => (
        <nav className={styles.navHeader}>
            <ul className={styles.nav}>

                <li className={styles.navItem}>
                    <NavLink exact 
                    activeClassName={styles.navItemLink_active}
                    className={context.isDark ? styles.navItemLinkDarkMode : styles.navItemLink}
                    to="/" >
                        products list
                    </NavLink>
                </li>

                <li className={styles.navItem}>
                    <NavLink exact 
                    activeClassName={styles.navItemLinkActive}
                    className={context.isDark ? styles.navItemLinkDarkMode : styles.navItemLink}
                    to="/shopping" >
                        shopping list
                    </NavLink>
                </li>
                
                <li className={styles.navItem}>
                    <NavLink exact 
                    activeClassName={styles.navItemLinkActive}
                    className={context.isDark ? styles.navItemLinkDarkMode : styles.navItemLink}
                    to="/settings" >
                        settings
                    </NavLink>
                </li>

            </ul>
        </nav>
        )}
    </AppContext.Consumer>
);

export default Navigation;