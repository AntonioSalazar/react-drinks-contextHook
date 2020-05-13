import React, { useContext } from 'react';

//components
import RecipeCard from './RecipeCard'

//context
import { RecipeContext } from '../context/RecipeContext';


const Recipe = () => {

    const { recipe } = useContext(RecipeContext);
    if (recipe.length === 0) return null

    return ( 
       
        <div className='row recipeList'>
            <div className="col-12">
                <h3 className='recipeList__title'>List of drinks</h3>
            </div>
            
            {
                recipe.map(eachRecipe => (
                    <RecipeCard
                        key={eachRecipe.idDrink}
                        eachRecipe={eachRecipe}
                    />
                ))
            }
        </div>
     );
}
 
export default Recipe;