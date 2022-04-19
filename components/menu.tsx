import React from "react";
import {FC} from "react";
import styles from "../styles/menu.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PetsIcon from '@mui/icons-material/Pets';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EmailIcon from '@mui/icons-material/Email';

export const Menu: FC = () => {
    return(
            <nav className={styles.menu}>
                <a href={'/'} className={styles.linkWrap}>
                    <HomeIcon className={styles.links}/>
                </a>
                <a href={'/about'}>
                    <PersonIcon className={styles.links}/>
                </a>
                <a href={'/roger'}>
                    <PetsIcon className={styles.links}/>
                </a>
                <a href={'/accomplishments'}>
                    <EmojiEventsIcon className={styles.links}/>
                </a>
                <a href="mailto:ewabobik@gmail.com" target={"_blank"} rel={"noreferrer"}>
                    <EmailIcon className={styles.links}/>
                </a>
            </nav>
    );
}

export default Menu;