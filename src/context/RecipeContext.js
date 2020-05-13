import React , { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//creation of the context 

export const RecipeContext = createContext();

//create the provider - the provider is where we have our functions and the state
const RecipeProvider = (props) => {

    const [recipe, setRecipe] = useState([]);
    const [searchRecipe, setSearchRecipe] = useState({
        ingredient: '',
        category: ''
    });
    const [ request, setRequest] = useState(false)

    useEffect(() => {
        if(request) {
            const { ingredient, category } = searchRecipe
            const getRecipe = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`
                const recipeCall = await axios(url);
                setRecipe(recipeCall.data.drinks);
            }                  
            getRecipe();     
        }
    }, [searchRecipe])

    return (
        <RecipeContext.Provider
            value={{
                setSearchRecipe,
                setRequest,
                recipe
            }}
        >
            {props.children}
        </RecipeContext.Provider>
    )
}

export default RecipeProvider;