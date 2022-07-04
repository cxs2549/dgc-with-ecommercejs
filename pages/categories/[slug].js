import commerce from "../../lib/commerce"
import ProductList from "../../components/ProductList"
import CategoryList from "../../components/CategoryList"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Section from "../../components/Section"

export async function getStaticProps({ params }) {
  const { slug } = params
  const { data: cats } = await commerce.categories.list()
  const category = await commerce.categories.retrieve(slug, { type: "slug" })
  const { data: products } = await commerce.products.list({
    category_slug: [slug],
  })
  return {
    props: {
      cats,
      category,
      products,
    },
  }
}

export async function getStaticPaths() {
  const { data: categories } = await commerce.categories.list()
  return {
    paths: categories.map((cat) => ({
      params: {
        slug: cat.slug,
      },
    })),
    fallback: false,
  }
}

export default function CategoryPage({ cats, products, category }) {
  const [categories, setCategories] = useState(cats)
  const newCats = cats.filter((cat) => cat.slug !== category.slug)
  useEffect(() => {
    setCategories(newCats)
  }, [category])
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  }
  return (
    <div>
      <div className="max-w-4xl mx-auto lg:px-0">
        <CategoryList categories={categories} />
        {/* <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
        >
          <div className="py-5">
            <h1 className="text-3xl pl-5">{category.slug}</h1>
          </div>
          <ProductList products={products} />
        </motion.div> */}
        <Section title={category.slug} products={products} />
      </div>
    </div>
  )
}
