import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import styles from "./index.module.css";

export default function Category() {

    return (
        <section className={styles.categories}>
            <div className="container">
                <h2>Popular Product Categories</h2>
                <ul>
                    <li><Link href="#"><a>
                        <div className={styles.imgContainer}>
                        <Image
                            src="/img/ic8.png"
                            alt=""
                            width="40" height="40"
                        /></div>
                        Electronics Appliances</a></Link></li>
                    <li><Link href="#"><a>
                    <div className={styles.imgContainer}>
                        <Image

                            src="/img/el.png"
                            alt=""
                            width="40" height="40"
                        /></div>
                        Electronics Appliances</a></Link></li>
                    <li><Link href="#"><a>
                    <div className={styles.imgContainer}>
                        <Image

                            src="/img/dress.png"
                            alt=""
                            width="40" height="40"
                        /> </div>
                        Electronics Appliances</a></Link></li>
                    <li><Link href="#"><a>
                    <div className={styles.imgContainer}>
                        <Image
                            src="/img/ic8.png"
                            alt=""
                            width="40" height="40"
                        /> </div>
                        Electronics Appliances</a></Link></li>
                    <li><Link href="#"><a>
                    <div className={styles.imgContainer}>
                        
                         <Image
                        src="/img/ic8.png"
                        alt=""
                        width="40" height="40"
                    /> </div> Electronics Appliances</a></Link></li>
                    <li><Link href="#"><a>
                    <div className={styles.imgContainer}>

                        <Image
                            src="/img/ic8.png"
                            alt=""
                            width="40" height="40"
                        /> </div>  Electronics Appliances</a></Link></li>
                    <li><Link href="#"><a> 
                    <div className={styles.imgContainer}>
                        
                        <Image
                        src="/img/ic8.png"
                        alt=""
                        width="40" height="40"
                    /></div> Electronics Appliances</a></Link></li>
                    <li><Link href="#"><a> 
                    <div className={styles.imgContainer}>
                        
                        <Image
                        src="/img/ic8.png"
                        alt=""
                        width="40" height="40"
                    /> </div> Electronics Appliances</a></Link></li>
                </ul>
            </div>
        </section>
    );
}
