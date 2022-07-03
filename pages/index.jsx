import commerce from "../lib/commerce"
import CategoryList from "../components/CategoryList"

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list()
  return {
    props: {
      categories,
    },
  }
}

const index = ({categories}) => {
  return (
    <div className="bg-green-500">
      <div className="max-w-4xl px-5 lg:px-0 mx-auto flex bg-green-400 py-2">
        <CategoryList categories={categories} />
      </div>
    </div>
  )
}
export default index
