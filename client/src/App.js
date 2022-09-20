import { useState } from 'react';

import data from '../mockData/data';

import AddProductForm from './components/AddProductForm';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';

const App = () => {
  const [products, setProducts] = useState(() => {
    return data
  })

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>
      <main>
        <ProductListing products={products}/>
        <AddProductForm />
      </main>
    </div>
  )
};

export default App;