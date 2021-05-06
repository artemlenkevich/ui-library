import { Route } from 'react-router-dom';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { SwipePage } from './pages/SwipePage';

export const App = () => {
    return (
        <div className={styles.app}>
            <Navbar />
            <div className={styles.content}>
                <Route for='/swipe'>
                    <SwipePage />
                </Route>
            </div>
        </div>
    )
}