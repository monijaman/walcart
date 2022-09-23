import React from "react";
// import styles from "./layout.module.scss";
import Header from "../Header";


export default function Layout({ children, noCategories }) {

  return (
    <>
        <Header />
          {children}
    </>
  );
}
