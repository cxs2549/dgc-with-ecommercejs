import commerce from "../lib/commerce"
import CategoryList from "../components/CategoryList"
import ProductList from "../components/ProductList"
import { motion } from "framer-motion"

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list()
  const { data: products } = await commerce.products.list()
  return {
    props: {
      categories,
      products,
    },
  }
}

const index = ({ categories, products }) => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  }
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
    >
      <div className="max-w-4xl lg:px-0 mx-auto flex px-5">
        <div className="flex flex-col w-full">
          <CategoryList categories={categories} />
          <div className=" py-4 pb-6 lg:px-0">
            <h1 className="text-3xl">Popular</h1>
          </div>
          <ProductList products={products} />
        </div>
      </div>
    </motion.div>
  )
}
export default index
