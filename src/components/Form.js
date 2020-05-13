import React, { useContext, useState } from 'react';
//context
import { CategoriesContext } from '../context/ContextCategories';
import { RecipeContext } from '../context/RecipeContext';


const Form = () => {
    //Context
    const { categories } = useContext(CategoriesContext);
    const { setSearchRecipe, setRequest } = useContext(RecipeContext);
    

    //Local state
    const [ userSelection, setUserSelection ] = useState({
        ingredient: '',
        category: ''
    });
    
    

    //save selected values in local state
    const saveSelectedValues = (e) => {
        setUserSelection({
            ...userSelection,
            [e.target.name] : e.target.value
        })
    }



    return ( 
        <form className='col-12 form' onSubmit={e => {
            e.preventDefault();
            setSearchRecipe(userSelection)
            setRequest(true)
        }}>
            <fieldset>
                <h3 className='form__title'>Search a drink by category or by it's ingredients</h3>
                <div className="row form__inputs ">
                    <div className="col-sm-12 col-md-4">
                        <input 
                            type="text"
                            name='ingredient'
                            placeholder='search by its ingredients'
                            onChange={saveSelectedValues}
                        />
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <select 
                            className='form__inputs-select'
                            name="category" 
                            onChange={saveSelectedValues}
                        >
                            <option value="">--Select a category--</option>
                            {
                                categories.map(category => (
                                    <option 
                                        key={category.strCategory}
                                        value={category.strCategory}
                                    >
                                        {category.strCategory}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="col-sm-12 col-md-4 form__inputs-btn">
                        <input type="submit" value='Search'/>
                    </div>
                </div>
            </fieldset>
        </form>
     );
}
 
export default Form;