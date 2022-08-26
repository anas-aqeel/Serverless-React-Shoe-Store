import React, { createContext, useReducer } from 'react';
import reducer from './AppReducer.js'



let initialState = {
    popularProducts: [],
    products: [],
    cart: []
}

export let MY_CONTEXT = createContext(initialState);


const GlobalContext = ({children}) => {
    let [state, dispatch] = useReducer([reducer, initialState]);
    return (
        <MY_CONTEXT.Provider value={{ state, dispatch }}>
            {children}
        </MY_CONTEXT.Provider>
    );
}

export default GlobalContext;