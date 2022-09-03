import React, { createContext, useReducer, useEffect } from "react";
import { useState } from "react";
import reducer from "./AppReducer.js";

let initialState = {
    cart: [],
};
export let MY_CONTEXT = createContext(initialState);




const GlobalContext = ({ children }) => {
    let [contextValues, setContextValues] = useState({
        popularProducts: [],
        products: []
    })
    let [state, dispatch] = useReducer(reducer, initialState);

    // fetching client secret

    let fetchClientSecret = async (amount) => {
        let clientSecretPromise = await fetch("https://ndure.netlify.app/.netlify/functions/checkout", {
            method: 'POST',
            body: JSON.stringify({ amount }),
        });
        let data =  await clientSecretPromise.json();
        return data;
    }

    useEffect(() => {
        let fetchData = async () => {

            //fetching all products data 

            let data = await fetch("https://ndure.netlify.app/.netlify/functions/index");
            let dataJson = await data.json();
            dataJson = dataJson.data;
            let products = dataJson;

            // sorting popular products
            let popularProducts = [...dataJson.slice(0, 4)];

            setContextValues({
                ...contextValues,
                popularProducts,
                products,
            })

        };
        fetchData();
    }, []);

    return (
        <MY_CONTEXT.Provider value={{ state, dispatch, contextValues, fetchClientSecret }}>
            {contextValues.products ? children : 'hello'}
        </MY_CONTEXT.Provider>
    );
};

export default GlobalContext;
