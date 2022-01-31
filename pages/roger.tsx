import React from "react";
import {NextPage} from "next";
import {Menu} from "../components/menu";
import styles from "../styles/roger.module.css";

const Roger:NextPage = () => {
    return(
        <div>
            <Menu/>
            <body>
            <div className={styles.wrapper}>
                <h1>Gaudium Vitae Adsum</h1>
                <h3>Roger</h3>
                <img src={'./roger.jpg'} className={styles.pic}/>
            </div>
            </body>
        </div>
    );
}

export default Roger;