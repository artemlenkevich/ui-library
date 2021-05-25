import styles from './SimpleSlider.module.css';
import prev from './assets/prev.png';
import next from './assets/next.png';
import { useState } from 'react';

const urls = [
    '/img/simple-slider-images/01.jpg',
    '/img/simple-slider-images/02.jpg',
    '/img/simple-slider-images/03.jpg',
    '/img/simple-slider-images/04.jpg',
    '/img/simple-slider-images/05.jpg',
    '/img/simple-slider-images/06.jpg',
    '/img/simple-slider-images/07.jpg',
    '/img/simple-slider-images/08.jpg'
]

export const SimpleSlider = () => {
    const slides = urls.map((url, i) => <img key={i} className={styles.slide} src={url} alt='slide' />)

    let [translateValue, setTranslateValue] = useState(0);

    const onClickPrev = () => {
        setTranslateValue(translateValue === 0 ? -750 : translateValue + 150)
    }

    const onClickNext = () => {
        setTranslateValue(translateValue === -750 ? 0 : translateValue - 150)
    }

    return (
        <div className={styles.simpleSlider}>
            <div style={{transform: `translate(${translateValue}px)`}} className={styles.slidesContainer}>
                {slides}
            </div>
            <img className={styles.controls} onClick={onClickPrev} src={prev} alt='prev' />
            <img className={styles.controls} onClick={onClickNext} src={next} alt='next' />
        </div>
    )
}