
import { useFecthProducts } from "../hooks/useFecthProducts"
import { ProductItem, Search, DetailItem } from "../components"
import { ProductList } from "../containers/ProductList"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { filterCategory } from "../helpers/functions"

const url = 'https://api.escuelajs.co/api/v1/products'

export const Home = () => {

  const [searchValue, setSearchValue] = useState('')
  const [clickItem, setClickItem] = useState(false)
  const [idItemClicked, setIdItemClicked] = useState({})
  const { category } = useParams();

  let products = useFecthProducts(url)


  if (category) {
    products = filterCategory(products, category)
  }


  let listProducts = []
  if (searchValue.length > 1) {
    listProducts = products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))

  } else {
    listProducts = products
  }



  return (
    <main>
      <Search setSearchValue={setSearchValue} />
      <ProductList clickItem={clickItem}>
        {
          listProducts.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              setClickItem={setClickItem}
              setIdItemClicked={setIdItemClicked}
            />
          ))
        }
      </ProductList>
      {clickItem
        &&
        <DetailItem
          idItemClicked={idItemClicked}
          setClickItem={setClickItem}
        />}
    </main>
  )
} 
