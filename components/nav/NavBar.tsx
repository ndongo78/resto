import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from './Nav.module.css'

const NavBar = () => {
  return (
      <nav className={styles.nav}>
        <div className={styles.logo_container}>
          <Link  href="/">
            <a className="navbar-item">
            {/* <Image
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            /> */}
             Logo
            </a>
          </Link>
        </div>
        <div className={styles.nav_links}>
            <div className="navbar-start">
                <Link href="/">
                    <a className="navbar-item">Accueil</a>
                </Link>
                <Link href="/about">
                    <a className="navbar-item">Menus</a>
                </Link>
                <Link href="/about">
                    <a className="navbar-item">About</a>
                </Link>
                <Link href="/contact">
                    <a className="navbar-item">Contact</a>
                </Link>
            </div>
        </div>
        <div className={styles.user_compte}>
            <div>
                <input className="input" type="text" placeholder="Search" />
                 <span>Search</span>
             </div>
               <Link  href="/login">
                    <a className="navbar-item">Login</a>
                </Link>
        </div>
        <div>
            <Link href="/reservation">
                <a className="navbar-item">Réserver une table</a>
            </Link>
        </div>
      </nav>
  
  );
};

export default NavBar;
