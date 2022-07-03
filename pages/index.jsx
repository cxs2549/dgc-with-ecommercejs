import commerce from "../lib/commerce"
import CategoryList from "../components/CategoryList"
import ProductList from '../components/ProductList'

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list()
  const { data: products } = await commerce.products.list()
  return {
    props: {
      categories,
      products
    },
  }
}

const index = ({categories, products}) => {
  return (
    <div className="bg-blue-500">
      <div className="max-w-4xl lg:px-0 mx-auto flex bg-green-400 px-5">
        <div className="flex flex-col bg-red-400 w-full">
          <CategoryList categories={categories} />
          <div className="bg-yellow-300 py-4 lg:px-0">
            <h1 className="text-3xl">Popular</h1>
          </div>
          <ProductList products={products} />
        </div>
      </div>
    </div>
  )
}
export default index
