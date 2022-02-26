import React from 'react';
import styles from './middleSection.module.css';
import ServiceCard from "../ServiceCard/serviceCard";
import BoldText from "../Text/BoldText/boldText";
import {dummyServiceData} from "../../DummyData";

function MiddleSection() {

    return (
        <div className={styles.midSectionWrapper}>

            <div className={styles.navSection}>Navigation</div>

            <div className={styles.divisionSection}>
                <div className={styles.frequencySection}>

                    <BoldText/>
                    <div className={styles.serviceSec}>
                        {dummyServiceData.map((data) => {
                            return (
                                <ServiceCard data={data}/>
                            )

                        })}
                    </div>
                </div>
                <div className={styles.priceSection}>

                </div>
            </div>
        </div>
    )
}


export default MiddleSection;