import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import styles from "./index.module.css";

export default function HeaderRightBclok() {

  return (
    <div className={styles.infoArea}>
      <ul>
        <li>
          <div className={styles.accounArea}>
    <div className={styles.imgcontainer}></div>
            <Image 
              src="/img/account.png"
              alt=""
              width="0" height="50"
            />
            
            <div className={styles.accimg}>
              <span>Sign in</span>
              Account
            </div>
          </div>
        </li>
        <li>
          <span className={styles.alert}>1</span>
          <span className={styles.likeSign}></span>
       
         

        </li>
        <li>
          <span className={styles.alert}>1</span>
          <span className={styles.cartsign}></span>
         
        </li>
      </ul>
    </div>
  );
}
