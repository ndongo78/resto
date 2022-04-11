import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Drawer } from "../components/Drawer";
import Header from "../components/header/Header";
import Categories from "../components/Menu/Categories";
import { useState } from "react";
import {
  AllProduct,
    Burgers,
    Pizza,
    Salad,
    Desserts,
    Drink,
    Footer,
} from "../components";

const Home: NextPage = () => {
  const [isAll, setisAll] = useState(true);
  const [isBurger, setisBurger] = useState(false);
  const [isDrink, setisDrink] = useState(false);
  const [isDessert, setisDessert] = useState(false);
  const [isPizza, setisPizza] = useState(false);
  const [isSalad, setisSalad] = useState(false);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
        <Drawer />
        </div>
        <div className={styles.content}>
          <Header />
          <Categories 
          setisAll={setisAll}  
          setisBurger={setisBurger}
          setisDrink={setisDrink}
          setisDessert={setisDessert}
          setisPizza={setisPizza}
          setisSalad={setisSalad}
          isAll={isAll}
          isBurger={isBurger}
          isDrink={isDrink}
          isDessert={isDessert}
          isPizza={isPizza}
          isSalad={isSalad}
           />
          {
            isAll && <AllProduct  /> 
          }
          {
            isBurger && <Burgers  />
          }
          {
            isSalad && <Salad  />
          }
          {
            isPizza && <Pizza  />
          }
          {
            isDrink && <Drink  />
          }
          {
            isDessert && <Desserts  />
          }
         <Footer />
        </div>
        <div>
        </div>
      </main>

    </div>
  );
};

export default Home;
