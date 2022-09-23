import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import TopHeaderMennu from './TopHeaderMenu/'
import HeaderSearch from './HeaderSearch/'
import HeaderRightBclok from "./HeaderRightInfo/"
import HeaderBtmPart from "./HeaderBottomPart";
// import styles from "./header.module.scss";
// import SearchIcon from "../icons/search";
// import CartIcon from "../icons/cart";
// import ArrowIcon from "../icons/arrow";
// import SearchFeature from 'components/ui/htmlInputElem/SearchFeature';

// import Cookies from "js-cookie";

export default function Header() {

  const toggleMenu = () => {
    var x = document.getElementById("showMobileMenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <>
      <div className="header">
        <div className="mobileMenu" onClick={toggleMenu}>
          <Link href="javascript:void(0);" className="icon" >
            <i className="fa fa-bars"></i>
          </Link>
        </div>

        <TopHeaderMennu />

         
        <div className="container ">
          <div className="flexrow midHeaderArea">
            <div className="logoArea">
              <Image
                src="/img/logo.png"
                alt=""
                width="140" height="30"
              />
            </div>

            <HeaderSearch />
            <HeaderRightBclok />
          </div>
        </div>

        <HeaderBtmPart />
      </div>
    </>
  );
}
