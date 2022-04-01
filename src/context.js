import {useState, useReducer, useContext, useEffect, createContext} from "react"
import CartItems from "./data"
import reducer from "./reducer"

const AppContext = createContext()

const initialState = {
    loading: false,
    cart: CartItems,
    total: 0,
    amount: 0,
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const clearCart = () => {
        dispatch({type: "CLEAR_CART"})
    }

    
    const remove = (id) => {
        dispatch({type: "REMOVE", payload: id})
    }

    const increase = (id) => {
        dispatch({type: "INCREASE", payload: id})
    }

    const descrease = (id) => {
        dispatch({type: "DESCREASE", payload: id})
    }

    useEffect(() => {
        dispatch({type: "GET_TOTALS"})
    }, [state.cart])

    return (
        <AppContext.Provider
           value = {{
            ...state,
            clearCart,
            remove,
            increase,
            descrease,
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




