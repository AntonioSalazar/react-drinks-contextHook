import React , { createContext, useState} from 'react';
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

    return (
        <RecipeContext.Provider
            value={{
                setSearchRecipe
            }}
        >
            {props.children}
        </RecipeContext.Provider>
    )
}

export default RecipeProvider;