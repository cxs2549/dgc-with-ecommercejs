import Link from "next/link"
import { useRouter } from "next/router"

const CategoryList = ({ categories }) => {
  const revCats = categories.reverse()
  return (
    <div className="w-full bg-indigo-400 py-5">
      <div className="w-full">
        <div className="flex justify-between w-full">
          {revCats.map((cat, i) => (
            <div key={i}>{cat.slug}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default CategoryList
