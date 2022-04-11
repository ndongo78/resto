import React from 'react'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {Drawer} from "../components/Drawer";
import {FormInput,Footer} from "../components";
import {BiMap} from 'react-icons/bi';
import {GiSmartphone} from 'react-icons/gi';
import {AiOutlineGlobal} from 'react-icons/ai';

const Parametre = () => {
  const [person, setPerson] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    heure: "",
  });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
       <Drawer />
        </div>
        <div className={styles.content}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <h2 style={{
            color:'blueviolet',
            margin:"25px",
            fontSize:"30px",
            fontStyle:"italic",
            }}> Pour nous contacter 
            </h2>
          <p
            style={{
              color:'blueviolet',
              margin:"25px",
              fontSize:"25px",
              fontStyle:"italic",
            }}>
          Veillez remplir le formulaire ci-dessous
          </p>
          <form >
            <div 
              style={{
                margin:"25px", 
                width: "300px"
              }}
            >
            <FormInput 
            label="Nom" 
            type="text" 
            placeholder="Dupont" 
            onChange={(e) => setPerson({ ...person, firstName: e.target.value })} 
            value={person.firstName}
             />
            </div>
             <div
             style={{
              margin:"25px", 
              width: "300px"
            }}
             >
             <FormInput 
            label="Prenom" 
            type="text" 
            placeholder="Jhon" 
            onChange={(e) => setPerson({ ...person, firstName: e.target.value })} 
            value={person.firstName}
             />
             </div>
             <div 
              style={{
                margin:"25px", 
                width: "300px"
              }}
            >
            <FormInput 
            label="Email" 
            type="email" 
            placeholder="Dupont@email.fr" 
            onChange={(e) => setPerson({ ...person, firstName: e.target.value })} 
            value={person.firstName}
             />
            </div>
            <div 
              style={{
                margin:"25px", 
                width: "300px"
              }}
            >
              <label 
              style={{
                color:'blueviolet',
                fontSize:"18px",
                fontStyle:"italic",
              }}
              >Votre message:</label>
              <textarea
               className='textareae'
                placeholder="Votre message"
                onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
                value={person.firstName}
              />
            </div>
              <div 
              style={{
                margin:"25px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
                <button type='submit' className='btn'>Envoyer</button>
              </div>
          </form>
          </div>
           <Footer />
        </div>
      </main>
    </div>
  );
};

export default Parametre;
