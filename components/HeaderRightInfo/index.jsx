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

            <Image 
              src="/img/account.png"
              alt=""
              width="50" height="50"
            />
            <div className={styles.accimg}>
              <span>Sign in</span>
              Account
            </div>
          </div>
        </li>
        <li>
          <span className={styles.alert}>1</span>
          <Image

            src="/img/lovesign.png"
            alt=""
            width="30" height="30"
          />

        </li>
        <li>
          <span className={styles.alert}>1</span>
          <Image

            src="/img/cartsign.png"
            alt=""
            width="30" height="30"
          />
        </li>
      </ul>
    </div>
  );
}
