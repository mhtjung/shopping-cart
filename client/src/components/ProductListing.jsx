import EditableProduct from './EditableProduct';

const ProductListing = ({products, setProducts}) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {
      products.map(prod => {
        return <EditableProduct key={prod.title} product={prod} products={products} setProducts={setProducts}/>
      })
      }
    </div>
  )
}


export default ProductListing;