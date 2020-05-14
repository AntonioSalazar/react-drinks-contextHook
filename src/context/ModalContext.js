import React, { createContext, useState, useEffect } from 'react';

//Dependencies
import axios from 'axios';

//Creation of the context
export const ModalWindowContext = createContext();

//Creation of the provider
const ModalWindowProvider = (props) => {


    //provider state
    const [ idDrink, setIdDrink ] = useState(null);

    return (
        <ModalWindowContext.Provider
            value={{
                setIdDrink
            }}
        >

            {props.children}
        </ModalWindowContext.Provider>
    )
}

export default ModalWindowProvider;