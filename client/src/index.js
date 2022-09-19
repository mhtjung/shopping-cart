// Probably a nested ul? A ol with ul as elements?

/**/
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return React.createElement(ProductListing);
}

const ProductListing = () => {
  return React.createElement("div", { className: "product-listing" }, [
    React.createElement("h2", null, 'Products'),
    React.createElement(Product, {productName: 'Amazon Kindle E-reader', productPrice: '$79.99', productQty: '5 left in stock'}),
    React.createElement(Product, {productName: 'Apple 10.5-Inch iPad Pro', productPrice: '$649.99', productQty: '2 left in stock'}),
    React.createElement(Product, {productName: 'Yamaha Portable keyboard', productPrice: '$155.99', productQty: '0 left in stock'}),
  ])
}

const Product = (props) => {
  return React.createElement("div", { className: "product-details" }, [
    React.createElement("h3", null, props.productName),
    React.createElement("p", { className: "price" }, props.productPrice),
    React.createElement("p", { className: "quantity" }, props.productQty),
    React.createElement("div", { className: "actions product-actions" }, [
      React.createElement("a", { className: "button add-to-cart" }, 'Add to Cart'),
      React.createElement("a", { className: "button edit"}, 'Edit')
    ]),
    React.createElement("a", { className: "delete-button" }, [
      React.createElement("span", null, 'X')
    ])
  ])
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(App());


{/* <main>
<div class="product-listing">
  <h2>Products</h2>
  <div class="product">
    <div class="product-details">
      <h3>Amazon Kindle E-reader</h3>
      <p class="price">$79.99</p>
      <p class="quantity">5 left in stock</p>
      <div class="actions product-actions">
        <a class="button add-to-cart">Add to Cart</a>
        <a class="button edit">Edit</a>
      </div>
      <a class="delete-button"><span>X</span></a>
    </div>
  </div>

  <div class="product">
    <div class="product-details">
      <h3>Apple 10.5-Inch iPad Pro</h3>
      <p class="price">$649.99</p>
      <p class="quantity">2 left in stock</p>
      <div class="actions product-actions">
        <a class="button add-to-cart">Add to Cart</a>
        <a class="button edit">Edit</a>
      </div>
      <a class="delete-button"><span>X</span></a>
    </div>
  </div>

  <div class="product">
    <div class="product-details">
      <h3>Yamaha Portable Keyboard</h3>
      <p class="price">$155.99</p>
      <p class="quantity">0 left in stock</p>
      <div class="actions product-actions">
        <a class="button add-to-cart disabled">Add to Cart</a>
        <a class="button edit">Edit</a>
      </div>
      <a class="delete-button"><span>X</span></a>
    </div>
  </div>
</div> */}