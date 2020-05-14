import React, { Fragment } from 'react';

//Compoents
import Header from './components/Header';
import Form from './components/Form';
import RecipesList from './components/RecipesList';

//Context API
import CategoriesProvider from './context/ContextCategories';
import RecipeProvider from './context/RecipeContext';
import ModalWindowProvider from './context/ModalContext';

function App() {
  return (
    <CategoriesProvider>
      <RecipeProvider>
        <ModalWindowProvider>
      <Header/>

        <main className='main container'>
          <section className="row">
            <Form/>
          </section>
          <RecipesList />
   
        </main>

        <footer>
          
        </footer>  
        </ModalWindowProvider>
      </RecipeProvider>    
    </CategoriesProvider>

  );
}

export default App;
