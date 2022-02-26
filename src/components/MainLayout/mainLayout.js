import React from 'react';
import styles from './mainLayout.module.css';
import Header from "../Header/header";
import MiddleSection from "../MiddleSection/middleSection";
import Footer from "../Footer/footer";

function MainLayout() {

    return(
        <div className={styles.mainLayout}>
            <Header/>
            <MiddleSection/>
            <Footer/>
        </div>
    )
}


export default MainLayout;