import { useContext } from "react"
import { ItemCart } from "../components/ItemCart"
import { AppContext } from "../context/AppContext"
import { findProduct } from "../helpers/functions"
import '../styles/ContainerCart.scss'


export const ContainerCart = () => {
  const { cart,setCart } = useContext(AppContext)

  

  return (
    <div className="ContainerCart">
      {
        cart.map(item => (
          <ItemCart key={item.id} item={item}/>

        )

        )
      }
    </div>
  )
}
