import Head from "next/head";
import styles from "../styles/Home.module.css";
import {Drawer} from "../components/Drawer";


const Articles = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
       <Drawer />
        </div>
        <div className={styles.content}>
          <p>block bientot disponible</p>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Articles;
