import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { SlidersPage } from './pages/SlidersPage/SlidersPage';
import { SwipePage } from './pages/SwipePage/SwipePage';

export const App = () => {
    return (
        <div className={styles.app}>
            <Navbar />
            <div className={styles.content}>
                <Switch>
                    <Route path='/swipe' component={SwipePage} />
                    <Route path='/sliders' component={SlidersPage} />
                </Switch>
            </div>
        </div>
    )
}