import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./index.module.css";
import Image from 'next/image'

export default function TopHeaderMennu() {

  return (
    <div className={styles.topNavContainer} id="showMobileMenu">
      <div className="container ">

        <div className="flexrow">
          <div className={styles.navbarLeft}>
            <ul>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">My Account</Link></li>
              <li><Link href="#">Featured Products</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
          <div className={styles.navbarRight}  >
            <ul>
              <li><Link href="#">Order Tracking</Link></li>
              <li><Link href="#">English </Link><i className="arrow down"></i></li>
              <li><Link href="#">USD </Link><i className="arrow down"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
