import React, { useContext, useState} from 'react';

//Context
import { ModalWindowContext } from '../context/ModalContext';




const RecipeCard = ({eachRecipe}) => {

    //Local state
    const [ selectedId, setSelectedId ] = useState(null);

    //value from context
    const { setIdDrink } = useContext(ModalWindowContext);

    const { strDrink, strDrinkThumb, idDrink} = eachRecipe;

    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card recipeList__card">
                <img  src={strDrinkThumb} alt="Drink" title={strDrink}/>
                <div className="card-body">
                    <h5 className="card-title recipeList__card-title">{strDrink}</h5>
                    <input
                        type="submit"
                        className='recipeList__card-btn'
                        value='View more details'
                        onClick={() => {
                            setIdDrink(idDrink)
                        }}
                    />
                </div>
            </div>
        </div>
     );
}

export default RecipeCard;