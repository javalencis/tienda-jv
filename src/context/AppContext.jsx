import { useState } from "react";
import { createContext } from "react";
import { useParams } from "react-router-dom";
import { filterCategory } from "../helpers/functions";
import { useFecthProducts } from "../hooks/useFecthProducts";

export const AppContext = createContext();


export function AppProvider({ children }) {

    const [searchValue, setSearchValue] = useState('')
    const [clickItem, setClickItem] = useState(false)
    const [idItemClicked, setIdItemClicked] = useState({})
    const [cart, setCart] = useState([]);


    
   

    return (
        <AppContext.Provider
            value={{
                searchValue,
                setSearchValue,
                clickItem,
                setClickItem,
                idItemClicked,
                setIdItemClicked,
                cart,
                setCart
            }}
        >
            {children}
        </AppContext.Provider>
    )

}