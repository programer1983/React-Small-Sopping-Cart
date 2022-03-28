import {useState, useReducer, useContext, useEffect, createContext} from "react"
import CartItems from "./data"
// import reducer from "./reducer"

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [cart, setCart] = useState(CartItems)

    return (
        <AppContext.Provider
           value = {{
            cart,
           }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}




