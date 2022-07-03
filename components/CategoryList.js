import Link from "next/link"
import { useRouter } from "next/router"

const CategoryList = ({ categories }) => {
  const router = useRouter()
  const revCats = categories.reverse()
  return (
    <div className="w-full bg-indigo-400 py-5">
      <div className="w-full max-w-xs">
        <div className="flex justify-between w-full">
          {revCats.map((cat, i) => (
            <Link className="cursor-pointer" key={i} href={`/categories/${cat.slug}`}>
              <a>{cat.slug}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default CategoryList
