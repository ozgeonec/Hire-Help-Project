import React from 'react';
import styles from './middleSection.module.css';

function MiddleSection() {

    return(
        <div className={styles.midSectionWrapper}>

            <div className={styles.navSection}>Navigation</div>

            <div className={styles.divisionSection}>
                <div className={styles.frequencySection}>

                </div>
                <div className={styles.priceSection}>

                </div>
            </div>
        </div>
    )
}


export default MiddleSection;