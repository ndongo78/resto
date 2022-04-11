import React from "react";
import NavBar from "../nav/NavBar";
import styles from "./Layout.module.css";
interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      {/* <NavBar /> */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
