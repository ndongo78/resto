import Head from "next/head";
import styles from "../styles/Home.module.css";
import {Drawer} from "../components/Drawer";


const Login = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
       <Drawer />
        </div>
        <div className={styles.content}>
          <p>Bientot disponible</p>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Login;
