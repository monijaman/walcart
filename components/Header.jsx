import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import SearchIcon from "../icons/search";
import CartIcon from "../icons/cart";
import ArrowIcon from "../icons/arrow";
import SearchFeature from 'components/ui/htmlInputElem/SearchFeature';
 
import Cookies from "js-cookie";
 
export default function Header() {

  return (
    <nav className={styles.container}>
      
    This is header
    </nav>
  );
}
