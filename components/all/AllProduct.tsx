import React,{useContext} from 'react'
import styles from './All.module.css'
import {GoSettings} from "react-icons/go";
import {allProduct} from "../../constants/AllProduct";
import Image  from 'next/image' 
import {AiOutlinePlus ,AiOutlineArrowRight} from "react-icons/ai";
import Link from 'next/link';
import {BarMenu} from "../BarMenu";
import {CartContext} from "../../context/cart";

export  const AllProduct = () => {
  const {cart, total, totalPrice, setTotal, setTotalPrice, addToCart} = useContext(CartContext)

  return (
    <div className={styles.container}>
        <div className={styles.header}>
        <BarMenu title='Tous nos plats' icon={<GoSettings />} text="voir plus" icon2={<AiOutlineArrowRight />}  />
             <div className={styles.containerItem}>
               {
                allProduct.map(item => (
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
                             <button className={styles.btn} onClick={()=>addToCart(item)}>
                              <AiOutlinePlus size={25}  />
                             </button>
                             </div>
                        </div>
                    </div>
              ))
              }
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
  )
}
