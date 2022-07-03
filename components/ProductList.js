import Product from './Product'
const ProductList = ({products}) => {
  return (
    <div className="">
      <div className="max-w-4xl mx-auto">
        <div className="lg:grid gap-x-2 flex flex-wrap lg:grid-cols-3">
          {products.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default ProductList
