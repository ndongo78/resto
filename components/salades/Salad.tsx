import React from 'react'
import styles from './Salad.module.css'
import {BarMenu} from "../BarMenu";
import {AiOutlinePlus ,AiOutlineArrowRight} from "react-icons/ai";
import {GoSettings} from "react-icons/go";
import {Salads} from "../../constants/Salads";
import Image  from 'next/image' 
import Link from 'next/link';

export const Salad = () => {
  return (
    <div className={styles.container}>
    <div className={styles.header}>
    <BarMenu title='Nos salades' icon={<GoSettings />} text="voir plus" icon2={<AiOutlineArrowRight />}  />
         <div className={styles.containerItem}>
           {
            Salads.map(item => (
                <div className='item' key={item.id}>
                    <div className={styles.img}>
                        <Image src={item.image} alt={item.name} width={100} height={100}/>
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.name}>{item.name}</h3>
                         <p className={styles.desc}>{item.composition}</p>
                         <div
                         style={{
                          display: 'flex',
                          justifyContent: 'center',
                           alignItems: 'center',
                           flexDirection: 'column'
                        }}
                         >
                            <span style={{color:'blue'}}>Sauces:</span> 
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
