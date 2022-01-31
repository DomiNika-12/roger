import React from "react";
import {NextPage} from "next";
import {Menu} from "../components/menu";
import styles from "../styles/accomplishments.module.css";

const Accomplishments:NextPage = () =>{
    return(
        <div>
            <Menu/>
            <body>
                <div className={styles.wrapper}>
                    <h1>Accomplishments</h1>
                </div>
            </body>
        </div>
    );
}
export default Accomplishments;