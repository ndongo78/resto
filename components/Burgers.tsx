import React from "react";
import styles from "./All.module.css";
import { BarMenu } from "./BarMenu";
import { AiOutlinePlus, AiOutlineArrowRight } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { Burger } from "../constants/Burger";
import Image from "next/image";
import Link from "next/link";
import { CardPlat } from "./CardPlat";

export const Burgers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BarMenu
          title="Nos burgers"
          icon={<GoSettings />}
          text="voir plus"
          icon2={<AiOutlineArrowRight />}
        />
        <div className={styles.containerItem}>
          {Burger.map((item) => <CardPlat  item={item} key={item.id} />)}
        </div>
      </div>
      {/* <article className={styles.articleItem}>
                <h3>article</h3>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>
                </div>
                <hr />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>
                </div>
           </article>
            */}
    </div>
  );
};
