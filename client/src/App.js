// When 0 products in cart, disable checkout button
// Fix product updates

import { useEffect, useState } from 'react';
import axios from "axios";

import AddProductForm from './components/AddProductForm';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    }
    const fetchCartItems = async () => {
      const response = await axios.get('/api/cart');
      setCartItems(response.data);
    }

    fetchProducts();
    fetchCartItems();
  }, []);

  const handleAddToCart = async (productId) => {
    const response = await axios.post('/api/add-to-cart', { productId })
    const newLineItem = response.data.item
    const newProductObj = response.data.product
    const isInCart = cartItems.some(item => {
      return item.productId === productId
    })
    if (isInCart) {
      setCartItems(cartItems.map( item => {
        if (item.productId === productId) {
          return newLineItem
        }
        return item
      }))
    } else {
      setCartItems(cartItems.concat(newLineItem))
    }

    setProducts(products.map( prod => {
      if (prod["_id"] === newProductObj["_id"]) {
        return newProductObj
      }
      return prod
    }))
  }

  const handleCheckout = async () => {
    const response = await axios.post('/api/checkout')
    setCartItems([])
  }

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart onCheckout={handleCheckout} cartItems={cartItems}/>
      </header>
      <main>
        <ProductListing onAddToCart={handleAddToCart} products={products} setProducts={setProducts}/>
        <AddProductForm setProducts={setProducts} products={products} />
      </main>
    </div>
  )
};

export default App;

[
  {
    itemname: 'awoefij',
    quantity: 2
  }
  
]



