import React from 'react';

const RecipeCard = ({eachRecipe}) => {

    const { strDrink, strDrinkThumb} = eachRecipe;
    return ( 
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card recipeList__card">
                <img src={strDrinkThumb} alt="Drink" />
                <div className="card-body">
                    <h5 className="card-title">{strDrink}</h5>
                </div>
            </div>
        </div>
     );
}
 
export default RecipeCard;