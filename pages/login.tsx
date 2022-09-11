import Head from "next/head";
import styles from "../styles/Home.module.css";
import {Drawer} from "../components/Drawer";
import { FormInput } from "../components";
import { ChangeEvent } from "react";
import Typography from "@mui/material/Typography";


const Login = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
       <Drawer />
        </div>
        <div className={styles.content}>
          <div style={{
            display: 'flex',
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            width:"80%",
            margin:"auto"
          }}>
            <Typography variant="h3" sx={{color:"rgb(144, 29, 251)",p:2,m:3}}>Se connecter</Typography>
          <form style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent:"center",
            alignItems:"center"
          }}>
          <div
            style={{
              margin: "25px",
              width: "340px",
            }}
              >
                <FormInput
                  label="Email"
                  type="text"
                  placeholder="Dupont@yahoo.fr"
                  onChange={(e) =>console.log("first")}
                  value={""}
                />
              </div>
              <div
            style={{
              margin: "25px",
              width: "340px",
            }}
              >
                <FormInput
                  label="Mot de passe"
                  type="password"
                  placeholder="********"
                  onChange={(e) =>console.log("first")}
                  value={""}
                />
              </div>
              <div >
              <button type="submit" className="btn">
                  Se connecter
                </button>
              </div>
          </form>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Login;
