import Head from "next/head";
import styles from "../../styles/Home.module.css";
import {Drawer} from "../../components/Drawer";

const Parametre = () => {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <Drawer />
        <div className={styles.content}>
          <p>
            Details
          </p>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Parametre;
