import React, {useState} from 'react';
import styles from './serviceCard.module.css';


function ServiceCard({data}) {

    const [showDesc, setShowDesc] = useState(false);
    return (
        <div className={styles.cardWrapper}>

            <div className={styles.card} onClick={() => setShowDesc(true)}>
                <p className={styles.title}>{data.title}</p>
                <p className={styles.fromPart}>FROM</p>
                <div className={styles.pricePart}>
                    <p className={styles.price}>{data.price}</p>
                    {data.discount !== null &&
                    <div className={styles.sale}>
                        <p>{data.discount}</p>
                    </div>
                    }


                </div>
            </div>
            {showDesc &&
            <div className={styles.descWrapper}>
                <div className={styles.properties}>
                    4 visits per month
                    Same cleaner guaranteed
                    Monthly contract
                </div>
                <p className={styles.lightDesc}></p>
                <p className={styles.saleDesc}>SAVE UP TO 32 SAR</p>
            </div>
            }

        </div>
    )
}


export default ServiceCard;