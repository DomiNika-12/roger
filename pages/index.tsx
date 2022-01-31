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
                <h1>
                    Hi!
                </h1>
            </div>
          </body>
      </div>

  )
}

export default Home
