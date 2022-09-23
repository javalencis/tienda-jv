
import { useEffect, useState } from "react"



export const useFecthProducts = (url) => {
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
