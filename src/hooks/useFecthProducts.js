
import { useEffect, useState } from "react"



export const useFecthProducts = (url) => {
    const [products, setProducts] = useState([])

    const getFecthData = async () => {
        try{
            const res = await fetch(url)
            const data = await res.json()
            setProducts(data)  

        }catch(e){
            console.log(e)
        }

      
    }


    useEffect(()=>{
        getFecthData()
    },[])

    return products;
}
