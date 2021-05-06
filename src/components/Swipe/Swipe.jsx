import styles from './Swipe.module.css';

export const SwipeBoard = () => {
    return (
        <div className={styles.swipeBoard}>
            <SwipeContainer />
        </div>
    )
}

const SwipeContainer = () => {
    return (
        <div className={styles.swipeContainer}>
            <div className={styles.swipeItem}></div>
        </div>
    )
}