import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';

export const App = () => {
    return (
        <div className={styles.app}>
            <Navbar />
            <div className={styles.content}></div>
        </div>
    )
}