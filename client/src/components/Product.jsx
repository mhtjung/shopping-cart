import { useState } from 'react';
import EditForm from './EditForm';

const Product = ({product}) => {
  const [editShown, setEditShown] = useState(false);

  const toggleEdit = () => {
    setEditShown(!editShown)
  }

  return (
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">{product.price}</p>
        <p className="quantity">{product.quantity}</p>
        <div className="actions product-actions">
          <a className="button add-to-cart">Add to Cart</a>
          <a onClick={toggleEdit} className="button edit">Edit</a>
        </div>
        <a className="delete-button">
          <span>X</span>
        </a>
      </div>
      {
        editShown ? <EditForm /> : null
      }      
    </div>
  )
}

export default Product