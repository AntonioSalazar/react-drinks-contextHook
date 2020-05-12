import React, { Fragment } from 'react';

//Compoents
import Header from './components/Header';
import Form from './components/Form';

//Context API
import CategoriesProvider from './context/ContextCategories'

function App() {
  return (
    <CategoriesProvider>
      <Header/>

      <main className='main container'>
        <section className="row">
          <Form/>
        </section>
      </main>

      <footer>
        
      </footer>      
    </CategoriesProvider>

  );
}

export default App;
