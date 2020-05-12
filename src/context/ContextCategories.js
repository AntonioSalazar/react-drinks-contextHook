import React , { createContext, useState, useEffect }from 'react';
import axios from 'axios'
//create a context 
export const CategoriesContext = createContext();


//create a provider -  a provider is where we have the functions and the state
const CategoriesProvider = (props) => {

    //create the state of the context

    const [ categories, setCategories ] = useState([]);


    //useEffect API Call bring categories from cocktail db

    useEffect(() => {
       
        const getCategories = async() => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categoriesCall = await axios.get(url);
            
            setCategories(categoriesCall.data.drinks);
        }

        getCategories();
    }, []);

    return(

        <CategoriesContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;
