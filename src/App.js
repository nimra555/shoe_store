import React from 'react';
import  Routes from './Routes';
import {ProductProvider} from  './ProductContext';

function App() {
  return (
   <ProductProvider>

    <div>
      <Routes/>
    </div>
   </ProductProvider> 
  );
}

export default App;
