import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import styles from "./index.module.css";

export default function Navigation() {

    return (
        <div className={styles.side}>
            <ul className={styles.verticalMenu} >
                <li className={styles.parent}><a href="#">
                <div className={styles.imageWrapper}>
                    <Image

                        src="/img/laptop.png"
                        alt=""
                        width="16" height="13"
                    />
                    </div>
                    Laptop and Desktop  <span className={styles.expand}>&#x203A;</span></a>
                    <ul className={styles.child}>
                        <li className={styles.parent}><a href="#">Laptop and Desktop <span className={styles.expand}>&#x203A;</span></a>
                            <ul className={styles.child} >
                                <li><a href="#">Home Living</a></li>
                                <li><a href="#">Book and Stationary </a></li>
                                <li><a href="#">Home Appliances </a></li>
                            </ul>
                        </li>
                        <li><a href="#">Home Living</a></li>
                        <li><a href="#">Book and Stationary</a></li>
                        <li><a href="#">Home Appliances</a></li>
                        <li><a href="#">Book and Stationary</a></li>
                        <li><a href="#">Home Appliances</a></li>
                        <li><a href="#">Electronics Appliances </a></li>
                        <li><a href="#">Fast Food and Snacks</a></li>

                    </ul>
                </li>

                <li> <a href="#">

                <div className={styles.imageWrapper}>
                    <Image
                        src="/img/homeliving.png"
                        alt=""
                        width="15" height="10"
                    />
                    </div>
                     Home Living</a> </li>
                <li> <a href="#">
                <div className={styles.imageWrapper}>
                    <Image

                        src="/img/oven.png"
                        alt=""
                        width="15" height="10"
                    />
                    </div>
                    Book and Stationary </a> </li>
                <li> <a href="#">

                <div className={styles.imageWrapper}>
                    <Image

                        src="/img/home.png"
                        alt=""
                        width="15" height="10"
                    /> </div>
                    Home Appliances</a> </li>
                <li> <a href="#">
                <div className={styles.imageWrapper}>

                    <Image
                        src="/img/book.png"
                        alt=""
                        width="15" height="10"
                    /> </div>
                    Book and Stationary</a> </li>
                <li> <a href="#">
                <div className={styles.imageWrapper}>
                    <Image

                        src="/img/mobile.png"
                        alt=""
                        width="15" height="10"
                    /> </div>
                    Electronics Appliances</a> </li>
                <li> <a href="#">
                <div className={styles.imageWrapper}>
                    <Image

                        src="/img/fastfood.png"
                        alt=""
                        width="15" height="10"
                    /> </div>
                    Fast Food and Snacks </a> </li>
                <li> <a href="#">
                <div className={styles.imageWrapper}>
                    <Image
                        src="/img/category.png"
                        alt=""
                        width="15" height="10"
                    /> </div>
                    More Categories</a> </li>
            </ul>
        </div>
    );
}
