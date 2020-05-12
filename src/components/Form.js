import React, { useContext } from 'react';
import { CategoriesContext } from '../context/ContextCategories';

const Form = () => {

    const { categories } = useContext(CategoriesContext);

    return ( 
        <form className='col-12 form'>
            <fieldset>
                <h3 className='form__title'>Search a drink by category or by it's ingredients</h3>
                <div className="row form__inputs ">
                    <div className="col-sm-12 col-md-4">
                        <input 
                            type="text"
                            name='ingredient'
                            placeholder='search by its ingredients'
                            // onChange={e => setIngredients(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <select 
                            className='form__inputs-select'
                            name="category" 

                        >
                            <option value="">--Select a category--</option>

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