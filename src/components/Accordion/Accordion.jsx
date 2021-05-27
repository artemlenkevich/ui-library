import { useState } from 'react';
import styles from './Accordion.module.css';
import control from './assets/plus.png'

const tabsProperties = [
    {
        header: 'Facts and knowledge about COVID-19',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque omnis provident quaerat, vero accusamus itaque consectetur dolore alias cum magni corporis laboriosam dolorem aliquam. Expedita aspernatur omnis natus voluptatum!'
    },
    {
        header: 'Facts and knowledge about COVID-19',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque omnis provident quaerat, vero accusamus itaque consectetur dolore alias cum magni corporis laboriosam dolorem aliquam. Expedita aspernatur omnis natus voluptatum!'
    },
    {
        header: 'Facts and knowledge about COVID-19',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque omnis provident quaerat, vero accusamus itaque consectetur dolore alias cum magni corporis laboriosam dolorem aliquam. Expedita aspernatur omnis natus voluptatum!'
    },
]

export const Accordion = () => {
    const tabsList = tabsProperties.map((p, i) => <Tab key={i} header={p.header} body={p.body}/>)

    return (
        <div className={styles.Accordion}>
            <h3 className={styles.title}>
                Coronavirus - Facts, advice
                and measures
            </h3>
            <div className={styles.tabsContainer}>
                {tabsList}
            </div>
        </div>
    )
}

const Tab = (props) => {
    const [isHidden, hide] = useState(true);

    const onTabClick = () => {
        hide(!isHidden)
    }

    return (
        <div className={styles.tabWrapper}>
            <div data-hidden={isHidden} className={styles.tab} onClick={onTabClick}>
                <div className={styles.tabHead}>
                    <img className={styles.tabControl} src={control} alt="tab control" />
                    <h4 className={styles.tabHeader}>{props.header}</h4>
                </div>
                <div className={styles.tabBody}>
                    {props.body}
                </div>
            </div>
        </div>
    )
}