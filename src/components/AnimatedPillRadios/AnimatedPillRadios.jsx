import React, { useEffect, useMemo, useState } from 'react';
import styles from './AnimatedPillRadios.module.css'

let properties = [
    {
      name: 'Hamburgers',
      value: 'ham',
      background: '#373e96'
    },
    {
      name: 'Hotdogs',
      value: 'hot',
      background: '#e75252'
    },
    {
      name: 'Salads',
      value: 'sal',
      background: '#2e8e65'
    },
  ];

export const AnimatedPillRadios = () => {
    const [highlightProperties, setHighlightProperties] = useState(null);
    const [activeToggle, setActiveToggle] = useState(properties[0].name);

    const toggles = properties.map(p => <Toggle key={p.name}
                                                name={p.name}
                                                background={p.background}
                                                isActive={p.name === activeToggle}
                                                setHighlightProperties={setHighlightProperties} 
                                                setActiveToggle={setActiveToggle}/>);

    return (
        <div className={styles.switcher}>
            <div className={styles.togglesContainer}>
                {toggles}
                {highlightProperties && <Highlight highlightProperties={highlightProperties}/>}
            </div>
        </div>
    )
}

const Toggle = ({name, background, isActive, setHighlightProperties, setActiveToggle}) => {
    const label = useMemo(() => React.createRef(), [])

    useEffect(() => {
        if (isActive) {
            const {offsetLeft: left, offsetTop: top, offsetWidth: width, offsetHeight: height} = label.current;
            setHighlightProperties({left, top, width, height, backgroundColor: background})
        }
    }, [isActive, label, background, setHighlightProperties])

    const labelClassName = isActive ? styles.radioLabel + ' ' + styles.radioLabelActive : styles.radioLabel ;

    return (
        <label ref={label} className={labelClassName} onClick={() => setActiveToggle(name)}>
            <input className={styles.radioInput} type='radio' value={name}/>
            {name}
        </label>
    )
}

const Highlight = ({highlightProperties}) => {
        return <div className={styles.highlight} style={{...highlightProperties}}></div>
}