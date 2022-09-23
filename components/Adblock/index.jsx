import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import styles from "./index.module.css";

export default function Adblock() {

  return (
    <div className={styles.addBlock}>
      <Link href="#" ><a>
        <div className={styles.imgContainer}>
      <Image
        src="/img/addBlock1.png"
        alt=""
        width="277" height="159"
      /></div></a></Link>
       <Link href="#"><a> <div className={styles.imgContainer}><Image
        src="/img/addBlock2.png"
        alt=""
        width="277" height="159"
      /></div></a></Link>

    </div>
  );
}
