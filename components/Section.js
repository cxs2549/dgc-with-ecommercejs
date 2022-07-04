import ProductList from "./ProductList"

const Section = ({title, products}) => {
  return (
    <div>
      <div className="">
        <h1 className="text-3xl px-5 lg:px-0 pb-5">{title}</h1>
      </div>
      <ProductList products={products} />
    </div>
  )
}
export default Section
