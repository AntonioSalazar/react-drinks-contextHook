import React, { createContext, useState, useEffect } from 'react';

//Dependencies
import axios from 'axios';

//Creation of the context
export const ModalWindowContext = createContext();

//Creation of the provider
const ModalWindowProvider = (props) => {


    //provider state
    const [ idDrink, setIdDrink ] = useState(null);
    
    //Local state
    const [ drinkIngredients, setDrinkIngredients ] = useState({});

    useEffect(() => {
        const drinkDetails = async () => {
            if(!idDrink) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
            const detailsCall = await axios(url);
            setDrinkIngredients(detailsCall.data.drinks[0]);
        }

        drinkDetails();
    }, [idDrink]);


    return (
        <ModalWindowContext.Provider
            value={{
                setIdDrink,
                drinkIngredients,
                setDrinkIngredients
            }}
        >

            {props.children}
        </ModalWindowContext.Provider>
    )
}

export default ModalWindowProvider;