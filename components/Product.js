import Link from "next/link"

const Product = ({ product }) => {
  return (
    <div className="grid grid-cols-[1.5fr,2fr] mb-2 w-full">
      <Link href={`/products/${product.permalink}`}>
        <a className="bg-slate-500 rounded-lg h-32 w-32">
          <img src={product.image.url} className="rounded-lg object-cover h-full" alt="" />
        </a>
      </Link>
      <div className="text-sm">
        <p>{product.name}</p> <p>strain</p> <p>weight</p>
        <p>price</p>
      </div>
    </div>
  )
}
export default Product
