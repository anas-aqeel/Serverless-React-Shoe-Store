import React, { createContext, useReducer, useEffect } from 'react';
import reducer from './AppReducer.js'

let initialState = {
    popularProducts: [],
    products: [],
    cart: []
}
export let MY_CONTEXT = createContext(initialState);


const GlobalContext = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        let fetchData = async () => {
            let data = await fetch('https://ndure.netlify.app/.netlify/functions/index');
            let dataJson = await data.json();
            dataJson = dataJson.data;
        }
        fetchData();
    }, [])

    return (
        <MY_CONTEXT.Provider value={{ state, dispatch }}>
            {children}
        </MY_CONTEXT.Provider>
    );
}

export default GlobalContext;