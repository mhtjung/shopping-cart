import axios from "axios";
import { useState } from "react";

const AddProductForm = ({setProducts, products}) => {
  const [showForm, setShowForm] = useState(false);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const resetForm = () => {
    setProductName("");
    setProductPrice("");
    setProductQuantity("");
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/products", {title: productName, price: productPrice, quantity: productQuantity});
      const newProduct = response.data;
      setProducts(products.concat(newProduct));
      resetForm();
      toggleForm();
    } catch (error) {
      console.log(error);
    }
  }
  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className={`add-form ${showForm ? 'visible' : null}`}>
      <p><a onClick={toggleForm} className="button add-product-button">Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input onChange={(e) => setProductName(e.target.value)} type="text" id="product-name" value={productName}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input onChange={(e) => setProductPrice(e.target.value)} type="text" id="product-price" value={productPrice}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input onChange={(e) => setProductQuantity(e.target.value)} type="text" id="product-quantity" value={productQuantity}/>
        </div>

        <div className="actions form-actions">
          <a href="/#" onClick={handleSubmit}className="button">Add</a>
          <a onClick={toggleForm}className="button">Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm