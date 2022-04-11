import  React from 'react';
import styles from "../styles/Home.module.css";
import {Drawer} from "../components/Drawer";
import {FormInput , Footer} from "../components";

const Menu = () => {
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
            }}> Pour reserver une table </h2>
          <p
            style={{
              color:'blueviolet',
              margin:"25px",
              fontSize:"25px",
              fontStyle:"italic",
            }}>
          Veillez remplir le formulaire ci-dessous</p>
          <form >
            <div 
             className='input-field'
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
             className='input-field'
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
             className='input-field'
             >
             <FormInput 
            label="Email" 
            type="email" 
            placeholder="Jhon@gmail.com" 
            onChange={(e) => setPerson({ ...person, firstName: e.target.value })} 
            value={person.firstName}
             />
             </div>
             <div
             className='input-field'
             >
             <FormInput 
            label="Téléphone" 
            type="number" 
            placeholder="066778899" 
            onChange={(e) => setPerson({ ...person, firstName: e.target.value })} 
            value={person.firstName}
             />
             </div>
             <div
             className='input-field'
             >
             <FormInput 
            label="Date" 
            type="date" 
            placeholder="entrer votre nom" 
            onChange={(e) => setPerson({ ...person, firstName: e.target.value })} 
            value={person.firstName}
             />
             </div>
             <div
             className='input-field'
             >
             <FormInput 
            label="Heure" 
            type="time" 
            placeholder="entrer votre nom" 
            onChange={(e) => setPerson({ ...person, firstName: e.target.value })} 
            value={person.firstName}
             />
             </div>
             <div
             className='input-field'
             >
               <select name="service" id="" className='select'>
                  <option value="" className='options'>Choisir un service</option>
                  <option value="midi" className='options'>Service midi</option>
                  <option value="soir" className='options'>Service soir</option>
               </select>
             </div>
             <div
             className='input-field'
             >
             <FormInput 
            label="Nombre d'adultes" 
            type="number" 
            placeholder="0" 
            onChange={(e) => setPerson({ ...person, firstName: e.target.value })} 
            value={person.firstName}
             />
             </div>
             <div
             className='input-field'
             >
             <FormInput 
            label="Nombre d'enfants" 
            type="number" 
            placeholder="0" 
            onChange={(e) => setPerson({ ...person, firstName: e.target.value })} 
            value={person.firstName}
             />
             </div>
             <div
              style={{
                margin:"25px",
                display: 'flex',
                justifyContent:"space-evenly",
              }}
             >
               <label className='labels'>Térasse
               <input type="checkbox" name="salle" id="" className='check' />
               </label>
               <label className='labels'>Salle
               <input type="checkbox" name="terrase" id="" className='check' />
               </label>
             </div>
              <div 
              style={{
                margin:"25px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
                <button type='submit' className='btn'>Réserver</button>
              </div>
          </form>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Menu;
