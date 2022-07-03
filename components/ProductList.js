import Product from './Product'
const ProductList = ({products}) => {
  return (
    <div className="py-5 ">
      <div className="max-w-4xl mx-auto">
        <div className="md:grid grid-cols-2 xl:grid-cols-3">
          {products.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default ProductList
