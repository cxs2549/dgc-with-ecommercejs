import commerce from "../../lib/commerce"
import ProductList from "../../components/ProductList"
import CategoryList from "../../components/CategoryList"
import { useEffect, useState } from "react"

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
  })
  return (
    <div>
      <div className="max-w-4xl mx-auto px-5 lg:px-0">
        <CategoryList categories={categories} />
        <div className="py-4 bg-red-400">
          <h1 className="text-3xl">{category.slug.toLowerCase()}</h1>
        </div>
        <ProductList products={products} />
      </div>
    </div>
  )
}
