import React, { createContext, useReducer, useEffect } from "react";
import { useState } from "react";
import LoadingPage from "../components/Loader/LoadingPage.jsx";
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

    let fetchClientSecret = async (products) => {
        let clientSecretPromise = await fetch("https://ndure.netlify.app/.netlify/functions/checkout", {
            method: 'POST',
            body: JSON.stringify({
                products,
            }),
        });
        let data = await clientSecretPromise.json();
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
            {contextValues.products ? children : 
                <LoadingPage/>
            }
        </MY_CONTEXT.Provider>
    );
};

export default GlobalContext;
