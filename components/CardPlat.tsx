import React from 'react'
import Image from "next/image";
import { BarMenu } from './BarMenu';
import styles from "./All.module.css";
import { GoSettings } from "react-icons/go";
import { AiOutlinePlus, AiOutlineArrowRight } from "react-icons/ai";
import Link from 'next/link';
import {SingleProduct} from "../types"


export const CardPlat = ({item:{id,
  name,
  price,
  composition,
  image,
  sauces}
}:{
  item:{
    id: number;
  name: string;
  price: number;
  composition: string;
  image: string;
  sauces: string[];
  }
}) => {
    return (
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.containerItem}>
              <div style={{cursor:"pointer"}}>
              <Link href={`/product/${id}`}>
                <div key={id} className="item">
                  
                    <h3 className={styles.name}>{name}</h3>
                  <div className={styles.info}>
                    <div className={styles.img}>
                    <Image
                      src={image}
                      alt={name}
                      width={200}
                      height={200}
                    />
                  </div>
                    {/* <p className={styles.desc}>{item.composition}</p> */}
                    {/* <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <span style={{ color: "blue" }}>Sauces:</span>
                      {item.sauces.map((sauce) => (
                        <span key={sauce} className={styles.sauce}>
                          {" "}
                          {sauce}{" "}
                        </span>
                      ))}
                    </div> */}
                    <div className={styles.footerCard}>
                      {/* <p className={styles.price}>{item.price}€</p>
                      <button
                        className={styles.btn}
                        onClick={() => addToCart(item)}
                      >
                        <AiOutlinePlus size={25} />
                      </button> */}
                    </div>
                  </div>
                </div>
                  </Link>
                  </div>
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
}

