import { useEffect, useState } from 'react';
import axios from "axios";


import data from '../mockData/data';

import AddProductForm from './components/AddProductForm';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    }
    fetchProducts();
}, []);

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>
      <main>
        <ProductListing products={products} setProducts={setProducts}/>
        <AddProductForm setProducts={setProducts} products={products} />
      </main>
    </div>
  )
};

export default App;