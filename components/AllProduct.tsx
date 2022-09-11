import React, { useContext } from "react";
import styles from "./All.module.css";
import { GoSettings } from "react-icons/go";
import { allProduct } from "../constants/AllProduct";
import Image from "next/image";
import { AiOutlinePlus, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { BarMenu } from "./BarMenu";
import { CartContext } from "../context/cart";
import { CardPlat } from "./CardPlat";

export const AllProduct = () => {
  const { cart, total, totalPrice, setTotal, setTotalPrice, addToCart } =
    useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BarMenu
          title="Tous nos plats"
          icon={<GoSettings />}
          text="voir plus"
          icon2={<AiOutlineArrowRight />}
        />
        <div className={styles.containerItem}>
          {allProduct.map((item) =><CardPlat item={item} /> )}
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
