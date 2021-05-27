import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const LinksProperties = [
    {to: '/swipe', name: 'Swipe'},
    {to: '/forms', name: 'Forms'},
    {to: '/buttons', name: 'Buttons'},
    {to: '/sliders', name: 'Sliders'},
    {to: '/accordion', name: 'Accordion'}
]

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            {LinksProperties.map(link => <NavLink key={link.name}
                                                className={styles.navlink}
                                                activeClassName={styles.navlinkActive}
                                                to={link.to}>{link.name}</NavLink>)}
        </nav>
    )
}