import React from "react";
import {FC} from "react";
import styles from "../styles/menu.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faPaw, faTrophy, faUser, faEnvelope} from "@fortawesome/free-solid-svg-icons";

export const Menu: FC = () => {
    return(
            <nav className={styles.menu}>
                <a className={styles.link} href={'/'}>
                    <FontAwesomeIcon icon={faHome}/>
                </a>
                <a className={styles.link} href={'/about'}>
                    <FontAwesomeIcon icon={faUser}/>
                </a>
                <a className={styles.link} href={'/roger'}>
                    <FontAwesomeIcon icon={faPaw} href={'/roger'}/>
                </a>
                <a className={styles.link} href={'/accomplishments'}>
                    <FontAwesomeIcon icon={faTrophy} href={'/accomplishments'}/>
                </a>
                <a className={styles.link} href="mailto:ewabobik@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope}/>
                </a>
            </nav>
    );
}

export default Menu;