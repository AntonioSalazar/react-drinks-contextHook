import React, { useContext, useState } from 'react';

//Context
import { ModalWindowContext } from '../context/ModalContext';

//Modal
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 500,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),

    },
}));

const RecipeCard = ({eachRecipe}) => {


    //Config from material.ui modal
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    //value from context
    const { setIdDrink, drinkIngredients, setDrinkIngredients } = useContext(ModalWindowContext);

    const { strDrink, strDrinkThumb, idDrink} = eachRecipe;

    //shows the ingredients
    const showIngredients = drinkIngredients => {
        let ingredients = [];
        for(let i =1; i < 16; i++){
            if (drinkIngredients[`strIngredient${i}`]) {
                ingredients.push(
                <li>{drinkIngredients[`strIngredient${i}`] }
                    {drinkIngredients[`strMeasure${i}`] }
                </li>
                )
            }
        }
        return ingredients
    }

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
                            handleOpen();
                        }}
                    />
                    <Modal
                        open={open}
                        onClose={() => {
                            setIdDrink(null);
                            handleClose();
                            setDrinkIngredients({});
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2 className='modal__title'>
                                {drinkIngredients.strDrink}
                            </h2>
                            <h3 className="nt-4">Instructions</h3>
                            <p className='modal__p'>{drinkIngredients.strInstructions}</p>
                            <figure><img src={drinkIngredients.strDrinkThumb} alt={drinkIngredients.strDrink} className="img-fluid"/></figure>
                            <h3>Ingredients and portions</h3>
                                <ul>
                                    {
                                        showIngredients(drinkIngredients)
                                    }
                                </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
     );
}

export default RecipeCard;