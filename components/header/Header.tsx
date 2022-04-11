import React,{useRef,useContext} from 'react'
import styles from "./Header.module.css"
import {AiOutlineSearch} from "react-icons/ai";
import {FiShoppingCart} from "react-icons/fi";
import Link from 'next/link'
import {CartContext} from "../../context/cart"

const Header = () => {
  const [search, setSearch] = React.useState<string>("")
  const btn=useRef<HTMLInputElement>(null)
  const {cart, total, totalPrice,  setTotal, setTotalPrice, addToCart} = useContext(CartContext)

  const handleClick=()=>{
    // bt.style.width= "200px";
    if(btn.current != null){
    btn.current.style.width= "200px";
    }
  }

  const hideInput=()=>{
    if(btn.current != null){
   btn.current.style.width= "0px";
   setSearch("")
    }
  }
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
          <h3>
              Bienvenue au <br/>
              Eatland 😋
          </h3>
          </div>
      <div className="search-container" onClick={handleClick}>
        <input type="text" name="search" onChange={handleChange} value={search} ref={btn} placeholder="Search..." onBlur={hideInput}  className="search-input" />
        <a  className="search-btn" >
        <AiOutlineSearch className={styles.searchIcon} size={30}  />    
        </a>
    </div>
        {/* <div Name={styles.searchContainer} onClick={()=>alert("o")}>
        <AiOutlineSearch className={styles.searchIcon} size={30} />
        </div> */}
        <div className={styles.cartContainer}>
        <Link href="/cart">
          <>
        <span className={styles.badge}> {cart.length} </span>
        <FiShoppingCart className={styles.cartIcon}/>
        </>
        </Link>
        </div>
      
    </div>
  )
}

export default Header