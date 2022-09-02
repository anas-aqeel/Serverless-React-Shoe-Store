import React, { createContext, useReducer, useEffect } from "react";
import reducer from "./AppReducer.js";

let initialState = {
    popularProducts: [],
    products: [],
    cart: [],
};
export let MY_CONTEXT = createContext(initialState);

const GlobalContext = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        let fetchData = async () => {
            let data = await fetch(
                "https://ndure.netlify.app/.netlify/functions/index"
            );
            let dataJson = await data.json();
            dataJson = dataJson.data;

            let popularProducts = [...dataJson.slice(0, 4)];
            let products = dataJson;
            let cart = [];
            let cartLength = 0;
            dispatch({
                type: "SAVE_FETHCED_DATA",
                payload: {
                    popularProducts,
                    products,
                    cart,
                    cartLength
                },
            });
        };
        fetchData();
    }, []);

    return (
        <MY_CONTEXT.Provider value={{ state, dispatch }}>
            {state.popularProducts.length && children}
        </MY_CONTEXT.Provider>
    );
};

export default GlobalContext;
