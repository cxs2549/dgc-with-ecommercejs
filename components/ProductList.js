import Product from './Product'
const ProductList = ({products}) => {
  return (
    <div className="">
      <div className="max-w-4xl mx-auto py-5">
        <div className="flex hide-scrollbar overflow-x-scroll gap-2  lg:grid-cols-3 px-5">
          {products.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default ProductList
