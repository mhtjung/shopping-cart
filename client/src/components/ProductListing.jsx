import Product from './Product';

const ProductListing = ({products}) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {
      products.map(prod => {
        return <Product key={prod.title} product={prod}/>
      })
      }
    </div>
  )
}


export default ProductListing;