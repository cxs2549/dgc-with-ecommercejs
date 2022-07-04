import Link from "next/link"
import { useRouter } from "next/router"

const CategoryList = ({ categories }) => {
  const router = useRouter()
  const revCats = categories.reverse()
  return (
    <div className="w-full pb-5">
      <div className="w-full px-5 max-w-xs">
        <div className="flex gap-6 w-full">
          {revCats.map((cat, i) => (
            <Link className="cursor-pointer" key={i} href={`/categories/${cat.slug}`}>
              <a className="capitalize font-semibold whitespace-nowrap text-[15px]">{cat.slug}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default CategoryList
