import React from "react";
import type { NextPage } from 'next'
import {Menu} from "../components/menu";
import styles from "../styles/Home.module.css"
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faPaw, faUser, faHome } from '@fortawesome/free-solid-svg-icons'

const Home: NextPage = () => {
  return (
      <div>
          <Menu/>
          <body>
            <div className={styles.wrapper}>
                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <p>Hi!</p>
                        <p>{`I'm Roger and I'm 12 years old. I was born in a small village in Poland. I love swimming and playing with the tennis balls!`}</p>
                    </div>
                    <img className={styles.picture} src={'./homePage.jpg'}/>
                </div>
            </div>
          </body>
      </div>

  )
}

export default Home
