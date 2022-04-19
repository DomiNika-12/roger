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
                <div className={styles.infoWrapper}>
                <img src={'./ewa.JPG'} className={styles.pic}/>
                <div className={styles.info}> My mom Ewa loves me very much. She takes me on the adventures and plays with me all the time!</div>
                <img src={'./ewa2.JPG'} className={styles.pic}/>
                </div>
            </div>
            </body>
        </div>
    );
}

export default About;