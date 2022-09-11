import React from 'react'
import styles from "./All.module.css";
import {BarMenu} from "./BarMenu";
import {AiOutlinePlus ,AiOutlineArrowRight} from "react-icons/ai";
import {GoSettings} from "react-icons/go";
import {allProduct} from "../constants/AllProduct";
import Image  from 'next/image' 
import Link from 'next/link';
import { CardPlat } from './CardPlat';


export const Drink = () => {
  return (
    <div className={styles.container}>
    <div className={styles.header}>
    <BarMenu title='Nos boissons' icon={<GoSettings />} text="voir plus" icon2={<AiOutlineArrowRight />}  />
         <div className={styles.containerItem}>
           {
            allProduct.map(item => <CardPlat item={item}  key={item.id}/>)
          }
      </div>
      </div>
</div>
  )
}
