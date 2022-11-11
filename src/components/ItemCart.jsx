export const ItemCart = ({ item }) => {

  const handleClickDeleteProduct = () =>{
    
  }
  return (
    <div className="ItemCart">
      <div>
        <img src={item.images[0]} alt="" />
      </div>
      <div className="ItemCart-info">
        <div>
          <p>{item.price}</p>
          <p>{item.title}</p>

        </div>
        <p>2</p>
      </div>
      <button onClick={handleClickDeleteProduct}>
        X
      </button>
    </div>
  )
}
