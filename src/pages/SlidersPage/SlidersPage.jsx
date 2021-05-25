import { SimpleSlider } from '../../components/SimpleSlider/SimpleSlider';
import styles from './SlidersPage.module.css';

export const SlidersPage = () => {
    return (
        <div className={styles.slidersPage}>
            <div className={styles.simpleSliderContainer}>
                <SimpleSlider />
            </div>
        </div>
    )
}