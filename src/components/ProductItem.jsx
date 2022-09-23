
import btAddCart from '../assets/icons/bt_add_to_cart.svg'

import '../styles/ProductItem.scss'


export const ProductItem = ({product,setClickItem,setIdItemClicked}) => {
    const handleClickItem = () => {
        setClickItem(true)
        setIdItemClicked(product)
      }
    return (
        <div className='ProductItem'>
            <div className='ProductItem-img' onClick={handleClickItem}>
                <img src={product.images[0]} alt="" />
            </div>
            <div className='ProductItem-info'>
                <div className='info'>
                    <p className='info--price'>$ {product.price}</p>
                    <p className='info--title'>{product.title}</p>
                </div>
                <div className='addCart'>
                    <img src={btAddCart} alt="" />
                </div>
            </div>
        </div>
    )
}
