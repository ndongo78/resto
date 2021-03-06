import React,{useRef,useEffect} from 'react'
import styles from './Categorie.module.css'
import Link from 'next/link'
import Image from 'next/image'
import anime from 'animejs'

interface Props {
    setisAll: (value: boolean) => void
    setisBurger: (value: boolean) => void
    setisDrink: (value: boolean) => void
    setisDessert: (value: boolean) => void
    setisPizza: (value: boolean) => void
    setisSalad: (value: boolean) => void
    isAll: boolean
    isBurger:boolean
    isDrink:boolean
    isDessert:boolean
    isPizza:boolean
    isSalad:boolean
}

const Categories = ({
    setisAll,
    setisBurger,
     setisDrink,
    setisDessert,
    setisPizza,
    setisSalad,
    isAll,
    isBurger,
    isDrink,
    isDessert,
    isPizza,
    isSalad
}:Props) => {

    const handleAll = () => {
        setisAll(true)
        setisBurger(false)
        setisDrink(false)
        setisDessert(false)
        setisPizza(false)
        setisSalad(false)   
    }
    const handleBurger = () => {
        setisAll(false)
        setisBurger(true)
        setisDrink(false)
        setisDessert(false)
        setisPizza(false)
        setisSalad(false)
    }
    const handleDrink = () => {
        setisAll(false)
        setisBurger(false)
        setisDrink(true)
        setisDessert(false)
        setisPizza(false)
        setisSalad(false)
    }
    const handleDessert = () => {
        setisAll(false)
        setisBurger(false)
        setisDrink(false)
        setisDessert(true)
        setisPizza(false)
        setisSalad(false)
    }
    const handlePizza = () => {
        setisAll(false)
        setisBurger(false)
        setisDrink(false)
        setisDessert(false)
        setisPizza(true)
        setisSalad(false)
    }
    const handleSalad = () => {
        setisAll(false)
        setisBurger(false)
        setisDrink(false)
        setisDessert(false)
        setisPizza(false)
        setisSalad(true)
    }

    const animated = useRef<HTMLHeadingElement>(null)
 
    useEffect(() => {
        if(animated.current){
            animated.current.innerHTML =  animated.current.textContent.replace(/\S/g, "<span className='letter'>$&</span>");
            anime.timeline({loop: true})
            .add({
              targets: '.heding .letter',
              scale: [4,1],
              opacity: [0,1],
              translateZ: 0,
              easing: "easeOutExpo",
              duration: 950,
              delay: (el, i) => 70*i
            }).add({
              targets: '.heding',
              opacity: 0,
              duration: 1000,
              easing: "easeOutExpo",
              delay: 1000
            });
        } 
    }, [])



  return (
    <div className={styles.container}>
       <div className={styles.links}>
        <button className={styles.btns}>
            <a className={ isAll ? styles.isActive :styles.link} onClick={handleAll}>
                <Image src="/images/all.png" alt="all" height={80} width={80} />
                <span className={styles.desc}>  Tous </span>
            </a>
        </button>
        <Link href="/">
            <a className={ isBurger ? styles.isActive :styles.link} onClick={handleBurger}>
                <Image src="/images/burgers/burger1.png" alt="burger" height={80} width={80} />
                <span  className={styles.desc}> Burgers </span>
            </a>
        </Link>
        <Link href="/">
            <a className={ isPizza ? styles.isActive :styles.link} onClick={handlePizza}>
                <Image src="/images/pizza.png" alt="pizza" height={80} width={80} />
                <span   className={styles.desc}> Pizzas </span>
            </a>
        </Link>
        <Link href="/">
            <a className={ isSalad ? styles.isActive :styles.link} onClick={handleSalad}>
                <Image src="/images/salad.png" alt="salad" height={80} width={80} />
                <span   className={styles.desc}> Salades </span>
            </a>
        </Link>
        <Link href="/">
            <a className={ isDessert ? styles.isActive :styles.link} onClick={handleDessert}>
                <Image src="/images/dessert.png" alt="dessert" height={80} width={80} />
                <span   className={styles.desc}> Desserts </span>
            </a>
        </Link>
        <Link href="/">
            <a className={ isDrink ? styles.isActive :styles.link} onClick={handleDrink}>
                <Image src="/images/boisson.png" alt="boisson" height={80} width={80} />
                <span   className={styles.desc}> Boissons </span>
            </a>
        </Link>
        </div>
        <div className={styles.banner}>
            <div className={styles.image}>
            <Image src="/images/burgers/burger2.png" alt="banner" height={150} width={150}  />
            </div>
            <div className={styles.containerFooter}>
                <h3> -50% </h3>
                <h4 ref={animated} className='heding'> De remise sur les menus burgers </h4>
            </div>
        </div>
    </div>
  )
}

export default Categories