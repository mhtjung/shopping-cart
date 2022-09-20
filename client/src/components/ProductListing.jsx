import EditableProduct from './EditableProduct';

const ProductListing = ({products}) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {
      products.map(prod => {
        return <EditableProduct key={prod.title} product={prod}/>
      })
      }
    </div>
  )
}


export default ProductListing;