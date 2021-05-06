import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink className={styles.navlink} activeClassName={styles.navlinkActive} to='/swipe'>Swipe</NavLink>
            <NavLink className={styles.navlink} activeClassName={styles.navlinkActive} to='/forms'>Forms</NavLink>
            <NavLink className={styles.navlink} activeClassName={styles.navlinkActive} to='/buttons'>Buttons</NavLink>
        </nav>
    )
}