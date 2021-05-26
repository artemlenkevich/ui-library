import { useState } from 'react';
import styles from './AnimatedPillRadios.module.css'

let properties = [
    'hamburgers',
    'hotdogs',
    'salads'
]

export const AnimatedPillRadios = () => {
    const [highlightProperties, setHighlightProperties] = useState(null);
    const toggles = properties.map(p => <Toggle setHighlightProperties={setHighlightProperties} name={p}/>);

    return (
        <div className={styles.switcher}>
            <div className={styles.togglesContainer}>
                {toggles}
                <Highlight highlightProperties={highlightProperties}/>
            </div>
        </div>
    )
}

const Toggle = ({name, setHighlightProperties}) => {
    const onToggleClick = (e) => {
        const {offsetLeft: left, offsetTop: top, offsetWidth: width, offsetHeight: height} = e.currentTarget;
        setHighlightProperties({left, top, width, height})
    }
    return (
        <label className={styles.radioLabel} onClick={onToggleClick}>
            <input className={styles.radioInput} type='radio' value={name}/>
            {name}
        </label>
    )
}

const Highlight = ({highlightProperties}) => {
    if (!highlightProperties) {
        return <div className={styles.highlight}></div>
    } else {
        const {left, top, width, height} = highlightProperties;
        const stylesObj = {left, top, width, height}
        return <div className={styles.highlight} style={stylesObj}></div>
    }

}