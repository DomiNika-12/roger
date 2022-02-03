import React from "react";
import {FC} from "react";
import styles from "../styles/accomp.module.css";

export const Accomp : FC = () => {
    return(
      <div className={styles.wrapper}>

          <div className={styles.topHeader}>
              <h1> Nazwa Wystawy</h1>
              <p style={{margin: "auto"}}>Data</p>
          </div>
          <h3>Tytul</h3>
          <p> Cos o wystawie - opis </p>
          <img src={"/ewa.JPG"}/>
      </div>
    );
}