import React from 'react'
import { AiOutlineArrowRight} from "react-icons/ai";
import {GoSettings} from "react-icons/go";
import Link from 'next/link'
import styles from './all/All.module.css'

interface Props {
    title: string
    icon?: any 
    text?: string
    icon2?: any
}

export const BarMenu = ({title,icon,text,icon2}:Props) => {
  return (
    <div style={{display: 'flex',
    justifyContent:"space-between"}}>
    <h2 className={styles.title}>{ title}<span> {icon} </span> </h2>
      <Link href="/add-product">
     <button className={styles.ml}>
       {text} {icon2}
     </button>
      </Link>
    </div>
  )
}
