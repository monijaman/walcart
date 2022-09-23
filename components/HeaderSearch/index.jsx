import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import styles from "./index.module.css";

export default function HeaderSearch() {

    return (

        <div className={styles.searchArea}>
            <div>
                <form action="" className="form">
                    <input type="text" placeholder="What do you want to order?" />
                    <button type="submit" value="Search" className="search-button">Search</button>
                </form>
            </div>
        </div>
    );
}
