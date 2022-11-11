import { NavLink } from "react-router-dom"
import logoJv from '../assets/logos/logo-jv.svg'
import iconCart from '../assets/icons/icon_shopping_cart.svg'
import iconFlechita from '../assets/icons/flechita.svg'
import '../styles/Header.scss'
import { useState } from "react"
import { ContainerCart } from "../containers/ContainerCart"
export const Header = () => {
  const [clickCart, setClickCart] = useState(false)

  const handleClickCarrito = () => {
    setClickCart(e=> !e)
  }

  return (
    <header className="Header">
      <div className="Header-logo">
        <img src={logoJv} alt="logo jv" />
      </div>
      <div className="Header-nav">
        <nav className="nav--left">
          <ul>
            <li><NavLink to="/" end>All</NavLink></li>
            <li><NavLink to="/clothes">Clothes</NavLink></li>
            <li><NavLink to="/electronics">Eletronics</NavLink></li>
            <li><NavLink to="/furniture">Furniture</NavLink></li>
            <li><NavLink to="/shoes">Shoes</NavLink></li>
            <li><NavLink to="/others">Others</NavLink></li>
          </ul>
        </nav>

        <div className="nav--rigth">
          <div className="rigth-email">
            <p>example@email.com </p>
            <img src={iconFlechita} alt="" />
          </div>
          <div className="rigth-carrito" onClick={handleClickCarrito}>

            <img src={iconCart} alt="C" />

          </div>
        </div>


      </div>

      {
        clickCart && (
          <ContainerCart/>
        )
      }

    </header>
  )
}
