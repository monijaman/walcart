import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import styles from "./index.module.css";

export default function HeaderBtmPart() {

    return (
        <div className="container">
        <div className={styles.headLastBlock}>
            <div className={styles.topCategories}>
                <div className={styles.btnTopCat} > Top Categories 
                <span className={styles.triangleDown} > </span></div>
            </div>

            <div className={styles.navbar}>
                <Link href="#"><a> Exclusive Deals <span className={styles.arrowDown}></span> </a></Link>
                <Link href="#"><a>Smart Watches <span className={styles.arrowDown}></span></a></Link>
                <Link href="#"><a>Cell Phone</a></Link>
                <Link href="#"><a>Headphone</a></Link>
            </div>

            <div className={styles.accounArea}>
                <Image
                    src="/img/screenshot.png"
                    alt=""
                    width="28" height="28"
                />
                <div>
                    <span>Only this weekend</span>
                    <p> Super Discount <span className={styles.arrowDown}></span></p>

                </div>
            </div>
            </div>
        </div>
    );
}
