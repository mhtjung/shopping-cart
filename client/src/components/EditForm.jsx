import Product from "../../../server/models/product";
import { useState } from "react";
import axios from "axios";

const EditForm = ({product, products, setProducts, toggleEdit}) => {
  const [newTitle, setNewTitle] = useState(product.title);
  const [newPrice, setNewPrice] = useState(product.price);
  const [newQuantity, setNewQuantity] = useState(product.quantity);

  const handleSubmit = async(e) => {
    try {
      const id = product["_id"];
      const response = await axios.put(`/api/products/${id}`, {title: newTitle, price: newPrice, quantity: newQuantity});
      setProducts(
        products.map((p) => {
          if (p["_id"] === id) {
            return response.data;          
          } 
          return p;
        })
      )
      toggleEdit();
    } catch(error) {
      console.log(error);
    }
  }
  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            onChange={(e) => setNewTitle(e.target.value)}
            type="text"
            id="product-name"
            value={newTitle}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input onChange={(e) => setNewPrice(e.target.value)} type="text" id="product-price" value={newPrice} />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input onChange={(e) => setNewQuantity(e.target.value)} type="text" id="product-quantity" value={newQuantity} />
        </div>

        <div className="actions form-actions">
          <a onClick={handleSubmit} className="button">Update</a>
          <a onClick={toggleEdit} className="button">Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
