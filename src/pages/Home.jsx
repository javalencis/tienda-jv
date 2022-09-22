
import { useFecthProducts } from "../hooks/useFecthProducts"
import { ProductItem } from "../components/ProductItem"
import { Search } from "../components/Search"
import { ProductList } from "../containers/ProductList"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


const url = 'https://api.escuelajs.co/api/v1/products'

const filterCategory = (products, category) => {
  const nCategory = category.charAt(0).toUpperCase() + category.slice(1)
  return products.filter(product => product.category.name === nCategory)
}
export const Home = () => {

  const [searchValue , setSearchValue] = useState('')
  const { category } = useParams();

  let products = useFecthProducts(url)


  if (category) {
    products = filterCategory(products, category)
  }


  let listProducts = []
  if (searchValue.length > 1) {
    listProducts = products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))

  } else {
    listProducts= products
  }




  return (
    <main>
      <Search setSearchValue={setSearchValue} />
      <ProductList>
        {
          listProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        }
      </ProductList>

    </main>
  )
}
