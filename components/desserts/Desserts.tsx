import React from 'react'
import styles from "./Dessert.module.css"
import {BarMenu} from "../BarMenu";
import {AiOutlinePlus ,AiOutlineArrowRight} from "react-icons/ai";
import {GoSettings} from "react-icons/go";
import {allProduct} from "../../constants/AllProduct";
import Image  from 'next/image' 
import Link from 'next/link';


export const Desserts = () => {
  return (
    <div className={styles.container}>
    <div className={styles.header}>
    <BarMenu title='Nos desserts' icon={<GoSettings />} text="voir plus" icon2={<AiOutlineArrowRight />}  />
         <div className={styles.containerItem}>
           {
            allProduct.map(item => (
                <div className={styles.item}>
                    <div className={styles.img}>
                        <Image src={item.image} alt={item.name} width={100} height={100}/>
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.name}>{item.name}</h3>
                         <p className={styles.desc}>{item.composition}</p>
                         <div>
                             Sauces:
                              {
                                item.sauces.map(sauce => (
                                  <span className={styles.sauce}> {sauce} </span>
                                ))
                              }
                            </div>
                         <div className={styles.footerCard}>
                        <p className={styles.price}>{item.price}€</p>
                         <button className={styles.btn}>
                           <Link href="/product/[id]" as={`/product/${item.id}`}>
                          <AiOutlinePlus size={25}  />
                            </Link>
                         </button>
                         </div>
                    </div>
                </div>
          ))
          }
      </div>
      </div>
</div>
  )
}
