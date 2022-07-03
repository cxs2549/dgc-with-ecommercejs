import Link from "next/link"
import { useRouter } from "next/router"

const CategoryList = ({ categories }) => {
  const revCats = categories.reverse()
  return (
    <div className="w-full">
      <div>
        <ul className="flex justify-between">
          {revCats.map((cat, i) => (
            <li key={i}>{cat.slug}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CategoryList
