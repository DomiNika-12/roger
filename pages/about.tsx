import React from "react";
import {NextPage} from "next";
import {Menu} from "../components/menu";
import styles from "../styles/about.module.css";

const About:NextPage = () => {
    return(
        <div>
            <Menu/>
            <body>
            <div className={styles.wrapper}>
                <h1>Proud Owner</h1>
                <h3>Ewa Bobik</h3>
                <img src={'./ewa.JPG'} className={styles.pic}/>
                <img src={'./ewa2.JPG'} className={styles.pic}/>
            </div>
            </body>
        </div>
    );
}

export default About;