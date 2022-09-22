
import { useEffect, useState } from "react"

const filterCategory = (products, category) => {
    const nCategory = category.charAt(0).toUpperCase() + category.slice(1)
    return products.filter(product => product.category.name === nCategory)
  }

export const useFecthProducts = (url,category=false) => {
    const [products, setProducts] = useState([])

    const getFecthData = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setProducts(data)  

      
    }


    useEffect(()=>{
        getFecthData()
    },[])

    return products;
}
