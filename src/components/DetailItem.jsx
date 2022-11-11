import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import '../styles/DetailItem.scss'

export const DetailItem = () => {
    const { idItemClicked,setClickItem } = useContext(AppContext)


    const handleCloseItem = () => {
        setClickItem(false)
        
    }
    return (
        <div className="DetailItem">
            <button className="DetailItem-bt--close" onClick={handleCloseItem}>X</button>
            <div className="DetailItem-imgs">
                <img src={idItemClicked.images[0]} alt="" />
            </div>
            <div className="DetailItem-info">
                <p className='info--price'>$ {idItemClicked.price} </p>
                <p className='info--title'>{idItemClicked.title}</p>
                <p className='info--description'>{idItemClicked.description}</p>
            </div>
            <div className="DetailItem-bt--addCart">
                <img src="" alt="" />
                <p>Add to cart</p>
            </div>
        </div>
    )
}
