import React from "react";
import {NextPage} from "next";
import {Menu} from "../components/menu";
import styles from "../styles/accomplishments.module.css";
import {Accomp} from "../components/accomp";

const Accomplishments:NextPage = () =>{
    return(
        <div>
            <Menu/>
            <body>
                <div className={styles.wrapper}>
                    <div className={styles.infoWrapper}>
                        <div className={styles.info}>
                            <p>{`Here are some the achievements I'm most proud of:`}</p>
                            <li>Polish Champion</li>
                            <li>tbd</li>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
}
export default Accomplishments;