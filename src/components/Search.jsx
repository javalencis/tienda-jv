import '../styles/Search.scss'
export const Search = ({ setSearchValue }) => {

  const handleChange = (e) => {
    setSearchValue(e.target.value)
   
  }

  return (
    <div className='Search'>
      <div className='Search-input'>
        <img src="" alt="" />
        <input type="text" placeholder="Search product" onChange={handleChange} />

      </div>
      <div className='Search-order'>
        <p>Order: </p>
        <select name="order" id="options">
          <option value="recent">Most recent</option>
          <option value="price">Price</option>
        </select>
      </div>
    </div>
  )
}
