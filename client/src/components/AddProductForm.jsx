import { useState } from "react"

const AddProductForm = () => {
  const [showForm, setShowForm] = useState(false)
  
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
          <input type="text" id="product-name" value=""/>
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" value=""/>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value=""/>
        </div>

        <div className="actions form-actions">
          <a className="button">Add</a>
          <a onClick={toggleForm}className="button">Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm