import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink className={styles.navlink} to='/forms'>Forms</NavLink>
            <NavLink className={styles.navlink} to='/buttons'>Buttons</NavLink>
        </nav>
    )
}