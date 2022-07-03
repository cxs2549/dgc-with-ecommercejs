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
      <div className="max-w-4xl px-5 lg:px-0 mx-auto flex bg-green-400">
        <div className="flex flex-col bg-red-400 w-full">
          <CategoryList categories={categories} />
          <ProductList products={products} />
        </div>
      </div>
    </div>
  )
}
export default index
