import Head from "next/head";
import styles from "../styles/Home.module.css";
import {Drawer} from "../components/Drawer";

const Profil = () => {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <Drawer />
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            profil
          </p>
        </div>
      </main>

    </div>
  );
};

export default Profil;
