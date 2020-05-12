import React, { Fragment } from 'react';

//Compoents
import Header from './components/Header';
import Form from './components/Form';

//Context API
import CategoriesProvider from './context/ContextCategories';
import RecipeProvider from './context/RecipeContext';

function App() {
  return (
    <CategoriesProvider>
      <RecipeProvider>
      <Header/>

        <main className='main container'>
          <section className="row">
            <Form/>
          </section>
        </main>

        <footer>
          
        </footer>  
        
      </RecipeProvider>    
    </CategoriesProvider>

  );
}

export default App;
