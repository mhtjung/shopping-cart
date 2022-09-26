import axios from 'axios';
import { useState } from 'react';
import EditForm from './EditForm.jsx';

const EditableProduct = ({onAddToCart, product, products, setProducts}) => {
  const [editShown, setEditShown] = useState(false);

  const toggleEdit = () => {
    setEditShown(!editShown)
  }

  const deleteProduct = async () => {
    try {
      const id = product["_id"];
      await axios.delete(`/api/products/${id}`);
      setProducts(
        products.filter(p => p["_id"] !== id)
      )
    } catch(error) {
      console.log(error);
    }
  }

  const handleAddtoCart = () => {
    onAddToCart(product["_id"]);
  }

  return (
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="quantity">{product.quantity}</p>
        <div className="actions product-actions">
          <a onClick={handleAddtoCart} className={`button add-to-cart ${product.quantity === 0 ? 'disabled' : ''}`}>Add to Cart</a>
          <a onClick={toggleEdit} className="button edit">Edit</a>
        </div>
        <a onClick={deleteProduct} className="delete-button">
          <span>X</span>
        </a>
      </div>
      {
        editShown ? <EditForm product={product} products={products} setProducts={setProducts} toggleEdit={toggleEdit} /> : null
      }      
    </div>
  )
}

export default EditableProduct