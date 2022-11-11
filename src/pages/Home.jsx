
import { ProductItem, Search, DetailItem } from "../components"
import { ProductList } from "../containers/ProductList"

import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { useParams } from "react-router-dom"
import { useFecthProducts } from "../hooks/useFecthProducts"
import {filterProductList } from "../helpers/functions"


const url = 'https://api.escuelajs.co/api/v1/products'

export const Home = () => {

  const { clickItem, searchValue } = useContext(AppContext);

  const { category } = useParams();
  let products = useFecthProducts(url)


  let listProducts = filterProductList(category,products,searchValue) 

  return (
    <main>
      <Search />
      <ProductList clickItem={clickItem}>
        {
          listProducts.map(product => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))
        }
      </ProductList>
      {clickItem
        &&
        <DetailItem />}
    </main>
  )
} 
