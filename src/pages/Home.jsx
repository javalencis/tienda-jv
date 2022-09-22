
import { useFecthProducts } from "../hooks/useFecthProducts"
import { ProductItem } from "../components/ProductItem"
import { Search } from "../components/Search"
import { ProductList } from "../containers/ProductList"
import { useParams } from "react-router-dom"
import { useState } from "react"


const url = 'https://api.escuelajs.co/api/v1/products'


export const Home = () => {

  const { category } = useParams();

  const { products, setProducts } = useFecthProducts(url, category)

  let listProducts = products
  const filterForName = (value) => {
    if (value.length > 1) {
      listProducts = products.filter(product => product.title.toLowerCase().includes(value.toLowerCase()))
    } else {
      listProducts=products
    }
  }


  return (
    <main>
      <Search filterForName={filterForName} />
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
